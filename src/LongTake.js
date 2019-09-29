
//import * as PIXI from "pixi.js";
import longtaketouch from "longtaketouch";
//import {TweenMax,TimelineLite} from "gsap";
import TimelineLite from "gsap/TimelineLite.js";
import TweenMax from "gsap/TweenMax.js";

/**
 * 长镜头
 * 流程：初始化，loading（自定义，可选），最后this.load(callback)开始执行。
 * @param {Object} options 
 */
function LongTake(options){
    this.PIXI=PIXI;
    this.TweenMax=TweenMax;
    this.options=options;
    this.sprites=Object.create(null);

    this._scenes=[];//场景名排序
    this._scenesParams=["{self}"];   //
    //this.types=Object.create(null);  //用于type扩展
    this._uuid=0;

    this.fitHeight=this.options.fitHeight||750;   //固定高度
    

    this.app=new PIXI.Application({
        transparent:true
    });

    var root=new PIXI.Container();

    this.sprites.root=root;
    this.app.stage.addChild(root);

    this.resize();

    document.body.appendChild(this.app.view);
}

LongTake.prototype={
    load:function(ready){
        var list=this.options.resources.filter(function(item){
            return item.url;
        });
        this.app.loader.reset();
        this.ready=ready;
        this.app.loader.add(list)
            .on("progress",function(loader){    
                 var percent=loader.progress;                
                this.sprites.percent.text=(percent|0)+"%";
        }.bind(this)).load(this.setup.bind(this));
    },
    setup:function(loader){
        var timeline=this.timeline=new TimelineLite({
            paused:true
        }),
        root=this.sprites.root;

        this.longtaketouch=new LongTakeTouch({
            vertical:this.vertical,
            min:this.min,
            //sensitivity:80,
            speed:10,
            maxSpeed:100,
            change:function(value){
                //value+=-18908;
               //console.log(value,"|",this.min,this.max)
               
                root.x=value;
                timeline.seek(-value,false);
            }
        });

        this.initSprites(loader.resources);

        this.ready&&this.ready.call(this);


        //loading 层
        var loadingContainer=this.app.stage.getChildAt(1);
        this.TweenMax.to(loadingContainer,1,{alpha:0,onCompleteScope:this,onComplete:function(){
            this.app.stage.removeChildAt(1);
        }});
       
    },
    initSprites:function(res){
        var resources=this.options.resources,
            _scenes=this._scenes,
            sprites=this.sprites,

            P=this.PIXI,
            Container=P.Container,
            Sprite=P.Sprite,
            TilingSprite=P.TilingSprite,
            Graphics=P.Graphics,
            Text=P.Text,

            type,
            container,
            sprite,
            texture,
            item,
            i=0,
            ii=resources.length;

        for(;i<ii;i++){         
            
            item=resources[i];
            type=item.type;

            if(type){
                switch(type){
                    case "Container":
                      sprite=new Container();
                    break;
                    case "Sprite":
                       sprite=new Sprite(res[item.name || item.url].texture);
                    break;
                    case "Tiling":
                       texture=res[item.name||item.url].texture;
                       texture._type=type;
                       sprite = new TilingSprite(texture,item.props.width,item.props.height);
                    break;
                    case "Text":
                       sprite=new Text(item.text,item.style);
                    break;
                    case "Graphics":
                       sprite=new Graphics();
                    break;
                    case "Clone":
                        texture=res[item.clone].texture;
                        sprite=texture._type==="Tiling"? new TilingSprite(texture):new Sprite(texture);
                    break;
                    case "Rect":
                        sprite=this.createRect(item);
                    break;
                    default:
                        sprite=this.options.types[type].call(this,item);
                    break;
                }

                this._setSpriteProperty(sprite,item.props);

                //遮罩
                if(item.mask){
                    sprite.mask=sprites[item.mask];
                }
                
                //tween动画
                if(item.timeline){
                    this._tweenFactory(sprite,item.timeline,false,item.isScene);
                }
                if(item.tween){
                    this._tweenFactory(sprite,item.tween,true,item.isScene);
                }

                item.handle&&item.handle.call(sprite,this);

                if(item.group){
                    container=sprites[item.group];
                    container &&container.addChild(sprite);
                }

                sprites[item.name||item.url||this._uuid++]=sprite;

                if(item.isScene){
                    sprite.visible=1===_scenes.push(sprite);
                }
            }
            
        }

        return this;
        
    },
    /**
     * Tween工厂
     * @param {PIXI.Sprite} sprite 
     * @param {Object} queues 
     * @param {Boolean} isTween 是否是独立的Tween，非独立即加入timeline
     * @param {Boolean} isScene 是否是场景Container，如果是，即加入this.scenes备用
     */
    _tweenFactory:function(sprite,queues,isTween,isScene){
        var Tween=TweenMax,
            timeline=this.timeline,
            s=[sprite],
            f,
            item,
            i,
            tween;

        if(isTween){
            for(f in queues){
                item=queues[f];
                //多个
                if(Array.isArray(item[0])){
                   i=item.length;
                   while(i--){
                      Tween[f].apply(Tween,s.concat(item[i]));
                   }
                }
                else{
                      Tween[f].apply(Tween,s.concat(item));
                }
            }
        }
        else{
            for(f in queues){
                item=queues[f];
                //多个
                if(Array.isArray(item[0])){
                   i=item.length;
                   while(i--){
                       tween=Tween[f].apply(Tween,s.concat(item[i]));
                       timeline.add(tween,0);
                   }
                }
                else{
                   tween=Tween[f].apply(Tween,s.concat(item));
                   timeline.add(tween,0);
                }
            }

            //如果是场景，即加进场事件
            if(isScene && tween){
               tween.eventCallback("onStart",this._sceneEnter, this._scenesParams,this);
            }
        }
        return this;
    },
    /**
     * 创建矩形
     * @param {Object} item 
     */
    createRect:function(item){
        var graphics=new this.PIXI.Graphics(),
             props=item.props;
        if(props){
            graphics.beginFill(props.color||0x000000);
            graphics.drawRect(0,0,props.width,props.height);
            graphics.endFill();
        }
        return graphics;
    },
    /**
     * 用于处理只显示当前场景，前一个，后一个。
     * @param {Tween} e 
     */
    _sceneEnter:function(e){
       var scene=e.target,
           _scenes=this._scenes,
           i=_scenes.length,
           index=_scenes.indexOf(scene),
           prev=index-1,
           next=index+1;
 
         if(index===0){
             if(i>1){
                _scenes[next].visible=true;
             }
         }
         else if(index===i-1){
            _scenes[prev].visible=true;
         }
         else{
            while(i--){
                _scenes[i].visible=i===index||i===prev||i===next;
            }
         }
       
    },
    _setSpriteProperty:function(sprite,props){
       var k,
           val,
           i;
        
        if(props){
            for(k in props){
                val=props[k];
                if(typeof val==="object"){
                    for(i in val){
                        sprite[k][i]=val[i];
                    }
                }
                else{
                    sprite[k]=val;
                }
            }
        }
        return sprite;
    },
    resize:function(){
        var w=window.innerWidth,
            h=window.innerHeight,
            orientation=window.orientation||0,
            aspectRatio=w/h,
            fitHeight=this.fitHeight,
            cw,
            ch,
            scale,
            rotation,
            povitY,
            vertical,
            screenWidth,

            app=this.app,
            view=app.view,
            stage=app.stage;


            if(orientation%180){
                //横屏
                ch=fitHeight;
                cw=ch*aspectRatio;
                screenWidth=cw;
                scale=h/fitHeight;

                rotation=0;
                povitY=0;

                vertical=this.options.vertical;
            }
            else{
                cw=fitHeight;
                ch=cw/aspectRatio;
                screenWidth=ch;
                scale=w/fitHeight;

                rotation=3.1415926/2;
                povitY=fitHeight;

                vertical=!this.options.vertical;
            }

            //赋值
            this.aspectRatio=aspectRatio;
            this.scale=scale;
            this.width=cw;
            this.height=ch;

            //中心点
            this.centerX=cw/2;
            this.centerY=ch/2;

            //touch值
            this.min=this.options.min+screenWidth;

            //旋转相关
            this.rotation=rotation;
            this.povitY=povitY;
            
            //touch相关
            this.vertical=vertical;

            view.style.width=cw*scale+"px";
            view.style.height=ch*scale+"px";

            stage.pivot.y=povitY;
            stage.rotation=rotation;

            if(this.longtaketouch){
                this.longtaketouch.vertical=vertical;
            }

            app.renderer.resize(cw,ch);
        return this;
    }
    // ,
    // _animation:function(options,res,urls){
    //    var textrueArray=[],
    //        i=0,
    //        ii=urls.length,
    //        sprite;

    //     for(;i<ii;i++){
    //         textrueArray[i]=res[urls[i]].texture;
    //     }
      
    //     sprite=new PIXI.AnimatedSprite(textrueArray);
    //     //sprite.xx  =options.xx
       
    //     return sprite;
    // }
};


export default LongTake;
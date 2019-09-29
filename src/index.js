//import config from "../static/config.js/index.js";
//import LongTake from "./LongTake.js";
import LongTake from "./LongTakeTouch/LongTake.js";

import sounds from "./sounds.js";

var longTake=new LongTake({
    loading:config.loading,
    resources:config.resources,
    fitHeight:750,          //固定高
    min:-config.bgWidth,     //所有的背景图长
    vertical:false,
    types:{
        Dot:function(item){
            var that=this,
                PIXI=this.PIXI,
                container=new PIXI.Container(),
                dot1=createDot(PIXI,item),
                dot2=createDot(PIXI,item);

                container.addChild(dot1,dot2);

            TweenMax.staggerTo([{v:0,name:"a"},{v:0,name:"b"}],1.4,{v:1,repeat:-1,onUpdate:function(){
                var v=this.target.v,
                    dot=this.target.name==="a"?dot1:dot2;

                   dot.alpha=1-v;
                   dot.scale.set(v);               
            }},0.7);

            container._link=item.link;
            container.interactive=true;
            container.on("tap",function(){
                var dialog=that.sprites[this._link];
                if(!dialog.visible){
                    dialog.open();
                }
            });

            return container;
        },
        Dialog:function(item){
            var PIXI=this.PIXI,
                TweenMax=this.TweenMax,
                resources=this.app.loader.resources,
                container=new PIXI.Container(),
                sprite=new PIXI.Sprite(resources[item.name||item.url].texture),
                closeBtn=new PIXI.Sprite(resources.closeBtn.texture);

                container.visible=false;
                container.alpha=0;
                container.open=function(){
                    this.visible=true;
                    new TweenMax(this,0.5,{alpha:1});
                };
                container.close=function(){
                    new TweenMax(this,0.5,{alpha:0,onComplete:function(){
                      this.target.visible=false;
                   }});
                };
                closeBtn.anchor.set(0.5,0);
                closeBtn.position.set(sprite.width/2,sprite.height+30);

                closeBtn.interactive=true;
                closeBtn.on("tap",function(){
                    container.close();
                });

                container.addChild(sprite,closeBtn);

            return container;
        }
    }
});

//创建闪光点
function createDot(PIXI,item){
    var sprite=new PIXI.Container(),
    graphics=new PIXI.Graphics();
    graphics.beginFill(0xFFFFFF);
    graphics.drawCircle(0,0,item.radius);
    graphics.endFill();
    //sprite=new PIXI.Sprite(graphics.generateTexture()); //用不了
    sprite.addChild(graphics);

    return sprite;
}


//loading
longTake.loading=function(){
    var that=this;
    this.app.loader.add(this.options.loading).load(function(loader){

        var PIXI=that.PIXI,
            loadingContainer=new PIXI.Container(),
            texture=loader.resources.loading.texture,
            textureArray=[],
            Texture=PIXI.Texture,
            Rectangle = PIXI.Rectangle,
            AnimatedSprite = PIXI.AnimatedSprite,
            cover,
            sprite,
            text1,
            text2,
            i=9,
            w=150,
            centerX=that.vertical?that.centerY:that.centerX,
            coverProps={
                width:that.vertical?that.height:that.width,
                height:that.vertical?that.width:that.height
            }

        while(i--){
            textureArray[i]=new Texture(texture,new Rectangle(w*i,0,w,w));

        }

        //遮罩层
        cover=that.createRect({props:coverProps});
        cover.alhpa=0.5;

        //动画
        sprite=new AnimatedSprite(textureArray);
        sprite.animationSpeed=0.5;
        sprite.scale.set(1.8);
        sprite.anchor.set(0.5);
        sprite.position.set(centerX,250);

        
        //百分比
        text1=new PIXI.Text("0%",{
            fontSize:40,
            fill:0xffffff,
            align:"center"
         });
         text1.anchor.set(0.5);
         text1.x=centerX;
         text1.y=500;

        //请锁屏观看
        text2=new PIXI.Text("建议锁定方向观看",{
            fontSize:40,
            fill:0xffffff,
            align:"center"
         });
         text2.anchor.set(0.5);
         text2.x=centerX;
         text2.y=600;

        loadingContainer.addChild(cover,sprite,text1,text2);

        that.app.stage.addChild(loadingContainer);
        sprite.play();

        that.sprites.percent=text1;
        that.load(ready);
     });
};

//旋转
window.addEventListener("resize",function(){
    longTake.resize();
},false);

//加载loading
longTake.loading();

//播放背景音乐
function playBackgroundSound(){
    if(!config.hasBgSound)return;

     //背景音乐
     var doPlay=function(){
         sounds.play("bg");  
     },
     touchHandle=function(){
         this.removeEventListener("touchstart",touchHandle,false);
         doPlay();        
     };
  

    window.addEventListener("touchstart",touchHandle,false);

    //微信下兼容处理
    document.addEventListener("WeixinJSBridgeReady", doPlay, false);

    doPlay();
    
}

//最后的处理
function ready(){
    /**** 场景1 ****/
    var sprites=this.sprites;
    //小手
    var handSprite=sprites.hand,
        value=90;

    handSprite.anchor.set(0.5);
    handSprite.x=this.centerX+value;
    handSprite.y=this.height*0.7;

    this._tweenFactory(handSprite,{to:[1,{x:this.centerX-value,repeat:-1}]},true);

    //向左滑动
    var slideSprite=sprites.slide;
    slideSprite.x=this.centerX;
    slideSprite.y=this.height*0.8;

    //场景1弹窗
    sprites.dot1.on("tap",function(){
        sounds.play("start");
    });
   sprites.dialog1.children[1].on("tap",function(){
       sounds.pause("start");
   });

   //拉萨站到了
   this.timeline.add(this.TweenMax.set({arrive:true},{delay:26838,arrive:false,onStart:function(){
      if(this.target.arrive){
          sounds.play("end");
      }
      else{
          sounds.pause("end");
      }
   }}),0);

   playBackgroundSound();

}


//console.log(longTake);
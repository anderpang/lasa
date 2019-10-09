
import LongTake from "./LongTake.js";
import createTexts from "./createTexts.js";
import sounds from "./sounds.js";

var longTake=new LongTake({
    assets:config.assets,
    mode:"widthFix",          //固定宽
    width:750,
    height:1334,
    maxSpeed:0.1,
    inertia:0.1,
    min:-config.bgHeight,     //所有的背景图长
    vertical:false,
    types:{
    }
});


//loading
longTake.loading=function(){
    var that=this,
        list=config.loading_assets.filter(function(item){
            return item.url;
        });

    this.app.loader.add(list).load(function(loader){
        that.loadingReady(loader);
    });

    this.loadingTexts=createTexts(750,36,1.5,PIXI,this.app.ticker,this.TweenMax);
};

//loading后
longTake.loadingReady=function(loader){
    var loadingTexts=this.loadingTexts
    this.initSprites(config.loading_assets,loader.resources);

    loadingTexts.container.y=430;
    this.sprites.loadingContainer.hitArea=new this.PIXI.Rectangle(0,0,this.width,this.height);
    this.sprites.loadingContainer.addChild(loadingTexts.container);
    
    //加载主资源
    this.loadAssets();
    
    this.playBackgroundSound();
};

//加载主要资源
longTake.loadAssets=function(){
    var that=this,
        list=config.assets.filter(function(item){
            return item.url;
        });

    this.app.loader.add(list).on("progress",function(loader){    
        var percent=loader.progress;                
        that.sprites.loading_percent.text=(percent|0)+"%";
     }).load(function(loader){
        that.setup(loader);
    });
}

//旋转
window.addEventListener("resize",function(){
    longTake.resize();
},false);

//播放背景音乐
longTake.playBackgroundSound=function(){
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
longTake.ready=function(){
    var that=this,
        timeline=this.timeline,
        TweenMax=this.TweenMax,
        sprites=this.sprites,
        loadingContainer=sprites.loadingContainer,
        loadingTexts=this.loadingTexts;


    //百分比隐藏
    this.TweenMax.to(this.sprites.loading_percent,0.5,{
        alpha:0,
        onComplete:function(){
            loadingTexts.start();
        }
    });

    this.TweenMax.set(this.sprites.loadingHand,{
        visible:true,
        delay:2.8,
        onStart:function(){
            //loading层点击事件
            loadingContainer.interactive=true;
            loadingContainer.once("pointerdown",function(){
                var sprites=that.sprites;
                loadingTexts.out();

                sprites.loadingHand.visible=
                sprites.loading_down_in.visible=
                sprites.loading_up_in.visible=false;

                sprites.loading_down_out.play();
                sprites.loading_up_out.play();
                
                that.TweenMax.from(sprites.scene1,0.7,{
                    alpha:0,
                    delay:1,
                    onComplete:function(){
                        that.sprites.root.removeChild(loadingContainer);
                        that.initLongTakeTouch();
                    }
                });
                sprites.scene1.visible=true;
            });
        }
    });

    sprites["1949"].val=
    sprites.text.val=0;

    function animatedUpdate(){
        var t=this.target,
            val=t.val|0;
        t.gotoAndStop(val);
    }


    //中间云缩放
    timeline.add(TweenMax.from(sprites.big_cloud_t.scale,940,{
        x:0.7,
        y:0.7,
        delay:680
    }),0)
    .add(TweenMax.to(sprites["1949"],420,{
        delay:1920,
        val:32,
        onUpdate:animatedUpdate
    }),0)
    .add(TweenMax.to(sprites.text,400,{
        delay:2170,
        val:26,
        onUpdate:animatedUpdate
    }),0);
  

   //声音
    timeline.add(this.TweenMax.set({play:true},{
        delay:100,
        play:false,
        onStart:function(){
            if(this.target.play){
                sounds.play("plane");
            }
            else{
                sounds.stop("plane");
            }
        }
    }),0)
    .add(this.TweenMax.set({play:true},{
        delay:2840,
        play:false,
        onStart:function(){
            if(this.target.play){
                sounds.play("china");
            }
            else{
                sounds.pause("china");
            }
        }
    }),0);

}

//加载loading
longTake.loading();

//console.log(longTake);
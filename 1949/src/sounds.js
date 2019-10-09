
/**
 * 声音简单处理
 */
//import config from "../static/config.js/index.js";

var sounds=Object.create(null),
    createAudio=typeof Audio==="undefined"?function(){
      return document.createElement("audio");
    }:function(){
       return new Audio();
    };

    sounds.assets=Object.create(null);

    function load(queues){
       var i=queues.length,
           audio,
           url,
           key;

       while(i--){
            audio=createAudio();  
            url=queues[i];    
            key=url.split("/").pop().slice(0,-4)
            audio.src=url;

            sounds.assets[key]=audio;
            audio.preload=true;
            if(key==="bg"){
              audio.loop=config.BG_SOUND_LOOP;
              audio.volume=config.BG_SOUND_VOLUME;   //背景音量
              //audio.autoplay=true;
            }
            audio.load && audio.load();
       }
    }

    


    //播放
    sounds.play=function(sprite){
        var sound=this.assets[sprite];
        if(sound && sound.paused){
           sound.play();
        }
        return this;
    };

    //暂停
    sounds.pause=function(sprite){
      var sound=this.assets[sprite];
        if(sound && !sound.paused){
           sound.pause();
        }
      return this;
    };

    //停止
    sounds.stop=function(sprite){
       var sound=this.assets[sprite];
       if(sound){
         sound.pause();
         sound.currentTime=0;
       } 
    };

    //声音文件小，简单处理
    load(['./static/sounds/plane.mp3', './static/sounds/china.mp3','./static/sounds/bg.mp3']);

    

export default sounds;

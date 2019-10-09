
function createTexts(width,fontSize,lineHeight,PIXI,ticker,Tween){
    var text="请滑动屏幕\n用您的手指\n画出共和国成立盛典\n……",
        texts=text.split("\n"),
        body=document.body,
        loadingTexts=Object.create(null),
        cvs=document.createElement("canvas"),
        ctx,
        i=texts.length,
        textLine=i,
        pHeight=fontSize*lineHeight,
        height=pHeight*i,
        centerX=width/2;
        cvs.width=width;
        cvs.height=height;
   
        cvs.style.cssText="position:absolute;left:0;top:-1000px;visibility:hidden;letter-spacing:.2em;font-size:"+fontSize+"px";
        ctx=cvs.getContext("2d");

        body.appendChild(cvs);

        ctx.font=fontSize+"px null";
        
        ctx.fillStyle="#525252";
        ctx.textAlign="center";

        while(i--){
            ctx.fillText(texts[i],centerX,pHeight*(i+1));
        }
  
        var imagedata=ctx.getImageData(0,0,width,height).data,
            data=new Uint32Array(imagedata.buffer),
            y=0,
            x,
            index,
            container=new PIXI.Container(),
            textContainer=new PIXI.Container(),
            // particle=new PIXI.ParticleContainer({   //update改不了alpha
            //     position: true,
            //     uvs: true,
            //     alpha: true
            // }),
            particle=new PIXI.Container(),
            Rectangle=PIXI.Rectangle,
           // Graphics=PIXI.Graphics,
            Sprite=PIXI.Sprite,
            c,
            s,
            texture=new PIXI.Texture(new PIXI.BaseTexture.from(cvs)); 

        for(;y<height;y++){
            x=0;
            for(;x<width;x++){
               index=width*y+x;
               if(data[index]){
                   c=texture.clone();
                   c.frame=new Rectangle(x,y,1,1);
                   s=new Sprite(c);
                // c=data[index]&0xffffff;
                // c=(c&0xff<<16)|(c&0xff00)|(c&0xff0000)>>16;
                //    s=new Graphics();
                //    s.beginFill(c);
                //    s.drawRect(0,0,1,1);
                //    s.endFill();
                   s.x=x;
                   s.y=y;
                   s._vx=0;
                   s._vy=0;
                   s._delay=(x+(height-y)*(2+Math.random()))*0.05;
                   s._ax=Math.random();
                   s._ay=Math.random()*-2;
                   particle.addChild(s);
               }
            }
        }

        particle.visible=false;

        i=0;
        while(i<textLine){
            c=texture.clone();
            c.frame=i===textLine-1?new Rectangle(0,i*pHeight*1.2,width,height-i*pHeight*1.2):
            new Rectangle(0,i*pHeight*1.2,width,pHeight*1.2);
            s=new Sprite(c); 
            s.y=i*pHeight*1.2;
            textContainer.addChild(s);
            i++;
        }
        textContainer.visible=false;

        container.addChild(textContainer,particle);

        body.removeChild(cvs);

        loadingTexts.particle=particle;
        loadingTexts.container=container;
        loadingTexts.render=function(){
            var chs=particle.children,
                i=chs.length,
                total=i,
                count=0,
                va=0.01,
                speed=-0.1,
                gravity=0.12,
                s;

            while(i--){
                s=chs[i];
                if(s._delay>0){
                    s._delay--;
                    continue;
                }

                if(s.alpha>0){
                    s._ax+=speed;
                    s._ay+=gravity;
                    s._vx+=s._ax;
                    s._vy+=s._ay;
                    s.alpha-=va;
                    s.x+=s._vx;
                    s.y+=s._vy;
                }
                else{
                    s.visible=false;
                    count++;
                }
            }
            if(count>total*0.98){
               ticker.remove(this.render);
            }
        }.bind(loadingTexts);

        loadingTexts.out=function(){
            ticker.add(this.render);
        };

        loadingTexts.start=function(){
            textContainer.visible=true;
            Tween.staggerFrom(textContainer.children,1,{
                alpha:0,
                y:"+=50"
            },0.5,function(){
                textContainer.visible=false;
                particle.visible=true;
            });
        };

        return loadingTexts;
       
}

export default createTexts;

/**
 * 配置文件
 */
"use strict";
(function(ctx){
    ctx.config={
        hasBgSound:true,
        BG_SOUND_LOOP:true,
        BG_SOUND_VOLUME:0.3,
    
        loading:[
            {
                url:"./static/images/loading/loading_ani.png",
                name:"loading"
            }
        ],
        resources:[
                /***  全局 ****/
                {
                    url:"./static/images/dialog/close.png",
                    name:"closeBtn",
                },
                
                /*****  场景1 ******/
                {
                    type:"Container",
                    name:"scene1",
                    group:"root",
                    isScene:true,
                    timeline:{
                        set:[{delay:666,visible:true}]  //用于触发下一场景显示
                    }
                },
                {
                    type:"Sprite",
                    url:"./static/images/1/bg.jpg",
                    name:"bg",
                    group:"scene1"
                },
                //车站
                {
                    type:"Sprite",
                    url:"./static/images/1/6.png",
                    group:"scene1",
                    props:{
                        y:54
                    },
                    timeline:{
                        to:[1700,{x:-336}]
                    }
                },
    
                //站台组
                {
                    type:"Container",
                    name:"stationContainer",
                    group:"scene1",
                    timeline:{
                        to:[250,{x:-336}]
                    }
    
                },
    
                //小火车
                {
                    type:"Sprite",
                    url:"./static/images/1/4.png",
                    group:"stationContainer",
                    props:{
                        x: -3308,
                        y: 436
                    },
                    timeline:{
                        to:[310,{x:160}]
                    }
                },
    
                //站台
                {
                    type:"Sprite",
                    url:"./static/images/1/platform.jpg",
                    group:"stationContainer",
                    props:{
                        y: 148+449
                    }
                },
                //车门与列车员，必需得在站台上层
                {
                    type:"Container",
                    name:"doorContainer",
                    group:"stationContainer",
                    props:{
                        x: -3308,
                        y: 436
                    },
                    timeline:{
                        to:[310,{x:160}]
                    }
                },
                //列车员
                {
                    type:"Sprite",
                    url:"./static/images/1/5.png",
                    name:"attendant",
                    group:"doorContainer",
                    props:{
                        x: 1604,
                        y: 64
                    },
                    timeline:{
                         to:[500,{delay:510,x:1574,y:84}]
                     }
                },
                //列车员2
                {
                    type:"Clone",
                    clone:"attendant",
                    name:"attendant",
                    group:"doorContainer",
                    props:{
                        x: 946,
                        y: 64
                    },
                    timeline:{
                         to:[500,{delay:510,x:910,y:84}]
                     }
                },
                
                //车门
                {
                    type:"Sprite",
                    url:"./static/images/1/door.png",
                    name:"door",
                    group:"doorContainer",
                    props:{
                        x: 1602,
                        y: 58
                    },
                    timeline:{
                        to:[50,{delay:510,width:0}]
                    }
                },
                {
                    type:"Clone",
                    clone:"door",
                    group:"doorContainer",
                    props:{
                        x: 944,
                        y: 58
                    },
                    timeline:{
                        to:[50,{delay:510,width:0}]
                    }
                },
                //站台灯
                {
                    type:"Sprite",
                    url:"./static/images/1/light.png",
                    group:"stationContainer",
                    props:{
                        y: 148
                    }
                },
    
    
                //乘客
                {
                    type:"Sprite",
                    url:"./static/images/1/3.png",
                    group:"stationContainer",
                    props:{
                        x: -18,
                        y: 525
                    },
                    timeline:{
                        to:[300,{x:243}]
                    }
                },
    
                //站牌
                {
                    type:"Sprite",
                    url:"./static/images/1/2-2.png",
                    group:"stationContainer",
                    props:{
                        x: 963,
                        y: 310
                    }
                },
 
                 //外灯
                 {
                    type:"Tiling",
                    url:"./static/images/1/1.png",
                    group:"scene1",
                    props:{
                        y: 143,
                        width:5000,
                        height:606
                     },
                     timeline:{
                        to:[1700,{x:-1500}]
                     }
                },   
    
                {
                    type:"Sprite",
                    url:"./static/images/1/t1_1.png",
                    group:"scene1",
                    props:{
                        x: 1014,
                        y: 46,
                        alpha:0
                    },
                    timeline:{
                        to:[100,{delay:45,alpha:1}]
                    }
                },
               
                {
                    type:"Sprite",
                    url:"./static/images/1/t1_2.png",
                    group:"scene1",
                    props:{
                        x: 873,
                        y: 72,
                        alpha:0
                    },
                    timeline:{
                        to:[100,{delay:90,alpha:1}]
                    }
                },
                {
                    type:"Sprite",
                    url:"./static/images/1/t1_3.png",
                    group:"scene1",
                    props:{
                        x: 948,
                        y: 161,
                        alpha:0
                    },
                    timeline:{
                        to:[100,{delay:140,alpha:1}]
                    }
                },
    
                //闪光点
                {
                    type:"Dot",
                    name:"dot1",
                    group:"scene1",
                    radius:40,
                    link:"dialog1",
                    props:{
                        x: 1680,
                        y:550
                    },
                     timeline:{
                         to:[
                             [200,{delay:150,x:1360}]
                         ]
                     }
                },
                //dialog
                {
                    type:"Dialog",
                    url:"./static/images/dialog/pp1.png",
                    name:"dialog1",
                    group:"scene1",
                    props:{
                        x: 962,
                        y: 84
                    }
                },
                
                {
                    type:"Sprite",
                    url:"./static/images/1/logo.png",
                    group:"scene1",
                    props:{
                        x: 43,
                        y:31
                    },
                    timeline:{
                        to:[2,{alpha:0,x:-200}]
                    }
                },
                
                {
                    
                    type:"Container",
                    name:"scene1_cover",
                    group:"scene1",
                    timeline:{
                        to:[1,{visible:false}]
                    }
                },
                {
                    type:"Rect",
                    group:"scene1_cover",
                    props:{
                        width:3360,
                        height:750,
                        alpha:0.3
                    }
                },
                {
                    type:"Sprite",
                    url:"./static/images/1/hand.png",
                    name:"hand",
                    group:"scene1_cover"
                },
                {
                    type:"Text",
                    text:"←向左滑动",
                    name:"slide",
                    group:"scene1_cover",
                    style:{
                       fontSize:24,
                       fill:0xffffff,
                       align:"center"
                    },
                    props:{
                        anchor:{x:0.5}
                    }
                },
    
               /*****  场景2 ******/
               {
                    type:"Container",
                    name:"scene2",
                    group:"root",
                    isScene:true,
                    props:{
                        x:bgSum(3360)
                    },
                    timeline:{
                        set:[{delay:4490,visible:true}]
                    }
               },
               {
                   type:"Tiling",
                   url:"./static/images/2/bg.png",
                   group:"scene2",
                   props:{
                       width:4000,
                       height:750
                   }
               },
               //星星
               {
                    type:"Sprite",
                    url:"./static/images/2/star.png",
                    group:"scene2",
                    timeline:{
                        to:[3000,{delay:3500,x:-200}]
                    }
               },
               //大山0
               {
                    type:"Sprite",
                    url:"./static/images/2/m0.png",
                    group:"scene2",
                    props:{
                        y:265
                    }
               },
               //大山1
               {
                    type:"Sprite",
                    url:"./static/images/2/m1.png",
                    group:"scene2",
                    props:{
                        x: 308,
                        y: 176
                    }
                },
                //大山2
               {
                    type:"Sprite",
                    url:"./static/images/2/m2.png",
                    group:"scene2",
                    props:{
                        x: 1390,
                        y: 45
                    },
                    timeline:{
                        to:[800,{delay:3750,x:1350}]
                    }
                },
                //房屋
               {
                    type:"Sprite",
                    url:"./static/images/2/cover.png",
                    group:"scene2",
                    props:{
                        y: 485
                    }
                },
                 //3头牛
               {
                    type:"Sprite",
                    url:"./static/images/2/cow1.png",
                    group:"scene2",
                    props:{
                        x: 305,
                        y: 614
                    },
                    timeline:{
                        to:[300,{delay:3468,  x: 325,y: 614}]
                    }
                },
                //2头牛
                {
                    type:"Sprite",
                    url:"./static/images/2/cow2.png",
                    group:"scene2",
                    props:{
                        x: 2751,
                        y: 608
                    },
                    timeline:{
                        to:[600,{delay:5456,  x: 2791}]
                    }
                },
                //昆仑泉
                {
                    type:"Sprite",
                    url:"./static/images/2/t2_1.png",
                    group:"scene2",
                    props:{
                        alpha:0,
                        x: 593,
                        y: 359
                    },
                    timeline:{
                        to:[50,{delay:3100,  alpha:1}]
                    }
    
                },
                //玉珠峰
                {
                    type:"Sprite",
                    url:"./static/images/2/t2_2.png",
                    group:"scene2",
                    props:{
                        alpha:0,
                        x: 953,
                        y: 53
                    },
                    timeline:{
                        to:[50,{delay:3554,  alpha:1}]
                    }
    
                },
                //小车1
                {
                    type:"Sprite",
                    url:"./static/images/2/car1.png",
                    group:"scene2",
                    props:{
                        x: 1627,
                        y: 568
                    },
                    timeline:{
                        to:[900,{delay:4465,x: 1652,y: 570}]
                    }
                },
                 //小车2
                 {
                    type:"Sprite",
                    url:"./static/images/2/car2.png",
                    group:"scene2",
                    props:{
                        x: 2224,
                        y: 709
                    },
                    timeline:{
                        to:[900,{delay:4465, x: 1916,y: 597}]
                    }
                },
                //昆仑山
                {
                    type:"Sprite",
                    url:"./static/images/2/t2_3.png",
                    group:"scene2",
                    props:{
                        alpha:0,
                        x: 2484,
                        y: 64
                    },
                    timeline:{
                        to:[50,{delay:5139, alpha:1}]
                    }
                },
    
               //前树(场景过渡)
               {
                    type:"Sprite",
                    url:"./static/images/2/tree_1.png",
                    group:"scene2",
                    props:{
                        x:-400
                    },
                    timeline:{
                        to:[1700,{delay:2000,x:-600}]
                    }
                },
    
                /*****  场景3 ******/
                {
                    type:"Container",
                    name:"scene3",
                    group:"root",
                    isScene:true,
                    props:{
                        x:bgSum(3957)
                    },
                    timeline:{
                      set:[{delay:7876,visible:true}]
                    }
                },
                {
                    type:"Sprite",
                    url:"./static/images/3/bg.jpg",
                    group:"scene3"
                },
                //白云
                {
                    type:"Sprite",
                    url:"./static/images/3/cloud.png",
                    group:"scene3",
                    props:{
                        x: -346,
                        y: 129
                    },
                    timeline:{
                        to:[1570,{delay:6760,x:134}]
                    }
                },
               
                //山3
                {
                    type:"Sprite",
                    url:"./static/images/3/m3.png",
                    group:"scene3",
                    props:{
                        x: 0,
                        y: 289
                    },
                    timeline:{
                        to:[693,{delay:7407,x:10}]
                    }
                },
                 
                //山2
                {
                    type:"Sprite",
                    url:"./static/images/3/m2.png",
                    group:"scene3",
                    props:{
                        x: 1285,
                        y: 374
                    }
                },            
                //高架桥
                {
                    type:"Sprite",
                    url:"./static/images/3/ground.png",
                    group:"scene3"
                },
                //山1
                {
                    type:"Sprite",
                    url:"./static/images/3/m1.png",
                    group:"scene3",
                    props:{
                        x: 1330,
                        y: 190
                    },
                    timeline:{
                       to:[775,{delay:7883,x:1340}]
                    }
                },
                 //牛
                 {
                    type:"Sprite",
                    url:"./static/images/3/cows.png",
                    group:"scene3",
                    props:{
                        x: 1290,
                        y: 615
                    },
                    timeline:{
                       to:[376,{delay:8007,x:1320}]
                    }
                },
                
                //大桥文字
                {
                    type:"Sprite",
                    url:"./static/images/3/t3.png",
                    group:"scene3",
                    props:{
                        alpha:0,
                        x: 1184,
                        y: 54
                    },
                    timeline:{
                        to:[200,{delay:7717,alpha:1}]
                    }
                },
                //闪光点
                {
                    type:"Dot",
                    group:"scene3",
                    link:"dialog3",
                    radius:40,
                    props:{
                        x:960,
                        y:380
                    }
                },
                //dialog
                {
                    type:"Dialog",
                    url:"./static/images/dialog/pp3_1.png",
                    name:"dialog3",
                    group:"scene3",
                    props:{
                        x: 560,
                        y: 84
                    }
                },
    
                
                //遂道1
                {
                    type:"Sprite",
                    url:"./static/images/3/tunnel.png",
                    group:"scene3",
                    props:{
                        x: 1910
                    }
                    
                },
                //遂道2
                {
                    type:"Sprite",
                    url:"./static/images/3/tunnel2.png",
                    group:"scene3",
                    props:{
                        x: 1910,
                        alpha:0
                    },
                    timeline:{
                        to:[2600,{delay:8007,alpha:1}]
                    }
                },
    
                //闪光点2
                {
                    type:"Dot",
                    group:"scene3",
                    link:"dialog3_2",
                    radius:40,
                    props:{
                        x:2760,
                        y:320
                    }
                },
                //dialog
                {
                    type:"Dialog",
                    url:"./static/images/dialog/pp3_2.png",
                    name:"dialog3_2",
                    group:"scene3",
                    props:{
                        x: 2360,
                        y: 84
                    }
                },
    
    
                //前山(场景过渡)
                {
                    type:"Sprite",
                    url:"./static/images/3/transition23.png",
                    group:"scene3",
                    props:{
                        x:-650
                    },
                    timeline:{
                        to:[1000,{delay:6500,x:-1260}]
                    }
                },
    
                /*****  场景4 ******/
                {
                    type:"Container",
                    name:"scene4",
                    group:"root",
                    isScene:true,
                    props:{
                        x:bgSum(4092)
                    },
                    timeline:{
                      set:[{delay:11715,visible:true}]
                    }
                },
                {
                    type:"Sprite",
                    url:"./static/images/4/bg.jpg",
                    group:"scene4"
                },
                //从场景4渐变到5的背景
                {
                    type:"Tiling",
                    url:"./static/images/5/bg.png",
                    name:"bg5",
                    group:"scene4",
                    props:{
                        alpha:0,
                        x:0,
                        width:4000,
                        height:750
                    },
                    timeline:{
                        to:[800,{delay:12000,alpha:1}]
                    }
                },
    
                //云朵
                {
                    type:"Sprite",
                    url:"./static/images/4/cloud4.png",
                    group:"scene4",
                    timeline:{
                        to:[2163,{delay:11412,x:-100}]
                    }
                },
                 //太阳
                 {
                    type:"Sprite",
                    url:"./static/images/4/sun.png",
                    group:"scene4",
                    props:{
                        x: 866,
                        y: 300
                    }
                },
                //小山脉
                {
                    type:"Sprite",
                    url:"./static/images/4/mm.png",
                    group:"scene4",
                    props:{
                        x: -200,
                        y: 483
                    },
                    timeline:{
                        to:[2163,{delay:11700,x:0}]
                    }
                },
                //高架桥
                {
                    type:"Sprite",
                    url:"./static/images/4/cover.png",
                    group:"scene4"
                },
                //大桥（文字）
                {
                    type:"Sprite",
                    url:"./static/images/4/t4_1.png",
                    group:"scene4",
                    props:{
                        alpha:0,
                        x: 717,
                        y: 82
                    },
                    timeline:{
                        to:[300,{delay:11169,alpha:1}]
                    }
                },
                 //牛1
                 {
                    type:"Sprite",
                    url:"./static/images/4/animal1.png",
                    group:"scene4",
                    props:{
                        x: 657,
                        y: 585
                    },
                    timeline:{
                        to:[600,{delay:11700,x:687}]
                    }
                },
                //羊1
                {
                    type:"Sprite",
                    url:"./static/images/4/animal2.png",
                    group:"scene4",
                    props:{
                        x: 868,
                        y: 627
                    },
                    timeline:{
                        to:[600,{delay:12e3,x:888}]
                    }
                },
                //小狼
                {
                    type:"Sprite",
                    url:"./static/images/4/animal3.png",
                    group:"scene4",
                    props:{
                        x: 1567,
                        y: 558
                    },
                    timeline:{
                        to:[600,{delay:12400,x:1543}]
                    }
                },
                //牛2
                {
                    type:"Sprite",
                    url:"./static/images/4/animal4.png",
                    group:"scene4",
                    props:{
                        x: 2950,
                        y: 559
                    },
                    timeline:{
                        to:[600,{delay:14234,x:2980}]
                    }
                },
                //羊2
                {
                    type:"Sprite",
                    url:"./static/images/4/animal5.png",
                    group:"scene4",
                    props:{
                        x: 3404,
                        y: 603
                    },
                    timeline:{
                        to:[600,{delay:14234,x:3424}]
                    }
                },
                
                //可可西里
                {
                    type:"Sprite",
                    url:"./static/images/4/t4_2.png",
                    group:"scene4",
                    props:{
                        alpha:0,
                        x: 1317,
                        y: 360
                    },
                    timeline:{
                        to:[300,{delay:11677 ,alpha:1}]
                    }
                },
                //小火车
                {
                    type:"Sprite",
                    url:"./static/images/4/train.png",
                    group:"scene4",
                    props:{
                        x: 1791,
                        y: 470
                    }
                },
                //护栏
                {
                    type:"Sprite",
                    url:"./static/images/4/guidao.png",
                    group:"scene4",
                    props:{
                        x: 1669,
                        y: 273
                    }
                },
                //清河试验段（文字）
                {
                    type:"Sprite",
                    url:"./static/images/4/t4_3.png",
                    group:"scene4",
                    props:{
                        alpha:0,
                        x: 1950,
                        y: 410
                    },
                    timeline:{
                        to:[300,{delay:12405,alpha:1}]
                    }
                },
                //前山(场景过渡)
                {
                    type:"Sprite",
                    url:"./static/images/4/transition34.png",
                    group:"scene4",
                    props:{
                        x:-850
                    },
                    timeline:{
                        to:[1600,{delay:10663,x:-1100}]
                    }
                },
                //闪光点
                {
                    type:"Dot",
                    group:"scene4",
                    link:"dialog4_1",
                    radius:40,
                    props:{
                        x:840,
                        y:460
                    }
                },
                //dialog
                {
                    type:"Dialog",
                    url:"./static/images/dialog/pp4_1.png",
                    name:"dialog4_1",
                    group:"scene4",
                    props:{
                        x: 440,
                        y: 84
                    }
                },
                //闪光点2
                {
                    type:"Dot",
                    group:"scene4",
                    link:"dialog4_2",
                    radius:40,
                    props:{
                        x:2556,
                        y:360
                    }
                },
                //dialog2
                {
                    type:"Dialog",
                    url:"./static/images/dialog/pp4_2.png",
                    name:"dialog4_2",
                    group:"scene4",
                    props:{
                        x: 2156,
                        y: 84
                    }
                },
    
                /*****  场景5******/
                 {
                    type:"Container",
                    name:"scene5",
                    group:"root",
                    isScene:true,
                    props:{
                        x:bgSum(3660)
                    },
                    timeline:{
                      set:[{delay:16445,visible:true}],
                    }
                },
                {
                    type:"Clone",
                    clone:"bg5",
                    group:"scene5",
                    props:{
                        width:4000,
                        height:750
                    }
                },
                //从场景5到6的背景渐变(加到场景5)
                {
                    type:"Sprite",
                    url:"./static/images/6/bg.png",
                    name:"bg6",
                    group:"scene5",
                    props:{
                        alpha:0,
                        x:300
                    },
                    timeline:{
                        to:[900,{delay:16000,alpha:1}]
                    }
                },
                 //远山脉
                 {
                    type:"Sprite",
                    url:"./static/images/5/mm.png",
                    group:"scene5",
                    props:{
                        x: 1804,
                        y: 430
                    },
                    timeline:{
                        to:[2185,{delay:15815,x:1600}]
                    }
                },
                //白云
                {
                    type:"Sprite",
                    url:"./static/images/5/cloud.png",
                    group:"scene5",
                    props:{
                       x: 308
                    },
                    timeline:{
                        to:[3580,{delay:15045,x:58}]
                    }
                },
                
                //车站房子
                {
                    type:"Sprite",
                    url:"./static/images/5/ground.png",
                    name:"station5",
                    group:"scene5",
                    props:{
                        x: 240,
                        y: 124
                    }
                },
                {
                    type:"Sprite",
                    url:"./static/images/5/m3.png",
                    group:"scene5",
                    props:{
                        x: 343,
                        y: 340
                    }
                },
                {
                    type:"Sprite",
                    url:"./static/images/5/m2.png",
                    group:"scene5",
                    props:{
                        x: 849,
                        y: 421
                    }
                },
                {
                    type:"Sprite",
                    url:"./static/images/5/transition45_2.png",
                    group:"scene5",
                    props:{
                        y:403,
                        x:-110
                    },
                    timeline:{
                        to:[930,{delay:16000,x:-180}]
                    }
                },
                //牛1
                {
                    type:"Sprite",
                    url:"./static/images/5/sitcow.png",
                    group:"scene5",
                    props:{
                        x: 1985,
                        y: 678
                    }
                    // timeline:{
                    //     to:[930,{delay:18000,x:1990}]
                    // }
                },
                //牛2
                {
                    type:"Sprite",
                    url:"./static/images/5/cow2.png",
                    group:"scene5",
                    props:{
                        x: 1911,
                        y: 680
                    },
                    timeline:{
                        to:[600,{delay:16256,x:1921}]
                    }
                },
                //2羊
                {
                    type:"Sprite",
                    url:"./static/images/5/animal1.png",
                    group:"scene5",
                    props:{
                        x: 2230,
                        y: 635
                    },
                    timeline:{
                        to:[600,{delay:16256,x:2240}]
                    }
                },
                //唐古拉山（文字）
                {
                    type:"Sprite",
                    url:"./static/images/5/t5_2.png",
                    group:"scene5",
                    props:{    
                        alpha:0,                
                        x: 3400,
                        y: 54
                    },
                    timeline:{
                        to:[260,{delay:17551,alpha:1}]
                    }
                },
                //隧道组
                {
                    type:"Container",
                    name:"transition5Container",
                    group:"scene5",
                    timeline:{
                        to:[1700,{delay:15005 ,x:-380}]
                    }
                },
                //隧道
                {
                    type:"Sprite",
                    url:"./static/images/5/transition45.png",
                    group:"transition5Container",
                    props:{
                        y:253,
                        x:-220
                    }
                },
                //火凤山（文字）
                {
                    type:"Sprite",
                    url:"./static/images/5/t5_1.png",
                    group:"transition5Container",
                    props:{    
                        alpha:0,                
                        x: 684,
                        y: 55
                    },
                    timeline:{
                        to:[260,{delay:14604,alpha:1}]
                    }
                },
    
                //闪光点
                {
                    type:"Dot",
                    group:"transition5Container",
                    link:"dialog5",
                    radius:40,
                    props:{
                        x:570,
                        y:460
                    }
                },
                //dialog
                {
                    type:"Dialog",
                    url:"./static/images/dialog/pp5.png",
                    name:"dialog5",
                    group:"transition5Container",
                    props:{
                        x: 170,
                        y: 84
                    }
                },
    
                /*****  场景6 ******/
                {
                    type:"Container",
                    name:"scene6",
                    group:"root",
                    isScene:true,
                    props:{
                        x:bgSum(4128)
                    },
                    timeline:{
                      set:[{delay:19829 ,visible:true}]
                    }
                },
                //背景
                {
                    type:"Clone",
                    clone:"bg6",
                    group:"scene6"
                },
                  //场景7背景渐变切入
                  {
                    type:"Tiling",
                    url:"./static/images/7/bg.png",
                    name:"bg7",
                    group:"scene6",
                    props:{
                        alpha:0,
                        x:1000,
                        width:4600,
                        height:750
                    },
                    timeline:{
                        to:[1600,{delay:21230,alpha:1}]
                    }
                 },
    
                //湖
                {
                    type:"Sprite",
                    url:"./static/images/6/lake.png",
                    group:"scene6",
                    props:{  
                        x:1200,  
                        y: 542
                    },
                    timeline:{
                        //to:[260,{delay:14604,alpha:1}]
                    }
                },
                 //白云1
                 {
                    type:"Sprite",
                    url:"./static/images/6/cloud.png",
                    name:"cloud6_1",
                    group:"scene6",
                    props:{  
                        x:-600,  
                        y: 196
                    },
                    timeline:{
                        to:[5200,{delay:17206,x:-770}]
                    }
                },
                //白云倒影
                {
                    type:"Sprite",
                    url:"./static/images/6/cloud2.png",
                    name:"cloud6_2",
                    group:"scene6",
                    props:{  
                        x:-600,    
                        y: 542
                    },
                    timeline:{
                        to:[5200,{delay:17206,x:-770}]
                    }
                },  
                //远山脉1遮罩
                {
                    type:"Rect",
                    name:"mm6mask",
                    group:"scene6",
                    props:{
                        x:-400,
                        width:3839,
                        height:542
                    }
                },
                //远山脉1
                {
                    type:"Sprite",
                    url:"./static/images/6/mm.png",
                    group:"scene6",
                    mask:"mm6mask",
                    props:{    
                        x:-400,
                        y: 471
                    }
                },         
                //山脉倒影
                {
                    type:"Sprite",
                    url:"./static/images/6/mm2.png",
                    group:"scene6",
                    props:{    
                        x:1260,
                        y: 542
                    },
                    timeline:{
                        //to:[260,{delay:14604,alpha:1}]
                    }
                },
                 //铁架子
                 {
                    type:"Sprite",
                    url:"./static/images/6/house.png",
                    group:"scene6",
                    props:{   
                        x:-500, 
                        y: 186
                    },
                    timeline:{
                        //to:[260,{delay:14604,alpha:1}]
                    }
                },
                //场景5的车站(遮罩层)
                {
                    type:"Rect",
                    name:"station5mask",
                    group:"scene6",
                    props:{
                        x:-600,
                        width:600,
                        height:750
                    }
                },
                {
                   type:"Clone",
                   clone:"station5",
                   group:"scene6",
                   mask:"station5mask",
                   props:{
                       x:-3888,
                       y:124
                   }
                },
                 //天鹅
                 {
                    type:"Sprite",
                    url:"./static/images/6/animal1.png",
                    group:"scene6",
                    props:{
                        x: 2057,
                        y: 680
                    },
                    timeline:{
                        to:[1600,{delay:20591 ,x:2100}]
                    }
                },
                 //鸳鸯1
                 {
                    type:"Sprite",
                    url:"./static/images/6/animal2.png",
                    name:"bird6",
                    group:"scene6",
                    props:{
                        x: 2289,
                        y: 701
                    },
                    timeline:{
                        to:[1600,{delay:20691 ,x:2300}]
                    }
                },
                //鸳鸯2
                {
                    type:"Clone",
                    clone:"bird6",
                    group:"scene6",
                    props:{
                        x:2455,
                        y:706
                    },
                    timeline:{
                        to:[1600,{delay:20791 ,x:2510}]
                    }
                },
                //右草坪
                {
                    type:"Sprite",
                    url:"./static/images/6/glass.png",
                    group:"scene6",
                    props:{
                        x: 2906,
                        y: 524
                    }
                },
                //安多铺架基地（文字）
                {
                    type:"Sprite",
                    url:"./static/images/6/t6_1.png",
                    group:"scene6",
                    props:{    
                        alpha:0,                
                        x: 684,
                        y: 70
                    },
                    timeline:{
                        to:[260,{delay:18973,alpha:1}]
                    }
                },
                //措那湖（文字）
                {
                    type:"Sprite",
                    url:"./static/images/6/t6_2.png",
                    group:"scene6",
                    props:{    
                        alpha:0,                
                        x: 2250,
                        y: 121
                    },
                    timeline:{
                        to:[260,{delay:20682,alpha:1}]
                    }
                },
                 //闪光点
                 {
                    type:"Dot",
                    group:"scene6",
                    link:"dialog6",
                    radius:40,
                    props:{
                        x:860,
                        y:525
                    }
                },
                //dialog
                {
                    type:"Dialog",
                    url:"./static/images/dialog/pp6.png",
                    name:"dialog6",
                    group:"scene6",
                    props:{
                        x: 460,
                        y: 84
                    }
                },
    
                /*****  场景7 ******/
                {
                    type:"Container",
                    name:"scene7",
                    group:"root",
                    isScene:true,
                    props:{
                        x:bgSum(4016)
                    },
                    timeline:{
                      set:[{delay:24240,visible:true}]
                    }
                },
                //背景
                {
                    type:"Clone",
                    clone:"bg7",
                    group:"scene7",
                    props:{
                        width:4600,
                        height:750
                    }
                },
    
                //场景7到8渐变背景
                {
                    type:"Sprite",
                    url:"./static/images/8/bg78.png",
                    group:"scene7",
                    props:{
                        x:2200
                    }
                },
                //白云
                {
                    type:"Sprite",
                    url:"./static/images/7/cloud.png",
                    group:"scene7",
                    props:{
                        x:900
                    },
                    timeline:{
                        to:[2000,{delay:23000,x:800}]
                    }
                },
                 //山1
                 {
                    type:"Sprite",
                    url:"./static/images/7/m1.png",
                    group:"scene7",
                    props:{
                        x:600,
                        y: 272
                    },
                    timeline:{
                        to:[2000,{delay:23000,x:450}]
                    }
                },
                 //山2
                 {
                    type:"Sprite",
                    url:"./static/images/7/m2.png",
                    group:"scene7",
                    props:{
                        x:1200,
                        y: 169
                    },
                    timeline:{
                        to:[2000,{delay:23000,x:1100}]
                    }
                },
                 //山3
                 {
                    type:"Sprite",
                    url:"./static/images/7/m3.png",
                    group:"scene7",
                    props:{
                        x:1400,
                        y: 333
                    },
                    timeline:{
                        to:[2000,{delay:23000,x:1350}]
                    }
                },
                //桥
                {
                    type:"Sprite",
                    url:"./static/images/7/ground.png",
                    group:"scene7",
                    props:{
                        x:550,
                        y: 279
                    }
                },
                //隧道后山
                {
                    type:"Sprite",
                    url:"./static/images/7/m0.png",
                    group:"scene7",
                    props:{
                        x:-700,
                        y: 100
                    }
                },
                //隧道组
                {
                    type:"Container",
                    name:"tunnel7Container",
                    group:"scene7",
                    props:{
                        x:-650
                    },
                    timeline:{
                        to:[1927,{delay:22529,x:-850}]
                    }
                },
                //隧道
                {
                    type:"Sprite",
                    url:"./static/images/7/tunnel.png",
                    group:"tunnel7Container",
                   
                },
                //隧道（文字）
                {
                    type:"Sprite",
                    url:"./static/images/7/t7_1.png",
                    group:"tunnel7Container",
                    props:{    
                        alpha:0,                
                        x: 970,
                        y: 190
                    },
                    timeline:{
                        to:[260,{delay:22468,alpha:1}]
                    }
                },
                //桥（文字）
                {
                    type:"Sprite",
                    url:"./static/images/7/t7_2.png",
                    group:"scene7",
                    props:{    
                        alpha:0,                
                        x: 2535,
                        y: 141
                    },
                    timeline:{
                        to:[260,{delay:24879,alpha:1}]
                    }
                },
                 //闪光点1
                 {
                    type:"Dot",
                    group:"tunnel7Container",
                    link:"dialog7_1",
                    radius:40,
                    props:{
                        x:985,
                        y:580
                    }
                },
                 //dialog1
                 {
                    type:"Dialog",
                    url:"./static/images/dialog/pp7_1.png",
                    name:"dialog7_1",
                    group:"tunnel7Container",
                    props:{
                        x: 585,
                        y: 84
                    }
                },
                //闪光点2
                {
                    type:"Dot",
                    group:"scene7",
                    link:"dialog7_2",
                    radius:40,
                    props:{
                        x:3155,
                        y:450
                    }
                },
                 //dialog2
                 {
                    type:"Dialog",
                    url:"./static/images/dialog/pp7_2.png",
                    name:"dialog7_2",
                    group:"scene7",
                    props:{
                        x: 2755,
                        y: 84
                    }
                },
                
    
    
                /*****  场景8 ******/
                {
                    type:"Container",
                    name:"scene8",
                    group:"root",
                    isScene:true,
                    props:{
                        x:bgSum(4661)
                    }
                },
                {
                    type:"Tiling",
                    url:"./static/images/8/bg.jpg",
                    group:"scene8",
                    props:{
                        width:5000,
                        height:750
                    }
                },
                //星星
                {
                    type:"Sprite",
                    url:"./static/images/8/star.png",
                    group:"scene8"
                },
                //远山脉
                {
                    type:"Sprite",
                    url:"./static/images/8/mm.png",
                    group:"scene8",
                    props:{
                        x:200,
                        y: 395
                    },
                    timeline:{
                        to:[3200,{delay:26702 ,x:50}]
                    }
                },
                 //布达拉宫
                 {
                    type:"Sprite",
                    url:"./static/images/8/building.png",
                    group:"scene8",
                    props:{
                        x: 1961,
                        y: 280
                    },
                    timeline:{
                        to:[2000 ,{delay:28568,x:1811}]
                    }
                },
                //广场
                {
                    type:"Tiling",
                    url:"./static/images/8/ground.jpg",
                    group:"scene8",
                    props:{
                        x: -260,
                        y: 544,
                        width:5600,
                        height:206
                    }
                },
                //人群
                {
                    type:"Sprite",
                    url:"./static/images/8/people.png",
                    group:"scene8",
                    props:{
                        x:1480,
                        y:597
                    },
                    timeline:{
                        to:[2000,{delay:28138 ,x:1580}]
                    }
                },
                //拉萨站
                {
                    type:"Sprite",
                    url:"./static/images/8/train.png",
                    group:"scene8",
                    props:{
                        x:-900
                    },
                    timeline:{
                        to:[2000,{delay:25862 ,x:-1050}]
                    }
                },
                //布达拉宫（文字）
                {
                    type:"Sprite",
                    url:"./static/images/8/t8_1.png",
                    group:"scene8",
                    props:{
                        alpha:0,
                        x:2950,
                        y:120
                    },
                    timeline:{
                        to:[260,{delay:29716,alpha:1}]
                    }
                },
                //致敬（文字）
                {
                    type:"Sprite",
                    url:"./static/images/8/tt8_2.png",
                    group:"scene8",
                    props:{
                        alpha:0,
                        x:3500,
                        y:145
                    },
                    timeline:{
                        to:[260,{delay:30211,alpha:1}]
                    }
                }
            ],
            bgWidth:bgSum(5078-1000)   //所有的背景图长，最后一幅截了一段
    };
    
    function bgSum(n){
        var num=0;
        bgSum=function(n){
           num+=n;
           return num;
        };
        return bgSum(n);
    };

})(this);


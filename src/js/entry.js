require("./tool/jqUI.js");
require("./tool/jqFp.js");
require("../less/entry.less");
require("../less/intital.less");
var data = [
    ['js', 0.3, '#aa5566'],
    ['h5', 0.2, '#6677aa'],
    ['css3', 0.1, '#b22443'],
    ['jq', 0.3, '#998aac'],
    ['rt', 0.1, '#ccc113']
];
var Manage = require("./Container/PageComponent.js");
Manage
    .init()
        .addPage('onePage')
            .addComponent({
               type: 'base',
               width: 428,
               height: 92,
               center: true,
               css: {
                   top: 0,
                   opacity: 0,
                   backgroundImage: "url('./src/img/logoIndex.png')"
               },
               animateIn: {
                   top: 120,
                   opacity: 1,
               },
               animateOut: {
                   top: 0,
                   opacity: 0,
               }
            })
            .addComponent({
               type: 'base',
               name: 'shake',
               width: 370,
               height: 96,
               center: true,
               css: {
                   top: 200,
                   left: '-50px',
                   opacity: 0,
                   backgroundImage: "url('./src/img/slogan.png')"
               },
               animateIn: {
                   left: '50%',
                   opacity: 1,
               },
               animateOut: {
                   left: '-50px',
                   opacity: 0,
               },
               delay: 500
            })
            .addComponent({
               type: 'base',
               width: 346,
               height: 494,
               css: {
                   position: 'absolute',
                   bottom: -20,
                   left: -20,
                   opacity: 0,
                   backgroundImage: "url('./src/img/left.png')"
               },
               animateIn: {
                   left: 0,
                   bottom: 0,
                   opacity: 1,
               },
               animateOut: {
                   bottom: -20,
                   left: -20,
                   opacity: 0,
               },
               delay: 1000
            })
            .addComponent({
               type: 'base',
               width: 324,
               height: 450,
               css: {
                   position: 'absolute',
                   bottom: -20,
                   right: -20,
                   opacity: 0,
                   backgroundImage: "url('./src/img/right.png')"
               },
               animateIn: {
                   right: 0,
                   bottom: 0,
                   opacity: 1,
               },
               animateOut: {
                   bottom: -20,
                   right: -20,
                   opacity: 0,
               },
               delay: 1500
            })
    /*----------------------------------------------------------------------------*/ 
        .addPage('twoPage')
            .addComponent({
                width: 500,
                height: 124,
                css: {
                    position: 'absolute',
                    top: 0,
                    opacity: 0,
                    backgroundImage: 'url("./src/img/mind.png")'
                },
                animateIn: {
                    opacity: 1,
                    top: 80,
                },
                animateOut: {
                    opacity: 0,
                    top: 0
                }
            })
            .addComponent({
                width: 500,
                height: 50,
                center: true,
                text: '用实力将情怀落地！',
                css: {
                    position: 'absolute',
                    top: 0,
                    opacity: 0,
                    lineHeight: '50px',
                    textAlign: 'center',
                    fontSize: 25,
                    color: 'orange', 
                    fontWeight: 'bold',
                },
                animateIn: {
                    opacity: 1,
                    top: 170,
                },
                animateOut: {
                    opacity: 0,
                    top: 0
                },
                delay: 500
            })
            .addComponent({
                width: 522,
                height: 336,
                center: true,
                text: '渡一教育创立于2015年！ 在成哥 邓哥 彤哥的带领下已经向着高端编程教育公司大踏步的，渡一 Dream Factory, 渡一 web coffee 与今年正式成立 争取明年上市',
                css: {
                    position: 'absolute',
                    bottom: 150,
                    opacity: 0,
                    backgroundImage: 'url("./src/img/dialog.png")',
                    textAlign: 'justify',
                    padding: 10,
                    fontSize: 18,
                    lineHeight: '25px',
                    fontWeight: 900
                },
                animateIn: {
                    opacity: 1,
                    bottom: 200,
                },
                animateOut: {
                    opacity: 0,
                    bottom: 150
                },
                delay: 1000
            })
            .addComponent({
                width: 516,
                height: 306,
                center: true,
                css: {
                    position: 'absolute',
                    bottom: -20,
                    opacity: 0,
                    backgroundImage: 'url("./src/img/people.png")'
                },
                animateIn: {
                    opacity: 1,
                    bottom: 20,
                },
                animateOut: {
                    bottom: -20,
                    opacity: 0,
                },
                delay: 1500
            })
    .addPage('threePage')
        .addComponent({
            width: 500,
            height: 124,
            css: {
                position: 'absolute',
                top: 0,
                opacity: 0,
                backgroundImage: 'url("./src/img/bar.png")'
            },
            animateIn: {
                opacity: 1,
                top: 80,
            },
            animateOut: {
                opacity: 0,
                top: 0
            }
        })
        .addComponent({
            width: 500,
            height: 50,
            center: true,
            text: '课程体系柱状图',
            css: {
                position: 'absolute',
                top: 0,
                opacity: 0,
                lineHeight: '50px',
                textAlign: 'center',
                fontSize: 25,
                color: 'red', 
                fontWeight: 'bold',
            },
            animateIn: {
                opacity: 1,
                top: 210,
            },
            animateOut: {
                opacity: 0,
                top: 0
            },
            delay: 500
        })
        .addComponent({
            type: 'bar',
            width: 500,
            height: 500,
            center: true,
            css: {
                bottom: -20,
                opacity: 0,
            },
            animateIn: {
                opacity: 1,
                bottom: 80,
            },
            animateOut: {
                bottom: -20,
                opacity: 0,
            },
            delay: 1000,
            data: data
        })  
    .addPage('fourPage')
        .addComponent({
            width: 500,
            height: 126,
            css: {
                position: 'absolute',
                top: 0,
                opacity: 0,
                backgroundImage: 'url("./src/img/polyline.png")'
            },
            animateIn: {
                opacity: 1,
                top: 80,
            },
            animateOut: {
                opacity: 0,
                top: 0
            }
        })
        .addComponent({
            width: 500,
            height: 50,
            center: true,
            text: '课程体系折线图',
            css: {
                position: 'absolute',
                top: 0,
                opacity: 0,
                lineHeight: '50px',
                textAlign: 'center',
                fontSize: 25,
                color: 'red', 
                fontWeight: 'bold',
            },
            animateIn: {
                opacity: 1,
                top: 210,
            },
            animateOut: {
                opacity: 0,
                top: 0
            },
            delay: 500
        })
        .addComponent({
            type: 'poly',
            width: 500,
            height: 500,
            center: true,
            css: {
                bottom: -20,
                opacity: 0,
            },
            animateIn: {
                opacity: 1,
                bottom: 80,
            },
            animateOut: {
                bottom: -20,
                opacity: 0,
            },
            delay: 1000,
            data: data
        }) 
    .addPage('fivePage')
        .addComponent({
            width: 500,
            height: 126,
            css: {
                position: 'absolute',
                top: 0,
                opacity: 0,
                backgroundImage: 'url("./src/img/pie.png")'
            },
            animateIn: {
                opacity: 1,
                top: 80,
            },
            animateOut: {
                opacity: 0,
                top: 0
            }
        })
        .addComponent({
            width: 500,
            height: 50,
            center: true,
            text: '课程体系饼图',
            css: {
                position: 'absolute',
                top: 0,
                opacity: 0,
                lineHeight: '50px',
                textAlign: 'center',
                fontSize: 25,
                color: 'red', 
                fontWeight: 'bold',
            },
            animateIn: {
                opacity: 1,
                top: 210,
            },
            animateOut: {
                opacity: 0,
                top: 0
            },
            delay: 500
        })
        .addComponent({
            type: 'pie',
            width: 500,
            height: 500,
            center: true,
            css: {
                bottom: -20,
                opacity: 0,
            },
            animateIn: {
                opacity: 1,
                bottom: 80,
            },
            animateOut: {
                bottom: -20,
                opacity: 0,
            },
            delay: 1000,
            data: data
        }) 
    .addPage('sixPage')
        .addComponent({
            type: 'base',
            width: 48,
            height: 26,
            name: 'up',
            center: true,
            css: {
                top: 0,
                opacity: 0,
                backgroundImage: "url('./src/img/back.png')"
            },
            animateIn: {
                top: 120,
                opacity: 1,
            },
            animateOut: {
                top: 0,
                opacity: 0,
            },
            eventType: {
                click: function () {
                     Manage.Container.fullpage.moveTo(1);
                }
            }
        })
        .addComponent({
            type: 'base',
            width: 128,
            height: 120,
            css: {
                position: 'absolute',
                right: 100,
                top: 100,
                opacity: 0,
                backgroundImage: "url('./src/img/share.png')"
            },
            animateIn: {
                right: 0,
                top: 0,
                opacity: 1,
            },
            animateOut: {
                right: 100,
                top: 100,
                opacity: 0,
            },
            delay: 500
        })
        .addComponent({
            type: 'base',
            width: 428,
            height: 92,
            name: 'shake',
            center: true,
            css: {
                top: 0,
                opacity: 0,
                backgroundImage: "url('./src/img/logo.png')"
            },
            animateIn: {
                top: 250,
                opacity: 1,
            },
            animateOut: {
                top: 0,
                opacity: 0,
            },
            delay: 1000
        })
        .addComponent({
            type: 'base',
            width: 370,
            height: 96,
            center: true,
            css: {
                left: -20,
                bottom: 200,
                opacity: 0,
                backgroundImage: "url('./src/img/slogan.png')"
            },
            animateIn: {
                left: '50%',
                opacity: 1,
            },
            animateOut: {
                left: -20,
                opacity: 0,
            },
            delay: 1500
        })
    .load();









require("../../less/ComponentPie.less");
var ComponentBaseFactory = require("./ComponentBase.js");


var ComponentPieFactory = function ( config ) {
    var Component = ComponentBaseFactory( config ).addClass("ComponentPie");
    var Data = config.data;

    var $Canvas = $("<canvas/>")[0];
    var ctx = $Canvas.getContext("2d");
    var w = config.width;
    var h = config.height;
    $Canvas.width = w;
    $Canvas.height = h;
    Component.append($Canvas);
    var r = w / 2;
    var aAngle = 2 * Math.PI;
    var eAngle = 0;
    var sAngle = 1.5 * Math.PI; 
    // ctx.globalAlpha = 0.8;
    Data.forEach(function (ele, index) {
        ctx.beginPath();
        ctx.moveTo(r, r);
        eAngle = sAngle + ele[1] * aAngle;
        ctx.fillStyle = ele[2];
        ctx.arc(r, r, r, sAngle, eAngle);
        ctx.fill();

        var trueR = w / 4;
        var angle = sAngle + (eAngle - sAngle) / 2;
        var x = Math.abs(trueR * Math.cos(aAngle - (sAngle + (eAngle - sAngle) / 2 )));
        var y = Math.abs(trueR * Math.sin(aAngle - (sAngle + (eAngle - sAngle) / 2 )));
  
        var oText = $("<div/>").addClass("text").css({position: "absolute", fontWeight: 900}).text(ele[0]);
        // console.log(oText.width());
        var d = ctx.measureText(ele[0]);
        if(d.width > 200 * ele[1]) {
            oText.css({fontSize: "14px"});
        }
        if(angle >= 1.5 * Math.PI && angle < 2.5 * Math.PI) {
            // if(d.width > 200 * ele[1]) {
            //     oText.css({left: trueR + x + 30});
            // }else{
            //     oText.css({left: trueR + x / 2});   
            // }
            oText.css({left: trueR + x / 2});
        }else if(angle >= 2.5 * Math.PI && angle <= 3.5 * Math.PI) {
            // if(d.width > 200 * ele[1]) {
            //     oText.css({right: trueR + x + 30})
            // }else{
            //     oText.css({right: trueR + x / 2});   
            // } 
             oText.css({right: trueR + x / 2});
        }
        if( (angle >= 1.5 * Math.PI && angle < 2 * Math.PI) || (angle >= 3 * Math.PI && angle <= 3.5 * Math.PI)) {
            // if(d.width > 200 * ele[1]) {
            //     oText.css({bottom: trueR + y + 20});
            // }else{
            //     oText.css({bottom: trueR + y / 2}); 
            // }
            oText.css({bottom: trueR + y / 2});
        }else if(angle >= 2 * Math.PI && angle < 3 * Math.PI) {
            // if(d.width > 200 * ele[1]) {
            //     oText.css({top: trueR + y + 20});
            // }else{
            //     oText.css({top: trueR + y / 2}); 
            // }
            oText.css({top: trueR + y / 2});
        }

        // function line(k, n) {
        //     ctx.beginPath();
        //     ctx.lineWidth = 1;
        //     ctx.moveTo((trueR + k * x / 2) * 2, (trueR + n * y / 2) * 2);
        //     ctx.lineTo((trueR + k * x + 15) * 2, (trueR + n * y + 10) * 2);
        //     ctx.stroke();
        // }



        var oText_2 = $("<div/>").addClass("text").css({position: "absolute"}).text(ele[1] * 100 + "%");
        if(angle >= 1.5 * Math.PI && angle < 2.5 * Math.PI) {
            oText_2.css({left: trueR + x});   
        }else if(angle >= 2.5 * Math.PI && angle <= 3.5 * Math.PI) {
            oText_2.css({right: trueR + x});  
        }

        if( (angle >= 1.5 * Math.PI && angle < 2 * Math.PI) || (angle >= 3 * Math.PI && angle <= 3.5 * Math.PI)) {
            oText_2.css({bottom: trueR + y});
        }else if(angle >= 2 * Math.PI && angle < 3 * Math.PI) {
            oText_2.css({top: trueR + y});
        }

        Component.append(oText);
        Component.append(oText_2);
        // console.log(oText[0].offsetWidth);
        sAngle = eAngle;
    })


//-----------------------------------------------------------------------

    var $Canvas_2 = $("<canvas/>")[0];
    var ctx_2 = $Canvas_2.getContext("2d");
    // var w = config.width;
    // var h = config.height;
    $Canvas_2.width = w;
    $Canvas_2.height = h;
    Component.append($Canvas_2);


    function draw(percent) {
        ctx_2.clearRect(0, 0, w, h);
        ctx_2.beginPath();
        ctx_2.fillStyle = "orange";
        ctx_2.moveTo(r, r);
        ctx_2.arc(r, r, r, 1.5 * Math.PI, 1.5 * Math.PI - 2 * Math.PI * percent, 1);
        ctx_2.fill();
    }
    
    draw(1);

    Component.on("loadComponent", function () {
        var index = 1;
        setTimeout(function () {
            for(var i = 0; i < 100; i++) {
                setTimeout(function () {
                    index -= 0.01;
                    draw(index);
                }, i * 20)
            }
        }, 1000)
    })

    Component.on("leaveComponent", function () {
        draw(1);
    })
    

    return Component;
}

module.exports = ComponentPieFactory;
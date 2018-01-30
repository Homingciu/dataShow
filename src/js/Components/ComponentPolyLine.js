require("../../less/ComponentPolyLine.less");
var ComponentBaseFactory = require("./ComponentBase.js");

var ComponentPolyLineFactory = function ( config ) {
    var Component = ComponentBaseFactory( config ).addClass( "ComponentPolyLine" );
    var Data = config.data;
    
    var $Canvas = $("<canvas/>")[0];
    var ctx = $Canvas.getContext("2d");
    var h = config.height;
    var w = config.width;
    $Canvas.width = w;
    $Canvas.height = h;
    Component.append($Canvas);

    ctx.beginPath();
    ctx.strokeStyle = "#f20";
    ctx.lineWidth = 2;
    var step = 10,
        i,
        dy = h / step,
        y;

    for(i = 0; i < step + 1; i ++) {
        y = dy * i;
        ctx.moveTo(0, y);   
        ctx.lineTo(w, y);
    }
    ctx.stroke();

    var len = config.data.length;
    var dx = w / (len + 1),
        x;
    for(i = 0; i < len + 2; i++) {   
        x = dx * i;
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
    }
    ctx.stroke();


    var textWidth = 40;
    Data.forEach(function (ele, index) {
        x = dx / 2 * (index + 1);
        var oText = $("<div/>").addClass("text").text( ele[0] );
        oText.css({left: x, bottom: -20, position: "absolute", width: textWidth, marginLeft: - textWidth / 2, textAlign: "center"});
        Component.append( oText );
    }) 


//---------------------------------------------------------------------------------------------------------------------
    
    var $Canvas_2 = $("<canvas/>").addClass("canvas_2")[0];
        var ctx_2 = $Canvas_2.getContext("2d");
        $Canvas_2.width = w;
        $Canvas_2.height = h;
        Component.append($Canvas_2);
    function draw(percent) {
        ctx_2.clearRect(0, 0, w, h);

        ctx_2.beginPath();
        ctx_2.fillStyle = "#f20";
        ctx_2.lineWidth = 2;
        Data.forEach(function (ele, index) {
            x = dx * (index + 1);
            y = h * (1 - ele[1] * percent);
            ctx_2.moveTo(x, y);
            ctx_2.arc(x, y, 5, 0, 2 * Math.PI);
            ctx_2.fill();
        })

        ctx_2.beginPath();
        ctx_2.strokeStyle = "#f20";
        ctx_2.fillstyle = "#f20";
        ctx_2.lineWidth = 2;
        ctx_2.moveTo(dx * 1, h);
        Data.forEach(function (ele, index) {
            x = dx * (index + 1);
            y = h * (1 - ele[1] * percent) ;
            ctx_2.lineTo(x, y);
            if(index == len - 1) {
                ctx_2.lineTo(x, h);
                ctx_2.closePath();
                ctx_2.globalAlpha = 0.5;
                ctx_2.fill();
            }
        });

        Data.forEach(function (ele, index) {
            x = dx * (index + 1);
            y = h * (1 - ele[1] * percent);
            ctx_2.beginPath();
            ctx_2.font = "30px Arial";
            ctx_2.fillStyle = ele[2];
            ctx_2.fillText(ele[1] * 100 + "%", x - 20, y - 20);
        })
    }
   
   
    draw(0);

    Component.on("loadComponent", function () {
        var index = 0;
        setTimeout(function () {
            for(var i = 0; i < 100; i++) {
                setTimeout(function () {
                    index += 0.01;
                    draw(index);
                }, i * 20)
            }
        }, 1000)
    })

    Component.on("leaveComponent", function () {
        draw(0);
    })

    return Component;
}

module.exports = ComponentPolyLineFactory;
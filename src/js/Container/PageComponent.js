var ComponentBaseFactory = require("../Components/ComponentBase.js");
var ComponentBarFactory = require("../Components/ComponentBar.js");
var ComponentPolyLineFactory = require("../Components/ComponentPolyLine.js");
var ComponentPieFactory = require("../Components/ComponentPie.js");


var manage = {
    init: function (name) {   //div --- wrapper
        //添加类名，并添加到body中，让wrapper暂时隐藏
        name = name ? name : "wrapper";
        this.Container = $("<div/>").addClass(name).hide();    
        $(document.body).append(this.Container);
        return this;
    },
    addPage: function (name) {     
        //添加类名，并添加到wrapper中
        name = name ? name : "page";
        this.page = $("<div class='section'>").addClass(name);
        this.Container.append(this.page);

        this.page.append( this.addComponent(
            {   
                type: "base",
                width: "100%",
                height: 40,
                css: {
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: "rgba(0, 0, 0, 0.7)",
                    color: "#fff",
                    textAlign: "center"
                },
                text: "webcoffee",

                
            }
        ) )

        return this;
    },
    addComponent: function (config) {
        //通过组件工厂加工，并添加到page中
        config = config ? config : {type: "base"};
        var Component = null;
        switch(config.type) {
            case "base":    
                Component = ComponentBaseFactory( config );
            break;
            case "bar":
                Component = ComponentBarFactory( config );
            break; 
            case "pie":
                Component = ComponentPieFactory( config );
            break;    
            case "poly": 
                Component = ComponentPolyLineFactory( config );
            break;
            default: 
                Component = ComponentBaseFactory( config );
            break;
        }
        this.page.append( Component );
        return this;
    },
    load: function () {
        //让组件显示，fullpage()添加分页, 
        this.Container.show();
        this.Container.fullpage({
            // sectionsColor: ["red", "white", "white", "yellow"],
            onLeave: function (index, nextIndex, direction) {
                //触发pageLeave事件
                $(".section").eq(index - 1).trigger("pageLeave");
            },
            afterLoad: function (anchor, index) {
                //触发pageLoad事件
                $(".section").eq(index - 1).trigger("pageLoad");
            }
        });

        $(".section")
                .on("pageLeave", function () {
                    //找到页面里所有的组件，告诉他们可以离场；
                    $(this).find(".ComponentBase").trigger("leaveComponent");
                })
                .on("pageLoad", function () {
                //找到页面里所有的组件，告诉他们可以入场；
                $(this).find(".ComponentBase").trigger("loadComponent");
                })
        $('.section').eq(0).trigger('pageLoad');        
    }
}

module.exports = manage;

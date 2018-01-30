require("../../less/ComponentBar.less");
var ComponentBaseFactory = function(config) {
    config = config ? config : {};
    var Id = (Math.random() * 100 + "").replace(".", "_");
    var Component = $("<div/>").attr("id", Id);
    Component.addClass("ComponentBase");

    config.name ? Component.addClass(config.name) : "";
    config.text ? Component.text(config.text) : "";
    config.width ? Component.css("width", config.width / 2) : "";
    config.height ? Component.css("height", config.height / 2) : "";
    if (config.center) {
        Component.css({position: "absolute", left: '50%', marginLeft: - config.width / 4});   
    }
    config.css ? Component.css( config.css ) : "";


    
    for (var type in config.eventType) {
        Component.on(type, config.eventType[type]);
    }

    Component.on("loadComponent", function () {
        config.animateIn ? Component.delay(config.delay ? config.delay : 0).animate( config.animateIn, function () {
            Component.addClass( "load" ).removeClass("leave");
        } ) : "";
    })
    Component.on("leaveComponent", function () {
        Component.addClass("leave").removeClass("load");
        config.animateOut ? Component.animate( config.animateOut ) : "";
    })

    return Component;
};

module.exports = ComponentBaseFactory;

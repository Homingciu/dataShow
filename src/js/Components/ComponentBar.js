var ComponentBaseFactory = require("./ComponentBase.js");
require("../../less/ComponentBar.less");
var ComponentBarFactory = function ( config ) {
    var Component = ComponentBaseFactory( config ).addClass( "ComponentBar" );
    var Data = config.data;

    Data.forEach(function (ele, index) {
        var itemWrapper = $("<div/>").addClass( "itemWrapper" );
        var nameDiv = $("<div/>").addClass( "name" );
        nameDiv.text( ele[0] );

        var loadWrapper = $("<div/>").addClass( "loadWrapper" ).css({width: 150 * ele[1]});
        var loadInner = $("<div/>").addClass( "loadInner" ).css({background: ele[2]}); 
        loadWrapper.append( loadInner ); 
        var perDiv = $("<div/>").addClass( "percent" ).text(ele[1] * 100 + "%");  
        
        itemWrapper
                    .append(nameDiv)
                    .append(loadWrapper)
                    .append(perDiv)
                    .appendTo(Component);
    });  

    return Component;
}

module.exports = ComponentBarFactory;
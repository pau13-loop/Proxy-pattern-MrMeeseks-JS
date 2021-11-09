const meeseks = require('../mrMeeseks/mrMeeseks')

function Box() {
    this.name = "Rick's box";
    this.mrMeeseks = null;
}

Box.prototype.createMrMeeseeks = function () {
    return JSON.parse( JSON.stringify( meeseks ) );
}

var factory = (function singleBox() {
    var instanceBox = new Box();
    return {
        getBox: function () {
            return instanceBox;
        }
    }
})()

exports.singletonBox = factory;
const meeseeks = require('../mrMeeseks/mrMeeseeks')

function Box() {
    this.name = "Rick's box";
    this.mrMeeseeks = null;
}

// Creates a copy/clone of the obj meeseks 
Box.prototype.createMrMeeseeks = function () {
    return JSON.parse( JSON.stringify( meeseeks ) );
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
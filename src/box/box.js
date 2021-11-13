const meeseeks = require('../mrMeeseks/mrMeeseeks')

function Box() {
    this.name = "Rick's box";
    this.mrMeeseeks = null;
}

// Creates a copy/clone of the obj meeseks 
Box.prototype.createMrMeeseeks = function () {
    if (!this.mrMeeseeks) {
        this.mrMeeseeks = meeseeks.singleMrMeeseeks.get();
    }
    return Object.create(this.mrMeeseeks);
}

Box.prototype.getProtoMeeseks = function() {
    return this.mrMeeseeks;
}

Box.prototype.pressButton = function(reality) {
    this.mrMeeseeks.speakOnCreate();
    return reality.push(this.createMrMeeseeks());
} 

var factory = (function singleBox() {
    var instanceBox = new Box();
    return {
        getBox: () => {
            return instanceBox;
        }
    }
})()

exports.singletonBox = factory;
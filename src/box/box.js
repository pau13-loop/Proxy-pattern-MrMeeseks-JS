const meeseeks = require('../mrMeeseks/mrMeeseeks')

function Box() {
    this.name = "Rick's box";
    this.mrMeeseeks = null;
}

function mrMeeseks() {
    this.messageOnCreate = "I'm Mr Meeseeks! Look at meeee!";
    this.messageOnRequest = ["Oooh", "ssireee!", "sma'am!"]
}

// Creates a copy/clone of the obj meeseks 
Box.prototype.createMrMeeseeks = function () {
    if (!this.mrMeeseeks) {
        this.mrMeeseeks = new mrMeeseks();
    }
    return Object.create(this.mrMeeseeks);
}

Box.prototype.getProtoMeeseks = function() {
    return this.mrMeeseeks;
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
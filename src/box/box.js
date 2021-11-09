const meeseks = require('../mrMeeseks/mrMeeseks')

function Box() {
    this.name = "Rick's box";
    this.mrMeeseks = null;
}

// Creates a copy/clone of the obj meeseks 
Box.prototype.createMrMeeseeks = function () {
    return JSON.parse( JSON.stringify( meeseks ) );
    // this.setMrMeeseks(newMrMeeseks);
    // return newMrMeeseks;
}

// Box.prototype.setMrMeeseks = function (newMeeseks) {
//     this.mrMeeseks = newMeeseks;
// }

// Box.prototype.getProtoMeeseks = function() {
//     return this.mrMeeseks;
// }

var factory = (function singleBox() {
    var instanceBox = new Box();
    return {
        getBox: function () {
            return instanceBox;
        }
    }
})()

exports.singletonBox = factory;

function Box() {
    this.name = "Rick's box";
    this.mrMeeseks = null;
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
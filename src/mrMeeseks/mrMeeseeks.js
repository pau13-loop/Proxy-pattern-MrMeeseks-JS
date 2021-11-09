function MrMeeseeks() {
    this.messageOnCreate = "I'm MrMeeseeks! Look at meee !";
}

var factory = (function singletonMrMeeseeks() {
    var instanceMeeseeks = new MrMeeseeks();
    return {
        get: function () {
            return instanceMeeseeks;
        }
    }
})()

exports.singleMrMeeseeks = factory;
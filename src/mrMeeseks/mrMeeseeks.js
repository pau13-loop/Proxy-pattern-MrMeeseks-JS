function MrMeeseeks() {
    this.messageOnCreate = "I'm Mr Meeseeks! Look at meeee!";
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
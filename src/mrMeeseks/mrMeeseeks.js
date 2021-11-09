function MrMeeseeks() {
    this.messageOnCreate = "I'm Mr Meeseeks! Look at meeee!";
    this.messageOnRequest = ["Oooh", "ssireee!", "sma'am!"]
}

MrMeeseeks.prototype.speakOnRequest = function () {
    return this.messageOnRequest[Math.floor(Math.random() * 2)];
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
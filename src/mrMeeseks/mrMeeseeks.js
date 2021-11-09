function MrMeeseeks() {
    this.messageOnCreate = "I'm Mr Meeseeks! Look at meeee!";
    this.messageOnRequest = ["Oooh yeah! Can do!", "Yes ssireee!", "Oh yeah, Yes ma'am!"]
}

//! The test case for this method checks the console log & the return
MrMeeseeks.prototype.speakOnRequest = function () {
    let messageOnRequest = this.messageOnRequest[Math.floor(Math.random() * 2)]; 
    console.log(messageOnRequest);
    return messageOnRequest;
}

MrMeeseeks.prototype.createNewMeeseeks = function() {
    return Object.create(new MrMeeseeks);
}

MrMeeseeks.prototype.speakOnCreate = function () {
    console.log(this.messageOnCreate);
}

MrMeeseeks.prototype.makeRequest = function(action, request) {
    let onRequest = function() {
        return action + ' ' + request; 
    }
    this.accion = onRequest;
    this.speakOnRequest();
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
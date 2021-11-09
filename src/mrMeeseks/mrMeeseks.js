function MrMeeseks() {
    this.messageOnCreate = "I'm MrMeeseeks! Look at meee !";
}

var factory = (function singleMrMeeseks() {
    var instanceMeeseks = new MrMeeseks();

    return {
        get: function() {
            return instanceMeeseks;
        }
    }
})

exports.singletonMrMeeseks = factory;
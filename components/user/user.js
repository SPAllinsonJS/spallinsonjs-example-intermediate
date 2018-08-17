

_A_.Controllers.User = function () {

    // instance variables

    var self = this;

    this.isEditing = false;

    var tempName;
    var tempAge;



    // lifecycle methods

    this.init = function () {
        tempName = self.model.name;
        tempAge = self.model.age;
    };



    // UI Events

    this.nameChanged = function (el) {
        tempName = el.value;
    };

    this.ageChanged = function (el) {
        tempAge = el.value;
    };

    this.buttonPressed = function () {
        if (self.isEditing) {
            self.model = {
                name: tempName,
                age: tempAge
            };
            self.isEditing = !self.isEditing;
            _A_.Repaint(self);
        } else {
            self.isEditing = !self.isEditing;
            _A_.Repaint(self);
        }
    };
};

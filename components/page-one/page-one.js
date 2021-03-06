

_A_.Controllers.PageOne = function () {

    // instance variables

    var self = this;



    // lifecycle methods

    this.init = function () {
        self.model.users = [
            {
                name: 'Jon Doe',
                age: 32
            },
            {
                name: 'Jane Doe',
                age: 64
            }
        ];
    };



    // UI Events

    this.appendUserPressed = function () {
        var newUser = {
            name: 'Chris J. Allinson',
            age: 37
        };
        self.model.users.push(newUser);
        _A_.Repaint(self);
    };
};

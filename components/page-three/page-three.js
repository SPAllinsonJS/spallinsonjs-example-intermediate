

_A_.Controllers.PageThree = function () {

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

        for (var i = 0; i < 100; i++) {
            self.model.users.push({
                name: 'Chris J. Allinson',
                age: 37
            });
        }
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

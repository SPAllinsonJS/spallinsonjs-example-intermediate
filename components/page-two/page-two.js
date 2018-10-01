

_A_.Controllers.PageTwo = function () {

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

    this.viewDidAppear = function () {
        repeatUsers();
    };



    // UI Events

    this.appendUserPressed = function () {
        var newUser = {
            name: 'Chris J. Allinson',
            age: 37
        };
        appendUser(newUser);
    };



    // private methods

    var repeatUsers = function () {
        _A_.Repeat(
            'User',
            self.me + '.usersContainer',
            self.model.users,
            self
        );
    };

    var appendUser = function (user) {
        _A_.Append(
            'User',
            self.me + '.usersContainer',
            [user],
            self
        );
    };
};

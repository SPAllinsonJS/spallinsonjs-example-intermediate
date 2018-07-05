

_A_.Controllers.PageTwo = function () {

    // instance variables

    var self = this;

    this.me;
    this.model;



    // lifecycle methods

    this.init = function (i, data) {
        self.me = i;
        self.model = data;

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

    this.dealloc = function (callback) {
        return callback();
    };

    this.viewDidLoad = function () {
        repeatUsers();
    };



    // UI Events

    this.appendUser = function () {
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
            self.me
        );
    };

    var appendUser = function (user) {
        _A_.Append(
            'User',
            self.me + '.usersContainer',
            [user],
            self.me
        );
    };
};



_A_.Controllers.PageOne = function () {

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
    };



    // UI Events

    this.appendUser = function () {
        var newUser = {
            name: 'Chris Allinson',
            age: 37
        };
        self.model.users.push(newUser);
        _A_.Repaint(self.me);
    };
};

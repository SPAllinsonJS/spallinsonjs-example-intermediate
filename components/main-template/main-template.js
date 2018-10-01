

_A_.Controllers.MainTemplate = function () {

    // instance variables

    var currentPage;



    // lifecycle methods

    this.init = function () {
        currentPage = determineInitialPage();
    };



    // UI Events

    this.prevPressed = function () {
        if (currentPage == 0) {
            return;
        }
        currentPage--;
        updatePage();
    };

    this.nextPressed = function () {
        if (currentPage == 2) {
            return;
        }
        currentPage++;
        updatePage();
    };



    // private methods

    var determineInitialPage = function () {
        var tempPageIndex = 0;
        if (_A_.Router.currentRoute == 'main/pageone') {
            tempPageIndex = 0;
        } else if (_A_.Router.currentRoute == 'main/pagetwo') {
            tempPageIndex = 1;
        } else if (_A_.Router.currentRoute == 'main/pagethree') {
            tempPageIndex = 2;
        }
        return tempPageIndex;
    };

    var updatePage = function () {
        switch (currentPage) {
            case 0:
                _A_.Go('main/pageone');
                break;
            case 1:
                _A_.Go('main/pagetwo');
                break;
            case 2:
                _A_.Go('../pagethree');
                break;
            default:
                break;
        }
    };
};

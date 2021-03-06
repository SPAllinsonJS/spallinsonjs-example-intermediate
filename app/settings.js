

_A_.Settings = {

    appRoot: './',

    initialRoute: 'main/pageone',


    splash: {
        enabled: true,
        view: 'components/splash/splash.html',
        doesFadeOut: true,
        showForAtLeastMills: 2500,
        imageSuffixForDevicePixelRatio: {
            '1': '',
            '1.5': '@2x',
            '2': '@2x',
            '2.25': '@2x'
        }
    },


    historyEnabled: true,

    scriptManagementEnabled: false,


    components: {
        'MainTemplate': {
            view: 'components/main-template/main-template.html',
            controller: 'components/main-template/main-template.js',
            preload: true
        },

        'PageOne': {
            view: 'components/page-one/page-one.html',
            controller: 'components/page-one/page-one.js',
            pageTitle: 'SPAllinsonJS - Intermediate App - Page One',
            preload: true
        },
        'PageTwo': {
            view: 'components/page-two/page-two.html',
            controller: 'components/page-two/page-two.js',
            pageTitle: 'SPAllinsonJS - Intermediate App - Page Two',
            preload: true
        },
        'PageThree': {
            view: 'components/page-three/page-three.html',
            controller: 'components/page-three/page-three.js',
            pageTitle: 'SPAllinsonJS - Intermediate App - Page Three',
            preload: true
        },

        'User': {
            view: 'components/user/user.html',
            controller: 'components/user/user.js',
            preload: true
        },
    },


    fallbackRoute: 'main/pageone',

    routes: {
        'main': [
            ['MainTemplate', 'app']
        ],

        'pageone': [
            ['PageOne', 'mainContainer', 'fade']
        ],
        'pagetwo': [
            ['PageTwo', 'mainContainer', 'fade']
        ],
        'pagethree': [
            ['PageThree', 'mainContainer', 'fade']
        ],
    },

    routeRules: [
    ],


    services: {
    },

    singletons: {
    }
};

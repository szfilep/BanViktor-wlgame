angular.module('WLGame')
    .config(function ($routeProvider) {
    $routeProvider
        .when('/login', {
            templateUrl: 'app/login/loginView.html',
            controller: 'LoginController',
            controllerAs: 'loginCtrl'
        })
        .when('/register', {
            templateUrl: 'app/login/registrationView.html',
            controller: 'RegistrationController',
            controllerAs: 'registrationCtrl'
        })
        .when('/rooms', {
            templateUrl: 'app/room/roomListView.html',
            controller: 'RoomListController',
            controllerAs: 'roomListCtrl'
        })
        .when('/rooms/:id', {
            templateUrl: 'app/room/roomView.html',
            controller: 'RoomController',
            controllerAs: 'roomCtrl'
        })
        .otherwise({
            redirectTo: '/rooms'
        });
    })
    .run(function($rootScope, $route, $location, user) {
        $rootScope.$on("$locationChangeStart", function(event, next, current) {
            var nextPath = $route.routes[$location.path()];
            if (!user.isLoggedIn() && nextPath.controller != 'RegistrationController' && nextPath.controller != 'LoginController') {
                user.redirectToLogin();
            }
        });
        $rootScope.range = function(min, max) {
            var numbers = [];
            for (var i = min; i <= max; ++i) {
                numbers.push(i);
            }
            return numbers;
        };
    })
;

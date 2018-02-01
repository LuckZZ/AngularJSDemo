//定义angular 应用模块myapp []当中依赖的模块
var app = angular.module("myapp", ['ngRoute', 'angularCSS']);

//配置 $routeProvider，AngularJS $routeProvider 用来定义路由规则
app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        //在ng-view中插入html模版文件
        templateUrl: "tpl/main.html",
        css: "css/index.css",
        controller: "HomeCtrl"
    })
    .when('/one', {
        templateUrl: "tpl/one.html",
        css: "css/one.css",
        controller: "OneCtrl"
    })
    .when('/two', {
        templateUrl: "tpl/two.html",
        css: "css/two.css",
        controller: "TwoCtrl"
    })
    .when('/three', {
        templateUrl: "tpl/three.html",
        css: "css/three.css",
        controller: "ThreeCtrl"
    })
    .when('/four', {
        templateUrl: "tpl/four.html",
        css: "css/four.css",
        controller: "FourCtrl"
        //template:"<h4>tt</h4>"
    })
    .otherwise("/");
}]);
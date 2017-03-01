//主入口文件
var app = angular.module('app',['ngRoute','ngSanitize'])

app.config(['$routeProvider','$locationProvider',function($route,$location){
    $route
        //首页
        .when('/',{
            templateUrl:'./tpl/home.html'
        })
        //图书列表页
        .when('/list',{
            templateUrl:'./tpl/book_list.html',
            controller:'listCtrl'
        })
        //图书展示页
        .when('/book_content/:id',{
            templateUrl:'./tpl/book_content.html',
            controller:'bookContent'
        })
        .when('/news',{
            template:'<h1>这里是最新资讯</h1>'
        })
        .when('/me',{
            template:'<h1>这里是关于我</h1>'
        })
        //页面一进来访问的路径
        .otherwise({
            redirectTo: '/'
        })

        $location.hashPrefix('')
}])
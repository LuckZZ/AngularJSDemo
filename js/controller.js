//控制器的 $scope （相当于作用域、控制范围）用来保存AngularJS Model(模型)的对象
//在控制器中为name变量赋值
app.controller("HomeCtrl", ['$scope', function ($scope) {
    $scope.name = "this is Home Page";
}]);

app.controller("OneCtrl", ['$scope', function ($scope) {
    $scope.name = "this is One Page";
}]);

app.controller("TwoCtrl", ['$scope', function ($scope) {
    $scope.name = "this is Two Page";
}]);

app.controller("ThreeCtrl", ['$scope', function ($scope) {
    $scope.name = "this is Three Page";
}]);

app.controller("FourCtrl", ['$scope', function ($scope) {
    $scope.name = "this is Four Page";
}]);
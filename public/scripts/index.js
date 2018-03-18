var app = angular.module('record', []);
app.controller('recordCtrl', function ($scope , $http) {
    var req = {
        method :'GET' ,
        url :'/record',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    $http(req).then(function (response) {
        $scope.rec = response.data;
        console.log(response);
    }, function err( response ) {
        console.log(response);

    });
});
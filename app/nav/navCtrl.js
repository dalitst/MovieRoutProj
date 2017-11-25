
actorApp.controller("navCtrl", function($scope, $location) {
    $scope.isActive = function(path) {
        console.log(location.path());
        return $location.path().includes(path);
    }
})
function UserCtrl($scope, $http) {
    var config = {headers: {"X-Parse-REST-API-Key":"pmqy17YuvRYInhxtlLM8Adm1fKsK2gj4Epxjwuhp", "X-Parse-Application-Id":"fvMcqGiCkQwp6ygypnrNpBrD24OIALuPaJiTz0qM"}};
    
    $scope.button = 'Register';
  
    $scope.processForm = function (item) {
        $scope.button = "Processing";
        console.log(item);
        $http.post("https://api.parse.com/1/users", item, config).success (
            function(data) {
                console.log(data);
                $scope.button = "Success";
            }
        );
    }
}
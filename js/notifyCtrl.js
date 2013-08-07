function NotifyCtrl($scope, $http) {
    var config = {headers: {"X-Parse-REST-API-Key":"pmqy17YuvRYInhxtlLM8Adm1fKsK2gj4Epxjwuhp", "X-Parse-Application-Id":"fvMcqGiCkQwp6ygypnrNpBrD24OIALuPaJiTz0qM"}};
    $scope.button = 'Submit';  
    $http.get('https://api.parse.com/1/classes/notify', config).success(function(data) {
        console.log(data);
        $scope.notifications = data.results;
    });
  
    $http.get('https://api.parse.com/1/users', config).success(function(data) {
        console.log(data);
        $scope.users = data.results;
    });
  
    $scope.processForm = function (item) {
        $scope.button = "Processing";
        console.log(item);
        $http.post("https://api.parse.com/1/classes/notify", item, config).success (
            function(data) {
                console.log(data);
                $scope.button = "Success";
                $http.get('https://api.parse.com/1/classes/notify/'+data.objectId, config).success(function(data) {
                    console.log(data);
                    $scope.notifications.unshift(data);
                });
            }
        );
    }
}


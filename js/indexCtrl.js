function IndexCtrl($scope, $http) {
    $scope.tabs = [
        {title: "Notify", partial:"/partial/notify.html"},    
        {title: "User", partial:"/partial/user.html"} 
    ];
    
    $scope.tabs.activate = function (idx) {
        $scope.tabs.selectedIdx = idx;
        $scope.partial = $scope.tabs[idx].partial;
    }
    
    $scope.tabs.selectedIdx = 0;
    
    $scope.partial = '/partial/notify.html';
}
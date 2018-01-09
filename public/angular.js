angular.module('myApp', []).controller('namesCtrl', function($scope,$interval) {
    $scope.names = company;
    $scope.ng_sort = ()=>{
        $scope.filter = '+giatri';
        $scope.colorHr1 = {"opacity":0};
        $scope.colorHr2 = {"opacity":1};
    }    
    $scope.ng_reverse = ()=>{
        $scope.filter = "-giatri";
        $scope.names = company;
        $scope.colorHr1 = {"opacity":1};
        $scope.colorHr2 = {"opacity":0};
    }    
    $scope.setStyle = (value)=>{
        if (value < 0) {
            return {'color':'red'};
        }else if(value == 0){
            return {'color':'black'};
        }else{
            return {'color':'green'};
        }
    }
    $scope.colorHr1 = {"opacity":0};
    $scope.colorHr2 = {"opacity":0};
    $scope.limit = 20;
    
    $interval(function () {
        tinhgiatri();        
    }, 5000);
});
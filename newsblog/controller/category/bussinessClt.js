














(function(){ 


	angular.module('myapp')
    .controller('bussinessClt', blogArticale);

    blogArticale.$inject = ['$scope', 'blogArticaleLeftSide',  '$q'];

        
    function blogArticale($scope, blogArticaleLeftSide,  $q){ 
        // first controller dependence
         
            blogArticaleLeftSide.getAlbums().then(function(bussinData){
            $scope.bussinData = bussinData.data;
            $scope.limiTation = 12;
            $scope.categories = 'entertainment'
            //console.log($scope.users)
             });   

    }; 

 

})()








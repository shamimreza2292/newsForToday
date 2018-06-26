





(function(){ 


	angular.module('myapp')
    .controller('EmtertainmentClt', blogArticale);

    blogArticale.$inject = ['$scope', 'blogArticaleLeftSide',  '$q'];

        
    function blogArticale($scope, blogArticaleLeftSide,  $q){ 
        // first controller dependence
         
            blogArticaleLeftSide.getAlbums().then(function(EntertainData){
            $scope.EntertainData = EntertainData.data;
            $scope.limiTation = 12;
            $scope.categories = 'entertainment'
            //console.log($scope.users)
             });   

    }; 

 

})()








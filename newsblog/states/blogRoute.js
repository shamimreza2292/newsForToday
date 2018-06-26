
(function(){


    angular.module('myapp').config(configNav);

configNav.$inject = ['$urlRouterProvider', '$stateProvider', 'menuScript']; 

function configNav($urlRouterProvider, $stateProvider, menuScript){

        $stateProvider.state('features', {
            url: '/features',
            templateUrl:'view/page/features.html',
            controller: 'blogArticaleClt',
            controllerAs: 'vm',
            resolve: {
              loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                  return $ocLazyLoad.load({
                      files: ['controller/blog/blogartical.js', menuScript.js]
                  });
              }]
          }

        });

        $stateProvider.state('buytheme', {
            url: '/buytheme',
            templateUrl: 'view/page/buy-them.html',
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: [menuScript.js]
                    });
                }]
            }
        });

        $stateProvider.state('entertainment', {
            url: '/entertainment',
            templateUrl: 'view/page/entertainment.html',
            controller: 'EmtertainmentClt',
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                      files: ['controller/category/EntertainmentClt.js', menuScript.js]
                       
                    });
                }]
            }
        }); 
        $stateProvider.state('politics', {
            url: '/politics',
            templateUrl: 'view/page/politics.html',
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: [menuScript.js]
                    });
                }]
            }
        });
        $stateProvider.state('fashion', {
            url: '/fashion',
            templateUrl: 'view/page/fashion.html',
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: [menuScript.js]
                    });
                }]
            }
        });
        $stateProvider.state('sports', {
            url: '/sports',
            templateUrl: 'view/page/sports.html',
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: [menuScript.js]
                    });
                }]
            }
        });
        $stateProvider.state('tech', {
            url: '/tech',
            templateUrl: 'view/page/tech.html',
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: [menuScript.js]
                    });
                }]
            }
        });
        $stateProvider.state('business', {
            url: '/business',
            templateUrl: 'view/page/business.html',
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: [menuScript.js]
                    });
                }]
            }
        }); 
        $stateProvider.state('shop', {
            url: '/shop',
            templateUrl: 'view/page/shop.html',
            resolve: {
                loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load({
                        files: [menuScript.js]
                    });
                }]
            }
        });  










// ============  more button clike to move catagory ===============


        //all product catagory route
        $stateProvider.state('allnews', {
            url: '/allnews',
            templateUrl: 'view/category-single/all-catagory.html',
            controller: 'blogArticaleClt',
            controllerAs: 'vm',
             resolve: {
              loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                  return $ocLazyLoad.load({
                      files: ['controller/blog/blogartical.js']
                  });
              }]
          }

        });  

        
         //Entertainment catagory route
         $stateProvider.state('entertainmentCatagory', {
            url: '/entertainmentCatagory',
            templateUrl: 'view/page/entertainment.html',
            controller: 'EmtertainmentClt',
            controllerAs: 'vm',
             resolve: {
              loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                  return $ocLazyLoad.load({
                      files: ['controller/category/EntertainmentClt.js']
                  });
              }]
          }

        });  

 
        
        
         //Bussiness catagory route
         $stateProvider.state('businessCatagory', {
            url: '/businessCatagory',
            templateUrl: 'view/page/video.html',
            controller: 'bussinessClt',
            controllerAs: 'vm',
             resolve: {
              loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                  return $ocLazyLoad.load({
                      files: ['controller/category/bussinessClt.js']
                  });
              }]
          }

        }); 


        


        $urlRouterProvider.otherwise('/features');

}


 angular.module('myapp').run(['$rootScope', '$state', function($rootScope, $state) {
//    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams){
        
//         console.log('toState..........')
         
//     });

        $rootScope.$on('$locationChangeStart', function(event, toUrl, fromUrl){
            // console.log(toUrl);

              $('.scroll-header').css({'width': '0px'});
              $('.overlay').css({'width': '0px'});
            
        })
}]);



})()
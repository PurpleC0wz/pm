angular.module('app.controllers', [])
  
.controller('homeCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
    var pages = "#/tab/home+#/tab/feedback+#/tab/project";
    $scope.$on('$ionicView.afterEnter', function() {
        if (pages.indexOf(location.hash) > -1) {
            var tabs =document.getElementsByTagName('ion-tabs');
            angular.element(tabs).removeClass("tabs-item-hide");
        }
    });
    $scope.$on('$ionicView.afterLeave', function() {
        if (pages.indexOf(location.hash) > -1) return;
        var tabs =document.getElementsByTagName('ion-tabs');
        angular.element(tabs).addClass("tabs-item-hide");
    });
}])
   
.controller('projectCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
    var pages = "#/tab/home+#/tab/feedback+#/tab/project";
    $scope.$on('$ionicView.afterEnter', function() {
        if (pages.indexOf(location.hash) > -1) {
            var tabs =document.getElementsByTagName('ion-tabs');
            angular.element(tabs).removeClass("tabs-item-hide");
        }
    });
    $scope.$on('$ionicView.afterLeave', function() {
        if (pages.indexOf(location.hash) > -1) return;
        var tabs =document.getElementsByTagName('ion-tabs');
        angular.element(tabs).addClass("tabs-item-hide");
    });
}])

//add new controller.
.controller('projectDetailCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

//add new controller.
.controller('addProjectCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {

}])
//add new controller.
.controller('feedbackDetailCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {	


}])
   
.controller('feedbackCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
    var pages = "#/tab/home+#/tab/feedback+#/tab/project";
    $scope.$on('$ionicView.afterEnter', function() {
        if (pages.indexOf(location.hash) > -1) {
            var tabs =document.getElementsByTagName('ion-tabs');
            angular.element(tabs).removeClass("tabs-item-hide");
        }
    });
    $scope.$on('$ionicView.afterLeave', function() {
        if (pages.indexOf(location.hash) > -1) return;
        var tabs =document.getElementsByTagName('ion-tabs');
        angular.element(tabs).addClass("tabs-item-hide");
    });
}])
      
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('loginCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('signUpCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('addNewProjectCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 
angular.module('app.controllers', ['ionic'])
  
.controller('inicioSesionCtrl', function($scope,$ionicSideMenuDelegate) {


		  $scope.toggleLeft = function() {
    	  $ionicSideMenuDelegate.toggleLeft();
    	  print("funciona");
  };
	/*$scope.login = function(){
		//alert("Helloo");
		var ref = new Firebase("https://joywkbd.firebaseio.com/");
		var authObject = $firebaseAuth(ref);

		authObject.$authWithOAuthPopup('facebook').then(function(authData){
			console.log(authData);
		}).catch(function(error){

			console.log('Error' + error);

		})
		
	}*/

})

   
.controller('registroCtrl', function($scope) {

})
   
.controller('inicioCtrl', function($scope) {

})
   
.controller('perfilCtrl', function($scope) {

})
   
.controller('restaurantesCtrl', function($scope) {

})
   
.controller('menuRestCtrl', function($scope) {

})
   
.controller('menuBarCtrl', function($scope) {

})
   
.controller('barCtrl', function($scope) {

})
   
.controller('eventosCtrl', function($scope) {

})
   
.controller('reservaResCtrl', function($scope) {

})
   
.controller('reservaRes_conAlimentosCtrl', function($scope) {

})
   
.controller('reservaBarCtrl', function($scope) {

})


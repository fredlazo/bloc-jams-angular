 (function() {
     function LandingCtrl() {
         this.heroTitle = "Turn the Music Up!";
     }
 
     angular
         .module('blocJams')
         .controller('LandingCtrl', LandingCtrl);
 })();


/*

var app = angular.module('blocJams',[]);

app.controller('LandingCtrl', ['http', '$log', function($http, $log){
    
}]);

*/

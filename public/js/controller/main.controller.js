'use strict';

app.controller('MainCtrl', function($scope, $stateParams, $state, AuthService) {

    var init = function() {
    };

    $scope.login = function(form) { 
        if (form.$valid) { 
            AuthService.login($scope.user)
                .then(function(data) {
                    $state.go('app.home');
                })
                .catch(function(err) {
                    $scope.msg.error = 'MSG.EXISTS.INCORRET.DATA';                
                });
        } else {
            $scope.$parent.msg.error = 'MSG.EXISTS.INCORRET.DATA';
        }
    }

    $scope.logout = function(form) { 
    	AuthService.logout()
            .then(function(data) { })
            .catch(function() { });
    }
    
    init();

});
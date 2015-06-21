'use strict';

module.exports = angular.module( 'defqon1.app', [] )
  .controller('defqon.controller', ['$scope', '$rootScope', '$http', function( $scope, $rootScope, $http ) {

    $scope.socket = io();
    $scope.teste  = [];

    var is_first = true

    var $window = $(window);

    var new_data_array = [];

    $scope.socket.on('hasNewContents', function( data ) {
      var url = data.show + '&count=1';
      $http.jsonp(url)
        .success(function(data){

          if( window.scrollY > 100 ) {
            new_data_array.push(data.data[0]);
            $rootScope.thereAreNotifications = true;
            $rootScope.new_photos_counter = ($rootScope.new_photos_counter + 1);
          } else {
            $scope.teste.push( data.data[0] );
          }

        });
    });

    $scope.socket.on('getFeedFirstTime', function( data ) {
      $http.jsonp(data.show)
        .success(function(data){
          console.log(data.data);
          $scope.teste = $scope.teste.concat( data.data );
        });
    });

    var updateFeed = function() {
      $scope.$apply(function() {
        $scope.teste   = $scope.teste.concat( new_data_array );
        new_data_array = [];
      });

      $rootScope.$apply(function() {
        $rootScope.thereAreNotifications = false;
        $rootScope.new_photos_counter = 0;
      });
    };


    $rootScope.$on( 'new_photo', function( evt, args ) {
      window.scrollTo( 0, 0 );
      updateFeed();
    });

    var debounce = function(func, wait, immediate) {
      var timeout;
      return function() {
        var context = this, args = arguments;
        var later = function() {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    };

    $window.on('scroll', debounce(function() {
      if( $window.scrollTop() == 0 ) {
        updateFeed();
      }
    }, 250));

  }])
  .directive('notificationNewPhoto', ['$rootScope', function( $rootScope ) {
    return {
      restrict: 'A',
      link: function(scope, element, attrs, controller) {
        element.on('click', function(evt) {
          console.log('click');
          $rootScope.$broadcast( 'new_photo' );
        });
      }
    };
  }]);
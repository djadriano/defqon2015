'use strict';

module.exports = angular.module( 'defqon1.app', [] )
  .service('defqonService', ['$http', function( $http ) {
    return {
      getNewPhotos: function( url ) {
        return $http.jsonp( url );
      }
    };
  }])
  .controller('defqon.controller', ['$scope', '$rootScope', 'defqonService', function( $scope, $rootScope, defqonService ) {

    // --------------------------------------------------
    // set variables
    // --------------------------------------------------

    var $window         = $( window ),
        arrCueNewPhotos = [],
        lastUpdateId    = 0;

    // --------------------------------------------------
    // set scope variables
    // --------------------------------------------------

    $scope.socket    = io();
    $scope.arrPhotos = [];

    // --------------------------------------------------
    // scope methods
    // --------------------------------------------------

    $scope.showMessageNewPhotos = function() {
      $rootScope.thereAreNotifications = true;
      $rootScope.new_photos_counter    = ( $rootScope.new_photos_counter + 1 );
    };

    $scope.hideMessageNewPhotos = function() {
      $rootScope.$apply(function() {
        $rootScope.thereAreNotifications = false;
        $rootScope.new_photos_counter    = 0;
      });
    };

    // --------------------------------------------------
    // socket methods
    // --------------------------------------------------

    $scope.socket.on( 'hasNewContents', function( data ) {

      var apiRequestUrl = data.show + '&count=1';

      defqonService.getNewPhotos( apiRequestUrl ).then(function( response ) {

        console.log('hasNewContents');

        if( response.data.data[ 0 ].id != lastUpdateId ) {

          if( window.scrollY > 100 ) {

            arrCueNewPhotos.push( response.data.data[ 0 ] );

            $scope.showMessageNewPhotos();

          } else {
            $scope.arrPhotos.push( response.data.data[ 0 ] );
          }

          lastUpdateId = response.data.data[ 0 ].id;

        } else {
          lastUpdateId = 0;
        }

      });

    });

    $scope.socket.on('getFeedFirstTime', function( data ) {
      defqonService.getNewPhotos( data.show ).then(function( response ) {
        $scope.updatePhotos( response.data.data );
      });
    });

    // --------------------------------------------------
    // helper methods
    // --------------------------------------------------

    $scope.updatePhotos = function( photosData ) {
      $scope.arrPhotos = $scope.arrPhotos.concat( photosData );
    };

    $scope.updateFeed = function() {

      $scope.$apply(function() {
        $scope.updatePhotos( arrCueNewPhotos );
      });

      $scope.hideMessageNewPhotos();

      arrCueNewPhotos = [];

    };

    $scope.debounce = function(func, wait, immediate) {
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

    // --------------------------------------------------
    // events methods
    // --------------------------------------------------

    $rootScope.$on( 'clickToShowNewPhotos', function( evt, args ) {
      window.scrollTo( 0, 0 );
    });

    $window.on('scroll', $scope.debounce(function() {

      if( $window.scrollTop() == 0 && arrCueNewPhotos.length > 0 ) {
        $scope.updateFeed();
      }

    }, 250));

  }])
  .directive('notificationNewPhoto', ['$rootScope', function( $rootScope ) {
    return {
      restrict: 'A',
      link    : function( scope, element, attrs ) {
        element.on('click', function( evt ) {
          $rootScope.$broadcast( 'clickToShowNewPhotos' );
        });
      }
    };
  }]);
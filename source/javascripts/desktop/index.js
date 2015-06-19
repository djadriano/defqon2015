'use strict';

module.exports = angular.module( 'ytio.desktop', [] )
  .controller('ytio.desktop.controller', ['$scope', function( $scope ) {

    $scope.generated_code = '';
    $scope.video          = {};

    $scope.enterOnDesktop = function() {
      $scope.socket.emit( 'enterDesktop' );
    };

    // socket events

    $scope.socket.on('generatedCode', function( data ) {
      $scope.$apply(function() {
        $scope.generated_code = data;
      });
    });

    $scope.socket.on('codeWasValidatedDesktop', function( data ) {

      if( data.validate ) {
        $scope.$apply(function() {

          $scope.socket_info.desktop = data.desktop_id;
          $scope.socket_info.mobile  = data.mobile_id;

          $scope.video.show = true;

        });
      }

    });

    $scope.socket.on('playedVideo', function( data ) {
      console.log('playedVideoDesktop');
    });

    // initialize methods

    $scope.enterOnDesktop();

  }])
  .directive('ytioDesktop', function() {
    return {
      restrict  : 'A',
      controller: 'ytio.desktop.controller',
      require   : [ '^ytioApp', '^ytioPlayer' ]
    };
  });
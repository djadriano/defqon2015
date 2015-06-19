'use strict';

module.exports = angular.module( 'ytio.mobile', [] )
  .controller('ytio.mobile.controller', ['$scope', function( $scope ) {

    $scope.mobcode = {
      a: '',
      b: '',
      c: '',
      d: ''
    };

    $scope.video = {};

    $scope.validateCode = function() {
      $scope.socket.emit( 'validateCode', $scope.mobcode );
    };

    $scope.socket.emit( 'enterMobile' );

    $scope.socket.on('codeWasValidatedMobile', function( data ) {

      if( data.validate ) {
        $scope.$apply(function() {

          $scope.socket_info.desktop = data.desktop_id;
          $scope.socket_info.mobile  = data.mobile_id;

          $scope.video.show = true;

        });
      }

    });

    $scope.socket.on('playedVideo', function( data ) {
      console.log('playedVideoMobile');
    });

  }])
  .directive('ytioMobile', function() {
    return {
      restrict  : 'A',
      controller: 'ytio.mobile.controller',
      require   : [ '^ytioApp', '^ytioPlayer' ]
    };
  });
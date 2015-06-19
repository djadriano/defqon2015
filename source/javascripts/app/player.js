'use strict';

module.exports = angular.module( 'ytio.player', [] )
  .controller('ytio.player.controller', ['$scope', function( $scope ) {

    $scope.playVideo = function() {
      $scope.socket.emit( 'playVideo', $scope.socket_info );
    };

    $scope.stopVideo = function() {
      $scope.socket.emit( 'stopVideo', $scope.socket_info );
    };

  }])
  .directive('ytioPlayer', function() {
    return {
      restrict  : 'A',
      controller: 'ytio.player.controller',
      require   : [ '^ytioApp' ]
    };
  });
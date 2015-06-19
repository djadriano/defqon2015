require( 'angular/angular' );

angular.module('defqon1', [
  require( './app/' ).name
])
.run(['$rootScope', function( $rootScope ) {
  $rootScope.thereAreNotifications = false;
  $rootScope.new_photos_counter = 0;
}]);
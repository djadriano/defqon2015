require( 'angular/angular' );

angular.module('defqon1', [
  require( './app/' ).name
])
.config(['$sceDelegateProvider', '$sceProvider', function($sceDelegateProvider, $sceProvider) {
  $sceProvider.enabled( false );
}])
.run(['$rootScope', function( $rootScope ) {
  $rootScope.thereAreNotifications = false;
  $rootScope.new_photos_counter = 0;
}]);
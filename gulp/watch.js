var gulp = require( 'gulp' );

module.exports = function() {

  gulp.watch( './source/javascripts/**/**.js'  , [ 'browserify' ] );
  gulp.watch( './source/stylesheets/**/**.scss', [ 'styles'     ] );

};
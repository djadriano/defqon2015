var gulp      = require( 'gulp' ),
  compass     = require( 'gulp-compass' ),
  minifyCSS   = require( 'gulp-minify-css' ),
  notify      = require( 'gulp-notify' ),
  plumber     = require( 'gulp-plumber' );

module.exports = function() {

  gulp.src( './source/stylesheets/application.scss' )
    .pipe(plumber())
    .pipe(compass({
      config_file: 'config.rb',
      css        : 'public/stylesheets',
      sass       : 'source/stylesheets'
    }))
    .pipe( gulp.dest( './public/stylesheets' ) );
    // .pipe( notify( { message: "styles executed!" } ) );

};
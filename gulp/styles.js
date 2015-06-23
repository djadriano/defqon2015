var gulp      = require( 'gulp' ),
  compass     = require( 'gulp-compass' ),
  minifyCSS   = require( 'gulp-minify-css' ),
  plumber     = require( 'gulp-plumber' );

module.exports = function() {

  return gulp.src( './source/stylesheets/application.scss' )
    .pipe(plumber())
    .pipe(compass({
      config_file: 'config.rb',
      css        : 'public/stylesheets',
      sass       : 'source/stylesheets'
    }))
    .pipe(minifyCSS())
    .pipe( gulp.dest( './public/stylesheets' ) );

};
var gulp      = require( 'gulp' ),
  uglify      = require( 'gulp-uglify' ),
  browserify  = require( 'gulp-browserify' ),
  source      = require( 'vinyl-source-stream' ),
  plumber     = require( 'gulp-plumber' );

module.exports = function() {

  return gulp.src( './source/javascripts/application.js' )
    .pipe(plumber())
    .pipe(browserify({
      insertGlobals : false,
      debug         : false
    }))
    .pipe( gulp.dest( './public/javascripts' ) );

};
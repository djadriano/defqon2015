var gulp    = require( 'gulp' ),
  uglify    = require( 'gulp-uglify' ),
  minifyCSS = require( 'gulp-minify-css' ),
  imagemin  = require( 'gulp-imagemin' ),
  notify    = require( 'gulp-notify' );

module.exports = function() {

  // gulp.src( './app/assets/scripts/**.js' )
  //   .pipe( uglify() )
  //   .pipe( gulp.dest( './build/assets/scripts' ) )

  // gulp.src( './app/assets/styles/**.css' )
  //   .pipe( minifyCSS() )
  //   .pipe( gulp.dest( './build/assets/styles/' ) )

  // gulp.src( './app/assets/images/**/*' )
  //   .pipe( imagemin( { optimizationLevel: 3, progressive: true, interlaced: true } ) )
  //   .pipe( gulp.dest( './build/assets/images' ) )
  //   .pipe( notify( { message: "build executed!" } ) );

};
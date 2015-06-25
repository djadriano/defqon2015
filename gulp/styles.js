var gulp      = require( 'gulp' ),
  sass        = require( 'gulp-ruby-sass' ),
  prefix      = require( 'gulp-autoprefixer' ),
  minifyCSS   = require( 'gulp-minify-css' ),
  plumber     = require( 'gulp-plumber' );

module.exports = function() {
  return sass('./source/stylesheets/application.scss', {style: 'compact'})
        .pipe(prefix("last 3 versions", "> 1%", "ie 8", "ie 7"))
        .pipe( gulp.dest( './public/stylesheets' ) );
};
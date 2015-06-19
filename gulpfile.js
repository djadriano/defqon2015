var gulp = require('gulp');

// ---------------------------
// browser-sync
// ---------------------------

gulp.task('browser-sync', require('./gulp/browsersync'));

// ---------------------------
// browserify
// ---------------------------

gulp.task('browserify', require('./gulp/browserify'));

// ---------------------------
// styles
// ---------------------------

gulp.task('styles', require('./gulp/styles'));

// ---------------------------
// watch
// ---------------------------

gulp.task('watch', require('./gulp/watch'));

// ---------------------------
// clean
// ---------------------------

gulp.task('clean', require('./gulp/clean'));

// ---------------------------
// build
// ---------------------------

gulp.task('build', ['clean'], require('./gulp/build'));
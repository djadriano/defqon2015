var gulp        = require('gulp');
var browserSync = require('browser-sync');

// Static server
module.exports = function() {
  browserSync.init([
    'public/**/*.*',
    'views/**/*.ejs'
  ], {
    proxy  : 'http://localhost:3000',
    port   : 4000,
    browser: ['google chrome']
  });
};
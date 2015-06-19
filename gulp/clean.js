var gulp = require( 'gulp' ),
  del    = require( 'del' ),
  notify = require( 'gulp-notify' );

module.exports = function( cb ) {
  del( [ './build' ], cb );
};
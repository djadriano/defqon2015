// dependencies

var express   = require( 'express' );
var app       = express();
var http      = require( 'http' ).Server( app );
var io        = require( 'socket.io' )( http );

var Instagram            = require( 'instagram-node-lib' );
var Twitter              = require( 'twitter' );
var routes               = require( './routes/app' )( io );
var instagram_controller = require( './controllers/instagram' );
var twitter_controller   = require( './controllers/twitter' );
var socket_controller    = require( './controllers/socket' );

// template engine

app.set( 'view engine', 'ejs' );

// define public assets folder

app.use( express.static( __dirname + '/public' ) );

// routes

app.use( '/', routes );

// initialize server

http.listen(process.env.PORT || 3000, function(){
  console.log( 'listening on *:3000' );
});

instagram_controller.initialize( Instagram );
// twitter_controller.initialize( Twitter );

io.on('connection', function( socket ) {
  instagram_controller.getTags( io, socket );
});
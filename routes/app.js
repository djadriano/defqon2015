// dependencies

var express              = require( 'express' );
var app                  = express();
var router               = express.Router();
var bodyParser           = require( 'body-parser' );
var instagram_controller = require( '../controllers/instagram' );
var socket_controller    = require( '../controllers/socket' );
var configs              = require( '../config/app' );

var jsonParser       = bodyParser.json(),
    urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function( io ) {

  router.get('/', function( req, res ) {
    res.render( 'pages/mobile' );
  });

  router.get('/callback', function(req, res){
    instagram_controller.handshake( req, res );
  });

  router.post('/callback', jsonParser, function(req, res, next) {

    var data = req.body;

    if( data ) {
      data.forEach(function( tag ) {
        var url = 'https://api.instagram.com/v1/tags/' + tag.object_id + '/media/recent?client_id=' + configs.instagram.client_id + '&callback=JSON_CALLBACK';
        socket_controller.hasNewContents( io, url );
      });
      res.end();
    }

  });

  return router;

};
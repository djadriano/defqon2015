var configs = require( '../config/app' );

module.exports = {

  Twitter: '',

  initialize: function( twitter ) {

    this.Twitter = new twitter({
      consumer_key       : configs.twitter.consumer_key,
      consumer_secret    : configs.twitter.consumer_secret,
      access_token_key   : configs.twitter.access_token_key,
      access_token_secret: configs.twitter.access_token_secret
    });

  },

  getTweets: function( io, socket ) {
    this.Twitter.stream('statuses/filter', { track: 'hardstyle, qdance' }, function(stream) {
      stream.on('data', function(tweet) {
        console.log('hardstyle');
        console.log(tweet.id);
        console.log(tweet.user.screen_name);
        console.log(tweet.text);
      });

      stream.on('error', function(error) {
        throw error;
      });
    });
  }

};
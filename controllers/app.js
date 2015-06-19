var instagram = require( 'instagram-node-lib' );

var set_config = function() {

  instagram.set('client_id', 'efa91b4e3a4644c29a1fd787c9e35e10');
  instagram.set('client_secret', '5960dabce56047179136a4f8f2951756');
  instagram.set('callback_url', 'http://localhost:3000/callback');
  instagram.set('redirect_uri', 'http://localhost:3000/');
  instagram.set('maxSockets', 10);

};

var subscriptions = function() {

  instagram.subscriptions.subscribe({
    object      : 'tag',
    object_id   : 'lollapalooza',
    aspect      : 'media',
    callback_url: 'http://localhost:3000/callback',
    type        : 'subscription',
    id          : '#'
  });

  instagram.subscriptions.subscribe({
    object      : 'tag',
    object_id   : 'lollapalooza2013',
    aspect      : 'media',
    callback_url: 'http://YOUR_URL.com/callback',
    type        : 'subscription',
    id          : '#'
  });

  instagram.subscriptions.subscribe({
    object      : 'tag',
    object_id   : 'lolla2013',
    aspect      : 'media',
    callback_url: 'http://YOUR_URL.com/callback',
    type        : 'subscription',
    id          : '#'
  });

};

module.exports = function() {
  set_config();
  subscriptions();
};
var configs = require( '../config/app' );

module.exports = {

  Instagram: '',

  initialize: function( instagram ) {

    this.Instagram = instagram;

    this.Instagram.set('client_id'    , configs.instagram.client_id);
    this.Instagram.set('client_secret', configs.instagram.client_secret);
    this.Instagram.set('callback_url' , configs.instagram.callback_url);
    this.Instagram.set('redirect_uri' , configs.instagram.redirect_uri);
    this.Instagram.set('maxSockets'   , 10);

    this.Instagram.subscriptions.subscribe({
      object      : 'tag',
      object_id   : 'elf15',
      aspect      : 'media',
      callback_url: configs.instagram.callback_url,
      type        : 'subscription',
      id          : '#'
    });

    this.Instagram.subscriptions.subscribe({
      object      : 'tag',
      object_id   : 'qdance',
      aspect      : 'media',
      callback_url: configs.instagram.callback_url,
      type        : 'subscription',
      id          : '#'
    });

  },

  handshake: function( req, res ) {
    var handshake = this.Instagram.subscriptions.handshake( req, res );
  },

  getTags: function( io, socket ) {
    io.in( socket.id ).emit('getFeedFirstTime', { show: 'https://api.instagram.com/v1/tags/elf15/media/recent?client_id=' + configs.instagram.client_id + '&count=50&callback=JSON_CALLBACK' });
  }

};
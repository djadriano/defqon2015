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
      object_id   : 'hardisland',
      aspect      : 'media',
      callback_url: configs.instagram.callback_url,
      type        : 'subscription',
      id          : '#'
    });

    this.Instagram.subscriptions.subscribe({
      object      : 'tag',
      object_id   : 'ffhard15',
      aspect      : 'media',
      callback_url: configs.instagram.callback_url,
      type        : 'subscription',
      id          : '#'
    });

    this.Instagram.subscriptions.subscribe({
      object      : 'tag',
      object_id   : 'wishoutdoor',
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

    this.Instagram.subscriptions.subscribe({
      object      : 'tag',
      object_id   : 'hardstyle',
      aspect      : 'media',
      callback_url: configs.instagram.callback_url,
      type        : 'subscription',
      id          : '#'
    });

  },

  unsubscribe: function( id ) {
    this.Instagram.subscriptions.unsubscribe({ id: '18650191' });
  },

  handshake: function( req, res ) {
    var handshake = this.Instagram.subscriptions.handshake( req, res );
  },

  getTags: function( io, socket ) {
    io.in( socket.id ).emit('getFeedFirstTime', { show: 'https://api.instagram.com/v1/tags/hardstyle/media/recent?client_id=' + configs.instagram.client_id + '&callback=JSON_CALLBACK' });
  }

};
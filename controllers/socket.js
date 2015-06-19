var instagram_controller = require( '../controllers/instagram' );

module.exports = {
  hasNewContents: function( io, url ) {
    io.emit('hasNewContents', { show: url });
  }
};
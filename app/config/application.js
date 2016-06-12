/**
 * Application config
 */

module.exports = {
  port: 8877,
  secret: 'FogihoAleOpravduTajnyKlic',
  bodyParser: {
    onerror: function (err, ctx) {
      ctx.throw('body parse error', 422);
    }
  }
};

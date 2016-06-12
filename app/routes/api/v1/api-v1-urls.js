var router      = require('koa-router');
var apiV1Router = new router({
    prefix: '/api/v1'
});

apiV1Router.get('/', function * home(next) {
  this.body = {
    success: "ok",
    body: 'At API url'
  };
});

module.exports = apiV1Router;

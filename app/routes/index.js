var router    = require('koa-router');
var appRouter = new router();

var apiV1     = require('./api/v1/api-v1-urls');

appRouter.get('/', function * home(next) {
  this.body = 'At home';
});

appRouter.use(apiV1.routes());

module.exports = appRouter;

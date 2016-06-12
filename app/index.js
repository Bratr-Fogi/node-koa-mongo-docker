/**
 * Simple API REST full node 6 server with Koa
 *
 * Developed for fogi application
 */
'use strict';

/**
 * Set application's dependencies
 */
const koa         = require('koa');
const bodyParser  = require('koa-bodyparser');
const passport    = require('koa-passport');
const session     = require('koa-session');
const logger      = require('koa-logger');
const compress    = require('koa-compress');

const http        = require('http');
const path        = require('path');
const mongoose    = require('mongoose');

const config      = require('./config/application');
const database    = require('./config/database');
const appRouter   = require('./routes/index');

/**
 * Set and create koa server
 */
var app = koa();

// trust proxy
app.proxy = true

// set keys
app.keys = [config.secret];

app.use(logger());
app.use(bodyParser(config.bodyParser));
app.use(session(app));
app.use(passport.initialize());
app.use(passport.session());
app.use(appRouter.routes());
app.use(compress());

// MongoDB
console.log('Connecting to MongoDB...');
mongoose.connect(database.url);

app = module.exports = http.createServer(app.callback());

if (!module.parent) {
  const port = process.env.PORT || config.port || 8888;

  app.listen(port);
  console.log('Open server at http://127.0.0.1:' + port);
}

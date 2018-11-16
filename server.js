const http = require('http');
const express = require('express');
const helmet = require('helmet');
const webpack = require('webpack');
const config = require('./webpack');

const PORT = process.env.PORT || 8000;

const app = express();
const server = http.createServer(app);
const compiler = webpack(config);

app.disable('x-powered-by');
app.use(helmet.noCache());

const hmr = require('webpack-hot-middleware')(compiler);
const middleware = require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,
    index: 'index.html',
    stats: { colors: true },
});

app.use(hmr);
app.use(middleware);
app.use('*', middleware);

server.listen(PORT);

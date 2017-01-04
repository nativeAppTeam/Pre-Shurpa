'use strict';

const webpack = require('webpack');
const path = require('path');

let APP = __dirname + '/client';


module.exports = {
  context: APP,
  entry: {
    app: './app.js'
  },
  output: {
    path: APP,
    filename: 'bundle.js'
  },
  entry: {
    app: ['webpack/hot/dev-server', './app.js']
  }

};

'use strict';

let ExtractTextPlugin = require("extract-text-webpack-plugin");
let CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports =
[
  {
    entry: './src/js/components/App.js',
    output: {
      path: './public/dist',
      filename: 'bundle.js'
    },
    module: {
      preLoaders: [
        { test: /\.json$/, loader: 'json'},
      ],
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: ['react', 'es2015', 'stage-0']
          }
        }
      ]
    }
  },
  {
    entry: {
      main: './src/stylesheets/main.scss'
    },
    output: {
      path: './public/dist',
      filename: '[name].css'
    },
    module: {
        loaders: [
            { test: /\.scss$/i, loader: ExtractTextPlugin.extract(['css','sass']) },
            { test: /\.css$/i, loader: ExtractTextPlugin.extract(['css']) }
        ]
    },
    plugins: [
      new ExtractTextPlugin('[name].css'),
      new CopyWebpackPlugin([
        { from: './src/images', to: 'images'}
      ])
    ]
  }
]

var path = require('path')
var pack = require('../package.json')
var webpack = require('webpack')

var PROD = process.env.NODE_ENV === 'production';
var TEST = process.env.NODE_ENV === 'test';

module.exports = {
  entry: path.resolve('src/index.js'),
  output: {
    path: path.resolve('dist'),
    filename: 'vue-emoji-mart.js',
    library: 'VueEmojiMart',
    libraryTarget: 'umd',
  },

  externals: !TEST && [{
    'vue': {
      root: 'Vue',
      commonjs2: 'vue',
      commonjs: 'vue',
      amd: 'vue',
    },
  }],

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
          path.resolve('src'),
          path.resolve('node_modules/measure-scrollbar'),
          path.resolve('data'),
        ],
      },
      {
        test: /\.svg$/,
        loader: 'vue-svg-loader',
        include: [
          path.resolve('src/svgs'),
        ],
      },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      VUE_EMOJI_MART_VERSION: `'${pack.version}'`,
      EMOJI_DATASOURCE_VERSION: `'${pack.devDependencies['emoji-datasource']}'`,
    }),
  ],

  bail: true,
}

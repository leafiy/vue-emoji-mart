var path = require('path')
var pack = require('../package.json')
var webpack = require('webpack')

module.exports = {
  entry: path.resolve('example/index.js'),
  output: {
    filename: './example/bundle.js',
    publicPath: '/'
  },

  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
          path.resolve('src'),
          path.resolve('node_modules/measure-scrollbar'),
          path.resolve('data'),
          path.resolve('example'),
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
      EMOJI_DATASOURCE_VERSION: `'${pack.devDependencies['emoji-datasource']}'`,
    }),
  ],
}

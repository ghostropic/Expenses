const path = require('path')
const webpack = require('webpack');

module.exports = (env) => {
  const isProduction = env === 'production'

  return {
    entry: './src/app.js',
    output: {
      path: path.join(__dirname, 'public', 'dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [{
        loader: 'babel-loader',
        test: /\.js$/,
        exclude: /node_modules/
      }, {
        test: /\.s?css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }]
    },
    plugins: [
      new webpack.DefinePlugin({
        SC_DISABLE_SPEEDY: true
      })
    ],
    devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      port: 3000,
      historyApiFallback: true,
      publicPath: '/dist/'
    },
    mode: isProduction ? 'production' : 'development'
  }
}

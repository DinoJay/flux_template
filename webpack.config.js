var webpack = require('webpack');

module.exports = {
  entry: {
    home: __dirname + '/app/components/Application',
  },
  output: {
    path: '/',
    filename: '[name].bundle.js',
    // no real path is required, just pass "/"
    // but it will work with other paths too.
  },
  resolve: {
    extensions: ['', '.js', '.es6.js', '.jsx'],
    alias : {
      actions : __dirname + '/app/actions',
      constants : __dirname + '/app/constants',
      stores : __dirname + '/app/stores'
    }
  },
  module: {
    loaders: [
      {test: /\.jsx$/, loaders: ['react-hot', 'jsx-loader?harmony&insertPragma=React.DOM']},
      {test: /\.es6\.js$/, loader: '6to5-loader'},

      // compile and include less files
      {test: /\.less$/, loader: 'style-loader!css-loader!autoprefixer-loader!less-loader'},

      // allow less files to load urls pointing to font assets
      // @TODO: figure out why this is necessary and do it better
      {test: /\.(woff|ttf|eot|svg)$/, loader: 'file-loader' }
    ]
  }
};

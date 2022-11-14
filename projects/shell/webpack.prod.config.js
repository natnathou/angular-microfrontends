const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/shell/latest/'
  },
  remotes: {
    "product": "https://d2mj03xisnf2g8.cloudfront.net/product/latest/remoteEntry.js",
    "login": "https://d2mj03xisnf2g8.cloudfront.net/login/latest/remoteEntry.js",
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});

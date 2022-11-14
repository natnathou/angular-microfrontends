const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/login/latest/'
  },
  name: 'login',

  exposes: {
    './Module': './projects/login/src/app/login/login.module.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});

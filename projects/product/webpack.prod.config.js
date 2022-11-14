const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/product/latest/'
  },
  name: 'product',

  exposes: {
    './Module': './projects/product/src/app/product/product.module.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});

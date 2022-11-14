const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

const config = withModuleFederationPlugin({
  name: 'product',

  exposes: {
    './Module': './projects/product/src/app/product/product.module.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});

config.output = {
  publicPath: '/product/latest/'
}

module.exports = config;

const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

const config = withModuleFederationPlugin({
  name: 'login',

  exposes: {
    './Module': './projects/login/src/app/login/login.module.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});

config.output = {
  publicPath: '/login/latest/'
}

module.exports = config;

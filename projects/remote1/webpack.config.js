const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'remote1',

  exposes: {
    // './Component': './projects\remote1\src\app\app.component.ts',
    './Routes': './projects/remote1/src/app/app.routes.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

  sharedMappings: ['shared-ui'],

});

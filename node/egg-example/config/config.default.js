/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_';

  // add your middleware config here
  config.middleware = [];
  config.httpProxy = {
    '/cms': {
      target: 'https://cms.sashimi.cool',
      changeOrigin: true,
      pathRewrite: { '^/cms/api': '/announces' },
    },
    '/tvl': {
      target: 'https://api.deradar.com',
      changeOrigin: true,
      pathRewrite: { '^/tvl/getData': '/api/app/Snapshot/list' },
    },
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  config.io = {
    namespace: {
      // '/': {
      //   connectionMiddleware: ['auth'],
      //   packetMiddleware: ['filter'],
      // },
      '/ws': {
        connectionMiddleware: [ 'auth' ],
        packetMiddleware: [],
      },
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};

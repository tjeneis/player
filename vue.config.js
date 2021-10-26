module.exports = {
  configureWebpack: {
    devtool: 'source-map',
  },
  pluginOptions: {
    i18n: {
      locale: 'nl',
      fallbackLocale: 'nl',
      localeDir: 'locales',
      enableInSFC: true,
      enableBridge: false,
    },
  },
  publicPath: process.env.BASE_URL,
  transpileDependencies: [
    'vuetify',
  ],
};

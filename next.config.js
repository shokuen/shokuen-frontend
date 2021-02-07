module.exports = {
  webpackDevMiddleware: (config) => {
    // eslint-disable-next-line no-param-reassign
    config.watchOptions = {
      poll: true,
      ignored: /node_modules/
    };
    return config;
  }
};

const { name } = require('./package');

module.exports = {
  devServer: (_) => {
    const config = _;
    config.headers = {
      'Access-Control-Allow-Origin': '*',
    };
    config.historyApiFallback = true;
    config.hot = false;
    config.liveReload = false;
    return config;
  },
};

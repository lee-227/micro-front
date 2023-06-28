module.exports = {
  webpack: (config) => {
    config.output.library = `child-react`;
    config.output.libraryTarget = "umd";
    config.output.publicPath = 'http://localhost:4000/'
    return config;
  },
  devServer: (config) => {
    config.headers = {
      "Access-Control-Allow-Origin": "*",
    };
    return config;
  },
};

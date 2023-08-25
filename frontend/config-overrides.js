const webpack = require("webpack");

// module.exports = function override(config, env) {
//   // Create a new fallback object that includes all the needed modules
//   config.resolve.fallback = {
//     ...config.resolve.fallback,
//     "buffer": require.resolve("buffer/"),
//     "crypto": require.resolve("crypto-browserify"),
//     "util": require.resolve("util"),
//     "stream": require.resolve("stream-browserify"),
//     // If you also want to use 'readable-stream'
//     // stream: require.resolve("readable-stream"),
//   };

//   // Return the modified webpack config
//   return config;
// };

module.exports = function override(config) {
  const fallback = config.resolve.fallback || {};

  Object.assign(fallback, {
    "crypto": require.resolve("crypto-browserify"),
    "stream": require.resolve("stream-browserify"),
    "assert": require.resolve("assert"),
    "http": require.resolve("stream-http"),
    "https": require.resolve("https-browserify"),
    "os": require.resolve("os-browserify"),
    "url": require.resolve("url")
  });

  config.resolve.fallback = fallback;

  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer']
    })
  ]);

  return config;
};







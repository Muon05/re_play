const path = require('path');

module.exports = {

  resolve: {
    fallback: {
      path: require.resolve("path-browserify"),
      zlib: require.resolve("browserify-zlib"),
      querystring: require.resolve("querystring-es3"),
      crypto: require.resolve("crypto-browserify"),
      stream: require.resolve("stream-browserify"),
      http: require.resolve("stream-http"),
    }
  },
  
  node: {
    global: true,
    __filename: 'mock',
    __dirname: 'mock',
  },

};

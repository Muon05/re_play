const path = require('path');

module.exports = {
  // 기존의 웹팩 설정 옵션들...

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

  // 기존의 웹팩 설정 옵션들...
};

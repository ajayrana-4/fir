const path = require('path');

module.exports = {
  resolve: {
    fallback: {
      "stream": require.resolve("stream-browserify"),
      "url": require.resolve("url/"),
      "crypto": require.resolve("crypto-browserify"),
      "http": require.resolve("stream-http"),
      "https": require.resolve("https-browserify"),
      "assert": require.resolve("assert/")
    }
  }
}; 
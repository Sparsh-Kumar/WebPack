const path = require('path');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: 'main.js', // No need to use hashed version in case of development. This would make the process faster, otherwise it would try to calculate hash value (which I think is necessary in prod for cache bursting).
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: "images/[name][ext]", // No need to use hashed version in case of development. This would make the process faster, otherwise it would try to calculate hash value (which I think is necessary in prod for cache bursting).
  }
});

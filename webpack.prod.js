// initialize webpack-merge module for merging production and development configurations.
const { merge } = require('webpack-merge');
// initialize common/main configuration for use by production and development configuration.
const common = require('./webpack.config.js');
// set webpack mode to production mode and export module for use by other modules
export default merge(common, {
  mode: 'production',
  devtool: 'source-map',
 },
);

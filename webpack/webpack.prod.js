const { merge } = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base');

const buildWebpackConfig = merge(baseWebpackConfig, {
	// BUILD config
	mode: 'production',
	plugins: [],
});

module.exports = new Promise((resolve) => {
	resolve(buildWebpackConfig);
});

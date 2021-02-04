const path = require('path');
const fs = require('fs');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const PATHS = {
	src: path.join(__dirname, '../src'),
	dist: path.join(__dirname, '../dist'),
	assets: 'assets/',
};

const PAGES_DIR = `${PATHS.src}/views`;
const PAGES = fs
	.readdirSync(PAGES_DIR)
	.filter((fileName) => fileName.endsWith('.pug'));
const IS_DEV = process.env.NODE_ENV === 'development';

module.exports = {
	// BASE config
	externals: {
		paths: PATHS,
	},
	entry: {
		app: `${PATHS.src}/scripts/index.js`,
	},
	output: {
		filename: `${PATHS.assets}js/[name].[hash].js`,
		path: PATHS.dist,
		publicPath: '/',
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				vendor: {
					name: 'vendors',
					test: /node_modules/,
					chunks: 'all',
					enforce: true,
				},
			},
		},
	},
	module: {
		rules: [
			{
				test: /\.pug$/,
				oneOf: [
					// this applies to pug imports inside JavaScript
					{
						use: ['pug-loader'],
					},
				],
			},
			{
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: '/node_modules/',
			},
			{
				test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
				},
			},
			{
				test: /\.(png|jpg|gif|svg)$/,
				loader: 'file-loader',
				options: {
					name: '[name].[ext]',
				},
			},
			{
				test: /\.scss$/,
				use: [
					IS_DEV ? 'style-loader' : MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: { sourceMap: true },
					},
					{
						loader: 'postcss-loader',
						options: {
							sourceMap: true,
						},
					},
					{
						loader: 'sass-loader',
						options: { sourceMap: true },
					},
				],
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: { sourceMap: true },
					},
					{
						loader: 'postcss-loader',
						options: {
							sourceMap: true,
							config: { path: `./postcss.config.js` },
						},
					},
				],
			},
		],
	},
	resolve: {
		alias: {
			'~': PATHS.src,
		},
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: `${PATHS.assets}css/[name].[hash].css`,
		}),
		new CopyWebpackPlugin({
			patterns: [
				{ from: `${PATHS.src}/${PATHS.assets}img`, to: `${PATHS.assets}img` },
			],
		}),
		new ESLintPlugin(),

		...PAGES.map(
			(page) =>
				new HtmlWebpackPlugin({
					template: `${PAGES_DIR}/${page}`,
					filename: `./${page.replace(/\.pug/, '.html')}`,
				})
		),
	],
};

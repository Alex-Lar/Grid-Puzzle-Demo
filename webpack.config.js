const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
	mode: "development",

	entry: "./src/index.ts",
	output: {
		path: path.resolve(__dirname, "./dist"),
		filename: "bundle.js",
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
			inject: "body",
		}),
		new MiniCssExtractPlugin(),
	],

	module: {
		rules: [
			{
				test: /\.ts$/,
				exclude: /node_modules/,
				use: {
					loader: "ts-loader",
				},
			},
			{
				test: /\.css$/i,
				use: [
					MiniCssExtractPlugin.loader,
					"css-loader",
					"postcss-loader",
				],
			},
			{
				test: /\.html$/i,
				use: ["html-loader"],
			},
		],
	},

	devtool: "source-map",

	resolve: {
		extensions: [".ts", ".js"],
	},

	devServer: {
		static: {
			directory: "./dist",
		},
	},
};

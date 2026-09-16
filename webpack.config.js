/** @format */

const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
	entry: {
		index: "./assets/js/index.js",
		pdfjs_worker: "./node_modules/pdfjs-dist/build/pdf.worker.mjs",
	},
	mode: "development",
	watch: true,
	resolve: {
		alias: {
			"@styles": path.resolve(__dirname, "assets/scss"),
			"@imgs": path.resolve(__dirname, "assets/imgs"),
		},
	},
	module: {
		rules: [
			{
				test: /\.(sa|sc)ss$/,
				use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
			},
			{
				test: /\.(svg|png|jpg|jpeg|gif)$/i,
				type: "asset/resource",
				generator: {
					filename: "assets/imgs/link_sass/[name][ext]",
				},
			},
		],
	},

	plugins: [
		new MiniCssExtractPlugin({
			filename: "css/[name].css",
		}),
		new CopyWebpackPlugin({
			patterns: [{ from: "assets/imgs", to: "assets/imgs" }],
		}),
	],
	output: {
		path: path.resolve(__dirname, "public"),
		filename: "js/[name].bundle.min.js",
		clean: true, // Limpa a pasta de saída antes de cada build
	},
};


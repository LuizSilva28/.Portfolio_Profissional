const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
	entry: {
		index: "./src/index.js",
		pdfjs_worker: "./node_modules/pdfjs-dist/build/pdf.worker.mjs",
	},
	mode: "development",
	devtool: "inline-source-map",
	watch: true,
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, "css-loader"],
			},
			{
				test: /\.(svg|png|jpg|jpeg|gif)$/i,
				type: "asset/resource",
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "[name].css",
		}),
	],
	output: {
		path: path.resolve(__dirname, "public"),
		filename: "[name].bundle.min.js",
	},
};

/** @format */

const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	entry: {
		index: "./assets/js/index.js",
		pdfjs_worker: "./node_modules/pdfjs-dist/build/pdf.worker.mjs",
 	},
	mode: "development",
	devtool: "inline-source-map",
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
				generator: {
					filename: "images/[name][ext]",
				},
			},
		],
	},

	plugins: [
		new MiniCssExtractPlugin({
			filename: "css/[name].css",
		}),
	],
	output: {
		path: path.resolve(__dirname, "public"),

		filename: "js/[name].bundle.min.js",
		clean: true, // Limpa a pasta de saída antes de cada build
	},
	devtool: "inline-source-map", // Gera um mapa de origem para facilitar a depuração
	devServer: {
		contentBase: path.join(__dirname, "public"),
		hot: true, // Habilita o modo de atualização automática
		open: true, // Abre o navegador automaticamente
	},
};

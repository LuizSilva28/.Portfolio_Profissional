const path = require("path");

module.exports = {
	entry: {
		index: "./src/index.js",
	},
	mode: "development",
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(svg|png|jpg|jpeg|gif)$/i,
				type: "asset/resource",
			},
		],
	},
	output: {
		path: path.resolve(__dirname, "public"),
		filename: "[name].bundle.min.js",
	},
};

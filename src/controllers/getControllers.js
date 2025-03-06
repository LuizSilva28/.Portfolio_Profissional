const path = require("node:path");

const getController = {
	//GET
	indexFrellancers: (req, res) => {
		const caminho = path.resolve(__dirname, "..", "views", "index.html");
		console.log(caminho);
		return res.sendFile(
			path.resolve(__dirname, "..", "views", "index.html")
		);
	},
	//GET
	// indexConsultsRH: (req, res) => {
	// 	return res.send("hello Consultor RH");
	// },
};

module.exports = getController;

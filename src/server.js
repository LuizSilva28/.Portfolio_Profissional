const express = require("express");
const path = require("node:path");
const router = require("./routes");

const app = express();
const port = process.env.PORT || 8080;

app.use(express.static("public"));
app.use(express.static("sass"));

app.use(express.urlencoded({ extended: true }));

app.use(router);

// app.get("/", (res, req) => {
// 	res.sendFile("style.css");
// });

app.listen(port, () => {
	console.log(`Servidor rodando em http://localhost:${port}`);
});

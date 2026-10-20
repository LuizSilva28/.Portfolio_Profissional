/** @format */

import { createBtnsFormations } from "../../components/buttons/criarBnts";

let containerBtnUniversity = document.querySelector("#containerUniversity");
let containerBtnCourse = document.querySelector("#containerCouse");
let containerBtnCurriculum = document.querySelector("#containerCurriculum");

containerBtnUniversity.appendChild(
	createBtnsFormations({
		textButtom: "Grade Curricular",
		idBtn: "btnUniversity",
		action: "openModal",
		certificateURL:
			"D:\.Portfolio_Profissional\assets\.filesPdfs\Banco_de_Dados_SQL_no_NodeJs.pdf",
	}),
);

containerBtnCourse.appendChild(
	createBtnsFormations({
		textButtom: "Grade Curricular",
		idBtn: "btnCourse",
		action: "openModal",
		certificateURL:
			"D:\.Portfolio_Profissional\assets\.filesPdfs\Banco_de_Dados_SQL_no_NodeJs.pdf",
	}),
);

containerBtnCurriculum.appendChild(
	createBtnsFormations({
		textButtom: "Curriculo",
		idBtn: "btnCurriculum",
		action: "openModal",
		certificateURL:
			"D:\.Portfolio_Profissional\assets\.filesPdfs\Banco_de_Dados_SQL_no_NodeJs.pdf",
	}),
);

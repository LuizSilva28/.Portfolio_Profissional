/** @format */

import { createBtnToAssessMobile } from "../../components/buttons/criarBnts";
import { createCommentTemplete } from "../../components/commentTemplete";

const containerComments = document.querySelector("#commentArea");

let comments = [
	{
		name: "Douglas Atanael",
		rating: 4.0,
		email: "douglasatanael@gamil.com",
		comment:
			"realizou meus projetos dentro do prazo, entregou o projeto em 100% e consegui um resultado que ultrapassou minhas expectavivas!",
	},
	{
		name: "Luiz Henrique",
		rating: 3.5,
		email: "luizhenrique@gamil.com",
		comment: "Realmente esse design ficou bom!",
	},
	{
		name: "Douglas Atanael",
		rating: 4.0,
		email: "douglasatanael@gamil.com",
		comment:
			"realizou meus projetos dentro do prazo, entregou o projeto em 100% e consegui um resultado que ultrapassou minhas expectavivas!",
	},
	{
		name: "Juliana Lima",
		rating: 4.0,
		email: "julianalima@gamil.com",
		comment:
			"ótimo desenvolvedor, comprometido e responsável, sempre tirou minhas dúvidas!",
	},
	{
		name: "Douglas Atanael",
		rating: 4.0,
		email: "douglasatanael@gamil.com",
		comment:
			"realizou meus projetos dentro do prazo, entregou o projeto em 100% e consegui um resultado que ultrapassou minhas expectavivas!",
	},
	{
		name: "Juliana Lima",
		rating: 4.0,
		email: "julianalima@gamil.com",
		comment:
			"ótimo desenvolvedor, comprometido e responsável, sempre tirou minhas dúvidas!",
	},
];

const btn = createBtnToAssessMobile("avalie", containerComments);
 

comments.forEach((obj) => {
	const comment = createCommentTemplete(obj);
	containerComments.appendChild(comment);
});

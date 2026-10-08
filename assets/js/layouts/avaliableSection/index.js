/** @format */

import { StarRating } from "../../components/buttons/criarBnts";
import { validateEmail } from "../../components/validations/emailValidate";

// Resgata container da estrutura html para inserir estrelas
const avaliableSection = document.querySelector("#container-stars");

// Resgata formulário de avaliação
const feedbackForm = document.querySelector("#form-feedback");

// Cria componente com estrelas selecionaveis para avaliação
const starRating = new StarRating();
starRating.renderStars(avaliableSection, 5);

feedbackForm.addEventListener("submit", (e) => {
	e.preventDefault();
	const form = new FormData(e.target);

	const formData = Object.fromEntries(form.entries());

	validateEmail(formData.email);

	console.log(formData);
});

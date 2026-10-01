/** @format */
// APLICAR SEGUINTES MUDANÇAS:
// 1. Mudar nome da pasta para cards
// 2. Criar classe para substituir a função createCardForDetails
// 3. Associar a classe do cardDetais a classe Carousel3DVertical
// 4. A instancia de Carousel3DVertical será chamando em outro script no lugar de createAllCardsForProjects

import { Carousel3DVertical } from "../carousels/carouselVertical/script";
import { createBntForCertificate } from "./../buttons/criarBnts/index";

// const cardPrincipalProjects = document.getElementById("containerShowCase");
const elementCarousel = document.querySelector(".carousel");
// const carouselContainer = document.querySelector(".carousel-container");
const carouselButtons = document.querySelector(".carousel-container");

// const showCaseContainer = document.getElementById("container-projects");
const elementShowCase = document.getElementById("elementShowCase");
const televisionImg = document.querySelector(".televisionImg");
const title = document.querySelector(".title");
const subtitle = document.querySelector(".subtitle");
const listInfoContainer = document.querySelector(".listInfoContainer");
const button = document.querySelector(".button");

// elementShowCase.getElementsByTagName("li")
let showCaseInfos = {
	elementShowCase,
	televisionImg,
	title,
	subtitle,
	listInfoContainer,
	button,
};

export class showCase {
	constructor(container, object) {
		this.container = container;
		this.object = object;
	}

	createShowCase(object) {
		this.televisionImg = document.createElement("div");
		this.televisionImg.classList.add("televisionImg", "slide-in");
		this.televisionImg.style.backgroundImage = `url(${object.image})`;

		this.title = document.createElement("p");
		this.title.classList.add("title", "slide-in");
		this.title.innerText = `${object.title}`;

		this.subtitle = document.createElement("p");
		this.subtitle.classList.add("subtitle", "slide-in");
		this.subtitle.innerText = `${object?.subtitle}`;

		this.listInfoContainer = document.createElement("div");
		this.listInfoContainer.classList.add("listInfoContainer", "slide-in");

		object?.list?.forEach((obj) => {
			let li = document.createElement("li");
			li.classList.add("alingParagraphs");
			let spanName = document.createElement("span");
			spanName.innerText = obj.name;
			let spanValue = document.createElement("span");
			spanValue.innerText = obj.value;

			li.append(spanName, spanValue);

			this.listInfoContainer.appendChild(li);
		});

		// !substituir por método de classe que deve ser associada
		this.buttonCertificate = createBntForCertificate();

		// this.btnShowCase = document.createElement("button");
		// this.btnShowCase.classList.add("btn-showCase");
	}

	upShowCase(currentObj) {
		this.container.removeChild(this.televisionImg);
		this.container.removeChild(this.title);
		this.container.removeChild(this.subtitle);
		this.container.removeChild(this.listInfoContainer);
		this.container.removeChild(this.buttonCertificate);
		this.createShowCase(currentObj);
		this.container.append(
			this.televisionImg,
			this.title,
			this.subtitle,
			this.listInfoContainer,
			this.buttonCertificate,
		);
	}

	render() {
		this.createShowCase(this.object);
		this.container.append(
			this.televisionImg,
			this.title,
			this.subtitle,
			this.listInfoContainer,
			this.buttonCertificate,
		);
		console.log(this.container);
	}
}

export function createAllCardsForProjects(objects) {
	new Carousel3DVertical(
		elementCarousel,
		carouselButtons,
		objects,
		{ showCase: true },
		elementShowCase,
	);
}

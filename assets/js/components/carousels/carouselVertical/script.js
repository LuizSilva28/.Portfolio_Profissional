/** @format */

// CARROSSEL VERTICAL
import { showCase } from "../../projects";

let mapAngle = [60, 15, 7.5, 0, -7.5, -15, -60];

export class Carousel3DVertical {
	constructor(
		carouselContainer,
		buttonsContainer,
		arrayObjects,
		showCaseValidation,
		showCaseContainer,
	) {
		this.carouselContainer = carouselContainer;
		this.buttonsContainer = buttonsContainer;
		this.arrayObjects = arrayObjects;
		this.showCaseValidation = showCaseValidation;

		this.blockRotateX = 3;
		this.currentRotateX = [];

		// card inicial é o card com angulo 0 em mapAngle, na criação dos cards o card a receber o angulo 0 será o de index 3, esse é o card inicial;
		this.showCase =
			this.showCaseValidation.showCase == true ?
				new showCase(showCaseContainer, this.arrayObjects[3])
			:	null;

		this.init();
	}

	init() {
		if (!this.carouselContainer || !this.buttonsContainer) {
			console.error(
				"Elementos estruturais do carrossel não foram encontrados!",
			);
			return;
		}
		this.render();
	}

	updateDOM() {
		const cards = this.carouselContainer.children;
		Array.from(cards).forEach((card, index) => {
			card.style.transform = `rotateX(${mapAngle[this.currentRotateX[index]]}deg) translateZ(800px)`;
		});
	}

	toRollCarousel(direction) {
		const cardsLength = this.arrayObjects.length;

		if (direction === "bottom") {
			if (this.currentRotateX[0] >= this.blockRotateX) return;

			const menorValor = Math.min(...this.currentRotateX);
			let lastToBeMoved = this.currentRotateX.findLastIndex(
				(ele) => ele == menorValor,
			);

			this.currentRotateX.forEach((ele, index) => {
				this.currentRotateX[index] =
					ele + 1 <= mapAngle.length - 1 && index >= lastToBeMoved ?
						ele + 1
					:	ele;
			});
		} else if (direction === "top") {
			if (this.currentRotateX[cardsLength - 1] <= this.blockRotateX)
				return;

			const maiorValor = Math.max(...this.currentRotateX);
			let lastToBeMoved = this.currentRotateX.indexOf(maiorValor);

			this.currentRotateX.forEach((ele, index) => {
				this.currentRotateX[index] =
					ele - 1 >= 0 && index <= lastToBeMoved ? ele - 1 : ele;
			});
		}

		if (this.showCaseValidation.showCase) {
			const currentObj = this.showMoreInfo()
			this.showCase.upShowCase(currentObj);
		}

		this.updateDOM();
	}

	showMoreInfo() {
		let indexInitial = this.currentRotateX.indexOf(3);
		console.log(this.currentRotateX);
		console.log("index inicial:", indexInitial);
		let currentObject = this.arrayObjects[indexInitial];
		return currentObject;
	}

	createButton(container, direction) {
		const button = document.createElement("button");
		const arrowPart1 = document.createElement("div");
		arrowPart1.classList.add(`${direction}ArrowPart1`);
		const arrowPart2 = document.createElement("div");
		arrowPart2.classList.add(`${direction}ArrowPart2`);

		button.classList.add("btn", `btn-${direction}`);

		button.addEventListener("click", () => {
			this.toRollCarousel(direction);
		});

		button.append(arrowPart1, arrowPart2);
		container.appendChild(button);
	}

	createCard(object, index) {
		let indexItial =
			index <= mapAngle.length - 1 ? index : mapAngle.length - 1;

		this.currentRotateX[index] = indexItial;

		const card = document.createElement("div");

		if (indexItial === 3) card.classList.add("showMoreInfo");
		card.classList.add("face", `carousel-item-${index + 1}`);

		card.style.backgroundImage = `url(${object.image})`;
		card.style.transform = `rotateX(${mapAngle[this.currentRotateX[index]]}deg) translateZ(800px)`;

		return card;
	}

	render() {
		if (this.showCaseValidation.showCase) {
			this.showCase.render();
		}

		this.carouselContainer.innerHTML = "";

		const fragment = document.createDocumentFragment();
		this.arrayObjects.forEach((object, index) => {
			const cardElement = this.createCard(object, index);
			fragment.append(cardElement);
		});



		this.createButton(this.buttonsContainer, "bottom");
		this.createButton(this.buttonsContainer, "top");

		this.carouselContainer.appendChild(fragment);
	}
}

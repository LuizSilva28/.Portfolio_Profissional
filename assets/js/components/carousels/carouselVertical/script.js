/** @format */

// CARROSSEL VERTICAL

let mapAngle = [60, 15, 7.5, 0, -7.5, -15, -60];

export class Carousel3DVertical {
	constructor(elementCarousel, carouselButtons, arrayObjects) {
		this.elementCarousel = elementCarousel;
		this.carouselButtons = carouselButtons;
		this.arrayObjects = arrayObjects;

		this.blockRotateX = 3;
		this.currentRotateX = [];

		this.init();
	}

	init() {
		if (!this.elementCarousel || !this.carouselButtons) {
			console.error(
				"Elementos estruturais do carrossel não foram encontrados!",
			);
			return;
		}
		this.render();
	}

	createButton(container, direction) {
		const button = document.createElement("button");
		const arrowPart1 = document.createElement("div");
		arrowPart1.classList.add(`${direction}ArrowPart1`);
		const arrowPart2 = document.createElement("div");
		arrowPart2.classList.add(`${direction}ArrowPart2`);

		button.classList.add("btn", `btn-${direction}`);

		// button.innerText = `${direction}`;
		button.addEventListener("click", () => this.toRollCarousel(direction));

		button.append(arrowPart1, arrowPart2);
		container.appendChild(button);
	}

	updateDOM() {
		const cards = this.elementCarousel.children;
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

		this.updateDOM();
	}

	createCard(object, index) {
		let indexItial =
			index <= mapAngle.length - 1 ? index : mapAngle.length - 1;

		this.currentRotateX[index] = indexItial;

		const card = document.createElement("div");
		card.classList.add("face", `carousel-item-${index + 1}`);
		card.style.backgroundImage = `url(${object.image})`;

		card.style.transform = `rotateX(${mapAngle[this.currentRotateX[index]]}deg) translateZ(800px)`;

		return card;
	}

	render() {
		this.elementCarousel.innerHTML = "";

		this.createButton(this.carouselButtons, "top");
		this.createButton(this.carouselButtons, "bottom");

		const fragment = document.createDocumentFragment();

		this.arrayObjects.forEach((object, index) => {
			const cardElement = this.createCard(object, index);
			fragment.append(cardElement);
		});
		this.elementCarousel.appendChild(fragment);
	}
}

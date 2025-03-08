const containerCarousel = document.querySelector("#container-carousel");

export function createButtonBack() {
	const buttonBack = document.createElement("button");
	buttonBack.classList.add("bntCarousel");
	buttonBack.setAttribute("data-slide", "nav-previous-button");

	const arrowPart1 = document.createElement("div");
	arrowPart1.classList.add("backArrowPart1");

	const arrowPart2 = document.createElement("div");
	arrowPart2.classList.add("backArrowPart2");

	buttonBack.appendChild(arrowPart1);
	buttonBack.appendChild(arrowPart2);
	containerCarousel.appendChild(buttonBack);
}

export function createButtonNext() {
	const buttonNext = document.createElement("button");
	buttonNext.classList.add("bntCarousel");
	buttonNext.setAttribute("data-slide", "nav-next-button");

    const arrowPart1 = document.createElement("div");
	arrowPart1.classList.add("nextArrowPart1");

	const arrowPart2 = document.createElement("div");
	arrowPart2.classList.add("nextArrowPart2");

	buttonNext.appendChild(arrowPart1);
	buttonNext.appendChild(arrowPart2);
	containerCarousel.appendChild(buttonNext);
}

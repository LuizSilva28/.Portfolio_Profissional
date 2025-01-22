import { criarButtonNext } from "../buttons/script.js";

export function criarSlidesItems() {
	const containerItems = document.querySelector('[data-slide="list"]');
	const createItem = (index) => {
		const item = document.createElement("div");
		item.setAttribute("data-slide", "item");
		item.classList.add(`item${index}`);
		return item;
	};

	for (let i = 0; i <= 4; i++) {
		containerItems.appendChild(createItem(i));
	}

	criarEventsSlidesItems();
}

export function criarEventsSlidesItems() {
	const slideWrapper = document.querySelector('[data-slide="wrapper"]');
	const slideList = document.querySelector('[data-slide="list"]');
	const slideItems = document.querySelectorAll('[data-slide="item"]');
	// const buttomPrevious = document.querySelector(
	// 	'[data-slide="nav-previous-button"]'
	// );
	// const buttomNext = document.querySelector('[data-slide="nav-next-button"]');

	const state = {
		startPoint: 0,
		savedPosition: 0,
		currentPoint: 0,
		movement: 0,
		currentSlideIndex: 0,
	};

	function translateSlide({ position }) {
		state.savedPosition = position;
		slideList.style.transform = `translateX(${position}px)`;
	}
	function setVisibleSlide({ index, animate }) {
		const slideItem = slideItems[index];
		const slideWidth = slideItem.clientWidth;
		const computedStyle = getComputedStyle(slideItem);
		const slideMargin = parseFloat(computedStyle.marginLeft);
		const slideTotalSizeWidth = slideWidth + slideMargin;
		const position = index * slideTotalSizeWidth;
		state.currentSlideIndex = index;
		slideList.style.transition =
			animate === true ? "transform .5s" : "none";
		translateSlide({ position: -position });
	}

	function newSetVisibleSlide({ index, animate }) {
		console.log("ok");
		const position = state.savedPosition - state.movement;
		console.log(
			"posição salva: ",
			state.savedPosition,
			" - ",
			"movimento feito: ",
			state.movement,
			" = ",
			position
		);

		slideList.style.transition =
			animate === true ? "transform .5s" : "none";
		translateSlide({ position: position });
	}

	function nextSlide() {
		setVisibleSlide({ index: state.currentSlideIndex + 1, animate: true });
		console.log(state.savedPosition);
		console.log(state.savedPosition === 102.64);
	}
	function previousSlide() {
		console.log("previous");
		setVisibleSlide({
			index: state.currentSlideIndex - 1,
			animate: true,
		});
	}

	function onMouseDown(event, index) {
		const slideItem = event.currentTarget;
		state.startPoint = event.clientX;
		console.log("ponto inicial = ", state.startPoint);
		console.log("..................");
		console.log("posição salva = ", state.savedPosition);
		console.log("..................");

		state.currentPoint = state.startPoint - state.savedPosition;
		console.log("posição atual = ", state.currentPoint);
		state.currentSlideIndex = index;
		console.log("Slide Item atual = ", index);
		slideList.style.transition = "none";

		slideItem.addEventListener("mousemove", onMouseMove);
	}

	function onMouseMove(event) {
		state.movement = event.clientX - state.startPoint;
		console.log("movimento realizado = ", state.movement);
		const position = event.clientX - state.currentPoint;
		console.log("Posição = ", position);

		translateSlide({ position: position });
		state.savedPosition = position;
	}
	function onMouseUp(event) {
		const slideItem = event.currentTarget;
		console.log("teste-1");
		if (state.movement < -20) {
			nextSlide();
		} else if (state.movement > 20) {
			previousSlide();
		} else {
			console.log("OK");
			newSetVisibleSlide({
				index: state.currentSlideIndex,
				animate: true,
			});
		}
		console.log("position saved: ", state.savedPosition);
		slideItem.removeEventListener("mousemove", onMouseMove);
	}

	slideItems.forEach(function (slideItem, index) {
		slideItem.addEventListener("dragstart", function (event) {
			event.preventDefault();
		});
		slideItem.addEventListener("mousedown", function (event) {
			onMouseDown(event, index);
			console.log("OK");

			slideItem.addEventListener("mouseup", onMouseUp);
		});

	});

	const buttonNext = document.querySelector('[data-slide="nav-next-button"]');
	buttonNext.addEventListener("click", nextSlide);

	const buttonPrevious = document.querySelector(
		'[data-slide="nav-previous-button"]'
	);
	buttonPrevious.addEventListener("click", previousSlide);

	// Para o carrossel se tornar infinito, pegar cada slide item ds slideList, e ficar de olho neles toda vez que sua posiçao for alterada, assim posso impor uma condição para que quando um slideItem chegar a uma determinada posição seja positiva ou negativa eu use esta compraração para setar uma nova posição para este slideItem
}

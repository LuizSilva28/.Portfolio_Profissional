import { criarButtonNext } from "../buttons/script.js";

export function criarSlidesItems(container, itemFor) {
	container.style.transform = `translateX(-205.28px)`;

	const createItem = (index) => {
		const item = document.createElement("div");
		item.setAttribute("data-slide", "item");
		item.classList.add(`${itemFor}-${index}`);
		return item;
	};

	for (let i = 0; i <= 4; i++) {
		container.appendChild(createItem(i));
	}

	criarEventsSlidesItems();
}
export function criarEventsSlidesItems() {
	const slideWrapper = document.querySelector('[data-slide="wrapper"]');
	const slideList = document.querySelector('[data-slide="list"]');
	const replicaSlideList = document.querySelector(
		'[data-slide="listReplica"]'
	);
	const slideItems = document.querySelectorAll('[data-slide="item"]');

	const state = {
		referencePoint: -205.28,
		startPoint: 0,
		savedPosition: -205.28,
		currentPoint: 0,
		movement: 0,
		currentSlideIndex: 1,
	};
	const replicaState = {
		replicaReferencePoint: -205.28,
		replicaStartPoint: 1,
		replicaCurrentPoint: 0,
		replicaMovement: 0,
		replicaCurrentSlideIndex: 1,
		replicaSavedPosition: -205.28,
	};

	function translateSlide({ position }) {
		if (state.savedPosition !== position) {
			state.savedPosition = position;
			slideList.style.transform = `translateX(${position}px)`;
		}
	}
	function translateSlideReplica({ replicaPosition }) {
		if (replicaState.replicaSavedPosition !== replicaPosition) {
			replicaState.replicaSavedPosition = replicaPosition;
			replicaSlideList.style.transform = `translateX(${replicaPosition}px)`;
		}
	}
	function setVisibleSlide(
		{ boolean, animate },
		{ replicaBoolean, replicaAnimate }
	) {
		const slideItem = slideItems[1];
		const slideWidth = slideItem.clientWidth;
		const computedStyle = getComputedStyle(slideItem);
		const slideMargin = parseFloat(computedStyle.marginLeft);

		if (boolean === true) {
			const slideTotalSizeWidth = -(slideWidth + slideMargin);

			let position = state.savedPosition + slideTotalSizeWidth;

			console.log("teste");
			console.log("position = ", position);
			console.log("teste");

			if (position < -615.84) {
				console.log("validando movimento direita");
				position = 307.92;
				animate = false;
			}
			slideList.style.transition =
				animate === true ? "transform .5s" : "none";
			translateSlide({ position });
		} else {
			const slideTotalSizeWidth = slideWidth + slideMargin;

			let position = state.savedPosition + slideTotalSizeWidth;
			if (position > 410.56) {
				console.log("validando movimento direita");
				position = -513.2;
				animate = false;
			}
			slideList.style.transition =
				animate === true ? "transform .5s" : "none";
			translateSlide({ position: position });
		}

		if (replicaBoolean === true) {
			const slideTotalSizeWidth = -(slideWidth + slideMargin);
			let replicaPosition =
				replicaState.replicaSavedPosition + slideTotalSizeWidth;

			if (replicaPosition < -1129) {
				console.log("validando movimento direita");
				replicaPosition = -102.64;
				replicaAnimate = false;
			}

			replicaSlideList.style.transition =
				replicaAnimate === true ? "transform .5s" : "none";
			translateSlideReplica({ replicaPosition });
		} else {
			const slideTotalSizeWidth = slideWidth + slideMargin;
			let replicaPosition =
				replicaState.replicaSavedPosition + slideTotalSizeWidth;

			if (replicaPosition > -102.64) {
				replicaPosition = -1026.4;
				replicaAnimate = false;
			}
			replicaSlideList.style.transition =
				replicaAnimate === true ? "transform .5s" : "none";
			translateSlideReplica({ replicaPosition });
		}
	}

	function newSetVisibleSlide({ index, animate }) {
		const position = state.savedPosition - state.movement;
		const replicaPosition =
			replicaState.savedPositionReplica - replicaState.replicaMovement;

		slideList.style.transition =
			animate === true ? "transform .5s" : "none";
		translateSlide({ position: position });

		replicaSlideList.style.transition =
			animate === true ? "transform .5s" : "none";
		translateSlide(replicaPosition);
	}
	function nextSlide() {
		console.log("\nPróximo\n");
		setVisibleSlide(
			{ boolean: true, animate: true },
			{ replicaBoolean: true, replicaAnimate: true }
		);
	}
	function previousSlide() {
		console.log("previous");
		setVisibleSlide(
			{ boolean: false, animate: true },
			{ replicaBoolean: false, replicaAnimate: true }
		);
	}

	// function onMouseDown(event) {
	// 	const slideItem = event.currentTarget;
	// 	state.startPoint = event.clientX;
	// 	console.log("ponto inicial: ", state.startPoint);

	// 	slideList.style.transition = "none";

	// 	replicaState.replicaStartPoint = event.clientX;

	// 	slideItem.addEventListener("mousemove", onMouseMove);
	// }

	// function onMouseMove(event) {
	// 	state.movement = event.clientX - state.startPoint;
	// 	console.log(
	// 		"event.clientX ",
	// 		event.clientX,
	// 		"  - Posição inicial: ",
	// 		state.startPoint,
	// 		"= Movimento feito: ",
	// 		state.movement
	// 	);

	// 	state.currentPoint = state.movement + state.savedPosition;
	// 	console.log(
	// 		"movimento feito ",
	// 		state.movement,
	// 		"  - Posição salva: ",
	// 		state.savedPosition,
	// 		"= ponto atual: ",
	// 		state.currentPoint
	// 	);

	// 	const position = state.currentPoint;
	// 	console.log("\n------------------\n");

	// 	translateSlide({ position: position });

	// 	replicaState.replicaMovement =
	// 		event.clientX - replicaState.replicaStartPoint;
	// 	console.log("\n------------------\n");

	// 	console.log(
	// 		"event.clientX ",
	// 		event.clientX,
	// 		"  - Posição inicial da replica: ",
	// 		replicaState.replicaStartPoint,
	// 		"= movimento da replica: ",
	// 		replicaState.replicaMovement
	// 	);

	// 	replicaState.replicaCurrentPoint =
	// 		replicaState.replicaMovement - replicaState.replicaSavedPosition;

	// 	const replicaPosition = replicaState.replicaCurrentPoint;

	// 	console.log("\n------------------\n");

	// 	console.log(
	// 		"movimento feito pela replica",
	// 		replicaState.replicaMovement,
	// 		"  - Posição salva da replica : ",
	// 		replicaState.replicaSavedPosition,
	// 		"= posição da replica: ",
	// 		replicaPosition
	// 	);

	// 	translateSlideReplica({ replicaPosition: replicaPosition });

	// 	console.log("final");
	// }

	// function onMouseUp(event) {
	// 	const slideItem = event.currentTarget;
	// 	console.log("\n position saved", state.savedPosition);
	// 	if (state.movement < -20 && replicaState.replicaMovement < -20) {
	// 		nextSlide();
	// 	} else if (state.movement > 20 && replicaState.replicaMovement > 20) {
	// 		previousSlide();
	// 	} else {
	// 		newSetVisibleSlide(
	// 			{
	// 				index: state.currentSlideIndex,
	// 				animate: true,
	// 			},
	// 			{
	// 				replicaIndex: replicaState.replicaCurrentSlideIndex,
	// 				replicaAnimate: true,
	// 			}
	// 		);
	// 	}
	// 	slideItem.removeEventListener("mousemove", onMouseMove);
	// }

	// slideItems.forEach(function (slideItem) {
	// 	slideItem.addEventListener("dragstart", function (event) {
	// 		console.log("teste");
	// 		event.preventDefault();
	// 	});

	// 	//slideItem.addEventListener("mousedown", onMouseDown);

	// 	slideItem.addEventListener("mouseup", onMouseUp);
	// });

	const buttonNext = document.querySelector('[data-slide="nav-next-button"]');
	buttonNext.addEventListener("click", nextSlide);

	const buttonPrevious = document.querySelector(
		'[data-slide="nav-previous-button"]'
	);
	buttonPrevious.addEventListener("click", previousSlide);

	// Para o carrossel se tornar infinito, pegar cada slide item ds slideList, e ficar de olho neles toda vez que sua posiçao for alterada, assim posso impor uma condição para que quando um slideItem chegar a uma determinada posição seja positiva ou negativa eu use esta compraração para setar uma nova posição para este slideItem
}

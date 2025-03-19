import { createButtonNext } from "../buttons/script.js";

export function createSlidesItems(container, itemFor) {
	container.style.transform = `translateX(-205.28px)`;
	container.setAttribute("draggable", "true");
	const createItem = (index) => {
		const item = document.createElement("div");
		item.setAttribute("data-slide", "item");
		item.classList.add(`${itemFor}-${index}`);
		return item;
	};

	for (let i = 0; i <= 4; i++) {
		container.appendChild(createItem(i));
	}

	createEventsSlidesItems();
}
function createEventsSlidesItems() {
	const slideWrapper = document.querySelector('[data-slide="wrapper"]');
	const slideList = document.querySelector('[data-slide="list"]');
	const slideItems = document.querySelectorAll('[data-slide="item"]');
	const replicaSlideList = document.querySelector(
		'[data-slide="listReplica"]'
	);
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
	function translateSlide({ position: position }) {
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
		{ whoMoved: whoMoved },
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
			if (whoMoved === "draggedMouse") {
				position =
					state.savedPosition +
					(slideTotalSizeWidth - state.movement);
			}
			if (position < -615.84) {
				console.log("teste 1: ", position);
				position = 307.92;
				console.log("teste 2: ", position);

				console.log("teste 3: ", position);
				animate = false;
			}
			slideList.style.transition =
				animate === true ? "transform .5s" : "none";
			translateSlide({ position: position });
		} else {
			console.log("position salvo: ", state.savedPosition);
			const slideTotalSizeWidth = slideWidth + slideMargin;
			let position = state.savedPosition + slideTotalSizeWidth;
			console.log("position: ", position);
			if (whoMoved === "draggedMouse") {
				position =
					state.savedPosition +
					(slideTotalSizeWidth - state.movement);
			}
			if (position > 410.56) {
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
			if (whoMoved === "draggedMouse") {
				replicaPosition =
					replicaState.replicaSavedPosition +
					(slideTotalSizeWidth - replicaState.replicaMovement);
			}
			if (replicaPosition < -1129) {
				replicaPosition = -102.64;
				replicaAnimate = false;
			}
			replicaSlideList.style.transition =
				replicaAnimate === true ? "transform .5s" : "none";
			translateSlideReplica({
				whoMoved: whoMoved,
				replicaPosition: replicaPosition,
			});
		} else {
			const slideTotalSizeWidth = slideWidth + slideMargin;
			let replicaPosition =
				replicaState.replicaSavedPosition + slideTotalSizeWidth;
			if (whoMoved === "draggedMouse") {
				replicaPosition =
					replicaState.replicaSavedPosition +
					(slideTotalSizeWidth - replicaState.replicaMovement);
			}
			if (replicaPosition > -102.64) {
				replicaPosition = -1026.4;
				replicaAnimate = false;
			}
			replicaSlideList.style.transition =
				replicaAnimate === true ? "transform .5s" : "none";
			translateSlideReplica({
				replicaPosition: replicaPosition,
			});
		}
	}
	function newSetVisibleSlide({ animate }) {
		const position = state.savedPosition - state.movement;
		slideList.style.transition =
			animate === true ? "transform .5s" : "none";
		translateSlide({ position: position });

		const replicaPosition =
			replicaState.replicaSavedPosition - replicaState.replicaMovement;
		replicaSlideList.style.transition =
			animate === true ? "transform .5s" : "none";
		translateSlideReplica({ replicaPosition: replicaPosition });
	}
	function nextSlide(whoMoved) {
		setVisibleSlide(
			{ whoMoved: whoMoved },
			{ boolean: true, animate: true },
			{ replicaBoolean: true, replicaAnimate: true }
		);
	}
	function previousSlide(whoMoved) {
		setVisibleSlide(
			{ whoMoved: whoMoved },
			{ boolean: false, animate: true },
			{ replicaBoolean: false, replicaAnimate: true }
		);
	}
	function onMouseDown(event) {
		event.preventDefault();
		replicaSlideList.style.transition = "transform .0s";
		slideList.style.transition = "transform .0s";
		state.startPoint = event.clientX;
		state.currentPoint = state.savedPosition;
		slideList.addEventListener("mousemove", onMouseMove);
		slideList.addEventListener("mouseup", onMouseUp);

		replicaState.replicaStartPoint = event.clientX;
		replicaState.replicaCurrentPoint = replicaState.replicaSavedPosition;

		replicaSlideList.addEventListener("mousemove", onMouseMove);
		replicaSlideList.addEventListener("mouseup", onMouseUp);
	}
	function onMouseMove(event) {
		event.preventDefault();
		console.log(state.movement, " e ", replicaState.replicaMovement);

		state.movement = event.clientX - state.startPoint;
		let position = state.currentPoint + state.movement;
		translateSlide({ position: position });

		replicaState.replicaMovement =
			event.clientX - replicaState.replicaStartPoint;
		let replicaPosition =
			replicaState.replicaCurrentPoint + replicaState.replicaMovement;
		translateSlideReplica({ replicaPosition: replicaPosition });
	}
	function onMouseUp(event) {
		event.preventDefault();

		if (state.movement < -20 && replicaState.replicaMovement < -20) {
			nextSlide("draggedMouse");
		} else if (state.movement > 20 && replicaState.replicaMovement > 20) {
			previousSlide("draggedMouse");
		} else {
			newSetVisibleSlide({
				animate: true,
			});
		}
		slideList.removeEventListener("mousemove", onMouseMove);
		slideList.removeEventListener("mouseout", onMouseUp);
		replicaSlideList.removeEventListener("mousemove", onMouseMove);
		replicaSlideList.removeEventListener("mouseout", onMouseUp);
	}
	slideList.addEventListener("dragstart", (event) => {
		event.preventDefault;
		slideList.addEventListener("mousedown", onMouseDown);
		slideList.addEventListener("mouseout", onMouseUp);
		replicaSlideList.addEventListener("mousedown", onMouseDown);
		replicaSlideList.addEventListener("mouseout", onMouseUp);
	});

	const buttonNext = document.querySelector('[data-slide="nav-next-button"]');
	buttonNext.addEventListener("click", nextSlide);
	
	const buttonPrevious = document.querySelector(
		'[data-slide="nav-previous-button"]'
	);
	buttonPrevious.addEventListener("click", previousSlide);
}

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
	const buttomPrevious = document.querySelector(
		'[data-slide="nav-previous-button"]'
	);
	const buttomNext = document.querySelector('[data-slide="nav-next-button"]');

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
		slideList.style.transition = animate === true ? "transform .5s" : "none";
		translateSlide({ position: -position });
	}

	function nextSlide() {
		setVisibleSlide({ index: state.currentSlideIndex + 1, animate : true});
	}
	function previousSlide() {
		setVisibleSlide({ index: state.currentSlideIndex - 1, animate: true });
	}

	function onMouseDown(event, index) {
		const slideItem = event.currentTarget;
		state.startPoint = event.clientX;
		state.currentPoint = state.startPoint - state.savedPosition;
		state.currentSlideIndex = index;
		slideList.style.transition = "none";
		slideItem.addEventListener("mousemove", onMouseMove);
	}

	function onMouseMove(event) {
		state.movement = event.clientX - state.startPoint;
		const position = event.clientX - state.currentPoint;
		translateSlide({ position: position });
		state.savedPosition = position;
	}

	function onMouseUp(event) {
		const slideItem = event.currentTarget;

		if (state.movement < -20) {
			nextSlide();
		} else if (state.movement > 20) {
			previousSlide();
		} else {
			setVisibleSlide({ index: state.currentSlideIndex, animate: true });
		}

		slideItem.removeEventListener("mousemove", onMouseMove);
	}

	function onSlideListTransitionEnd (){
		if (state.currentSlideIndex === slideItems.length - 2) {
			setVisibleSlide({ index: 0, animate: false });
		} 

	}

	slideItems.forEach(function (slideItem, index) {
		slideItem.addEventListener("dragstart", function (event) {
			event.preventDefault();
		});
		slideItem.addEventListener("mousedown", function (event) {
			onMouseDown(event, index);
		});
		slideItem.addEventListener("mouseup", onMouseUp);
		slideList.addEventListener("transitionend", onSlideListTransitionEnd);
	});

	const buttonNext = document.querySelector('[data-slide="nav-next-button"]');
	buttonNext.addEventListener("click", nextSlide);

	const buttonPrevious = document.querySelector(
		'[data-slide="nav-previous-button"]'
	);
	buttonPrevious.addEventListener("click", previousSlide);
}

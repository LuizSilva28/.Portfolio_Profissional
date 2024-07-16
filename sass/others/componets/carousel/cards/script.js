export function criarEventsSlidesItems() {
	const slideWrapper = document.querySelector('[data-slide="wrapper"]');
	const slideList = document.querySelector('[data-slide="list"]');
	const slideItems = document.querySelectorAll('[data-slide="item"]');

	const state = {
		startPoint: 0,
		savedPosition: 0,
		currentPoint: 0,
		moviment: 0,
		currentSlideIndex: 0,
	};

	function onMouseDown(event, index) {
		const slideItem = event.currentTarget;
		state.startPoint = event.clientX;
		state.currentPoint = state.startPoint - state.savedPosition; // usar console.log para entender melhor
		state.currentSlideIndex = index;
		slideItem.addEventListener("mousemove", onMouseMove);
	}

	function onMouseMove(event) {
		// moviment = pixel do mousemove - pontoInicial, (emquanto o botão estiver pressiondado o valor de pixel mousemove será atualizado, porém quando soltar o último valor registrado  será subtraido pelo ponto inicial, que é o pixel onde o cursor se localizava quando o botão foi clicado), obs: os pixels do mousemove e startPointer é referente a tela e não ao elemento

		state.moviment = event.clientX - state.startPoint;

		console.log('pixel do mousemove', event.clientX, ' - ', 'ponto de partida', state.startPoint, ' = ', state.moviment)

		const position = event.clientX - state.currentPoint;
		slideList.style.transform = "translateX(" + position + "px)";
		state.savedPosition = position;
	}

	function onMouseUp(event) {
		const slideItem = event.currentTarget;
		const slideWidth = slideItem.clientWidth;
		console.log(slideWidth);
		if (state.moviment < -20) {
			const position = (state.currentSlideIndex + 1) * slideWidth;
			slideList.style.transform = "translateX(" + (-position) + "px)";
		}

		slideItem.removeEventListener("mousemove", onMouseMove);
	}
	console.log(slideItems);

	slideItems.forEach(function (slideItem, index) {
		slideItem.addEventListener("dragstart", function (event) {
			event.preventDefault();
		});
		slideItem.addEventListener("mousedown", function (event) {
			onMouseDown(event, index);
		});
		slideItem.addEventListener("mouseup", onMouseUp);
	});
}

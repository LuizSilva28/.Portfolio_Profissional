export function criarEventsSlidesItems() {
	const slideWrapper = document.querySelector('[data-slide="wrapper"]');
	const slideList = document.querySelector('[data-slide="list"]');
	const slideItems = document.querySelectorAll('[data-slide="item"]');

	let startPoint = 0,
		savedPosition = 0,
		currentPoint = 0;

	function onMouseDown(event) {
		const slideItem = event.currentTarget;
		startPoint = event.clientX;
		currentPoint = startPoint - savedPosition; // usar console.log para entender melhor
		slideItem.addEventListener("mousemove", onMouseMove);
		console.log("pixel do mouseDown: ", startPoint);
	}

	function onMouseMove(event) {
		const moviment = event.clientX - startPoint; // moviment = pixel do mousemove - pontoInicial, (emquanto o botão estiver pressiondado o valor de pixel mousemove será atualizado, porém quando soltar o último valor registrado  será subtraido pelo ponto inicial, que é o pixel onde o cursor se localizava quando o botão foi clicado), obs: os pixels do mousemove e startPointer é referente a tela e não ao elemento 
		const position = event.clientX - currentPoint;
		console.log(
			"pixel do mausemove ",
			event.clientX,
			"-",
			"ponto de partida",
			startPoint,
			" = ",
			moviment, 
		);
		slideList.style.transform = "translateX(" + position + "px)";
		savedPosition = position;
	}

	function onMouseUp(event) {
		const slideItem = event.currentTarget;
		console.log("soltei o botão do mouse");
		slideItem.removeEventListener("mousemove", onMouseMove);
	}
	console.log(slideItems);

	slideItems.forEach(function (slideItem, index) {
		slideItem.addEventListener("dragstart", function (event) {
			event.preventDefault();
		});
		slideItem.addEventListener("mousedown", onMouseDown);
		slideItem.addEventListener("mouseup", onMouseUp);
	});
}

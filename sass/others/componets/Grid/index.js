import {createBntCertificate} from "../buttons/criarBnts/index.js";

export function createGridSkills(object) {
	let i = 0;
	const containerSkills = document.querySelector(
		'[data-gridSkills="gridSkills"]'
	);
	const containerGrid = document.createElement("div");
	containerGrid.setAttribute("data-areaskills","containerGrid");
	containerGrid.id = "container-skills";
	containerSkills.appendChild(containerGrid);

	function createBackgroundAnimated(object) {
		const backgroundAnimated = document.createElement("div");
		backgroundAnimated.classList.add("backgroundAnimated");
		backgroundAnimated.classList.add(`item-${object.id}`);
		containerGrid.appendChild(backgroundAnimated);

		/*
		
		TAREFAS: 	

		1. Criar um fundo animado que iniciara no card 1, e ao se moverá para o card em que o cursor estiver em cima.
		2. Criar um efeito de transição que o fundo se moverá gradualmente para o card em que o cursor estiver em cima.

		*/

		/*
		
		SOLUÇÕES:
		1. criar um elemento que estará localizado no mesmo local do card um, e com o z-index ele ficará por traz do card;
		function createBackgroundAnimated (){
			const backgroundAnimated = document.createElement("div");
			backgroundAnimated.classList.add("backgroundAnimated");
			backgroundAnimated.classList.add(`item-1`);
			
		}

		2. Este elemento tem que se mover pelos cards de acordo com a localização do cursor, ex: se o curso entrar no card 5 o elemento se moverá em direção ao mesmo;
			devo setar uma localização inicial para o elemento backgroundAnimated;
			function moveBackgroundAnimated (object) {
				if (saveClass !== null){
				    backgroundAnimated.classList.remove(saveClass);
				}
				backgroundAnimated.classList.add(`item-${object.id}`);
				saveClass = `item-${object.id`
			}
			devo capturar a localização e o ID do elemento miniCard ao entrar com o cursor em sua area, e usar estar informações para setar uma nova localização para o elemento backgroundAnimated por parametro;
		{
		    
			backgroundAnimated.classList.add(``); 
		}


		*/
	}

	function createMiniCard(object) {
		

		const miniCard = document.createElement("div");
		miniCard.classList.add("miniCard");
		miniCard.dataset.minicard = "miniCard";
		miniCard.classList.add(`item-${object.id}`);

		miniCard.style.backgroundImage = `url('${object.image}')`;
		containerGrid.appendChild(miniCard);
		object.id === 1 ? miniCard.classList.add("selected") : "";

		//console.log(object.image);

		miniCard.addEventListener("click", function () {
			const elementsMiniCard = document.querySelectorAll(
				'[data-minicard = "miniCard"]'
			);
			elementsMiniCard.forEach((element) => {
				element.classList.remove("selected");
			});
			miniCard.classList.add("selected");
			deleteCardPrevious();
			console.log("removi card anterior");
			createCardForDetails(object);
			console.log(object);
		});
		
	}

	//depurar esta função
	function createCardForDetails(object) {
		const cardDetails = document.createElement("div");
		cardDetails.classList.add("cardDetails");
		cardDetails.setAttribute("data-gridSkills", "cardDetails");

		const imgOfCard = document.createElement("div");
		imgOfCard.classList.add("imgOfCard");
		imgOfCard.style.backgroundImage = `url('${object.image}')`;

		const titleOfCard = document.createElement("h6");
		titleOfCard.classList.add("title");
		titleOfCard.textContent = `${object.title}`;

		const description = document.createElement("p");
		description.textContent = "Descrição";
		description.classList.add("description");

		const descriptionsOfCard = document.createElement("div");
		descriptionsOfCard.classList.add("descriptionsOfCard");

		const xp = document.createElement("p");
		xp.textContent = `${object.description.xp}`;

		const skillLevel = document.createElement("p");
		skillLevel.textContent = `${object.description.skillLevel}`;

		const projects = document.createElement("p");
		projects.textContent = `${object.description.projects}`;


		descriptionsOfCard.appendChild(xp);
		descriptionsOfCard.appendChild(skillLevel);
		descriptionsOfCard.appendChild(projects);

		cardDetails.appendChild(imgOfCard);
		cardDetails.appendChild(titleOfCard);
		cardDetails.appendChild(description);
		cardDetails.appendChild(descriptionsOfCard);

		containerGrid.appendChild(cardDetails);

		createBntCertificate(object.certificate);

	}

	function deleteCardPrevious() {
		let cardDetails = document.querySelector(
			'[data-gridskills="cardDetails"]'
		);
		cardDetails.parentNode.removeChild(cardDetails);
	}
	

	const activeSkills = document.querySelector(".activeSkills");
	console.log(activeSkills);

	object.forEach((object) => {
		createMiniCard(object);
	});
	createCardForDetails(object[0]);

	
}

export function createModalCertificate(certificateURL) {
	const containerSkills = document.querySelector(
		'[data-gridSkills="gridSkills"]'
	);
	const modal = document.createElement("div");
	modal.classList.add("modalCertificate");
	modal.setAttribute("data-areaskills", "modal");

	//iframe

	let iframePDF = document.createElement("iframe");
	iframePDF.setAttribute("src", certificateURL);
	iframePDF.classList.add("pdfContainer");

	//modal.style.backgroundImage = `url("${image}")`;
	//Button
	const bntCloseModal = document.createElement("button");
	bntCloseModal.textContent = "X";
	bntCloseModal.classList.add("bntCloseModal");
	modal.appendChild(bntCloseModal);
	bntCloseModal.addEventListener("click", () => {
		modal.parentNode.removeChild(modal);
	});
	modal.appendChild(iframePDF);
	containerSkills.appendChild(modal);
}
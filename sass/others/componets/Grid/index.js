import { createBntCertificate } from "../buttons/criarBnts/index.js";

export function createGridSkills(object) {
	let i = 0;
	const containerSkills = document.querySelector(
		'[data-gridSkills="gridSkills"]'
	);
	const containerGrid = document.createElement("div");
	containerGrid.setAttribute("data-areaskills", "containerGrid");
	containerGrid.id = "container-skills";
	containerSkills.appendChild(containerGrid);

	function createBackgroundAnimated() {
		const cardInitial = document.querySelector(".item-1");
		const locationInitial = cardInitial.getBoundingClientRect();
		const backgroundAnimated = document.createElement("div");
		backgroundAnimated.classList.add("backgroundAnimated");
		containerGrid.appendChild(backgroundAnimated);

		const elementAnimated = document.querySelector(".backgroundAnimated");
		elementAnimated.style.width = `${locationInitial.width + 8}px`;
		elementAnimated.style.height = `${locationInitial.height + 8}px`;

		elementAnimated.style.transform = `translate(${locationInitial.x - 30}px, ${locationInitial.y - 170}px)`;
	}

	function moveBackgroundAnimated(newLocation) {
		console.log(newLocation);
		const elementAnimated = document.querySelector(".backgroundAnimated");
		elementAnimated.style.transform = `translate(${newLocation.x - 30}px, ${
			newLocation.y - 170
		}px)`;
	}

	function myPosition(objectId) {
		const element = document.querySelector(`.item-${objectId}`);
		const myLocation = element.getBoundingClientRect();
		return myLocation;
	}

	/*
		2. Este elemento tem que se mover pelos cards de acordo com a localização do cursor, ex: se o curso entrar no card 5 o elemento se moverá em direção ao mesmo;
			devo setar uma localização inicial para o elemento backgroundAnimated;*/
	/*
	function moveBackgroundAnimated(objectID) {
		
		let saveClassAtual, classPrevious;

		saveClassAtual = objectID;
		createBackgroundAnimated(objectID);

		classPrevious = saveClassAtual;
		classPrevious !== 0 ? removeBackgroundAnimated(classPrevious) : "";
	}*/

	/*
			devo capturar a localização e o ID do elemento miniCard ao entrar com o cursor em sua area, e usar estas informações para setar uma nova localização para o elemento backgroundAnimated por parametro;
		{
		    
			backgroundAnimated.classList.add(``); 
		}*/

	function createMiniCard(object) {
		const miniCard = document.createElement("div");
		miniCard.classList.add("miniCard");
		miniCard.dataset.minicard = "miniCard";
		miniCard.classList.add(`item-${object.id}`);

		miniCard.style.backgroundImage = `url('${object.image}')`;
		containerGrid.appendChild(miniCard);
		object.id === 1 ? miniCard.classList.add("selected") : "";

		miniCard.addEventListener("click", function () {
			const elementsMiniCard = document.querySelectorAll(
				'[data-minicard = "miniCard"]'
			);
			elementsMiniCard.forEach((element) => {
				element.classList.remove("selected");
			});
			miniCard.classList.add("selected");
			deleteCardPrevious();
			createCardForDetails(object);
		});

		miniCard.addEventListener("mouseenter", function () {
			let newLocation = myPosition(object.id);
			moveBackgroundAnimated(newLocation);
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

	object.forEach((object) => {
		createMiniCard(object);
	});
	createCardForDetails(object[0]);
	createBackgroundAnimated();
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

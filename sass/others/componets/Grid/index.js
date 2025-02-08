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
		console.log("local do elemento a ser posicionado: ");
		console.log(locationInitial);

		let locationX = locationInitial.x;
		let locationY = locationInitial.y;

		const backgroundAnimated = document.createElement("div");
		backgroundAnimated.classList.add("backgroundAnimated");

		let locationBackgroundAnimated =
			backgroundAnimated.getBoundingClientRect();

		console.log("local de origin do elemento animado:");
		console.log(locationBackgroundAnimated);

		backgroundAnimated.style.transform = `translate( ${0}px, ${0}px)`;
		backgroundAnimated.style.width = `${locationInitial.width + 8}px`;
		backgroundAnimated.style.height = `${locationInitial.height + 8}px`;
		containerGrid.appendChild(backgroundAnimated);
	}

	function moveBackgroundAnimated(newLocation) {
		const cardInitial = document.querySelector(".item-1");
		const locationInitial = cardInitial.getBoundingClientRect();
		const backgroundAnimated = document.querySelector(
			".backgroundAnimated"
		);
		let locationX = newLocation.x - locationInitial.x;
		let locationY = newLocation.y - locationInitial.y;
		backgroundAnimated.style.transform = `translate( ${locationX}px, ${locationY}px)`;
	}
	function myPosition(objectId) {
		const element = document.querySelector(`.item-${objectId}`);
		console.log("position: ");
		let locationElement = element.getBoundingClientRect();
		console.log(locationElement);

		return locationElement;
	}

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

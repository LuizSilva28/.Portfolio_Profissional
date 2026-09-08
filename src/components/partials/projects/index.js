/** @format */

import { createBntCertificate } from "../buttons/criarBnts";

const cardPrincipalProjects = document.getElementById("cardPrincipal");

function deleteCardPrevious() {
	let cardDetails = document.querySelector(
		'[data-gridskills="cardDetailsProjects"]',
	);
	cardDetails.parentNode.removeChild(cardDetails);
}

export function createMiniCard(object) {
	
	const containerGrid = document.querySelector(`#carouselProjects`);
	const miniCard = document.createElement("div");

	miniCard.classList.add("miniCard");
	miniCard.dataset.minicard = "miniCard";
	miniCard.classList.add(`item-${object.id}`);

	miniCard.style.backgroundImage = `url('${object.image}')`;
	containerGrid.appendChild(miniCard);

	object.id === 1 ? miniCard.classList.add("selected") : "";

	miniCard.addEventListener("click", function () {
		const elementsMiniCard = document.querySelectorAll(
			'[data-minicard = "miniCard"]',
		);
		elementsMiniCard.forEach((element) => {
			element.classList.remove("selected");
		});
		miniCard.classList.add("selected");
		deleteCardPrevious();
		createCardForDetails(object);
	});

	// miniCard.addEventListener("mouseenter", function () {
	// 	let newLocation = myPosition(object.id);
	// 	moveBackgroundAnimated(newLocation);
	// });
}

export function createCardForDetails(object) {
	const containerGrid = document.querySelector(`.cardPrincipal`);
	const cardDetails = document.createElement("div");
	cardDetails.classList.add("cardDetails");
	cardDetails.setAttribute("data-gridSkills", "cardDetailsProjects");

	const imgOfCard = document.createElement("div");
	imgOfCard.classList.add("imgOfCard");
	imgOfCard.style.backgroundImage = `url('${object.image}')`;

	const titleOfCard = document.createElement("h6");
	titleOfCard.classList.add("title");
	titleOfCard.textContent = `${object.title}`;

	const descriptionsOfCard = document.createElement("div");
	descriptionsOfCard.classList.add("descriptionsOfCard");
	
	const subtitleOfCard = document.createElement("p");
	subtitleOfCard.classList.add("subtitle");	
	subtitleOfCard.textContent = `${object.subtitle}`;

	const listOfTechnologies = document.createElement("ul");
	listOfTechnologies.className = "listOfTechnologies";

	object.technologies.forEach((technology) => {
		const listItem = document.createElement("li");
		listItem.textContent = `${technology.name} - ${technology.percent}`;
		listOfTechnologies.append(listItem);
	},);

	

	descriptionsOfCard.append(subtitleOfCard, listOfTechnologies);

	cardDetails.appendChild(imgOfCard);
	cardDetails.appendChild(titleOfCard);
	cardDetails.appendChild(descriptionsOfCard);

	containerGrid.appendChild(cardDetails);

	//createBntCertificate(object.certificate);
}

export function createAllCardsForProjects(object) {
	console.log(object);
	object.forEach((object) => {
		createMiniCard(object);
	});
	createCardForDetails(object[0]);
}

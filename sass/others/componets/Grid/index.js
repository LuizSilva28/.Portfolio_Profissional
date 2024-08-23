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

		createBntCertificate(object.image);

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
export function createModalCertificate(image) {
	const containerSkills = document.querySelector(
		'[data-gridSkills="gridSkills"]'
	);
	console.log("função chamada");
	const modal = document.createElement("div");
	modal.classList.add("modalCertificate");
	modal.setAttribute("data-areaskills", "modal");
	modal.textContent = 'Modal Criado';
	modal.style.backgroundImage = `url("${image}")`;

	containerSkills.appendChild(modal);
	console.log(modal);
}
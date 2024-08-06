import { standardcard } from "../objects/index.js";
export function createGridSkills() {

   let i = 0;
	const containerSkills = document.querySelector(
		'[data-gridSkills="gridSkills"]'
	);

	function createMiniCard(i) {
		const miniCard = document.createElement("div");
		miniCard.classList.add("miniCard");
		miniCard.classList.add(`item-${i}`);
		containerSkills.appendChild(miniCard);
		console.log("estou sendo chamado");
	}

	//depurar esta função
	function createCardForDetails (){
		const cardDetails = document.createElement("div");
		cardDetails.classList.add("cardDetails");

		const imgOfCard = document.createElement("div");
		imgOfCard.classList.add("imgOfCard");

		const titleOfCard = document.createElement("h4");
        titleOfCard.textContent = object.title;

		const descriptionOfCard = document.createElement("div");
		descriptionOfCard.classList.add("descriptionOfCard");
		
		const description = document.createElement("p");
		description.textContent = "Descrição";

		const xp = document.createElement("p");
		xp.textContent = object.xp;

		const skillLevel = document.createElement("p");
		skillLevel.textContent = object.skillLevel;

		const projects = document.createElement("p");
		projects.textContent = object.projects;
		
		descriptionOfCard.appendChild(description);
		descriptionOfCard.appendChild(xp);
		descriptionOfCard.appendChild(skillLevel);
		descriptionOfCard.appendChild(projects);

		cardDetails.appendChild(imgOfCard);
		cardDetails.appendChild(titleOfCard);
		cardDetails.appendChild(descriptionOfCard);

		containerSkills.appendChild(cardDetails);


	}

	standardcard.forEach((object) => {
		i++
		createMiniCard(i);
		//createCardForDetails(object);
	});
}

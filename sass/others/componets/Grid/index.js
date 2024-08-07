import { standardcard } from "../objects/index.js";
export function createGridSkills() {

   let i = 0;
	const containerSkills = document.querySelector(
		'[data-gridSkills="gridSkills"]'
	);

	function createMiniCard(i, object) {
		const miniCard = document.createElement("div");
		miniCard.classList.add("miniCard");
		miniCard.classList.add(`item-${i}`);
		containerSkills.appendChild(miniCard);
		miniCard.style.backgroundImage = `url('${object.image}')`;
		console.log("estou sendo chamado");
	}

	//depurar esta função
	function createCardForDetails(object) {
		const cardDetails = document.createElement("div");
		cardDetails.classList.add("cardDetails");

		const imgOfCard = document.createElement("div");
		imgOfCard.classList.add("imgOfCard");

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
		skillLevel.textContent = `${object.description.skillLevel}` ;

		const projects = document.createElement("p");
		projects.textContent = `${object.description.projects}`;

		

		descriptionsOfCard.appendChild(xp);
		descriptionsOfCard.appendChild(skillLevel);
		descriptionsOfCard.appendChild(projects);

		cardDetails.appendChild(imgOfCard);
		cardDetails.appendChild(titleOfCard);
		cardDetails.appendChild(description);
		cardDetails.appendChild(descriptionsOfCard);

		containerSkills.appendChild(cardDetails);
	}

	standardcard.forEach((object) => {
		i++
		console.log(object.id)
		
		createMiniCard(i, object);
		
	});
	createCardForDetails(standardcard[0]);
	
}

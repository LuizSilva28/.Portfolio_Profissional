import { standardcard } from "../objects/index.js";
export function createGridSkills() {
	let i = 0;
	const containerSkills = document.querySelector(
		'[data-gridSkills="gridSkills"]'
	);

	function createMiniCard( object) {
		const miniCard = document.createElement("div");
		miniCard.classList.add("miniCard");
		miniCard.classList.add(`item-${object.id}`);
		miniCard.style.backgroundImage = `url('${object.image}')`;
		containerSkills.appendChild(miniCard);
		//console.log(object.image);

		miniCard.addEventListener("click", function () {
			
			// Adicione aqui seu código para abrir a modal com os detalhes da habilidade.
			/*if (object.id > 0){
		    let objectPrevious = object.id - 1;
				deleteCardPrevious(objectPrevious);
			}*/
			deleteCardPrevious();
			console.log('removi card anterior');
			createCardForDetails(object);
			console.log("adicionei novo card ");
		});
	}

	//depurar esta função
	function createCardForDetails(object) {
		const cardDetails = document.createElement("div");
		cardDetails.classList.add("cardDetails");
		cardDetails.setAttribute("data-gridSkills", "modal");

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

		containerSkills.appendChild(cardDetails);
	}

	function deleteCardPrevious() {
		let cardDetails = document.querySelector(
			'[data-gridSkills="modal"]'
		);
			cardDetails.parentNode.removeChild(cardDetails);
			//const cardPrevious = document.querySelector(`.item-${object.id}`);
			//cardPrevious.parentNode.removeChild(cardPrevious);
	}

	standardcard.forEach((object) => {
		
		

		createMiniCard(object);
	});
	createCardForDetails(standardcard[0]);
}

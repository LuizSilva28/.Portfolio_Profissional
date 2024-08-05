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

	standardcard.forEach((object) => {
		i++
		createMiniCard(i);
	});
}

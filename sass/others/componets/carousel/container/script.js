import { criarEventsSlidesItems } from "../cards/script.js";
import { criarButtomBack, criarButtomNext } from "../buttons/script.js";

export function criarCarousel() {
	criarButtomBack();

	const containerCarousel = document.querySelector("#container-carousel"); //wrapper

	const carouselList = document.createElement("div"); //slide-wrapper ou [data-slide = "wrapper"]
	carouselList.classList.add("carouselList");
	carouselList.setAttribute("data-slide", "wrapper");

	const containerItems = document.createElement("div"); // slide-list
	containerItems.classList.add("ContainerItems");
	containerItems.setAttribute("data-slide", "list");

	//slide-item
	const createItem = (index) => {
		const item = document.createElement("div");
		item.setAttribute("data-slide", "item");
		item.classList.add(`item${index}`);
		return item;
	};

	for (let i = 0; i <= 4; i++) {
		containerItems.appendChild(createItem(i));
	}
	
	carouselList.appendChild(containerItems);
	containerCarousel.appendChild(carouselList);
	criarButtomNext();

	//   Eventos
	criarEventsSlidesItems();
}

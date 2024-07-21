import { criarSlidesItems } from "../cards/script.js";
import { criarButtonBack, criarButtonNext } from "../buttons/script.js";

export function criarCarousel() {
	criarButtonBack();
	


	const containerCarousel = document.querySelector("#container-carousel"); //wrapper

	const carouselList = document.createElement("div"); //slide-wrapper ou [data-slide = "wrapper"]
	carouselList.classList.add("carouselList");
	carouselList.setAttribute("data-slide", "wrapper");

	const containerItems = document.createElement("div"); // slide-list
	containerItems.classList.add("ContainerItems");
	containerItems.setAttribute("data-slide", "list");

	carouselList.appendChild(containerItems);
	containerCarousel.appendChild(carouselList);
	criarButtonNext();
	//adicionar slides
	criarSlidesItems();
	
	
	

	//slide-item
	

	//   Eventos
}

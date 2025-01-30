import { criarSlidesItems } from "../cards/script.js";
import { criarButtonBack, criarButtonNext } from "../buttons/script.js";

export function criarCarousel() {

	criarButtonBack();

	const containerCarousel = document.querySelector("#container-carousel"); 
	const carouselList = document.createElement("div"); 
	carouselList.classList.add("carouselList");
	carouselList.setAttribute("data-slide", "wrapper");

	const containerItems = document.createElement("div"); 
	containerItems.classList.add("ContainerItems");
	containerItems.setAttribute("data-slide", "list");
	
	const containerItemsReplica = document.createElement("div"); 
	containerItemsReplica.classList.add("containerItemsReplica");
	containerItemsReplica.setAttribute("data-slide", "listReplica");

	carouselList.appendChild(containerItems);
	carouselList.appendChild(containerItemsReplica);
	containerCarousel.appendChild(carouselList);

	criarButtonNext();
	
	criarSlidesItems(containerItems, "itemList");
	criarSlidesItems(containerItemsReplica, "itemList");
	

	
	
	

	//slide-item
	

	//   Eventos
}

import { criarButtomBack, criarButtomNext } from "../buttons/script.js";


export function criarCarousel() {

    criarButtomBack();
 const containerCarousel = document.querySelector('#container-carousel');
const carousel = document.createElement('div');
carousel.classList.add('carousel');
const containerItems = document.createElement('div');
containerItems.classList.add("ContainerItems");

for (let i = 1; i <4; i++){
    const item = document.createElement('div');
    item.classList.add('item');
    item.classList.add(`item${i}`);
    containerItems.appendChild(item);
}
carousel.appendChild(containerItems);
containerCarousel.appendChild(carousel);

    criarButtomNext();
}
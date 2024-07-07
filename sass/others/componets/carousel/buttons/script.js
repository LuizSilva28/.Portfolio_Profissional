const containerCarousel = document.querySelector("#container-carousel");


export function criarButtomBack (){
    console.log("Estou sendo chamado!");
	const buttomBack = document.createElement("buttom");
	buttomBack.classList.add("bntCarousel");
    containerCarousel.appendChild(buttomBack);
}

export function criarButtomNext (){ 
const buttomNext = document.createElement("buttom");
buttomNext.classList.add("bntCarousel");
containerCarousel.appendChild(buttomNext);

}


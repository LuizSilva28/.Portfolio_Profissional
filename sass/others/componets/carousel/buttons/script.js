const containerCarousel = document.querySelector("#container-carousel");


export function criarButtomBack (){
    console.log("Estou sendo chamado!");
	const buttomBack = document.createElement("buttom");
	buttomBack.classList.add("bntCarousel");
    containerCarousel.appendChild(buttomBack);
    buttomBack.setAttribute("data-slide", "nav-previous-buttom");
    //buttomBack.addEventListener('click', moveSlide)
}

export function criarButtomNext (){ 
const buttomNext = document.createElement("buttom");
buttomNext.classList.add("bntCarousel");
containerCarousel.appendChild(buttomNext);
buttomNext.setAttribute("data-slide","nav-next-buttom");

}
/*
function moveSlide (){
   
        console.log("Mudando para o slide anterior");
        const ItemsList = document.querySelectorAll('.item');
       ItemsList.forEach(item => {
        item.style.transform = "translate(-5.5rem)";
       })
    
    // Adicione seu código para mudar de slide aqui.
}*/
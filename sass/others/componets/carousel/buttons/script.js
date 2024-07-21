
	const containerCarousel = document.querySelector("#container-carousel");
    export function criarButtonBack() {
        const buttonBack = document.createElement("button");
        buttonBack.classList.add("bntCarousel");
        containerCarousel.appendChild(buttonBack);
        buttonBack.setAttribute("data-slide", "nav-previous-button");
       
    }

    export function criarButtonNext() {
        const buttonNext = document.createElement("button");
        buttonNext.classList.add("bntCarousel");
        containerCarousel.appendChild(buttonNext);
        buttonNext.setAttribute("data-slide", "nav-next-button");
        
    }



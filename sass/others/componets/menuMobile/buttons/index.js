console.log('teste teste');
export function criarBntsMenu (){
    for (let i = 1; i<=4; i++){
    const containerMenuMobile = document.querySelector('#container-menu-mobile');

    const bnt = document.createElement("button");
    bnt.id = `bntMenu${i}`;
	bnt.type='button';
    bnt.classList.add("bntMenu");

    const icon = document.createElement('i');
    icon.classList.add(`icon${i}`);

    const text = document.createElement('p');
    text.innerText = "Menu";

    bnt.appendChild(icon);
    bnt.appendChild(text);
    containerMenuMobile.appendChild(bnt);

    bnt.addEventListener("click", (e) => {
		e.preventDefault;
        console.log('estou aqui');
        const sideBar = document.getElementById("side-bar");
        sideBar.classList.toggle('sideBarClose');
    });
    }

    
	
}














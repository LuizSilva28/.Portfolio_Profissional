console.log('teste teste');
export function criarBntsMenu (){
	const containerMenuMobile = document.querySelector('#container-menu-mobile');

    const bnt = document.createElement("button");
    bnt.id = 'bntMenu-1';
	bnt.type='button';
    bnt.classList.add("bntMenu");

    const icon = document.createElement('i');
    icon.classList.add("icon1");

    const text = document.createElement('p');
    text.innerText = "Menu";

    bnt.appendChild(icon);
    bnt.appendChild(text);
    containerMenuMobile.appendChild(bnt);

    bnt.addEventListener("click", (e) => {
		e.preventDefault;
        const sideBar = document.getElementById("side-bar");
        sideBar.style.display = "block";
    });
}











/*
const bntMenu1 = document.getElementById("bntMenu-1");
const bntMenu2 = document.getElementById("bntMenu-2");
const bntMenu3 = document.getElementById("bntMenu-3");
const bntMenu4 = document.getElementById("bntMenu-4");

bntMenu1.addEventListener("click", () => {
	const sideBar = document.getElementById("side-bar");
	sideBar.style;

	console.log("estou funcionando!");
});

bntMenu2.addEventListener("click", () => {
	const sideBar = document.getElementById("side-bar");
	console.log("estou funcionando!");
});

bntMenu3.addEventListener("click", () => {
	const sideBar = document.getElementById("side-bar");
	console.log("estou funcionando!");
});

bntMenu4.addEventListener("click", () => {
	const sideBar = document.getElementById("side-bar");
	console.log("estou funcionando!");
});

export { bntMenu1, bntMenu2, bntMenu3, bntMenu4 };
*/

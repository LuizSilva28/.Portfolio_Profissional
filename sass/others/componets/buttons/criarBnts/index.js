export function criarBntsMenu(
	idBtn,
	typeBtn,
	classBtn,
	classIcon,
	textId,
	textBtn
) {
	const containerMenuMobile = document.querySelector(
		"#container-menu-mobile"
	);
	const bntsMenu = document.createElement("button");
	bntsMenu.id = idBtn;
	bntsMenu.type = typeBtn;
	bntsMenu.classList.add(`${classBtn}`);
	const icon = document.createElement("i");
	icon.classList.add(`${classIcon}`);
	const text = document.createElement("p");
	text.id = `${textId}`;
	text.textContent = `${textBtn}`;
	bntsMenu.appendChild(icon);
	bntsMenu.appendChild(text);
	containerMenuMobile.appendChild(bntsMenu);
	bntsMenu.id === "bntMenu1" ? 0 : bntsMenu.addEventListener("click", (e) => {
		e.preventDefault;
		const sideBar = document.getElementById("side-bar");
		sideBar.classList.toggle("sideBarClose");
	});
}
export function criarBntsSideBar(
	idBtn,
	typeBtn,
	classBtn,
	classIcon,
	textId,
	textBtn
) {
	const containerSideBar = document.querySelector("#side-bar");
	const divDadBnts = document.createElement("div");
	const bntsSideBar = document.createElement("button");
	bntsSideBar.id = idBtn;
	bntsSideBar.type = typeBtn;
	bntsSideBar.classList.add(`${classBtn}`);
	const icon = document.createElement("i");
	icon.classList.add(`${classIcon}`);
	const text = document.createElement("p");
	text.id = `${textId}`;
	text.textContent = `${textBtn}`;
	bntsSideBar.appendChild(icon);
	divDadBnts.appendChild(bntsSideBar);
	divDadBnts.appendChild(text);
	containerSideBar.appendChild(divDadBnts);
}

/*export function criarBntsMenu() {
	let text1 = `menu`,
		text2 = `Redes`,
		text3 = `pdfs`,
		text4 = `config`;
	for (let i = 1; i <= 4; i++) {
		const containerMenuMobile = document.querySelector(
			"#container-menu-mobile"
		);
		const bntsMenu = document.createElement("button");
		bntsMenu.id = `bntMenu${i}`;
		bntsMenu.type = "button";
		bntsMenu.classList.add("bntMenu");
		const icon = document.createElement("i");
		icon.classList.add(`icon${i}`);
		const text = document.createElement("p");
		text.id = `bntText${i}`;
		text.textContent = ` ${
			i === 1 ? text1 : i === 2 ? text2 : i === 3 ? text3 : text4
		}`;
		bntsMenu.appendChild(icon);
		bntsMenu.appendChild(text);
		containerMenuMobile.appendChild(bntsMenu);
		bntsMenu.addEventListener("click", (e) => {
			e.preventDefault;
			console.log("estou aqui");
			const sideBar = document.getElementById("side-bar");
			sideBar.classList.toggle("sideBarClose");
		});
	}
}*/

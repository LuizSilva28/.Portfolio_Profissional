
export function createBntsMenu(
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
	bntsMenu.id === "bntMenu1"
		? 0
		: bntsMenu.addEventListener("click", (e) => {
				e.preventDefault;
				let bntClicked = e.currentTarget.id;
				console.log(e.currentTarget.id);
				let textBnt = "";
				switch (bntClicked) {
					case "bntMenu2":
						for (let i = 1; i <= 5; i++) {
							i === 1
								? (textBnt = "whatsapp")
								: i === 2
								? (textBnt = "instagram")
								: i === 3
								? (textBnt = "linkedin")
								: i === 4
								? (textBnt = "github")
								: (textBnt = "email");

							createBntsSideBar(
								`sideBarBnt-${i}`,
								"button",
								"sideBarBnts",
								`SideBarIconBnt${i}`,
								`text${i}`,
								textBnt
							);
						}
						bntCloseSidebar();
						break;
					case "bntMenu3":
						for (let i = 6; i <= 8; i++) {
							i === 6
								? (textBnt = "Currículo")
								: i === 7
								? (textBnt = "Unicesumar")
								: (textBnt = "Onibitcode");

							createBntsSideBar(
								`sideBarBnt-${i}`,
								"button",
								"sideBarBnts",
								`SideBarIconBnt${i}`,
								`text${i}`,
								textBnt
							);
						}
						bntCloseSidebar();

						break;
					case "bntMenu4":
						for (let i = 9; i <= 10; i++) {
							i === 9
								? (textBnt = "tema")
								: (textBnt = "Acessibilidade");
							createBntsSideBar(
								`sideBarBnt-${i}`,
								"button",
								"sideBarBnts",
								`SideBarIconBnt${i}`,
								`text${i}`,
								textBnt
							);
						}
						bntCloseSidebar();
						break;
					default:
						console.log("Deu erro");
				}
				const sideBar = document.getElementById("side-bar");
				sideBar.classList.add("sideBarClose");
				const closeBnt = document.querySelector("#bntCloseSidebar");
				closeBnt.classList.add("closeBnt");
		  });
}

export function bntCloseSidebar() {
	const header = document.getElementById("menu");
	const bntCloseSidebar = document.createElement("div");
	bntCloseSidebar.id = "bntCloseSidebar";
	bntCloseSidebar.classList.toggle("bntCloseSidebar");

	const iconX = document.createElement("i");
	iconX.classList.add("icon0");

	bntCloseSidebar.appendChild(iconX);
	header.appendChild(bntCloseSidebar);

	bntCloseSidebar.addEventListener("click", () => {
		const sideBar = document.getElementById("side-bar");
		sideBar.classList.toggle("sideBarClose");

		const closeBnt = document.querySelector(".closeBnt");
		closeBnt.classList.toggle("closeBnt");

		const divDadBnts = document.querySelectorAll(".divDadBnts");
		console.log(divDadBnts);

		for (let i = 0; i < divDadBnts.length; i++) {
			console.log(divDadBnts.length);
			divDadBnts[i].remove();
			console.log(divDadBnts.length);
		}
	});
}

export function createBntsSideBar(
	idBtn,
	typeBtn,
	classBtn,
	classIcon,
	textId,
	textBtn
) {
	const containerlayoutSideBar = document.querySelector(".layoutSideBar");
	const divDadBnts = document.createElement("div");
	divDadBnts.classList.add("divDadBnts");

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
	containerlayoutSideBar.appendChild(divDadBnts);
}

//BUTTOMS AREADO CONHECIMENTO

export function createShowSkillsButtons(txtButtom, dataValue) {
	const buttom = document.createElement.apply("buttom");
	buttom.setAttribute("data-areaSkills", `${dataValue}`);
	buttom.classList.add = "bntAreaskills";
	buttom.textContent = `${txtButtom}`;

	buttom.addEventListener("click", () => {
		const skills = document.querySelector(
			`[data-areaSkills="${dataValue}"]`
		);
		skills.classList.add("effectHover");
	});
}
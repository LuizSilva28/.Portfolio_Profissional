/** @format */

import { confirmationMessage } from "../messages/confirmationMessage.js";
import {
	bntCloseSidebar,
	createBtnsMenu,
	createBtnsSideBar,
	createShowSkillsButtons,
} from "./criarBnts/index.js";

let mapRede = [
	{
		name: "whatsapp",
		url: "https://api.whatsapp.com/send?phone=+5535991858716",
	},
	{ name: "instagram", url: "https://www.instagram.com/luiz_h.s.silva/" },
	{
		name: "linkedin",
		url: "https://www.linkedin.com/in/luiz-henrique-801259243/",
	},
	{ name: "github", url: "https://github.com/LuizSilva28" },
	{
		name: "email",
		url: "mailto:luiz.henrique.dossantos062000%40gmail.com",
	},
];

let pdfs = [
	{
		name: "Currículo",
		url: "assets/pdf/Currículo_Luiz_Henrique_Silva.pdf",
	},
	{
		name: "Unicesumar",
		url: "assets/pdf/Certificado_Unicesumar.pdf",
	},
	{
		name: "Onibitcode",
		url: "assets/pdf/Certificado_Onibitcode.pdf",
	},
];

const header = document.querySelector("#header");
const containerSideBar = document.querySelector(".layoutSideBar");

const createContainerBtns = () => {
	const containerBtns = document.createElement("div");
	containerBtns.classList.add("divDadBnts");
	return containerBtns;
};

export const btnHome = (containerMenu) => {
	const btnHome = createBtnsMenu(
		"bntMenu1",
		"button",
		["bntsMenuMobile", "bntHome"],
		"icon1",
		"text1",
		"home",
	);
	containerMenu.appendChild(btnHome);
};

export const btnRedes = (containerMenu) => {
	const documentBody = document.body;

	mapRede.forEach((item, i) => {
		const containerBtnsRedes = document.createElement("div");
		containerBtnsRedes.classList.add(
			"divDadBnts",
			"containerRedes",
			"active",
		);

		let btn = createBtnsSideBar(
			`sideBarBnt-${i}`,
			"button",
			"sideBarBnts",
			`sidebarIconRede${i}`,
			`text${i}`,
			item.name,
			confirmationMessage,
			item.url,
			item.name,
			documentBody,
		);

		containerBtnsRedes.append(btn.btnSideBar, btn.text);
		containerSideBar.append(containerBtnsRedes);
	});
	const btnRedes = createBtnsMenu(
		"bntMenu2",
		"button",
		["bntsMenuMobile", "bntRedes"],
		"icon2",
		"text2",
		"redes",
	);
	containerMenu.appendChild(btnRedes);
};

export const btnPdfs = (containerMenu) => {
	pdfs.forEach((item, i) => {
		const containerBtnsPdfs = document.createElement("div");
		containerBtnsPdfs.classList.add("divDadBnts", "containerPdfs");

		let btn = createBtnsSideBar(
			`sideBarBnt-${i}`,
			"button",
			"sideBarBnts",
			`sidebarIconPdfs${i}`,
			`text${i}`,
			item.name,
		);
		containerBtnsPdfs.append(btn.btnSideBar, btn.text);
		containerSideBar.append(containerBtnsPdfs);
	});

	const btnPdfs = createBtnsMenu(
		"bntMenu3",
		"button",
		["bntsMenuMobile", "bntPdfs"],
		"icon3",
		"text3",
		"pdfs",
	);
	containerMenu.appendChild(btnPdfs);
};

export const btnConfigs = (containerMenu) => {
	let textBtn = "";
	for (let i = 0; i <= 1; i++) {
		const containerBtns = document.createElement("div");
		containerBtns.classList.add(
			"divDadBnts",
			"divDadBnts",
			"containerConfigs",
		);

		i === 0 ? (textBtn = "Tema") : (textBtn = "Acessibilidade");
		let btn = createBtnsSideBar(
			`sideBarBnt-${i}`,
			"button",
			"sideBarBnts",
			`sidebarIconConfigs${i}`,
			`text${i}`,
			textBtn,
		);

		containerBtns.append(btn.btnSideBar, btn.text);
		containerSideBar.append(containerBtns);
	}

	const btnConfigs = createBtnsMenu(
		"bntMenu4",
		"button",
		["bntsMenuMobile", "bntConfigs"],
		"icon4",
		"text4",
		"configs",
	);

	containerMenu.appendChild(btnConfigs);
};

export const btnOpenMenuDesk = (containerMenu) => {
	const btnOpenMenuDesk = createBtnsMenu(
		"bntMenu2",
		"button",
		["btnsMenuDesk", "btnOpenMenuDesk"],
		"iconOpenMenuDesk",
		"",
		"",
	);
	containerMenu.appendChild(btnOpenMenuDesk);
};

export const btnLightMenuDesk = (containerMenu) => {
	const btnLightMenuDesk = createBtnsMenu(
		"btnOpenMenuDesk",
		"button",
		["btnsMenuDesk", "btnLightMenuDesk"],
		"iconLightMenuDesk",
		"",
		"",
	);
	containerMenu.appendChild(btnLightMenuDesk);
};

export const btnDarkMenuDesk = (containerMenu) => {
	const btnDarkMenuDesk = createBtnsMenu(
		"btnOpenMenuDesk",
		"button",
		["btnsMenuDesk", "btnDarkMenuDesk"],
		"iconDarkMenuDesk",
		"",
		"",
	);
	containerMenu.appendChild(btnDarkMenuDesk);
};

export const btnAccessibilityMenuDesk = (containerMenu) => {
	const btnAccessibilityMenuDesk = createBtnsMenu(
		"btnOpenMenuDesk",
		"button",
		["btnsMenuDesk", "btnAccessibilityMenuDesk"],
		"iconAccessibilityMenuDesk",
		"",
		"",
	);
	containerMenu.appendChild(btnAccessibilityMenuDesk);
};

export const btnClose = () => {
	bntCloseSidebar();
};

export const btnHardskills = () => {
	createShowSkillsButtons("Hardskills", "Hardskills", 1);
};

export const btnSoftskills = () => {
	createShowSkillsButtons("Softkills", "Softkills", 2);
};

export const btnHomeDesktop = (containerBtns) => {
	// containerBtns.classList.add("divDadBnts");

	const btnHome = createBtnsMenu(
		"bntMenu1",
		"button",
		["btnsMenuDesk", "bntHome"],
		"",
		"text1",
		"home",
	);

	containerBtns.append(btnHome);
};

export const btnRedesDesktop = (layoutSideBar, containerBtns) => {
	const documentBody = document.body;

	const containerBtnsRedes = document.createElement("div");
	containerBtnsRedes.classList.add("divDadBnts", "containerRedes", "active");

	mapRede.forEach((item, i) => {
		console.log("item rede", i);
		let btn = createBtnsSideBar(
			`sideBarBnt-${i}`,
			"button",
			"sideBarBnts",
			`sidebarIconRede${i}`,
			`text${i}`,
			item.name,
			confirmationMessage,
			item.url,
			item.name,
			documentBody,
		);

		containerBtnsRedes.append(btn.btnSideBar, btn.text);
	});

	const btnRedes = createBtnsMenu(
		"bntMenu2",
		"button",
		["btnsMenuDesk", "bntRedes"],
		"",
		"text2",
		"redes",
	);

	layoutSideBar.appendChild(containerBtnsRedes);
	containerBtns.appendChild(btnRedes);
};

export const btnPdfsDesktop = (layoutSideBar, containerBtns) => {
	const containerBtnsPdfs = document.createElement("div");
	containerBtnsPdfs.classList.add("divDadBnts", "containerPdfs");

	pdfs.forEach((item, i) => {
		let btn = createBtnsSideBar(
			`sideBarBnt-${i}`,
			"button",
			"sideBarBnts",
			`sidebarIconPdfs${i}`,
			`text${i}`,
			item.name,
		);
		containerBtnsPdfs.append(btn.btnSideBar, btn.text);
	});

	const btnPdfs = createBtnsMenu(
		"bntMenu3",
		"button",
		["btnsMenuDesk", "bntPdfs"],
		"",
		"text3",
		"pdfs",
	);

	containerBtns.appendChild(btnPdfs);
	layoutSideBar.appendChild(containerBtnsPdfs);
};

header.addEventListener("click", (event) => {
	const elementClicked = event.target;

	const sideBar = document.getElementById("side-bar");
	const closeBtn = document.querySelector("#bntCloseSidebar");

	// const containerBtns = document.createElement("div");
	// containerBtns.classList.add("divDadBnts");

	if (
		elementClicked.classList.contains("bntRedes") ||
		elementClicked.classList.contains("text2") ||
		elementClicked.classList.contains("icon2")
	) {
		console.log("botão de redes");
		const containerRedes = document.querySelectorAll(".containerRedes");

		const btnsMenuDesk = document.querySelectorAll(".btnsMenuDesk ");
		btnsMenuDesk.forEach((ele) => ele.classList.remove("selected"));

		const btnRedes = document.querySelector(".bntRedes");
		btnRedes.classList.add("selected");

		const allContainerSubBtns = document.querySelectorAll(".divDadBnts");

		console.log("allContainerSubBtns", allContainerSubBtns);

		allContainerSubBtns.forEach((container) => {
			container.classList.remove("active");
		});

		containerRedes.forEach((container) => {
			container.classList.add("active");
		});

		sideBar.classList.add("sideBarClose");
		closeBtn?.classList.remove("closeBtn");
	}

	if (
		elementClicked.classList.contains("bntPdfs") ||
		elementClicked.classList.contains("text3") ||
		elementClicked.classList.contains("icon3")
	) {
		const containerPdfs = document.querySelectorAll(".containerPdfs");

		const btnsMenuDesk = document.querySelectorAll(".btnsMenuDesk ");
		btnsMenuDesk.forEach((ele) => ele.classList.remove("selected"));

		const btnPdfs = document.querySelector(".bntPdfs");
		btnPdfs.classList.add("selected");

		const allContainerSubBtns = document.querySelectorAll(".divDadBnts");
		allContainerSubBtns.forEach((container) => {
			container.classList.remove("active");
		});

		containerPdfs.forEach((container) => {
			container.classList.add("active");
		});

		sideBar.classList.add("sideBarClose");
		closeBtn?.classList.remove("closeBtn");
	}

	if (
		elementClicked.classList.contains("bntConfigs") ||
		elementClicked.classList.contains("text4") ||
		elementClicked.classList.contains("icon4")
	) {
		const subBtnsConfigs = document.querySelectorAll(".containerConfigs");

		const allContainerSubBtns = document.querySelectorAll(".divDadBnts");
		allContainerSubBtns.forEach((container) => {
			container.classList.remove("active");
		});

		subBtnsConfigs.forEach((subBtn) => {
			subBtn.classList.add("active");
		});

		sideBar.classList.add("sideBarClose");
		closeBtn?.classList.remove("closeBtn");
	}

	if (
		elementClicked.classList.contains("bntHome") ||
		elementClicked.classList.contains("text1") ||
		elementClicked.classList.contains("icon1")
	) {
		console.log("Voltar para a página inicial");

		const btnsMenuDesk = document.querySelectorAll(".btnsMenuDesk ");
		btnsMenuDesk.forEach((ele) => ele.classList.remove("selected"));

		const bntHome = document.querySelector(".bntHome");
		bntHome.classList.add("selected");
	}

	if (
		elementClicked.classList.contains("btnOpenMenuDesk") ||
		elementClicked.classList.contains("iconOpenMenuDesk")
	) {
		console.log("clicou em abrir menu lateral do desktop");
		sideBar?.classList.add("sideBarClose");
		closeBtn?.classList.remove("closeBtn");

		// ! Adicionar o restante dos botões do menu lateral do desktop
		// ! Criar/corrigir função para remover o botão de redes do menu lateral do desktop
		// ! Criar container para os botões e outro para os sub-botões

		// containerSideBar.append(createContainerBtns());
	}
});

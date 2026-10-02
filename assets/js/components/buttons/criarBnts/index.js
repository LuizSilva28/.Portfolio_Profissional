/** @format */

// !Refatorar usar classes e lógica de poo para melhorar o código

import { standardCardHardskills } from "../../../../../src/utils/objects/hardskills/index.js";
import { standardCardSoftskills } from "../../../../../src/utils/objects/softskills/index.js";

import { createGridSkills, createModalCertificate } from "../../grid/index.js";

export function createBntsMenu(
	idBtn,
	typeBtn,
	classBtn,
	classIcon,
	textId,
	textBtn,
) {
	const containerMenuMobile = document.querySelector(
		"#container-menu-mobile",
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
	bntsMenu.id === "bntMenu1" ?
		0
	:	bntsMenu.addEventListener("click", (e) => {
			e.preventDefault;
			let bntClicked = e.currentTarget.id;

			let textBnt = "";
			switch (bntClicked) {
				case "bntMenu2":
					for (let i = 1; i <= 5; i++) {
						i === 1 ? (textBnt = "whatsapp")
						: i === 2 ? (textBnt = "instagram")
						: i === 3 ? (textBnt = "linkedin")
						: i === 4 ? (textBnt = "github")
						: (textBnt = "email");

						createBntsSideBar(
							`sideBarBnt-${i}`,
							"button",
							"sideBarBnts",
							`SideBarIconBnt${i}`,
							`text${i}`,
							textBnt,
						);
					}
					bntCloseSidebar();
					break;
				case "bntMenu3":
					for (let i = 6; i <= 8; i++) {
						i === 6 ? (textBnt = "Currículo")
						: i === 7 ? (textBnt = "Unicesumar")
						: (textBnt = "Onibitcode");

						createBntsSideBar(
							`sideBarBnt-${i}`,
							"button",
							"sideBarBnts",
							`SideBarIconBnt${i}`,
							`text${i}`,
							textBnt,
						);
					}
					bntCloseSidebar();

					break;
				case "bntMenu4":
					for (let i = 9; i <= 10; i++) {
						i === 9 ?
							(textBnt = "tema")
						:	(textBnt = "Acessibilidade");
						createBntsSideBar(
							`sideBarBnt-${i}`,
							"button",
							"sideBarBnts",
							`SideBarIconBnt${i}`,
							`text${i}`,
							textBnt,
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
	const bntCloseSidebarExists = document.getElementById("bntCloseSidebar");
	if (bntCloseSidebarExists) {
		const menu = document.getElementById("menu");
		menu.removeChild(bntCloseSidebarExists);
	}

	const header = document.getElementById("menu");
	const bntCloseSidebar = document.createElement("div");
	bntCloseSidebar.id = "bntCloseSidebar";
	bntCloseSidebar.classList.add("bntCloseSidebar");

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

		for (let i = 0; i < divDadBnts.length; i++) {
			divDadBnts[i].remove();
		}
	});
}

export function createBntsSideBar(
	idBtn,
	typeBtn,
	classBtn,
	classIcon,
	textId,
	textBtn,
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

//BUTTONS CAROUSEL

//BUTTONS AREA OF KNOWLEDGE

export function createShowSkillsButtons(txtButtom, dataValue, idBtn) {
	const containerButtons = document.querySelector(
		'[data-areaSkills="containerButtons"]',
	);
	const buttonsAreaSkills = document.createElement("buttom");

	buttonsAreaSkills.setAttribute("data-areaSkills", `${dataValue}`);
	buttonsAreaSkills.classList.add("bntAreaskills");
	buttonsAreaSkills.id = `bnnSkill-${idBtn}`;
	idBtn === 1 ? buttonsAreaSkills.classList.add("activeSkills") : "";

	buttonsAreaSkills.textContent = `${txtButtom}`;
	containerButtons.appendChild(buttonsAreaSkills);

	buttonsAreaSkills.addEventListener("click", () => {
		const bntSoftskills = document.querySelector(
			'[data-areaSkills="Softskills"]',
		);
		const bntHardskills = document.querySelector(
			'[data-areaSkills="Hardskills"]',
		);
		const gridskiils = document.querySelector(
			'[data-areaskills="containerGrid"]',
		);
		if (idBtn === 1) {
			bntHardskills === null ?
				buttonsAreaSkills.classList.add("activeSkills")
			:	"";

			gridskiils.parentNode.removeChild(gridskiils);

			createGridSkills(standardCardHardskills);
		} else if (idBtn === 2) {
			bntHardskills.classList.remove("activeSkills");
			bntSoftskills === null ?
				buttonsAreaSkills.classList.add("activeSkills")
			:	"";

			gridskiils.parentNode.removeChild(gridskiils);
			createGridSkills(standardCardSoftskills);
		}
	});
}

export function createBntsForControlls(textButtom, idBnt) {
	const bntPanelControll = document.createElement("buttom");
	bntPanelControll.id = idBnt;
	bntPanelControll.classList.add("bntsPdfControll");
	bntPanelControll.textContent = textButtom;
	return bntPanelControll;
}

// !TRANSFORMAR EM CLASSE E UNIFICAR BOTÕES DO GRID DE HABILIDADES COM DE PROJETOS
export function createBntCertificate(certificateURL) {
	const cardDetails = document.querySelector(
		'[data-gridskills="cardDetails"]',
	);

	const bntCertificate = document.createElement("button");
	bntCertificate.textContent = "Certificado";
	bntCertificate.classList.add("bntCertificate");

	const iconBntCertificate = document.createElement("i");
	iconBntCertificate.classList.add("iconCertificate");

	bntCertificate.appendChild(iconBntCertificate);
	cardDetails.appendChild(bntCertificate);

	bntCertificate.addEventListener("click", () => {
		//window.location.href = `${certificateURL}`;
		createModalCertificate(certificateURL);
	});
}

// !TRANSFORMAR EM CLASSE
export function createBntForCertificate(certificateURL) {
	const bntCertificate = document.createElement("button");
	bntCertificate.textContent = "Certificado";
	bntCertificate.classList.add("bntCertificate");

	const iconBntCertificate = document.createElement("i");
	iconBntCertificate.classList.add("iconCertificate");

	bntCertificate.appendChild(iconBntCertificate);
	// container.appendChild(bntCertificate);

	bntCertificate.addEventListener("click", () => {
		//window.location.href = `${certificateURL}`;
		createModalCertificate(certificateURL);
	});

	return bntCertificate;
}

export function hideElement(text, nameClass, elementToHide) {
	const bntCloseModal = document.createElement("button");
	bntCloseModal.textContent = text;
	bntCloseModal.classList.add(nameClass);

	bntCloseModal.addEventListener("click", () => {
		elementToHide.parentNode.removeChild(elementToHide);
	});

	return bntCloseModal;
}

// ** Preciso criar um botão de avaliação em estrelas, requesitos:
// ** ! 1- São 5 estrelas
// *TODO
// ** ! 2- As estrelas devem ser interativas, com o seguinte comportamento: ao passar o mouse sobre a primeira estrela, ela deve ficar preenchida pela metade ou por inteira, ao passar o mouse sobre a segunda estrela, a primeira deve ficar preenchidas e a segunda deve ser preenchida pela metade ou por inteira dependendo da escolha do usuário, e assim por diante até a quinta estrela. Ao clicar em uma estrela, todas as estrelas até aquela devem permanecer preenchidas, indicando a avaliação selecionada.
// *TODO
// ** ! 3- Cada estrela é um icone e cada icone(estrela) deve ter 2 estados: VAZIO, PREENCHIDO - logo se eu clicar na terceira estrela, as 3 primeiras devem ficar preenchidas e as 2 últimas devem ficar vazias, e se eu clicar na segunda estrela, a primeira e a segunda devem ficar preenchidas e as 3 últimas devem ficar vazias.
// *TODO
// ** ! 4- Deve haver feedback visual ao selecionar

// *? IDEIAS: criar um icone html, com dois inputs radio dentro um para meio preenchido e outro para preenchido por completo.
// *? O icone html terá um estilo padrão com estrela vazia que é o estado inicial.
// *? Os inputs radio serão escondidos, e cada input terá dois papeis, 1- feedback visual e valor selecionado, ou seja, ou seja, os inputs terão um hover para incicar o valor a ser selecionado, 2- ao clicar no input o valor será aplicado se é 2.5 estrelas ou 3 estrelas, assim definindo o icone de meio preenchida ou totalmente preenchida.
// *? Além disso, cada input terá o evento de click, esse evento irá atualizar o estado de avaliação para preencher estrelas anteriores e deixar vazias as posteriores, e também atualizar o valor de avaliação selecionado, que será usado para enviar para o backend ou salvar localmente.

export class StarRating {
	constructor() {
		this.stars = [];
		this.oldStars = [];
		this.rating = 0;
		this.statusStar = {
			EMPTY: "empty",
			HALF: "half",
			FULL: "full",
		};
	}

	addEventListenersToStars(event, status, starId, element) {
		const events = {
			click: () => {
				this.updateStars(this.stars, status, starId, element.value);
			},

			mouseover: () => {
				this.oldStars = [...this.stars.map((star) => ({ ...star }))];
				this.updateStars(this.oldStars, status, starId);
			},

			mouseout: () => {
				this.updateStars(this.stars, status);
			},
		};

		events[event] && element.addEventListener(event, events[event]);
	}

	createStar(index, margin) {
		const star = document.createElement("li");
		star.classList.add("star", `star-${this.statusStar.EMPTY}`);
		star.style.marginTop = `${margin}px` || "0x";
		star.dataset.id = index;

		const halfStar = document.createElement("input");
		halfStar.type = "radio";
		halfStar.name = "star";
		halfStar.classList.add("input-half-star");
		halfStar.value = `${index + 0.5}`;

		this.addEventListenersToStars(
			"click",
			this.statusStar.HALF,
			star.dataset.id,
			halfStar,
		);

		this.addEventListenersToStars(
			"mouseover",
			this.statusStar.HALF,
			star.dataset.id,
			halfStar,
		);

		this.addEventListenersToStars(
			"mouseout",
			this.statusStar.HALF,
			star.dataset.id,
			halfStar,
		);

		const fullStar = document.createElement("input");
		fullStar.type = "radio";
		fullStar.name = "star";
		fullStar.classList.add("input-full-star");
		fullStar.value = `${index + 1}`;

		this.addEventListenersToStars(
			"click",
			this.statusStar.FULL,
			star.dataset.id,
			fullStar,
		);

		this.addEventListenersToStars(
			"mouseover",
			this.statusStar.FULL,
			star.dataset.id,
			fullStar,
		);

		this.addEventListenersToStars(
			"mouseout",
			this.statusStar.FULL,
			star.dataset.id,
			fullStar,
		);

		star.append(halfStar, fullStar);

		this.stars[index] = {
			id: index,
			status: this.statusStar.EMPTY,
			element: star,
		};
		return this.stars[index].element;
	}

	updateStars(starsArray, newStatus, starId, newRating) {
		// * * O que Atualizar? 1 - status das estrelas, para alterar o icone, 2 - rating com valor selecionado, 3 - status de todas as estrelas anterior a selecionada devem ficar como full, e as posteriores como empty,

		this.rating = newRating || this.rating;

		starsArray.forEach((star, index) => {
			if (starId && index == starId) star.status = newStatus;

			if (starId && index < starId) star.status = this.statusStar.FULL;

			if (starId && index > starId) star.status = this.statusStar.EMPTY;

			star.element.className = `star star-${star.status}`;
		});
	}

	renderStars(container, qtdStars = 5) {
		const center = (qtdStars - 1) / 2;
		console.log(center);
		for (let i = 0; i < qtdStars; i++) {
			const distanceOfCenter = Math.abs(i - center);
			console.log(distanceOfCenter);

			if (qtdStars % 2 === 0) {
				distanceOfCenter = Math.floor(distanceOfCenter);
				console.log(distanceOfCenter, "par");
			}

			const margemTop = distanceOfCenter * 5;
			console.log(margemTop);

			const star = this.createStar(i, margemTop);
			container.appendChild(star);
		}
	}
}

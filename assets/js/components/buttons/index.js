/** @format */

import {
	bntCloseSidebar,
	createBtnsMenu,
	createShowSkillsButtons,
} from "./criarBnts/index.js";

export const btnHome = () => {
	createBtnsMenu(
		"bntMenu1",
		"button",
		"bntsMenuMobile",
		"icon1",
		"text1",
		"home",
	);
};

export const btnRedes = () => {
	createBtnsMenu(
		"bntMenu2",
		"button",
		"bntsMenuMobile",
		"icon2",
		"text2",
		"redes",
	);
};
export const btnPdfs = () => {
	createBtnsMenu(
		"bntMenu3",
		"button",
		"bntsMenuMobile",
		"icon3",
		"text3",
		"pdfs",
	);
};

export const btnConfigs = () => {
	createBtnsMenu(
		"bntMenu4",
		"button",
		"bntsMenuMobile",
		"icon4",
		"text4",
		"configs",
	);
};

export const btnOpenMenuDesk = () => {
	createBtnsMenu(
		"btnOpenMenuDesk",
		"button",
		"btnOpenMenuDesk",
		"iconOpenMenuDesk",
		"",
		"",
	);
};
export const btnLightMenuDesk = () => {
	createBtnsMenu(
		"btnOpenMenuDesk",
		"button",
		"btnsMenuDesk",
		"iconLightMenuDesk",
		"",
		"",
	);
};
export const btnDarkMenuDesk = () => {
	createBtnsMenu(
		"btnOpenMenuDesk",
		"button",
		"btnsMenuDesk",
		"iconDarkMenuDesk",
		"",
		"",
	);
};
export const btnAccessibilityMenuDesk = () => {
	createBtnsMenu(
		"btnOpenMenuDesk",
		"button",
		"btnsMenuDesk",
		"iconAccessibilityMenuDesk",
		"",
		"",
	);
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

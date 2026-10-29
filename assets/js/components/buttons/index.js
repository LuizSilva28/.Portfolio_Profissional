/** @format */

import {
	bntCloseSidebar,
	createBntsMenu,
	createShowSkillsButtons,
} from "./criarBnts/index.js";

export const btnHome = () => {
	createBntsMenu("bntMenu1", "button", "bntsMenu", "icon1", "text1", "home");
};

export const btnRedes = () => {
	createBntsMenu("bntMenu2", "button", "bntsMenu", "icon2", "text2", "redes");
};
export const btnPdfs = () => {
	createBntsMenu("bntMenu3", "button", "bntsMenu", "icon3", "text3", "pdfs");
};

export const btnConfigs = () => {
	createBntsMenu(
		"bntMenu4",
		"button",
		"bntsMenu",
		"icon4",
		"text4",
		"configs",
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

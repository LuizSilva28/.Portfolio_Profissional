/** @format */

import {
	btnHome,
	btnRedes,
	btnPdfs,
	btnConfigs,
	btnClose,
	btnOpenMenuDesk,
	btnAccessibilityMenuDesk,
	btnLightMenuDesk,
	btnDarkMenuDesk,
	btnHomeDesktop,
	btnRedesDesktop,
	btnPdfsDesktop,
} from "../../buttons/index.js";

const containerMenu = document.querySelector("#container-menu");
const layoutSideBar = document.querySelector(".layoutSideBar");

export function menu() {
	btnClose();

	const resizeObserver = new ResizeObserver((entries) => {
		for (const entry of entries) {
			const { width } = entry.contentRect;
			if (width < 601) {
				containerMenu.replaceChildren();
				layoutSideBar.replaceChildren();

				// Adiciona os botões ao container do menu mobile
				btnHome(containerMenu);
				btnRedes(containerMenu);
				btnPdfs(containerMenu);
				btnConfigs(containerMenu);
			} else {
				containerMenu.replaceChildren();
				layoutSideBar.replaceChildren();

				// Adiciona os botões ao container do menu desktop
				btnOpenMenuDesk(containerMenu);
				btnLightMenuDesk(containerMenu);
				btnDarkMenuDesk(containerMenu);
				btnAccessibilityMenuDesk(containerMenu);

				// Adiciona os botões internos ao container do menu e seus sub-botões
				const containerInternalButtons = document.createElement("div");
				containerInternalButtons.classList.add("containerMainBtns");
				layoutSideBar.appendChild(containerInternalButtons);

				btnHomeDesktop(containerInternalButtons);
				btnRedesDesktop(layoutSideBar, containerInternalButtons);
				btnPdfsDesktop(layoutSideBar, containerInternalButtons);
			}
		}
	});

	resizeObserver.observe(document.documentElement);
}

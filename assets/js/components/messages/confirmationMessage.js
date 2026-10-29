/** @format */

import { hideElement } from "../buttons/criarBnts";

export function confirmationMessage(url, content, container) {
	const modalExist = document.querySelector("#messageConfirm");
	if (modalExist) modalExist.remove();

	const modalMessage = document.createElement("div");
	modalMessage.id = "messageConfirm";
	modalMessage.classList.add("modalCertificate", "messageConfirm");

	const contentText = document.createElement("p");
	contentText.innerText = `Deseja ir para o ${content} ?`;
	contentText.classList.add("messageContent");

	const divButtons = document.createElement("div");
	divButtons.classList.add("bntsPdfContainer");

	const cancel = hideElement("Cancel", "hideElement", modalMessage);

	const ancor = document.createElement("a");
	ancor.href = url;
	ancor.target = "_blank";
	ancor.classList.add("btnAncorConfirm");

	const confirm = document.createElement("button");
	confirm.classList.add("btnMessageConfirm");
	confirm.innerText = "Confirmar";

	ancor.appendChild(confirm);
	divButtons.append(ancor, cancel);
	modalMessage.append(contentText, divButtons);

	container.appendChild(modalMessage);
}

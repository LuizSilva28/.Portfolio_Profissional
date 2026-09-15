// IMPORTA ESTILOS PARA O WEBPACK USAR E MINIFICAR
import "../../assets/scss/_index.scss";

import { allBntsMenu } from "./components/menuMobile/menu/index.js";

import { createCarousel } from "./components/carousel/container/script.js";

import { createAudio } from "./components/audio/index.js";

import { createGridSkills } from "./components/grid/index.js";

import { standardCardHardskills } from "../../src/utils/objects/hardskills/index.js";
import {
	generateGraph,
	displayFullInforrmation,
} from "./modules/charts/polarAreaChart.js";


import { createAllCardsForProjects } from "./components/projects/index.js";

import { standardCardProjects } from "../../src/utils/objects/projectsOBJ/index.js";

allBntsMenu();

createCarousel();

createAudio();

createGridSkills(standardCardHardskills);

//fazer verificação, pois a função abaixo é async e portanto deve ser necessario o uso do await para o tratamento da promisse.~

generateGraph();
displayFullInforrmation();

console.log("__________________________________\n" );
console.log("standardCardProjects", standardCardProjects);
console.log("___________________________________\n");
createAllCardsForProjects(standardCardProjects);

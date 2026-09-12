import "./components/main.scss";

import { allBntsMenu } from "./components/partials/menuMobile/menu/index.js";

import { createCarousel } from "./components/partials/carousel/container/script.js";

import { createAudio } from "./components/partials/audio/index.js";

import { createGridSkills } from "./components/partials/Grid/index.js";

import { standardCardHardskills } from "./components/partials/objects/hardskills/index.js";
import {
	generateGraph,
	displayFullInforrmation,
} from "./components/partials/charts/polarAreaChart.js";

// import "./components/main.css";

import { createAllCardsForProjects } from "./components/partials/projects/index.js";

import { standardCardProjects } from "./components/partials/objects/projectsOBJ/index.js";

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

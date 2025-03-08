import { allBntsMenu } from "./others/componets/menuMobile/menu/index.js";

import { createCarousel } from "./others/componets/carousel/container/script.js";

import { createAudio } from "./others/componets/audio/index.js";

import { createGridSkills } from "./others/componets/Grid/index.js";

import { standardCardHardskills } from "./others/componets/objects/hardskills/index.js";

import {
	generateGraph,
	displayFullInforrmation,
} from "./others/componets/charts/polarAreaChart.js";

allBntsMenu();

createCarousel();

createAudio();

createGridSkills(standardCardHardskills);

//fazer verificação, pois a função abaixo é async e portanto deve ser necessario o uso do await para o tratamento da promisse.~

generateGraph();
displayFullInforrmation();

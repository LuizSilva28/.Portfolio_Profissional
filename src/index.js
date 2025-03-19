import { allBntsMenu } from "../sass/others/components/menuMobile/menu/index.js";

import { createCarousel } from "../sass/others/components/carousel/container/script.js";

import { createAudio } from "../sass/others/components/audio/index.js";

import { createGridSkills } from "../sass/others/components/Grid/index.js";

import { standardCardHardskills } from "../sass/others/components/objects/hardskills/index.js";
import {
	generateGraph,
	displayFullInforrmation,
} from "../sass/others/components/charts/polarAreaChart.js";

import "../sass/main.css";

allBntsMenu();

createCarousel();

createAudio();

createGridSkills(standardCardHardskills);

//fazer verificação, pois a função abaixo é async e portanto deve ser necessario o uso do await para o tratamento da promisse.~

generateGraph();
displayFullInforrmation();

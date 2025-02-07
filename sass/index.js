import { allBntsMenu } from "./others/componets/menuMobile/menu/index.js";

import { createCarousel } from "./sass/others/componets/carousel/container/script.js";

import { createAudio } from "./others/componets/audio/index.js";

import { createGridSkills} from "./others/componets/Grid/index.js"

import {standardCardHardskills} from "./others/componets/objects/hardskills/index.js"
allBntsMenu();

createCarousel();

createAudio();

createGridSkills(standardCardHardskills);

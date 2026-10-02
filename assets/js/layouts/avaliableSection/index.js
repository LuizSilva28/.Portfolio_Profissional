/** @format */

import { StarRating } from "../../components/buttons/criarBnts";

const avaliableSection = document.querySelector("#container-stars");
const starRating = new StarRating();
starRating.renderStars(avaliableSection, 5);

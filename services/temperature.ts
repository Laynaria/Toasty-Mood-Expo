import { temperatureArray } from "../types/temperature.types";

const hot = require("../assets/temperature/hot.png");
const normal = require("../assets/temperature/normal.png");
const cold = require("../assets/temperature/cold.png");

const temperatureIcons: temperatureArray = [
  {
    id: 1,
    img: hot,
  },
  {
    id: 2,
    img: normal,
  },
  {
    id: 3,
    img: cold,
  },
];

export default temperatureIcons;

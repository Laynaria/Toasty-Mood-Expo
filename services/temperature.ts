import { ImageSourcePropType } from "react-native";
import { temperatureArray } from "../types/temperature.types";

const hot: ImageSourcePropType = require("../assets/temperature/hot.png");
const normal: ImageSourcePropType = require("../assets/temperature/normal.png");
const cold: ImageSourcePropType = require("../assets/temperature/cold.png");

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

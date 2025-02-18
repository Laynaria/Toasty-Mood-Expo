import { ImageSourcePropType } from "react-native";
import { weatherArray } from "../types/weather.type";

const sun: ImageSourcePropType = require("../assets/weather/sun.png");
const sunAndCloud: ImageSourcePropType = require("../assets/weather/sun-and-cloud.png");
const cloud: ImageSourcePropType = require("../assets/weather/cloud.png");
const rain: ImageSourcePropType = require("../assets/weather/rain.png");
const thunderAndRain: ImageSourcePropType = require("../assets/weather/thunder-and-rain.png");
const fog: ImageSourcePropType = require("../assets/weather/fog.png");
const snow: ImageSourcePropType = require("../assets/weather/snow.png");
const wind: ImageSourcePropType = require("../assets/weather/wind.png");

const weatherIcons: weatherArray = [
  { id: 1, img: sun },
  { id: 2, img: sunAndCloud },
  { id: 3, img: cloud },
  { id: 4, img: rain },
  { id: 5, img: thunderAndRain },
  { id: 6, img: fog },
  { id: 7, img: snow },
  { id: 8, img: wind },
];

export default weatherIcons;

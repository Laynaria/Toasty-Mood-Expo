const sun = require("../assets/weather/sun.png");
const sunAndCloud = require("../assets/weather/sun-and-cloud.png");
const cloud = require("../assets/weather/cloud.png");
const rain = require("../assets/weather/rain.png");
const thunderAndRain = require("../assets/weather/thunder-and-rain.png");
const fog = require("../assets/weather/fog.png");
const snow = require("../assets/weather/snow.png");
const wind = require("../assets/weather/wind.png");

type weather = {
  id: number;
  img: string;
};

type weatherArray = weather[];

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

const toastVeryGood = require("../assets/toasts/toast-very-good.png");
const jamToastVeryGood = require("../assets/toasts/toast-very-good-jam.png");

const toastOkay = require("../assets/toasts/toast-okay.png");
const jamToastOkay = require("../assets/toasts/toast-okay-jam.png");

const toastMid = require("../assets/toasts/toast-mid.png");
const jamToastMid = require("../assets/toasts/toast-mid-jam.png");

const toastBad = require("../assets/toasts/toast-bad.png");
const jamToastBad = require("../assets/toasts/toast-bad-jam.png");

const toastVeryBad = require("../assets/toasts/toast-very-bad.png");
const jamToastVeryBad = require("../assets/toasts/toast-very-bad-jam.png");

const basicMoods = [
  {
    id: 1,
    img: toastVeryGood,
    jamImg: jamToastVeryGood,
  },
  {
    id: 2,
    img: toastOkay,
    jamImg: jamToastOkay,
  },
  {
    id: 3,
    img: toastMid,
    jamImg: jamToastMid,
  },
  {
    id: 4,
    img: toastBad,
    jamImg: jamToastBad,
  },
  {
    id: 5,
    img: toastVeryBad,
    jamImg: jamToastVeryBad,
  },
];

const toastsMoods = [basicMoods, []];

export default toastsMoods;

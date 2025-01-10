const toastOkay = require("../assets/toasts/toast-okay.png");
const jamToastOkay = require("../assets/toasts/toast-okay-jam.png");

const toastVeryBad = require("../assets/toasts/toast-very-bad.png");
const jamToastVeryBad = require("../assets/toasts/toast-very-bad-jam.png");

const basicMoods = [
  {
    id: 1,
    img: toastOkay,
    jamImg: jamToastOkay,
  },
  {
    id: 2,
    img: toastOkay,
    jamImg: jamToastOkay,
  },
  {
    id: 3,
    img: toastOkay,
    jamImg: jamToastOkay,
  },
  {
    id: 4,
    img: toastVeryBad,
    jamImg: jamToastVeryBad,
  },
  {
    id: 5,
    img: toastVeryBad,
    jamImg: jamToastVeryBad,
  },
];

const toastsMoods = [basicMoods, []];

export default toastsMoods;

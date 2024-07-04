const toastOkay = require("../assets/toasts/toast-okay.png");
const toastVeryBad = require("../assets/toasts/toast-very-bad.png");

const basicMoods = [
  {
    id: 1,
    img: toastOkay,
  },
  {
    id: 2,
    img: toastOkay,
  },
  {
    id: 3,
    img: toastOkay,
  },
  {
    id: 4,
    img: toastVeryBad,
  },
  {
    id: 5,
    img: toastVeryBad,
  },
];

const toastsMoods = [basicMoods, []];

export default toastsMoods;

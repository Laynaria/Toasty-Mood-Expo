import { ToastsMoodsPictureObject } from "../types/toasts.types";

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

const toastVeryGood2 = require("../assets/toasts/toast2-very-good.png");
const jamToastVeryGood2 = require("../assets/toasts/toast2-very-good-jam.png");

const toastOkay2 = require("../assets/toasts/toast2-okay.png");
const jamToastOkay2 = require("../assets/toasts/toast2-okay-jam.png");

const toastMid2 = require("../assets/toasts/toast2-mid.png");
const jamToastMid2 = require("../assets/toasts/toast2-mid-jam.png");

const toastBad2 = require("../assets/toasts/toast2-bad.png");
const jamToastBad2 = require("../assets/toasts/toast2-bad-jam.png");

const toastVeryBad2 = require("../assets/toasts/toast2-very-bad.png");
const jamToastVeryBad2 = require("../assets/toasts/toast2-very-bad-jam.png");

const basicMoods: ToastsMoodsPictureObject[] = [
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

const alternativeMoods: ToastsMoodsPictureObject[] = [
  {
    id: 1,
    img: toastVeryGood2,
    jamImg: jamToastVeryGood2,
  },
  {
    id: 2,
    img: toastOkay2,
    jamImg: jamToastOkay2,
  },
  {
    id: 3,
    img: toastMid2,
    jamImg: jamToastMid2,
  },
  {
    id: 4,
    img: toastBad2,
    jamImg: jamToastBad2,
  },
  {
    id: 5,
    img: toastVeryBad2,
    jamImg: jamToastVeryBad2,
  },
];

const toastsMoods: ToastsMoodsPictureObject[][] = [
  basicMoods,
  alternativeMoods,
];

export default toastsMoods;

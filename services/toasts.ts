import { ImageSourcePropType } from "react-native";
import { ToastsMoodsPictureObject } from "@/types/toasts.types";

const toastVeryGood: ImageSourcePropType = require("@/assets/toasts/toast-very-good.png");
const jamToastVeryGood: ImageSourcePropType = require("@/assets/toasts/toast-very-good-jam.png");
const toastVeryGoodBitey: ImageSourcePropType = require("@/assets/toasts/toast-very-good-bitey.png");
const jamToastVeryGoodBitey: ImageSourcePropType = require("@/assets/toasts/toast-very-good-jam-bitey.png");

const toastOkay: ImageSourcePropType = require("@/assets/toasts/toast-okay.png");
const jamToastOkay: ImageSourcePropType = require("@/assets/toasts/toast-okay-jam.png");
const toastOkayBitey: ImageSourcePropType = require("@/assets/toasts/toast-okay-bitey.png");
const jamToastOkayBitey: ImageSourcePropType = require("@/assets/toasts/toast-okay-jam-bitey.png");

const toastMid: ImageSourcePropType = require("@/assets/toasts/toast-mid.png");
const jamToastMid: ImageSourcePropType = require("@/assets/toasts/toast-mid-jam.png");
const toastMidBitey: ImageSourcePropType = require("@/assets/toasts/toast-mid-bitey.png");
const jamToastMidBitey: ImageSourcePropType = require("@/assets/toasts/toast-mid-jam-bitey.png");

const toastBad: ImageSourcePropType = require("@/assets/toasts/toast-bad.png");
const jamToastBad: ImageSourcePropType = require("@/assets/toasts/toast-bad-jam.png");
const toastBadBitey: ImageSourcePropType = require("@/assets/toasts/toast-bad-bitey.png");
const jamToastBadBitey: ImageSourcePropType = require("@/assets/toasts/toast-bad-jam-bitey.png");

const toastVeryBad: ImageSourcePropType = require("@/assets/toasts/toast-very-bad.png");
const jamToastVeryBad: ImageSourcePropType = require("@/assets/toasts/toast-very-bad-jam.png");
const toastVeryBadBitey: ImageSourcePropType = require("@/assets/toasts/toast-very-bad-bitey.png");
const jamToastVeryBadBitey: ImageSourcePropType = require("@/assets/toasts/toast-very-bad-jam-bitey.png");

const toastVeryGood2: ImageSourcePropType = require("@/assets/toasts/toast2-very-good.png");
const jamToastVeryGood2: ImageSourcePropType = require("@/assets/toasts/toast2-very-good-jam.png");
const toastVeryGoodBitey2: ImageSourcePropType = require("@/assets/toasts/toast2-very-good-bitey.png");
const jamToastVeryGoodBitey2: ImageSourcePropType = require("@/assets/toasts/toast2-very-good-jam-bitey.png");

const toastOkay2: ImageSourcePropType = require("@/assets/toasts/toast2-okay.png");
const jamToastOkay2: ImageSourcePropType = require("@/assets/toasts/toast2-okay-jam.png");
const toastOkayBitey2: ImageSourcePropType = require("@/assets/toasts/toast2-okay-bitey.png");
const jamToastOkayBitey2: ImageSourcePropType = require("@/assets/toasts/toast2-okay-jam-bitey.png");

const toastMid2: ImageSourcePropType = require("@/assets/toasts/toast2-mid.png");
const jamToastMid2: ImageSourcePropType = require("@/assets/toasts/toast2-mid-jam.png");
const toastMidBitey2: ImageSourcePropType = require("@/assets/toasts/toast2-mid-bitey.png");
const jamToastMidBitey2: ImageSourcePropType = require("@/assets/toasts/toast2-mid-jam-bitey.png");

const toastBad2: ImageSourcePropType = require("@/assets/toasts/toast2-bad.png");
const jamToastBad2: ImageSourcePropType = require("@/assets/toasts/toast2-bad-jam.png");
const toastBadBitey2: ImageSourcePropType = require("@/assets/toasts/toast2-bad-bitey.png");
const jamToastBadBitey2: ImageSourcePropType = require("@/assets/toasts/toast2-bad-jam-bitey.png");

const toastVeryBad2: ImageSourcePropType = require("@/assets/toasts/toast2-very-bad.png");
const jamToastVeryBad2: ImageSourcePropType = require("@/assets/toasts/toast2-very-bad-jam.png");
const toastVeryBadBitey2: ImageSourcePropType = require("@/assets/toasts/toast2-very-bad-bitey.png");
const jamToastVeryBadBitey2: ImageSourcePropType = require("@/assets/toasts/toast2-very-bad-jam-bitey.png");

const basicMoods: ToastsMoodsPictureObject[] = [
  {
    id: 1,
    img: toastVeryGood,
    jamImg: jamToastVeryGood,
    biteyImg: toastVeryGoodBitey,
    biteyJamImg: jamToastVeryGoodBitey,
  },
  {
    id: 2,
    img: toastOkay,
    jamImg: jamToastOkay,
    biteyImg: toastOkayBitey,
    biteyJamImg: jamToastOkayBitey,
  },
  {
    id: 3,
    img: toastMid,
    jamImg: jamToastMid,
    biteyImg: toastMidBitey,
    biteyJamImg: jamToastMidBitey,
  },
  {
    id: 4,
    img: toastBad,
    jamImg: jamToastBad,
    biteyImg: toastBadBitey,
    biteyJamImg: jamToastBadBitey,
  },
  {
    id: 5,
    img: toastVeryBad,
    jamImg: jamToastVeryBad,
    biteyImg: toastVeryBadBitey,
    biteyJamImg: jamToastVeryBadBitey,
  },
];

const alternativeMoods: ToastsMoodsPictureObject[] = [
  {
    id: 1,
    img: toastVeryGood2,
    jamImg: jamToastVeryGood2,
    biteyImg: toastVeryGoodBitey2,
    biteyJamImg: jamToastVeryGoodBitey2,
  },
  {
    id: 2,
    img: toastOkay2,
    jamImg: jamToastOkay2,
    biteyImg: toastOkayBitey2,
    biteyJamImg: jamToastOkayBitey2,
  },
  {
    id: 3,
    img: toastMid2,
    jamImg: jamToastMid2,
    biteyImg: toastMidBitey2,
    biteyJamImg: jamToastMidBitey2,
  },
  {
    id: 4,
    img: toastBad2,
    jamImg: jamToastBad2,
    biteyImg: toastBadBitey2,
    biteyJamImg: jamToastBadBitey2,
  },
  {
    id: 5,
    img: toastVeryBad2,
    jamImg: jamToastVeryBad2,
    biteyImg: toastVeryBadBitey2,
    biteyJamImg: jamToastVeryBadBitey2,
  },
];

const toastsMoods: ToastsMoodsPictureObject[][] = [
  basicMoods,
  alternativeMoods,
];

export default toastsMoods;

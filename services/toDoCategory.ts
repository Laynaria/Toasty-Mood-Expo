import { toDoCategoryType } from "@/types/todo.types";

const bedIcon = require("@/assets/todo-icons/bed.png");
const sandwichIcon = require("@/assets/todo-icons/sandwich.png");
const alarmIcon = require("@/assets/todo-icons/alarm.png");

const toDoCategory: toDoCategoryType[] = [
  {
    id: 0,
    icon: bedIcon,
    name: "Sleep",
  },
  {
    id: 1,
    icon: sandwichIcon,
    name: "Food",
  },
  {
    id: 2,
    icon: alarmIcon,
    name: "Timed Tasks",
  },
];

export default toDoCategory;

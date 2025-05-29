import { toDoCategoryType } from "@/types/todo.types";

const sandwichIcon = require("@/assets/todo-icons/sandwich.png");
const schoolBagIcon = require("@/assets/todo-icons/schoolbag.png");
const briefCaseIcon = require("@/assets/todo-icons/briefcase.png");
const stethoscopeIcon = require("@/assets/todo-icons/stethoscope.png");
const broomIcon = require("@/assets/todo-icons/broom.png");
const houseIcon = require("@/assets/todo-icons/house.png");
const dogIcon = require("@/assets/todo-icons/dog.png");
const tennisIcon = require("@/assets/todo-icons/tennis.png");

const toDoCategory: toDoCategoryType[] = [
  {
    id: 0,
    icon: sandwichIcon,
    name: "Food",
  },
  {
    id: 1,
    icon: stethoscopeIcon,
    name: "Health",
  },
  {
    id: 2,
    icon: broomIcon,
    name: "Housework",
  },
  {
    id: 3,
    icon: tennisIcon,
    name: "Sport",
  },
  {
    id: 4,
    icon: houseIcon,
    name: "Family",
  },
  {
    id: 5,
    icon: dogIcon,
    name: "Pets",
  },
  {
    id: 6,
    icon: briefCaseIcon,
    name: "Work",
  },
  {
    id: 7,
    icon: schoolBagIcon,
    name: "Studies",
  },
];

export default toDoCategory;

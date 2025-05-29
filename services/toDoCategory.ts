import { toDoCategoryType } from "@/types/todo.types";

const sandwichIcon = require("@/assets/todo-icons/sandwich.png");

const toDoCategory: toDoCategoryType[] = [
  {
    id: 0,
    icon: sandwichIcon,
    name: "Food",
  },
  {
    id: 1,
    icon: sandwichIcon,
    name: "Health",
  },
  {
    id: 2,
    icon: sandwichIcon,
    name: "Housework",
  },
  {
    id: 3,
    icon: sandwichIcon,
    name: "Sport",
  },
  {
    id: 4,
    icon: sandwichIcon,
    name: "Family",
  },
  {
    id: 5,
    icon: sandwichIcon,
    name: "Pets",
  },
  {
    id: 6,
    icon: sandwichIcon,
    name: "Work",
  },
  {
    id: 7,
    icon: sandwichIcon,
    name: "Studies",
  },
];

export default toDoCategory;

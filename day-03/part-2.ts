import { ItemPriorities } from "../dist/day-03/item-priorities";
import path from "path";
import { Reader } from "../shared/reader";

const FILE_PATH = path.resolve(__dirname, "..", "..", "day-03");
const FILE_NAME = "input.txt";
const GROUP_SIZE = 3;

const reader = Reader.create(FILE_PATH, FILE_NAME);
const allItems: string = reader.run();

const eachRucksackItems = allItems.split("\n");
const elfsGroupRucksackItems = eachRucksackItems
  .map((_, index) =>
    index % GROUP_SIZE ? [] : eachRucksackItems.slice(index, index + GROUP_SIZE)
  )
  .filter((group) => group.length !== 0);

let prioritiesTotal = 0;
elfsGroupRucksackItems.forEach((group, index) => {
  const [firstElf, secondElf, thirdElf] = group;
  const firstElfItems = firstElf.split("");
  const secondElfItems = secondElf.split("");
  const thirdElfItems = thirdElf.split("");

  const [repeatedItem] = firstElfItems.filter(
    (firstElfItem) =>
      secondElfItems.find((secondElfItem) => firstElfItem === secondElfItem) &&
      thirdElfItems.find((thirdElfItem) => firstElfItem === thirdElfItem)
  );

  const priority = ItemPriorities[repeatedItem];
  prioritiesTotal += priority;
});

console.log(prioritiesTotal);

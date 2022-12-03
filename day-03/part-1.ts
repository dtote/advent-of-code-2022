import { ItemPriorities } from "../dist/day-03/item-priorities";
import path from "path";
import { Reader } from "../shared/reader";

const FILE_PATH = path.resolve(__dirname, "..", "..", "day-03");
const FILE_NAME = "input.txt";

const reader = Reader.create(FILE_PATH, FILE_NAME);
const allItems: string = reader.run();

const eachRucksackItems = allItems.split("\n");
let prioritiesTotal = 0;

eachRucksackItems.map((rucksackItems) => {
  const middle = rucksackItems.length / 2;
  const splittedItems = rucksackItems.split("");
  const [firstMiddle, secondMiddle] = [
    splittedItems.slice(0, middle),
    splittedItems.slice(middle),
  ];
  const [repeatedItem] = firstMiddle.filter((firstMiddleItem) =>
    secondMiddle.find(
      (seccondMiddleItem) => firstMiddleItem === seccondMiddleItem
    )
  );
  const priority = ItemPriorities[repeatedItem];
  prioritiesTotal += priority;
});

console.log(prioritiesTotal);

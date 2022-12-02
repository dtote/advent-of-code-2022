import path from "path";
import { Reader } from "../shared/reader";

function separateElfCalories(caloriesList: string) {
  return caloriesList.split("\n\n");
}

function numericCaloriesFrom(elfCaloriesString: string) {
  const splittedElfCalories = elfCaloriesString.split("\n");

  return splittedElfCalories.map(Number);
}

function caloriesTotal(elfCalories: number[]) {
  return elfCalories.reduce((total, current) => total + current);
}

function allElfsTotalCalories(eachElfCalories: string[]) {
  return eachElfCalories.map((elfCalories) => {
    const elfNumericCalories = numericCaloriesFrom(elfCalories);

    return caloriesTotal(elfNumericCalories);
  });
}

const FILE_PATH = path.resolve(__dirname, "..", "..", "day-01");
const FILE_NAME = "input.txt";

const reader = Reader.create(FILE_PATH, FILE_NAME);
const allCaloriesList: string = reader.run();

// Part 1
const eachElfCalories: string[] = separateElfCalories(allCaloriesList);
const eachElfTotalCalories: number[] = allElfsTotalCalories(eachElfCalories);
const elfWithMaxCalories = Math.max(...eachElfTotalCalories);
console.log(elfWithMaxCalories);

// Part 2

function orderDesc(calories: number[]) {
  return calories.sort((a, b) => b - a);
}

const eachElfTotalCaloriesDescOrdered = orderDesc(eachElfTotalCalories);
const topThreeElfsWithMostCalories = eachElfTotalCaloriesDescOrdered.slice(
  0,
  3
);
const topThreeElfsTotalCalories = caloriesTotal(topThreeElfsWithMostCalories);

console.log(topThreeElfsTotalCalories);

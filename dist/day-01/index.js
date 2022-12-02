"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const reader_1 = require("../shared/reader");
function separateElfCalories(caloriesList) {
    return caloriesList.split("\n\n");
}
function numericCaloriesFrom(elfCaloriesString) {
    const splittedElfCalories = elfCaloriesString.split("\n");
    return splittedElfCalories.map(Number);
}
function caloriesTotal(elfCalories) {
    return elfCalories.reduce((total, current) => total + current);
}
function allElfsTotalCalories(eachElfCalories) {
    return eachElfCalories.map((elfCalories) => {
        const elfNumericCalories = numericCaloriesFrom(elfCalories);
        return caloriesTotal(elfNumericCalories);
    });
}
const FILE_PATH = path_1.default.resolve(__dirname, "..", "..", "day-01");
const FILE_NAME = "input.txt";
const reader = reader_1.Reader.create(FILE_PATH, FILE_NAME);
const allCaloriesList = reader.run();
// Part 1
const eachElfCalories = separateElfCalories(allCaloriesList);
const eachElfTotalCalories = allElfsTotalCalories(eachElfCalories);
const elfWithMaxCalories = Math.max(...eachElfTotalCalories);
console.log(elfWithMaxCalories);
// Part 2
function orderDesc(calories) {
    return calories.sort((a, b) => b - a);
}
const eachElfTotalCaloriesDescOrdered = orderDesc(eachElfTotalCalories);
const topThreeElfsWithMostCalories = eachElfTotalCaloriesDescOrdered.slice(0, 3);
const topThreeElfsTotalCalories = caloriesTotal(topThreeElfsWithMostCalories);
console.log(topThreeElfsTotalCalories);

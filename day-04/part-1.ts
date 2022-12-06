import { ItemPriorities } from "../dist/day-03/item-priorities";
import path from "path";
import { Reader } from "../shared/reader";

const FILE_PATH = path.resolve(__dirname, "..", "..", "day-04");
const FILE_NAME = "input.txt";

const reader = Reader.create(FILE_PATH, FILE_NAME);
const input: string = reader.run();

const elfPairAssignments = input.split("\n")
const splittedElfPairAssignments = elfPairAssignments.map((elfPairSection) => elfPairSection.split(",").map((section) => section.split("-")))

let assignmentPairsFullyContainingTheOther = 0 

splittedElfPairAssignments.forEach((splittedElfPairAssignment) => {
	const [firstElfAssignments, secondElfAssignments] = splittedElfPairAssignment
	const [firstElfAssignmentsLowerLimit, firstElfAssignmentsUpperLimit] = firstElfAssignments.map(Number)
	const [secondElfAssignmentsLowerLimit, secondElfAssignmentsUpperLimit] = secondElfAssignments.map(Number)
	
	const firstRangeFullyContainsSecondRange = firstElfAssignmentsLowerLimit <= secondElfAssignmentsLowerLimit && firstElfAssignmentsUpperLimit >= secondElfAssignmentsUpperLimit;
	
	const secondRangeFullyContainsFirstRange = secondElfAssignmentsLowerLimit <= firstElfAssignmentsLowerLimit && secondElfAssignmentsUpperLimit >= firstElfAssignmentsUpperLimit;

	if (firstRangeFullyContainsSecondRange || secondRangeFullyContainsFirstRange) {
		assignmentPairsFullyContainingTheOther += 1
	}
})

console.log(assignmentPairsFullyContainingTheOther)
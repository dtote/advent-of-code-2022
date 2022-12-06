import path from "path";
import { Reader } from "../shared/reader";

const FILE_PATH = path.resolve(__dirname, "..", "..", "day-05");
const FILE_NAME = "input.txt";

const reader = Reader.create(FILE_PATH, FILE_NAME);
const input: string = reader.run();

const [rawElements, rawInstructions] = input.split("\n\n")
const instructions = rawInstructions.split("\n").map((instruction) => instruction.replace(/[^0-9]/g, " ").replace(/ +/g, " ").split(" ").filter(Boolean).map(Number))
const elementsAndColumns = rawElements.split("\n")
const columnsIndex = elementsAndColumns.length - 1;
const elementsRows = elementsAndColumns.slice(0, columnsIndex)
const columns = elementsAndColumns[columnsIndex]
const columnsRowCharacters = columns.split("");

const eachRow = columns.replace(/ +/g, "").split("")
const columnItems: Record<string, string> = Object.fromEntries(eachRow.map((element) => ([[element], ""])))

// Using an object as a stack for the elements on each row
columnsRowCharacters.forEach((character, columnIndex) => {
	const isColumn = character.match(/[0-9]/)
	if (!isColumn) return

	elementsRows.forEach((row) => {
		const elementAtColumnIndex = row.at(columnIndex)
		if (!elementAtColumnIndex || !elementAtColumnIndex.match(/[A-Z]/)) return

		columnItems[character] += elementAtColumnIndex
	})
})

instructions.forEach(([elementsToMove, from, to]) => {
	columnItems[to] = columnItems[from].slice(0, elementsToMove).split("").reverse().join("") + columnItems[to]
	columnItems[from] = columnItems[from].slice(elementsToMove)
})

const finalMessage = Object.values(columnItems).map(([firstCharacter]) => firstCharacter).join("")
console.log({  finalMessage } )
import path from "path";
import { Reader } from "../shared/reader";
import { ChoicesScore } from "./shared/enums/choices-score";
import { ElfChoices } from "./shared/enums/elf-choices";
import { PlayerChoices } from "./shared/enums/player-choices";
import { PlayerScores } from "./shared/enums/player-scores";
import { splitRounds } from "./shared/split-rounds";

const FILE_PATH = path.resolve(__dirname, "..", "..", "day-02");
const FILE_NAME = "input.txt";

const reader = Reader.create(FILE_PATH, FILE_NAME);

const scores: Record<string, Record<string, number>> = {
  [ElfChoices.A]: {
    [PlayerChoices.X]: PlayerScores.LOSER + ChoicesScore.Z,
    [PlayerChoices.Y]: PlayerScores.DRAW + ChoicesScore.X,
    [PlayerChoices.Z]: PlayerScores.WINNER + ChoicesScore.Y,
  },
  [ElfChoices.B]: {
    [PlayerChoices.X]: PlayerScores.LOSER + ChoicesScore.X,
    [PlayerChoices.Y]: PlayerScores.DRAW + ChoicesScore.Y,
    [PlayerChoices.Z]: PlayerScores.WINNER + ChoicesScore.Z,
  },
  [ElfChoices.C]: {
    [PlayerChoices.X]: PlayerScores.LOSER + ChoicesScore.Y,
    [PlayerChoices.Y]: PlayerScores.DRAW + ChoicesScore.Z,
    [PlayerChoices.Z]: PlayerScores.WINNER + ChoicesScore.X,
  },
};

const allRounds: string = reader.run();
const splittedRounds = splitRounds(allRounds);

let totalScore = 0;
splittedRounds.forEach((round) => {
  const roundChoices = round.split(" ");
  const [elfChoice, myChoise] = roundChoices;

  totalScore += scores[elfChoice][myChoise];
});

console.log(totalScore);

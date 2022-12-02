import { readFileSync } from "fs";
import path from "path";

export class Reader {
  constructor(readonly filepath: string, readonly filename: string) {}

  static create(filepath: string, filename: string) {
    return new Reader(filepath, filename);
  }

  run() {
    const buffer = readFileSync(path.resolve(this.filepath, this.filename));

    return buffer.toString();
  }
}

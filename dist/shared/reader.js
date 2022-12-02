"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reader = void 0;
const fs_1 = require("fs");
const path_1 = __importDefault(require("path"));
class Reader {
    constructor(filepath, filename) {
        this.filepath = filepath;
        this.filename = filename;
    }
    static create(filepath, filename) {
        return new Reader(filepath, filename);
    }
    run() {
        const buffer = (0, fs_1.readFileSync)(path_1.default.resolve(this.filepath, this.filename));
        return buffer.toString();
    }
}
exports.Reader = Reader;

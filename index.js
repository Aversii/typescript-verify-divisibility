"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
let greetings = () => {
    console.log("hello, this is a program which shows a divisibility of a picked number");
};
let getNumberAndConvertToArray = () => {
    const result = prompt("Pick a number ");
    return result === null || result === void 0 ? void 0 : result.split("").map(item => Number(item));
};
greetings();
console.log(getNumberAndConvertToArray());

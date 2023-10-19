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
    const result = prompt("Pick a number  ");
    return result === null || result === void 0 ? void 0 : result.split("").map(item => Number(item));
};
let veriFyDivisibilityBy2 = (arrayOfAbsolut) => {
    if (arrayOfAbsolut && arrayOfAbsolut[arrayOfAbsolut.length - 1] % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
};
let veriFyDivisibilityBy3 = (arrayOfAbsolut) => {
    if (arrayOfAbsolut && arrayOfAbsolut.reduce((acc, value) => acc + value, 0) % 3 === 0) {
        return true;
    }
    else {
        return false;
    }
};
greetings();
let verifyAll = () => {
    let arrayOfAbsolut = getNumberAndConvertToArray();
    if (veriFyDivisibilityBy2(arrayOfAbsolut) === true) {
        console.log("It is Divisible by 2");
    }
    else {
        console.log("It not is Divisible by 2");
    }
    if (veriFyDivisibilityBy3(arrayOfAbsolut) === true) {
        console.log("It is Divisible by 3");
    }
    else {
        console.log("It not is Divisible by 3");
    }
};
verifyAll();

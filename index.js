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
let get2lasts = (arrayOfAbsolut) => {
    const result = arrayOfAbsolut.slice(-2);
    return result;
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
let veriFyDivisibilityBy4 = (arrayOfAbsolut) => {
    const getLast2Digits = get2lasts(arrayOfAbsolut);
    const last2DigitsNumber = Number(getLast2Digits.join(''));
    if (arrayOfAbsolut && arrayOfAbsolut.length > 2 && arrayOfAbsolut[arrayOfAbsolut.length - 1] === 0 && arrayOfAbsolut[arrayOfAbsolut.length - 2] === 0 || arrayOfAbsolut.length > 2 && last2DigitsNumber % 4 === 0) {
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
    if (veriFyDivisibilityBy4(arrayOfAbsolut) === true) {
        console.log("It is Divisible by 4");
    }
    else {
        console.log("It not is Divisible by 4");
    }
};
verifyAll();

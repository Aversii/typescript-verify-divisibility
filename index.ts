
import promptSync from 'prompt-sync';
const prompt = promptSync();

let greetings = ()=>{
    console.log("hello, this is a program which shows a divisibility of a picked number")
}

let getNumberAndConvertToArray=  ():number[] | null|undefined => {
    const result = prompt("Pick a number ")
    return result?.split("").map(item=>Number(item))
}

greetings()
console.log(getNumberAndConvertToArray())

import promptSync from 'prompt-sync';
const prompt = promptSync();

let greetings = ()=>{
    console.log("hello, this is a program which shows a divisibility of a picked number")
}

let getNumberAndConvertToArray=  ():number[] | null|undefined => {
    const result = prompt("Pick a number  ")
    return result?.split("").map(item=>Number(item))
}

let get2lasts =(arrayOfAbsolut:any):any=>{
    const result = arrayOfAbsolut.slice(-2)
    return result
}


let veriFyDivisibilityBy2 = (arrayOfAbsolut:any)=>{
    if(arrayOfAbsolut && arrayOfAbsolut[arrayOfAbsolut.length-1]%2===0){
        return true
    }else{           
        return false
    }
}

let veriFyDivisibilityBy3 = (arrayOfAbsolut:any)=>{
    if(arrayOfAbsolut && arrayOfAbsolut.reduce((acc:any, value:any)=>acc+value,0)%3===0){
        return true
    }else{           
        return false
    }
}

let veriFyDivisibilityBy4 = (arrayOfAbsolut:any)=>{
    const getLast2Digits = get2lasts(arrayOfAbsolut)
    const last2DigitsNumber = Number(getLast2Digits.join(''));
    if(arrayOfAbsolut && arrayOfAbsolut.length>2 && arrayOfAbsolut[arrayOfAbsolut.length-1]===0 && arrayOfAbsolut[arrayOfAbsolut.length-2]===0 || arrayOfAbsolut.length >2 && last2DigitsNumber %4===0){
        return true
    }else{           
        return false
    }
}


greetings()

let verifyAll= () =>{
    let arrayOfAbsolut = getNumberAndConvertToArray()
    if(veriFyDivisibilityBy2(arrayOfAbsolut)===true){ console.log("It is Divisible by 2")}else{ console.log("It not is Divisible by 2")}
    if(veriFyDivisibilityBy3(arrayOfAbsolut)===true){ console.log("It is Divisible by 3")}else{ console.log("It not is Divisible by 3")}
    if(veriFyDivisibilityBy4(arrayOfAbsolut)===true){ console.log("It is Divisible by 4")}else{ console.log("It not is Divisible by 4")}
}

verifyAll()
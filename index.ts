
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

function isDivisibleWithoutRemainder(a:number, b:number) {    
    return a === Math.floor(a / b) * b? true:false
}



let veriFyDivisibilityBy2 = (arrayOfAbsolut:any)=>{
    if(arrayOfAbsolut && isDivisibleWithoutRemainder(arrayOfAbsolut[arrayOfAbsolut.length-1],2)){
        return true
    }else{           
        return false
    }
}

let veriFyDivisibilityBy3 = (arrayOfAbsolut:any)=>{
    if(arrayOfAbsolut && isDivisibleWithoutRemainder(arrayOfAbsolut.reduce((acc:any, value:any)=>acc+value,0),3) ){
        return true
    }else{           
        return false
    }
}

let veriFyDivisibilityBy4 = (arrayOfAbsolut:any)=>{
    const getLast2Digits = get2lasts(arrayOfAbsolut)
    const last2DigitsNumber = Number(getLast2Digits.join(''));
    if(arrayOfAbsolut && arrayOfAbsolut.length>2 && arrayOfAbsolut[arrayOfAbsolut.length-1]===0 && arrayOfAbsolut[arrayOfAbsolut.length-2]===0 || isDivisibleWithoutRemainder(last2DigitsNumber,4)){
        return true
    }else{           
        return false
    }
}

let veriFyDivisibilityBy5 = (arrayOfAbsolut:any)=>{
    if(arrayOfAbsolut && arrayOfAbsolut[arrayOfAbsolut.length-1]===5 || arrayOfAbsolut && arrayOfAbsolut[arrayOfAbsolut.length-1]===0){
        return true
    }else{           
        return false
    }
}

let veriFyDivisibilityBy6 = (arrayOfAbsolut:any)=>{
    if(veriFyDivisibilityBy2(arrayOfAbsolut) ===true && veriFyDivisibilityBy3(arrayOfAbsolut) ===true ){
        return true
    }else{           
        return false
    }
}


greetings()

let verifyAll= () =>{
    let arrayOfAbsolut = getNumberAndConvertToArray()
    veriFyDivisibilityBy2(arrayOfAbsolut)===true? console.log("It is Divisible by 2") : console.log("It not is Divisible by 2")
    veriFyDivisibilityBy3(arrayOfAbsolut)===true? console.log("It is Divisible by 3") : console.log("It not is Divisible by 3")
    veriFyDivisibilityBy4(arrayOfAbsolut)===true? console.log("It is Divisible by 4") : console.log("It not is Divisible by 4")
    veriFyDivisibilityBy5(arrayOfAbsolut)===true? console.log("It is Divisible by 5") : console.log("It not is Divisible by 5")
    veriFyDivisibilityBy6(arrayOfAbsolut)===true? console.log("It is Divisible by 6") : console.log("It not is Divisible by 6")

}

verifyAll()
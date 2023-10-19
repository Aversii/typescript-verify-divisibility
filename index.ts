
import promptSync from 'prompt-sync';
const prompt = promptSync();

let greetings = ()=>{
    console.log("hello, this is a program which shows a divisibility of a picked number")
}

let getNumberAndConvertToArray=  ():number[] | null|undefined => {
    const result = prompt("Pick a number  ")
    return result?.split("").map(item=>Number(item))
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



greetings()

let verifyAll= () =>{
    let arrayOfAbsolut = getNumberAndConvertToArray()
    if(veriFyDivisibilityBy2(arrayOfAbsolut)===true){ console.log("It is Divisible by 2")}else{ console.log("It not is Divisible by 2")}
    if(veriFyDivisibilityBy3(arrayOfAbsolut)===true){ console.log("It is Divisible by 3")}else{ console.log("It not is Divisible by 3")}
}

verifyAll()
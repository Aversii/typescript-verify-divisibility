
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
        console.log("é divisivel por 2")
    }else{    console.log("não é divisivel por 2")
    }
}

let veriFyDivisibilityBy3 = (arrayOfAbsolut:any)=>{
    if(arrayOfAbsolut && arrayOfAbsolut.reduce((acc:any, value:any)=>acc+value,0)%3===0){
        console.log("é divisivel por 3")
    }else{    console.log("não é divisivel por 3")
    }
}


greetings()

let verifyAll= () =>{
    let arrayOfAbsolut = getNumberAndConvertToArray()
    veriFyDivisibilityBy2(arrayOfAbsolut)
    veriFyDivisibilityBy3(arrayOfAbsolut)
}

verifyAll()
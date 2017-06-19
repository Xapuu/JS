// Draw a triangle
function First(){
    for(let i = 1; i<=Number(arguments[0]);i++){
        console.log("*".repeat(i))
    
    }
    if(arguments[0]>1){
        for(let i=1; i<arguments[0];i++){
            console.log(("*".repeat(arguments[0]-i)))
        }
    }
    
}

First(5);

// Draw square

function Second(){
    for(let i = 1;i<= arguments[0];i++){
        console.log("* ".repeat(arguments[0]))
    }
}
Second(1)

// Palindrome

function Third(){
    console.log( arguments[0]==arguments[0].split("").reverse().join(""))
}

Third("racecar")

// Get day of the week

function Fourth(){
let days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
    console.log(days.indexOf(arguments[0])>-1?
    days.indexOf(arguments[0])+1:"error")

}

Fourth("Monday");

// Calculator

function Fifth () {
    let leftOperand = arguments[0]
    let rightOperand = arguments[1]
    let operator = arguments[2]

    let answer=0;

    switch(operator){
        case "+":
        answer=leftOperand+rightOperand
        break
        case "/":
        answer=leftOperand/rightOperand
        break
        case "*":
        answer= leftOperand*rightOperand
        break
        case "-":
        answer= leftOperand-rightOperand
        break
        default:
        answer = "error"
        break
    }

    console.log(answer);    
}

Fifth(5,6,"-")

// Aggregate elems

function Sixth(){

        console.log(arguments[0].reduce((a,b)=>{
            return a+b
        },0)+"\n"+(arguments[0].reduce((a,b)=>{
            return a+1/b
        },0)+"\n"+arguments[0].join(""))
        )
}

Sixth([1,2,3])

// Words Upper

function Seventh(){    
   console.log(arguments[0].split(/\W+/g).filter(x=>{
       return x!=""
   }).join(", ").toUpperCase())
}

Seventh('Hi, how are you?')


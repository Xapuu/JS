// split string and print its elems
function First(){
    arguments[0].split("").map((x,index)=>console.log("str["+index+"] -> "+x))
}
First('Hello, World!')


// concatanate an reverse
function Second(){
console.log(
arguments[0].reduce((acc,cur)=>{
    return acc.concat(cur)
}).split("").reverse().join(""))
}
Second(['I', 'am', 'student'])

// count of occurance  !! broken

function Third(separator,text){
    let sep = separator
    let txt = text
    let counter = 0;
    for(let i = 0 ; i<=txt.length-sep.length;i++){
        if(txt.substring(i,i+sep.length)==sep){
            counter++
        }
    }
    console.log(counter)
}
Third('1','Th12312 123 2 34 2.')

// extreact txt

function Fourth(){
let mychars = arguments[0].split("")
let counter=0
let solution =[]
while(mychars.length>counter){
    let openParents=0
    let closingParents=0
    let tempString=""
    if(mychars[counter]=='('&&mychars.length>counter){
        openParents++
        counter++
        while(closingParents!=openParents){
            if(mychars[counter]==')'){
                closingParents++
            }
            if(mychars[counter]=='('){
                openParents++
            }
        tempString+=(mychars[counter])
        counter++
        
    }
    solution.push(tempString.slice(0,tempString.length-1))
}
counter++
}
console.log(solution.join(", "))
}


function Fourth4(){

let wordsArr = []
let counter=0
let tracker = false
let layers =0
let curString = ""

arguments[0].split("").map(x=>{
    
    if(x==')'){
        layers--
        if(layers==0){
        wordsArr.push(curString)
        curString=""
        tracker=false
        }
    }
    if(tracker){
        curString+=x
    }
    if(x=='('){
        layers++
        tracker=true
        
    }
})

console.log(wordsArr.join(', '))
}

Fourth4('(Bulgarian brandy)(!@#$%^&*(asdsad)_+)')

// read from list

function Fifth(){
let wordRegex = new RegExp(/((([a-zA-Z!@#$%^&*]+)+\s+([a-zA-Z!@#$%^&*]+)+\s+([a-zA-Z!@#$%^&*])+\s+([a-zA-Z!@#$%^&*]))|(([a-zA-Z!@#$%^&*]+)+\s+([a-zA-Z!@#$%^&*]+)+\s+([a-zA-Z!@#$%^&*]+))|(([a-zA-Z!@#$%^&*]+)+\s+([a-zA-Z!@#$%^&*]+))|([a-zA-Z!@#$%^&*]+))/,"g")
let numRegex = new RegExp(/(\d+)/,"g")
console.log(arguments[0].reduce((acc,cur)=>{
    return acc.concat(cur)
}).match(wordRegex).join(", ")
)
console.log(arguments[0].reduce((acc,cur)=>{
    return acc.concat(cur.trim())
}).match(numRegex).reduce((acc,x)=>{
    return Number(acc)+Number(x)
})
)
}  

Fifth(['| S o f i a           | 300',
 '| Veliko Tarnovo  | 500',
 '| Yambol          | 275']
)

// returant bill

function Sixth(){

    console.log("You purchased "+arguments[0].filter((x,index)=>{
        return index%2==0?true:false
    }).join(", ")+" for a total sum of "+arguments[0].reduce((acc,x,index)=>{
        if(index%2==1){
            return acc + Number(x)
        }else{
            return acc
        }
    },0))
}

Sixth(['Beer Zagorka', '2.65', 'Tripe soup', '7.80','Lasagna', '5.69'])

// Usernames 

function Seventh(){

let solution = []

arguments[0].map(x=>{

    let result = ""
    let firstName = x.substring(0,x.lastIndexOf("@"))

    let firstChar = x.substring(x.lastIndexOf("@")+1,x.lastIndexOf("@")+2)

    let allTheRest=""

    for(let i = 0 ; i<x.length; i++){
        if(x.charAt(i)=='.'){
            allTheRest+=x.charAt(i+1)
        }
    }

    result+=firstName+"."+firstChar+allTheRest

    solution.push(result)

})
console.log(solution.join(", "))
}

Seventh(['pe@s@hoo@gmail.a.b.c@om.', 'todor_43@mail.dir.bg', 'foo@bar.com'])
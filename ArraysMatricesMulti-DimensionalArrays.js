// print arr with given delimeter

function First(){
    let sep = arguments[0][arguments[0].length-1]
    let sol=[]
    for(let i = 0; i<arguments[0].length-1;i++){
        sol.push(arguments[0][i])
    }
    console.log(sol.join(sep))
}

First(["word","some text","somemore text", "_"])

// put every n elem 

function Second (input){
    let step = input[input.length-1]
    input.pop();
   
    input.map((x,index)=>{
        if(Number(index)%step===0){
            console.log(x)
        }
    })  
}

Second([5,20,20,4,20,2])

//  add remove actions

function Third(){
    let args = arguments[0]
    let sol=[]
    let initialNum=1

    args.map(x=>{
        if(x==="add"){
            sol.push(initialNum);
        }
        if(x=="remove"&&sol.length!==0){
            sol.pop();
        }
        initialNum++;
    })
sol.length===0?console.log("Empty"):sol.map(x=>console.log(x))
}

Third(["remove","remove","remove"])

// rotate array

function Fourth(){
    let step = arguments[0][arguments[0].length-1]
    let arr = arguments[0]
    let sol = []
    arr.pop();
    arr.map((x,index)=>{       
        sol[(index+step)%arr.length]=x
    })

    console.log(sol.join(" "))
}

Fourth(["Banana","Orange","Coconut","Apple",15])

function FourthVol2(input){
    let step = input[input.length-1]
    let arr = input
    let sol = []
    arr.pop();
    arr.map((x,index)=>{       
        sol[(index+step)%arr.length]=x
    })

    console.log(sol.join(" "))
}

FourthVol2(["Banana","Orange","Coconut","Apple",15])
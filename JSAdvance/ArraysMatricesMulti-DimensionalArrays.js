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
    let step = arguments[0].pop()
    let arr = arguments[0]
    let sol = []
    
    arr.map((x,index)=>{       
        sol[(index+step)%arr.length]=x
    })

    console.log(sol.join(" "))
}

Fourth(["Banana","Orange","Coconut","Apple",15])

function FourthVol2(input){
    let step = Number(input[input.length-1])
    let arr = input
    let sol = []
    arr.pop();
    arr.map((x,index)=>{       
        sol[(index+step)%arr.length]=x
    })

    console.log(sol.join(" "))
}

FourthVol2(["Banana","Orange","Coconut","Apple",15])

// extract non-decreasing seq

function Fifth(){
    let params = arguments[0]
    let temp = params[0]-1
    params.filter((x=>{
            if(x>=temp){
                temp=x
                console.log(x)
                return true
            }else{
                return false
            }
    }))
}
Fifth([9,8,7,6,5])

// sort string by 2 criterias

function Sixth(){
arguments[0].sort().sort((a,b)=>a.length-b.length).map(x=>console.log(x))
}

Sixth(["ababa","beta","gzmma","aelta","alpha","tata"])

// magical matrix

function Seventh(){
    let params = arguments[0]
    let magickNumber = params[0].reduce((acc,x)=>acc+x,0)
    let magick = true
    for(let i=0; i<params.length;i++){
        if(magickNumber!==params[i].reduce((acc,x)=>acc+x,0)){
            magick=false
            break
        }
    }
    for(let i =0; i<params[0].length;i++){
        let tempSumator=0;
        for(let j = 0; j<params.length;j++){
            tempSumator+=params[i][j]
        }
        if(tempSumator!==magickNumber){
            magick=false
            break;
        }
    }
    console.log(magick)
}

Seventh([[9, 5, 6],
        [6, 5, 4],
        [5, 5, 5]]
)

// Spiral matrix

function Eight(first,second){
    let params = arguments[0]
    let length = Number(first)
    let height = Number(second)
    let endNum = length*height
    let myArr =[]
    let cur=1


    for(let i=0; i<length;i++){
            if(i==length-1-i){
                myArr[i][i]=cur
            }

        for(let j=i; j<length-1-i;j++){
                if(!Array.isArray(myArr[i])){
                myArr[i]=new Array()
                }                
            myArr[i][j]=cur
            endNum==cur?cur+=0:cur++
            
        }
        for(let goDown=i; goDown<length-i-1;goDown++){

            if(!Array.isArray(myArr[goDown])){
                myArr[goDown]=new Array()
                }
                myArr[goDown][length-1-i]=cur                
                endNum==cur?cur+=0:cur++
        }
        for( let goLeft=i; goLeft<length-i-1;goLeft++){
            if(!Array.isArray(myArr[length-1])){
                myArr[length-1]=new Array()
                }
            myArr[length-1-i][length-1-goLeft]=cur
            endNum==cur?cur+=0:cur++
        }
        for(let goUp = i; goUp<length-1-i;goUp++){
            myArr[length-1-goUp][i]=cur
            endNum==cur?cur+=0:cur++
        }
    }
    myArr.map(x=>{
        console.log(x.join(' '))
    })
}

Eight(10,5)

function Ninth(){
    let params=[]
    let diag1= diag2 =0
    for(let i =0; i <arguments[0].length;i++){
        params[i]=new Array()
        params[i]=arguments[0][i].split(' ').map(x=>Number(x))
        diag1+=params[i][i]
        diag2+=params[i][params[i].length-i-1]
    }
    if(diag1==diag2){
      for(let i=0; i<params.length;i++){
            let printer
            for(let j=0; j<params[i].length;j++){
                if(i!=j&&i+j!=params.length-1){
                    params[i][j]=diag1
                }
            }
        }
    }
    params.map(x=>console.log(x.join(' ')))    
}

Ninth(['5 3 12 3 1',
'11 4 23 2 5',
'101 12 3 21 10',
'1 4 5 2 2',
'5 22 33 11 1']
)

function Tenth(){
    let params=arguments[0]
    let sideX = params[0]
    let sideY = params[1]
    let startX = params[2]
    let startY = params[3]
    let matrix = []
    for(let i=0; i<sideY;i++){              // here i create the arrays
         matrix[i]=new Array()   
    }
    matrix[startY][startX]=1
    let numbers =[]
    numbers.push([startX,startY])
    while(numbers.length>0){                // check if there is a bigger nabor than the cell itself and if there is i edit its value and i add it to "numbers" for next chek
        let current = numbers.shift()
        let currentX = current[0]
        let currentY = current[1]
        // right
        if(currentX<sideX-1&&currentX>=0&&currentY>=0&&currentY<sideY){
            if(matrix[currentY][currentX]<matrix[currentY][currentX+1]||matrix[currentY][currentX+1]==undefined){
                matrix[currentY][currentX+1]=matrix[currentY][currentX]+1
                numbers.push([currentX+1,currentY]) 
            }
        }
        // down 
        if(currentY<sideY-1&&currentY>=0&&currentX>=0&&currentX<=sideX){
            if(matrix[currentY][currentX]<matrix[currentY+1][currentX]||matrix[currentY+1][currentX]==undefined){
                matrix[currentY+1][currentX]=matrix[currentY][currentX]+1
                numbers.push([currentX,currentY+1])
            }
        }
        // left
        if(currentX>0&&currentX<sideX&&currentY>=0&&currentY<sideY){
            if(matrix[currentY][currentX]<matrix[currentY][currentX-1]||matrix[currentY][currentX-1]==undefined){
                matrix[currentY][currentX-1]=matrix[currentY][currentX]+1
                numbers.push([currentX-1,currentY])
            }
        }
        // up
        if(currentY<sideY&&currentY>0&&currentX>=0&&currentX<=sideX){
            if(matrix[currentY][currentX]<matrix[currentY-1][currentX]||matrix[currentY-1][currentX]==undefined){
                matrix[currentY-1][currentX]=matrix[currentY][currentX]+1
                numbers.push([currentX,currentY-1])
            }
        }

        // diagonal up right
        if(currentX<sideX-1&&currentX>=0&&currentY>0&currentY<sideY){
            if(matrix[currentY][currentX]<matrix[currentY-1][currentX+1]||matrix[currentY-1][currentX+1]==undefined){
                matrix[currentY-1][currentX+1]=matrix[currentY][currentX]+1
                numbers.push([currentX+1,currentY-1])
            }
        }
        //diagonal up left 
        if(currentX>0&&currentX<sideX&&currentY>0&&currentY<sideY){
            if(matrix[currentY][currentX]<matrix[currentY-1][currentX-1]||matrix[currentY-1][currentX-1]==undefined){
                matrix[currentY-1][currentX-1]=matrix[currentY][currentX]+1
                numbers.push([currentX-1,currentY-1])
            }
        }
        //diagonal down left
        if(currentX>0&&currentX<sideX&&currentY>=0&&currentY<sideY-1){
            if(matrix[currentY][currentX]<matrix[currentY+1][currentX-1]||matrix[currentY+1][currentX-1]==undefined){
                matrix[currentY+1][currentX-1]=matrix[currentY][currentX]+1
                numbers.push([currentX-1,currentY+1])
            }
        }
        // diagonal down right
        if(currentX<sideX-1&&currentX>=0&&currentY>=0&currentY<sideY-1){
            if(matrix[currentY][currentX]<matrix[currentY+1][currentX+1]||matrix[currentY+1][currentX+1]==undefined){
                matrix[currentY+1][currentX+1]=matrix[currentY][currentX]+1
                numbers.push([currentX+1,currentY+1])
            }
        }   
    }
    matrix.map(x=>console.log(x.join(' ')))
}

Tenth([10, 5, 9, 0])


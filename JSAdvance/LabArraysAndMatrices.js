// Sum First Last

function First(){
    console.log((arguments[0].map(Number)).reduce((acc,curr,index,arr)=>{
        if(arr.length>1){
        return arr.indexOf(curr)==0||arr.indexOf(curr)==arr.length-1?acc+curr:acc
        }else{
            return curr*2
        }
    },0))
}

function FirstVol2(input){
    let params = input
    console.log(params.length==1?Number(params[0])*2:Number(params[0])+Number(params[params.length-1]))
}

FirstVol2(['10'])

First(['10'])

// elemetns at even positions in arr

function Second(){
    let params = arguments[0]
    console.log((params.filter((cur,index)=>index%2==0?true:false)).join(" "))
}

Second([1,2,3,4,5])
// Negative Positive

function Third(){
    let params = arguments[0]
    
    sorter(params).map(x=>console.log(x))
    
    function sorter(params){
      let solution = []
        params.map(x=> x>=0?solution.push(x):solution.unshift(x)
    )
    return solution
    }
}

Third ([1,2,3,-5,4])

// first and last k elems

function Fourth(){
    let params = arguments[0]    
    console.log(params.filter((x,index)=>index>0&&index<=params[0]?x:false
    ).join(" "))

    console.log(params.filter((x,index)=>index>=params.length-params[0]?x:false        
    ).join(" "))
}

Fourth([3,
6,7,8,9])

// last K elements

function Fifth(){
    let length = arguments[0]
    let step = arguments[1]
    let solution=[]
    for(let i = 0;i<length;i++){
        let sumator = 0;
        for(let j = 1; j<=step;j++){
            if(solution.length==0){
                sumator=1;
                break;
            }else if(solution.length<j){
                break;
            }else{
           sumator+=solution[solution.length-j]
           }
        }
        solution.push(sumator);
    }
console.log(solution);

}

Fifth(6,3)

// process old Numbers

function Sixth(){
console.log(arguments[0].filter((x,i)=>{
   return i%2==1?true:false
}).map(x=>x*2).reverse())
}

Sixth([10, 15, 20, 25])

// smallest two Numbers

function Seventh(){
    let solution = arguments[0].sort((a,b)=>{
        return a-b
    })
    console.log(solution.slice(0,2).join(" "))
}

Seventh([30, 15, 50, 5])

// biggest elem in matrix

function Eight(){
let matrix = arguments[0]

let max = flattener(matrix)

function flattener(){
    let param = arguments[0]
        return param.reduce((acc,val)=>
                acc.concat(Array.isArray(val)?flattener(val):val)
                ,[])
            }
console.log(max.sort((a,b)=>b-a)[0]);
}

Eight([[3,[ 5, 7], 12],
 [-1, 4, [[33], 2]],
 [8, 3, 0, 4]]
)

// sum diagonals in square matrix

function Ninth(){
    let matrix = arguments[0]
    let size = matrix[0].length

    let diagon1=0,diagon2 = 0
    
    for(let i = 0; i<size; i++){
        diagon1+=matrix[i][i]
        diagon2+=matrix[size-1-i][i]
    }

    console.log(diagon1+" "+diagon2)
}

Ninth(  [[3,5, 7],
        [-1, 4,33],
        [8, 3, 0]]
)

// neighbor pairs

function Tenth(){
    let matrix = arguments[0]
    let sizeX = matrix[0].length
    let sizeY = matrix.length
    let counter=0
    for(let i =0; i<sizeY; i++){
        for(let j =0; j<sizeX; j++){
            let temp = HasPair(matrix,j,i)
            temp!=0?counter+=temp:counter+=0
        }
    }

    console.log(counter/2)

    function HasPair(arr,x,y){
        let sizeY = arr.length
        let sizeX = arr[0].length
        let hasNei=0

        if(x+1<sizeX&&arr[y][x+1]==arr[y][x]){
            hasNei+=1
        }
        if(x-1>=0&&arr[y][x-1]==arr[y][x]){
            hasNei+=1
        }        
        
        if(y+1<sizeY&&arr[y+1][x]==arr[y][x]){
            hasNei+=1
        }
        if(y-1>=0&&arr[y-1][x]==arr[y][x]){
            hasNei+=1
        }

        return hasNei
    }
}

Tenth([['4','4'],
      ['5','4'],
      ['1','7']]

)


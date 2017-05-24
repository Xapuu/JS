// inside 3d specific box
// why is -3??? or judge dosent work

function First(){
let params = arguments[0]

for(let i = 0; i<params.length-3;i+=3){    

console.log(checker(params[i],params[i+1],params[i+2]))
}

function checker(x,y,z){
    let parallelepiped = {
            x1: [10,20,15],
            x2: [50,20,50],
            y1: [15,80,10]     
    }

         let   xMin=Math.min(parallelepiped.x1[0],parallelepiped.x2[0])
         let   xMax=Math.max(parallelepiped.x1[0],parallelepiped.x2[0])
         let   yMin=Math.min(parallelepiped.x1[1],parallelepiped.y1[1])
         let   yMax=Math.max(parallelepiped.x1[1],parallelepiped.y1[1])
         let   zMin=Math.min(parallelepiped.x1[2],parallelepiped.x2[2])
         let   zMax=Math.max(parallelepiped.x1[2],parallelepiped.x2[2])

    return (x>=xMin&&x<=xMax&&y>=yMin&&y<=yMax&&z>=zMin&&z<=zMax)?"inside":"outside"
 }

}

First([13.1,50,22])

//Road radar

function Second(){
    let speed = arguments[0][0]
    let type = arguments[0][1]

    let limits = {
        residential : 20,
        city : 50,
        interstate : 90,
        motorway : 130
    }
    console.log(speed-limits[type]>40?"reckless driving":speed-limits[type]>20?"excessive speeding":speed-limits[type]>0?"speeding":"")
}

Second([40,"city"])

// Template format   !! why -2 or judge dosent work

function Third (){
    let params = arguments[0]
    console.log('<?xml version="1.0" encoding="UTF-8"?>')
    console.log("<quiz>")
    for(let i = 0; i<params.length-2;i+=2){
        console.log('<question>\n'+params[i]+'\n</question>\n<answer>\n'+params[i+1]+'\n</answer>')

    }
    console.log('</quiz>')
}

Third(["Dry ice is a frozen form of which gas?",
"Carbon Dioxide",
"What is the brightest star in the night sky?",
"Sirius"]
)

// coocking with numbers

function Fourth(){
    let params=arguments[0]

let prev ="";

  params.filter(x=>{
      return Number(x)==params[0]?false:true
  }).reduce(function(acc,cur){
      console.log(Math.round(blender(acc,cur)*10)/10!==prev?Math.round(blender(acc,cur)*10)/10:"")
      prev=Math.round(blender(acc,cur)*10)/10
        return blender(acc,cur)
    },Number(arguments[0][0]))

    function blender (num, prog){

        switch(prog){
            case 'chop':
            return num/2
            break;
            case 'dice':
            return Math.sqrt(num)
            break;
            case 'spice':
            return num+1
            break;
            case 'bake':
            return num*3
            break;
            case 'fillet':
            return num*0.8
            break;
            default:
            return num
            break;
        }

    }
}

Fourth([9, 'dice','spice','chop','bake','fillet'])

// Modify average

// PapaJoe version
//     function papaJoe(){
//         return String(arguments[0]).split("").map(Number).reduce(function (a,b){
//             return Number(a)+Number(b)
//         },0)/String(arguments[0]).length<=5?papaJoe(String(arguments[0]).concat("9")):String(arguments[0])
//     }
// console.log(papaJoe(101))

function Fifth (){
    
    console.log(papaJoe(String(arguments[0])))

    function papaJoe(number){
        return number.split("").map(Number).reduce(function (a,b){
            return Number(a)+Number(b)
        },0)/String(number).length<=5?papaJoe(number.concat("9")):number
    }
}

Fifth(101)

// Validity checker

function Sixth(){
    let params = arguments[0]
  
    console.log('{'+params[0]+', '+params[1]+'} to {0, 0} is '+distanceChecker(params[0],params[1],0,0)+
    '\n{'+params[2]+', '+params[3]+'} to {0, 0} is '+distanceChecker(params[2],params[3],0,0)+
    '\n{'+params[0]+', '+params[1]+'} to {'+params[2]+', '+params[3]+'} is '+distanceChecker(params[0],params[1],params[2],params[3]));
  
    function distanceChecker(x1,y1,x2,y2){
        return Math.sqrt((x1-x2)*(x1-x2)+(y1-y2)*(y1-y2))%1==0?"valid":"invalid"
    }
}

Sixth([2,1,1,1])

// Treasure Locator  must ask why it ittereates in judge more times than in the IDE

function Seventh (){

let params = arguments[0]

for(let i =0; i<params.length-1;i+=2){
    console.log(radar(params[i],params[i+1]))
}


function radar(x,y){

let islandMap = {
        tokelau: [8,0,9,1],
        tuvalu: [1,1,3,3],
        samoa: [5,3,7,6],
        tonga: [0,6,2,8],
        cook: [4,7,9,8]
    }

    let theIsland
    let isTrue = false

for(let island in islandMap){
    if(islandMap.hasOwnProperty(island)){
       if (x<=Math.max(islandMap[island][0],islandMap[island][2])&&x>=Math.min(islandMap[island][0],islandMap[island][2])&&y>=Math.min(islandMap[island][1],islandMap[island][3])&&y<=Math.max(islandMap[island][1],islandMap[island][3])){
           isTrue=true;
           theIsland=island
       }
    }
}

return isTrue?theIsland.charAt(0).toUpperCase().concat(theIsland.slice(1)):"On the bottom of the ocean"
}
}

Seventh([4,2,1.5,6.5,1,3])

// draw the shortest way between 3 points

function Eight(){
    let params = arguments[0];
    let sideA= distance(params[0],params[1],params[2],params[3])
    let sideB= distance(params[2],params[3],params[4],params[5])
    let sideC= distance(params[4],params[5],params[0],params[1])

    if(sideA<=sideB&&sideA<=sideC){
        console.log(sideB<=sideC?"1->2->3: "+ (sideA+sideB):"1->3->2: "+ (sideA+sideC))
    }else if (sideB<=sideC){
        console.log(sideA<=sideC?"1->2->3: "+ (sideB+sideA):"1->3->2: "+ (sideB+sideC))
    }else{
        console.log(sideA<sideB?"2->1->3: "+ (sideC+sideA):"1->3->2: " + (sideC+sideB))
    }

    function distance(x,y,x1,y1){          
        return Math.sqrt((x-x1)*(x-x1)+(y-y1)*(y-y1))
    }
}

Eight([0, 0, 2, 0, 4, 0])

// Radio Crystals

function Ninth(){
    let target = arguments[0][0];
    let chunks = arguments[0].slice(1);

    chunks.map(x=>{
        if(x!=0){
         console.log("Processing chunk "+x+" microns")
         }
            let cuts = cut(x,target)
            if(cuts[1]>0){
                console.log("Cut x"+cuts[1])
                console.log("Transporting and washing")
                if(Math.floor(cuts[0])==target){
                    console.log("Finished crystal "+target+" microns")                    
                }
            }

            let laps = lap(Math.floor(cuts[0]),target)
            if(laps[1]>0){
                console.log("Lap x"+laps[1])
                console.log("Transporting and washing")
                if(Math.floor(laps[0])==target){
                    console.log("Finished crystal "+target+" microns")
                }
            }

            let grinds = grind(Math.floor(laps[0]),target)
            if(grinds[1]>0){
                console.log("Grind x"+grinds[1])
                console.log("Transporting and washing")
                if(Math.floor(grinds[0])==target){
                    console.log("Finished crystal "+target+" microns")
                }
            }

            let etchs = etch(Math.floor(grinds[0]),target)
            if(etchs[1]>0){
                console.log("Etch x"+etchs[1])
                console.log("Transporting and washing")
                if(Math.floor(etchs[0])==target){
                    console.log("Finished crystal "+target+" microns")
                }
            }

            if(Math.floor(etchs[0])!=target&&x!=0){
               
               console.log("X-ray x1")
               console.log("Finished crystal "+target+" microns")
            }
    })

    function etch(chunk,target){
        counter=0
        while(target<chunk){
            chunk-=2
            counter++
        }
        return[chunk,counter]
    }

    function grind(chunk,target){
        let counter = 0

        while(target-1<=chunk-20){
            chunk-=20
            counter++
        }
        return[chunk,counter]
    }

    function lap (chunk,target){
        let counter=0;
        while(target-1<=0.8*chunk){
            chunk*=0.8
            counter++
        }
        return [chunk,counter]
    }

    function cut(chunk,target){
            let counter = 0;
            while(target-1<=chunk/4){
                chunk/=4
                counter++
            }
            return[chunk,counter]
    }

}
Ninth([100,99])

// DNA Helix

function Tenth(){

    let genoms = ['A','T','C','G','T','T','A','G','G','G']
    let counter = 0;
    for(let i = 1; i<=arguments[0];i++){
        if(i%4==1){
            console.log("**"+genoms[counter%10]+genoms[(counter+1)%10]+"**")
            counter+=2
        }else if (i%4==2){
            console.log("*"+genoms[counter%10]+"--"+genoms[(counter+1)%10]+"*")
            counter+=2
        }else if (i%4==3){
            console.log(genoms[counter%10]+"----"+genoms[(counter+1)%10])
            counter+=2
        }else if (i%4==0){
            console.log("*"+genoms[counter%10]+"--"+genoms[(counter+1)%10]+"*")
            counter+=2
        }
    }
}

Tenth([10])


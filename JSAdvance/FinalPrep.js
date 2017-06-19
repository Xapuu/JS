function SpiceMustFlow() {
    let params = Number(arguments[0])

    let days = 0
    let totalProduction = 0

    while (params >= 100) {
        days++
        totalProduction += params
        totalProduction -= 26
        params -= 10
    }
    console.log(days)
    console.log(days != 0 ? totalProduction - 26 : 0)

}
SpiceMustFlow(90)

function BuildAWall() {
    let params = arguments[0].map(Number)
    let levels = []

    let curentLevel = params.filter(x => x < 30)

    while (curentLevel.length > 0) {
        let tempBuildedFloors = 0

        let solution = curentLevel.map(x => {
            tempBuildedFloors++
            return x += 1
        })

        curentLevel = solution.filter(x => x < 30)
        levels.push(tempBuildedFloors * 195)
    }
    console.log(levels.join(", "))
    console.log(levels.reduce((a, b) => a + b) * 1900 + " pesos")

}
BuildAWall([21, 25, 28])

function FormatHelper() {
    let text = arguments[0][0]

    text = text.replace(/([.,!?:;]+\s*)/g, function trimer(match, group) {
        return group.trim() + " "
    })
    text = text.replace(/(\s*[.,!?:;])/g, function clear(match, group) {
        return group.trim()
    })
    text = text.replace(/([.]\s*[.]\s*[.]\s*[!]\s)/g, "...!")

    text = text.replace(/([.]\s*)([\d])/g, function clearSpaces(match, group, group2) {
        return group.trim() + group2
    })
    text = text.replace(/["](.*)["]/g, function trimSomeText(match, group) {
        return '"' + group.trim() + '"'
    })
    console.log(text)


}
FormatHelper(['Terribly formatted text . With chaotic spacings     . . . !   . asdas     ."  .  123 . 123 23 .       Terrible quoting "! Alsothis date is pretty confusing : 20 . 12. 16 .'])

function Fourth() {
    let params = arguments[0].filter(x => x != "")
    let aircraftList = {}
    let cities = {}

    while (params.length != 0) {
        let currentFlight = params.shift().split(" ")
        let currentPlane = currentFlight[0]
        let currentCity = currentFlight[1]
        let currentPeople = Number(currentFlight[2])
        let currentDirection = currentFlight[3]


        if (!aircraftList.hasOwnProperty(currentPlane) && currentDirection != "depart") {
            CreatePlane(aircraftList, currentPlane, currentDirection)
            AddCities(cities, currentCity, currentPeople, currentDirection, currentPlane)
        } else {
            if (aircraftList.hasOwnProperty(currentPlane)) {
                if (aircraftList[currentPlane].status == "land" && currentDirection == "depart") {

                    aircraftList[currentPlane].status = currentDirection
                    AddCities(cities, currentCity, currentPeople, currentDirection, currentPlane)

                } else if (aircraftList[currentPlane].status == "depart" && currentDirection == "land") {

                    aircraftList[currentPlane].status = currentDirection
                    AddCities(cities, currentCity, currentPeople, currentDirection, currentPlane)

                }
            }
        }
    }


    console.log("Planes left:")
    Object.keys(aircraftList).filter(x => aircraftList[x].status != "depart").sort((a, b) => a.localeCompare(b)).map(x => console.log("- " + x))


    let tempCity = Object.keys(cities).sort((a, b) => sorter(a, b))

    tempCity.map(x => {
        console.log(x)
        console.log("Arrivals: " + cities[x].arrivals)
        console.log("Departures: " + cities[x].departures)
        console.log("Planes:")
        let tempPlanes = Array.from(cities[x].planes).sort((a, b) => a.localeCompare(b))
        for (let plane of tempPlanes) {
            if (plane != undefined) {
                console.log("-- " + plane.trim())
            }
        }

    })

    function sorter(a, b) {
        let firstCity = cities[a].arrivals
        let secondCity = cities[b].arrivals

        if (firstCity > secondCity) {
            return -1
        } else if (secondCity > firstCity) {
            return 1
        } else {
            return a.localeCompare(b)
        }

    }

    function AddCities(cities, currentCity, ppl, status, idOfPlane) {
        if (!cities.hasOwnProperty(currentCity)) {
            CreateCity(cities, currentCity, ppl, idOfPlane, status)
        } else {
            if (status == "depart") {
                cities[currentCity].departures += ppl
            } else {
                cities[currentCity].arrivals += ppl
            }
        }

        cities[currentCity].planes.add(idOfPlane)

    }

    function CreateCity(cityes, cityID, ppl, planeID, status) {

        cities[cityID] = {
            departures: 0,
            arrivals: 0,
            planes: new Set()
        }
        if (status == "depart") {
            cities[cityID].departures += ppl
        } else {
            cities[cityID].arrivals += ppl
        }
        cities[cityID].planes.add(planeID)
    }
    function CreatePlane(aircrafts, planeID, status = "land") {
        aircrafts[planeID] = {
            status: status
        }
    }

}

Fourth([
    "RTA72 London -10 land",
    "RTA#72 Brussels -110 depart",
    "RTA7!2 Warshaw 350 land",
    "RTA72 Riga -201 depart",
    "rta72 riga -13 land",
    "rta Riga -200 depart"

]
)

function Arithmephile() {
    let params = arguments[0].map(Number)
    let biggest = -Infinity
    for (let j = 0; j < params.length; j++) {
        let num = params[j]
        if (num < 10 && num >= 0) {
            let score = CalcNext(num, j, params)
            if (score > biggest) {
                biggest = score
            }
        }
    }
    function CalcNext(num, index, params) {
        let result = 1
        let indexTop = index + num > params.length ? params.length : index + num
        for (let i = index; i < indexTop; i++) {
            result *= params[i + 1]
        }
        return result
    }
    console.log(biggest)
}

Arithmephile(["10",
    "20",
    "2",
    "30",
    "44",
    "3",
    "56",
    "20",
    "24"
])

function RosetteStone(input) {
    let tabletSize = input.shift()
    let tablet = []
    let matrix = []

    ReadTablet(tabletSize, tablet, input)
    ReadMatrix(matrix, input)
    Mixer(tablet, matrix)
    Printer(matrix)

    function Printer(matrix) {
        let solution = ""
        for (let elem of matrix) {
            for (let char of elem) {
                let temp = String.fromCharCode(Number(char) % 27 + 64)
                solution = solution.concat(temp)
            }
        }
        console.log(solution.replace(/@/g, " "))
    }

    function Mixer(tablet, matrix) {
        let length = matrix[0].length
        let height = matrix.length
        let tabletHeight = tablet.length
        let tabletLength = tablet[0].length
        for (let i = 0; i < height; i++) {
            for (let j = 0; j < length; j++) {
                try {
                    matrix[i][j] += tablet[i % tabletHeight][j % tabletLength]

                } catch (indexOutOfRange) {
                    continue
                }
            }
        }

    }

    function ReadMatrix(matrix, tablet) {
        for (let line of tablet) {
            matrix.push(line.split(" ").map(Number))
        }
    }

    function ReadTablet(tabletSize, tablet, input) {
        for (let i = 0; i < tabletSize; i++) {
            tablet[i] = []
            tablet[i] = input.shift().split(" ").map(Number)
        }
    }
}

RosetteStone(['2',
    '59 36',
    '82 52',
    '4 18 25 19 8',
    '4 2 8 2 18',
    '23 14 22 0 22',
    '2 17 13 19 20',
    '0 9 0 22 22']
)

function SpyMaster(input) {
    let specialKey = input.shift();
    let myRegex = new RegExp('(\^|[\\s])(' + specialKey + '[\\s]+)([A-Z!%\$#]{8,})([\\s.,]|\$)', 'gi')

    for (let line of input) {
        let currentLine = line.replace(myRegex, (match, gr1, gr2, gr3, gr4) => spyReplacer(match, gr1, gr2, gr3, gr4))
        console.log(currentLine)
    }

    function spyReplacer(match, gr1, gr2, gr3, gr4) {
        let group2 = gr3
        for (let i = 0; i < group2.length; i++) {
            let curChar = group2.charAt(i)
            let tempCharCode = curChar.charCodeAt()
            if (tempCharCode >= 97 && 122 >= tempCharCode) {
                return match
            }
        }
        let result = group2.toLowerCase().replace(/!/g, "1").replace(/\%/g, "2").replace(/\#/g, "3").replace(/\$/g, "4")
        return gr1 + gr2 + result + gr4
    }
}

SpyMaster(["specialKey",
    "In this text the specialKey HELLOWORLD! is correct, but",
    "the following specialKey $HelloWorl#d and spEcIaLKEy HOLLOWORLD1 are not, while",
    "SpeCIaLkeY   SOM%%ETH$IN and SPECIALKEY ##$$##$$ are!"
])


function RadicalMarketing() {
    let params = arguments[0]
    let pplList = {}

    while (params.length != 0) {
        CreatePerson(pplList, params)
    }

    let keys = Object.keys(pplList).sort((a, b) => sorter(a, b))

    console.log(keys[0])
    let counter = 1
    for (let kaval of pplList[keys[0]].subscribers) {
        console.log(counter + ". " + kaval)
        counter++
    }

    function sorter(a, b) {
        let objA = pplList[a].subscribers.size
        let objB = pplList[b].subscribers.size
        if (objA != objB) {
            return objB - objA
        } else {
            return pplList[b].subscribedto.size - pplList[a].subscribedto.size
        }
    }

    function CreatePerson(pplList, params) {
        let currentCmd = params.shift()
        if (currentCmd.length == 1 && !pplList.hasOwnProperty(currentCmd)) {
            pplList[currentCmd] = {
                subscribers: new Set(),
                subscribedto: new Set()
            }
        } else {
            if (currentCmd.length != 1 && currentCmd.charAt(0) != currentCmd.charAt(2) && pplList.hasOwnProperty(currentCmd.charAt(0)) && pplList.hasOwnProperty(currentCmd.charAt(2))) {
                pplList[currentCmd.charAt(2)].subscribers.add(currentCmd.charAt(0))
                pplList[currentCmd.charAt(0)].subscribedto.add(currentCmd.charAt(2))
            }
        }
    }
}

RadicalMarketing([
    "B",
    "B",
    "B",
    "A",
    "A",
    "A",
    "C",
    "D",
    "C-C",
    "C-C",
    "C-C",
    "A-B",
    "B-A",
    "C-A",
    "D-A",
    "A-D",
    "A-D",
    "A-D",
    "Z-A"
])

function MedenkaWars() {
    let params = arguments[0]

    let whiteDmg = 0
    let blackDmg = 0
    let prevWhite = 0
    let prevDarkCount = 0
    let prevBlack = 0

    while (params.length != 0) {
        let currentAttack = params.shift().split(" ")
        let dmg = Number(currentAttack[0])
        let color = currentAttack[1]

        if (color == "white") {
            if (dmg != prevWhite) {
                prevWhite = dmg
                whiteDmg += dmg
            } else {
                whiteDmg += 2.75 * dmg
                prevWhite = 0
            }
        }

        if (color == "dark") {
            if (dmg != prevBlack) {
                prevBlack = dmg
                blackDmg += dmg
                prevDarkCount = 1
            } else {
                prevDarkCount += 1
                if (prevDarkCount % 5 == 0) {
                    blackDmg += dmg * 4.5
                } else {
                    blackDmg += dmg
                }
            }
        }
    }

    if (whiteDmg > blackDmg) {
        console.log("Winner - Vitkor")
        console.log("Damage - " + whiteDmg * 60)
    } else {
        console.log("Winner - Naskor")
        console.log("Damage - " + blackDmg * 60)
    }

}
MedenkaWars([
    "1 dark medenkas",
    "1 dark medenkas",
    "1 dark medenkas",
    "1 dark medenkas",
    "1 dark medenkas",
    "1 dark medenkas",
    "1 dark medenkas",
])

function BunnyKiller() {
    let params = arguments[0]
    let map = []
    let bombs = []
    let bodyCounter = 0
    let totalDamage = 0

    MatrixReader(params, map)
    GetBombs(params, bombs)
    Bombing(map,bombs,bodyCounter,totalDamage)
    Printer(map)

    function Printer (map){
        map.map(x=>x.map(x=>{
            if(x>0){
                bodyCounter++
                totalDamage+=x
            }
        }))

        console.log(totalDamage)
        console.log(bodyCounter)
    }    

    function Bombing(map, bombs) {

        for(let bomb of bombs[0]){
            let bombY = bomb[0]
            let bombX = bomb[1]
            let dmg = map[bombY][bombX]
            if(dmg>0){
                bodyCounter++
                totalDamage+=dmg
                map[bombY][bombX]=0
                BombardBunnie(bombY,bombX+1,dmg,map)
                BombardBunnie(bombY+1,bombX+1,dmg,map)
                BombardBunnie(bombY+1,bombX,dmg,map)
                BombardBunnie(bombY+1,bombX-1,dmg,map)
                BombardBunnie(bombY,bombX-1,dmg,map)
                BombardBunnie(bombY-1,bombX-1,dmg,map)
                BombardBunnie(bombY-1,bombX,dmg,map)
                BombardBunnie(bombY-1,bombX+1,dmg,map)
            }
        }

    }

    function BombardBunnie(y,x,dmg,matrix){
        try {
            matrix[y][x]-=dmg
        } catch (error) {
            return
        }
    }

    function GetBombs(params, bombs) {

        bombs.push(params.shift().split(" ").map(x => x.split(",").map(x => Number(x))))
    }

    function MatrixReader(params, map) {
        while (params.length != 1) {
            map.push(params.shift().split(" ").map(Number))
        }
    }

}
BunnyKiller([
    "5 10 15 20",
    "10 10 10 10",
    "10 15 10 10",
    "10 10 10 10",
    "2,2 0,1"
])

function CustomAjaxReqValidator(){
let params = arguments[0]
let hash = params.pop()

let temp = hash.split("")


let answer = []

while(params.length!=0){
    let method = params.shift().split(" ")[1]
    let originalCredentials = params.shift()
    let credentials = originalCredentials.match(/Credentials:\s(Bearer|Basic)\s([0-9A-Za-z.]+)/)
    let originalContent = params.shift()
    let content = originalContent.match(/Content:\s([A-Za-z0-9.]+)/)

    if(method=="GET"){
        console.log(`Response–Method: ${method} &Code:200&Header:${content}`)
    }
    
}
}

CustomAjaxReqValidator([
"Method: GET",
"Credentials: Bearer asd918721jsdbhjslkfqwkqiuwjoxXJIdahefJAB",
"Content: users.asd.1782452.278asd",
"Method: POST",
"Credentials: Basic 028591u3jtndkgwndsdkfjwelfqkjwporjqebhas",
"Content: Johnathan",
"2q",
])


console.log("a".repeat(5))
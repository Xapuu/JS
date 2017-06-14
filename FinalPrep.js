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



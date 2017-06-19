// Spice must flow

function Problem1() {
    let params = arguments[0]

    let initialProduction = Number(params)
    let total = 0;
    let days = 0;

    while (initialProduction >= 100) {
        total += initialProduction - 26
        days += 1
        initialProduction -= 10
    }
    console.log(days)
    console.log(total - 26 > 0 ? total - 26 : 0)
}

Problem1(200)

// Buid a wall

function Problem2() {
    let params = arguments[0].map(Number)
    let concrete = []
    let totalPeso = 1900

    params.map(x => {
        let dayIndex = 0
        while (x != 30) {
            if (concrete[dayIndex] == undefined) {
                concrete[dayIndex] = 0
            }
            concrete[dayIndex]++
            dayIndex++
            x++
        }
    })

    console.log(concrete.map(x => x * 195
    ).join(", "))
    console.log(concrete.reduce((a, b) => a + b) * 1900 * 195 + " pesos")
}

Problem2([21, 25, 28])

// At the airport

function Problem4() {

    let activities = arguments[0]
    let planes = {}
    let towns = {}

    for (let activiti of activities) {
        let currentAction = activiti.split(" ")
        let currentPlaneId = currentAction[0]
        let currentPlaneDestination = currentAction[1]
        let currentPlaneFillment = Number(currentAction[2])                 // ppl traveling
        let currentPlaneActivity = currentAction[3]                 // landing or takeing off

        let isPlaneAvaliable = planes.hasOwnProperty(currentPlaneId)
        // First time landing planes
        if ((planes == undefined || !isPlaneAvaliable) && currentPlaneActivity == 'land') {
            planeGenerator(currentPlaneId, planes)
            if (towns == undefined || !towns.hasOwnProperty(currentPlaneDestination)) {
                townsGenerator(currentPlaneDestination, 0, currentPlaneFillment, currentPlaneId, towns)
            } else {
                towns[currentPlaneDestination].arrivals += currentPlaneFillment
                towns[currentPlaneDestination].planes.add(currentPlaneId)
            }
        }
        // planes landing
        if (isPlaneAvaliable && currentPlaneActivity == "depart" && planes[currentPlaneId].status == "land") {
            if (towns.hasOwnProperty(currentPlaneDestination)) {
                towns[currentPlaneDestination].departures += currentPlaneFillment
                towns[currentPlaneDestination].planes.add(currentPlaneId)
            } else {
                townsGenerator(currentPlaneDestination, currentPlaneFillment, 0, currentPlaneId, towns)
            }
            planes[currentPlaneId].status = "depart"
        }
        // planes flying away
        if (isPlaneAvaliable && currentPlaneActivity == "land" && planes[currentPlaneId].status == "depart") {
            if (towns.hasOwnProperty(currentPlaneDestination)) {
                towns[currentPlaneDestination].arrivals += currentPlaneFillment
                towns[currentPlaneDestination].planes.add(currentPlaneId)
            } else {
                townsGenerator(currentPlaneDestination, 0, currentPlaneFillment, currentPlaneId, towns)
            }
            planes[currentPlaneId].status = "land"
        }
    }

    //From here on im printing
    console.log("Planes left:")

    Object.keys(planes).filter(x => planes[x].status != "depart").sort(function(a,b){
        return a.localeCompare(b)
    }).map(x => console.log("- " + x))

    // in sorted towns there is a problem with the sort, 
    
    let sortedTowns = Object.keys(towns).sort((a, b) => towns[b].arrivals - towns[a].arrivals).sort(function(a,b){
        if((towns[b].arrivals === towns[a].arrivals)){
        return a.toLowerCase().localeCompare(b.toLocaleLowerCase())
        }else{
            return -1
        }
    })

    for (let town of sortedTowns) {
        console.log(town)
        console.log("Arrivals: " + towns[town].arrivals)
        console.log("Departures: " + towns[town].departures)
        console.log("Planes:")

        let tempArr = Array.from(towns[town].planes)

        tempArr.sort(function(a,b){
            return a.localeCompare(b)
        }).map(x=>console.log("-- "+x))
    }

    function townsGenerator(id, leaving = 0, arriving = 0, planeId, townsObj) {
        townsObj[id] = {
            departures: leaving,
            arrivals: arriving,
            planes: new Set([])
        }
        townsObj[id].planes.add(planeId)
    }

    function planeGenerator(planeID, planesObj) {
        planesObj[planeID] = {
            status: "land"
        }
    }
}

Problem4(['RTA72 London 140 land',
'RTA72 Brussels 240 depart',
'RTA72 Sofia 450 land',
'RTA72 Lisbon 240 depart',
'RTA72 Berlin 350 land',
'RTA72 Otava 201 depart',
'RTA72 Haga 350 land',
'RTA72 Otava 201 depart',
'RTA72 Dortmund 150 land',
'RTA72 Montana 243 depart',
'RTA72 Monreal 350 land',
'RTA72 NewYork 201 depart',
'RTA72 Pekin 350 land',
'RTA72 Tokyo 201 depart',
'RTA72 Warshaw 350 land',
'RTA72 Riga 201 depart']
)
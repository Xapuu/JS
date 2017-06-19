function PyramidOfJoser(theBase, increment) {

    let base = theBase
    let stone = 0
    let marbel = 0
    let lapis = 0
    let gold = 0
    let height = 0

    while (base > 2) {
        height++

        let currentStone = (base - 2) * (base - 2)

        stone += currentStone
        if (height % 5 != 0) {
            marbel += (base * base) - currentStone
        } else {
            lapis += (base * base) - currentStone
        }

        base -= 2
    }

    height++

    console.log("Stone required: " + Math.ceil(stone * increment))
    console.log("Marble required: " + Math.ceil(marbel * increment))
    console.log("Lapis Lazuli required: " + Math.ceil(lapis * increment))
    console.log("Gold required: " + Math.ceil(base * base * increment))
    console.log("Final pyramid height: " + Math.floor(height * increment))
}

PyramidOfJoser(23, 0.5)

function JansNotation() {
    let params = arguments[0]

    if (ErrorHandler(params) != "Legit") {
        console.log(ErrorHandler(params))
        return
    }
    console.log(Magick(params))

    function Magick(params) {
        let tempParameters = []

        for (let elem of params) {

            if (typeof elem !== "string") {
                tempParameters.push(elem)
            } else {
                if (tempParameters.length < 2) {
                    return "Error: not enough operands!"
                } else {
                    tempParameters[tempParameters.length - 2] = Calculator(tempParameters[tempParameters.length - 2], tempParameters[tempParameters.length - 1], elem)
                    tempParameters.pop()
                }
            }
        }
        return tempParameters[0]

    }

    //Calculates two operands with operator and returns
    function Calculator(leftOperand, rightOperand, operator) {

        switch (operator) {
            case "+":
                return leftOperand + rightOperand
                break
            case "-":
                return leftOperand - rightOperand
                break
            case "*":
                return leftOperand * rightOperand
                break
            case "/":
                return leftOperand / rightOperand
                break
        }
    }

    // handels errors
    function ErrorHandler(params) {
        let test = params.filter(x => typeof (x) === "string").length

        if (params.length - test > test + 1) {
            return "Error: too many operands!"
        } else if (params.length - test < test + 1) {
            return "Error: not enough operands!"
        } else {
            return "Legit"
        }
    }

}

JansNotation([5,
    3,
    4,
    '*',
    '-']
)

function GalacticVote() {
    let params = arguments[0].filter(x => x != undefined)

    let galaxy = {}
    let winnersByGalaxy = {}

    ReadTheGalaxy(params, galaxy)
    FindTheWinners(galaxy, winnersByGalaxy)
    Printer(winnersByGalaxy)

    function Printer(winnersByGalaxy) {
        
        //getting all winners in order
        let winnersByName = Object.keys(winnersByGalaxy).sort((a, b) => {
            return winnersByGalaxy[b].totalVotes - winnersByGalaxy[a].totalVotes
        })


        //getting all the votes in the galaxy
        let totalVotesInEllection = 0
        let galaxyKeys = Object.keys(galaxy)
        for (let system of galaxyKeys) {
            totalVotesInEllection += galaxy[system].votes
        }

        // getting the votes of the winner
        let totalVotesOfFirst = 0
        winnersByGalaxy[winnersByName[0]].states.map(x => {
            totalVotesOfFirst += galaxy[x].votes
        })

        // printing the case with only one candidate
        if (winnersByName.length == 1) {
            console.log(winnersByName[0] + " wins with " + totalVotesOfFirst + " votes")
            console.log(winnersByName[0] + " wins unopposed!")
        }


        // printing the case with more than one candidate
        if (winnersByName.length > 1) {

            //getting the votes of the second candidate
            let totalVotesOfSecond = 0
            winnersByGalaxy[winnersByName[1]].states.map(x => {
                totalVotesOfSecond += galaxy[x].votes
            })

            // printing the case with a Runoff
            if (totalVotesInEllection / 2 > totalVotesOfFirst) {
                console.log("Runoff between " + winnersByName[0] + " with " + Math.floor(totalVotesOfFirst / totalVotesInEllection * 100) + "% and " +
                    winnersByName[1] + " with " + Math.floor(totalVotesOfSecond / totalVotesInEllection * 100) + "%")
            } else {
                // printing the case with a winner with 50%+
                console.log(winnersByName[0] + " wins with " + totalVotesOfFirst + " votes")
                console.log("Runner up: " + winnersByName[1])

                let sortedStates = winnersByGalaxy[winnersByName[1]].states.sort((a, b) => {
                    return galaxy[b].votes - galaxy[a].votes
                })
                for (let system of sortedStates) {
                    console.log(system + ": " + galaxy[system].votes)
                }
            }
        }
    }

    // Find all winners in the galaxy
    function FindTheWinners(galaxy, winnersByGalaxy) {

        let tempSystemKeys = Object.keys(galaxy)

        for (let currentSys of tempSystemKeys) {

            let tempContenderKeys = Object.keys(galaxy[currentSys])

            // candidates sorted by vote

            let sortedContenders = tempContenderKeys.sort((a, b) => {
                return galaxy[currentSys][b].votes - galaxy[currentSys][a].votes
            })

            // Case with only one contender
            if (tempContenderKeys.length == 2) {

                if (!winnersByGalaxy.hasOwnProperty(tempContenderKeys[1])) {
                    winnersByGalaxy[tempContenderKeys[1]] = {}
                    winnersByGalaxy[tempContenderKeys[1]].states = []
                    winnersByGalaxy[tempContenderKeys[1]].states.push(currentSys)
                    winnersByGalaxy[tempContenderKeys[1]].totalVotes = galaxy[currentSys].votes
                } else {
                    winnersByGalaxy[tempContenderKeys[1]].states.push(currentSys)
                    winnersByGalaxy[tempContenderKeys[1]].totalVotes += galaxy[currentSys].votes
                }
            }

            // Case with more than one contenders
            if (tempContenderKeys.length > 2) {
                if (!winnersByGalaxy.hasOwnProperty(tempContenderKeys[1])) {
                    winnersByGalaxy[tempContenderKeys[1]] = {}
                    winnersByGalaxy[tempContenderKeys[1]].states = []
                    winnersByGalaxy[tempContenderKeys[1]].states.push(currentSys)
                    winnersByGalaxy[tempContenderKeys[1]].totalVotes = galaxy[currentSys].votes
                } else {
                    winnersByGalaxy[tempContenderKeys[1]].states.push(currentSys)
                    winnersByGalaxy[tempContenderKeys[1]].totalVotes += galaxy[currentSys].votes
                }
            }

        }
    }

    // Read The Galaxy
    function ReadTheGalaxy(params, galaxy) {

        //Creating unique galaxys

        while (params.length != 0) {
            let currentSys = params.shift()
            if (!galaxy.hasOwnProperty(currentSys.system)) {
                galaxy[currentSys.system] = {}
                galaxy[currentSys.system].votes = 0
            }
            //Creating unique candidates
            if (!galaxy[currentSys.system].hasOwnProperty(currentSys.candidate)) {
                galaxy[currentSys.system][currentSys.candidate] = {}
                galaxy[currentSys.system][currentSys.candidate].votes = currentSys.votes
                galaxy[currentSys.system].votes += currentSys.votes
            } else {
                galaxy[currentSys.system][currentSys.candidate].votes += currentSys.votes
                galaxy[currentSys.system].votes += currentSys.votes
            }
        }
    }
}

GalacticVote(
 [ { system: 'Theta',     candidate: 'Kitler', votes: 50 },
  { system: 'Theta',     candidate: 'Space Cow',     votes: 45 },
  { system: 'Theta',   candidate: 'Huge Manatee',     votes: 45 },
  { system: 'Theta',   candidate: 'Flying Shrimp',     votes: 45 },
  { system: 'Tau',   candidate: 'Kitler', votes: 50 },
  { system: 'Tau', candidate: 'Space Cow', votes: 60 },
  { system: 'Sigma', candidate: 'Kitler',       votes: 50 }, 
  { system: 'Sigma', candidate: 'Huge Manatee',       votes: 60 }, 
  { system: 'Omicron', candidate: 'Kitler',       votes: 50 } ]
)

function XMLtoHTML() {
    let params = arguments[0]
    let toMatch = params.match(/<message.*?\sto=["]+(.+?)["]/)
    let fromMatch = params.match(/<message.*?[\s]from=["]+(.+?)["]/)
    let allOfTheMsg = params.match(/(<message.+?>(.+)<[\/]message>)/)
    let text = params.match(/<message(.+?)>/)

    let msgParams = text[1].match(/([^A-Za-z0-9\s="'.])/)

    if (allOfTheMsg != null) {
        if (allOfTheMsg[1].length != params.length || msgParams != null) {
            console.log("Invalid message format")
            return
        }
    }
    if (toMatch == null || fromMatch == null) {
        console.log("Missing attributes")
        return
    }


    console.log("<article>")
    console.log(`  <div>From: <span class="sender">${fromMatch[1]}</span></div>`)
    console.log(`  <div>To: <span class="recipient">${toMatch[1]}</span></div>`)
    console.log("  <div>")

    if (allOfTheMsg != null) {
        if (allOfTheMsg.indexOf("/n") != 0) {
            allOfTheMsg[2].split("/n").map(x => {
                console.log(`    <p>${x}</p>`)
            })
        } else {
            console.log(`    <p>${allOfTheMsg[2]}</p>`)
        }
    } else {


        text.input.split("\n").map((x, i, arr) => {

            let solution = ""

            if (i == 0) {
                solution = x.split(">")[1]
            } else if (i == arr.length - 1) {
                solution = x.split("<")[0]
            } else {
                solution = x
            }

            console.log(`    <p>${solution}</p>`)
        })
    }
    console.log("  </div>")
    console.log("</article>")

}

 XMLtoHTML(`<message to="Bob" from="Alice" timestamp="1497254114">Same old, same old
Let's go out for a beer
asdasdasdasdas</message>`)
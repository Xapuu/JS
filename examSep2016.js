// Medenka wars

function Problem1() {
    let params = arguments[0]
    let cur = params.filter(x => x != null)

    let whiteCounter = 0
    let blackCounter = 0

    let totalWhite = 0
    let totalBlack = 0

    let curentBlackDmg = -1
    let currentWhiteDmg = 0

    for (let attack of cur) {

        let currentLine = attack.split(" ")
        let currentDmg = Number(currentLine[0])
        let currentAttack = currentLine[1]

        if (currentAttack == "white") {
            if (currentDmg == curentBlackDmg) {
                totalBlack += currentDmg * 2.75
                currentDmg = 0
            } else {
                totalBlack += currentDmg
            }
            curentBlackDmg = currentDmg

        } else {

            if (currentDmg == currentWhiteDmg) {
                whiteCounter++
            } else {
                whiteCounter = 0
                currentWhiteDmg = currentDmg
            }

            if (whiteCounter == 4) {
                totalWhite += currentDmg * 4.5
                whiteCounter = 0
            } else {
                totalWhite += currentDmg
            }
        }
    }

    if (totalWhite >= totalBlack) {
        console.log("Winner - Naskor")
        console.log("Damage - " + totalWhite * 60)
    } else {
        console.log("Winner - Vitkor")
        console.log("Damage - " + totalBlack * 60)
    }

}

Problem1(['2 dark medenkas',
    '1 white medenkas',
    '2 dark medenkas',
    '2 dark medenkas',
    '15 white medenkas',
    '2 dark medenkas',
    '2 dark medenkas'
])

function Problem2() {
    let params = arguments[0]
    let matrixLength = params[0].split(' ').length

    let matrix = MatrixReader(params, matrixLength)
    let bunnies = BomberReader(params)

    Bombing(matrix, bunnies, matrixLength)

    function MatrixReader(forRead, lines) {
        let result = []
        for (let i = 0; i < lines; i++) {
            result[i] = Array.from(forRead.shift().split(" ").map(Number))
        }
        return result
    }

    function BomberReader(input) {

        if (input.length == 0) {
            return
        }

        let tempArr = input[0].split(" ")
        let bunnies = []

        tempArr.map(x => {
            let tempCor = x.split(",")
            bunnies.push([Number(tempCor[0]), Number(tempCor[1])])
        })
        return bunnies
    }
    function Bombing(matrixWithBunnies, bunniesWithBombs = undefined, length) {
        let totalDmg = 0
        let totalKillingSpree = 0

        if (bunnies != undefined) {
            for (let hopper of bunniesWithBombs) {
                let y = hopper[0]
                let x = hopper[1]
                let currentHopperCell = matrixWithBunnies[y][x]

                if (currentHopperCell <= 0) {
                    continue
                }
                totalDmg += currentHopperCell
                totalKillingSpree++

                // up
                if (y < length && y > 0 && x >= 0 && x < length) {
                    matrixWithBunnies[y - 1][x] -= currentHopperCell
                }
                // diagonal up right
                if (y < length && y > 0 && x >= 0 && x < length - 1) {
                    matrixWithBunnies[y - 1][x + 1] -= currentHopperCell
                }
                // right
                if (y >= 0 && y < length && x >= 0 && x < length - 1) {
                    matrixWithBunnies[y][x + 1] -= currentHopperCell
                }
                //diagonal right bot
                if (y >= 0 && y < length - 1 && x >= 0 && x < length - 1) {
                    matrixWithBunnies[y + 1][x + 1] -= currentHopperCell
                }
                // bot
                if (y >= 0 && y < length - 1 && x >= 0 && x < length) {
                    matrixWithBunnies[y + 1][x] -= currentHopperCell
                }
                // diagonala bot left
                if (y >= 0 && y < length - 1 && x > 0 && x < length) {
                    matrixWithBunnies[y + 1][x - 1] -= currentHopperCell
                }
                // left
                if (y >= 0 && y < length && x > 0 && x < length) {
                    matrixWithBunnies[y][x - 1] -= currentHopperCell
                }
                // diagonal left top
                if (y > 0 && y < length && x > 0 && x < length) {
                    matrixWithBunnies[y - 1][x - 1] -= currentHopperCell
                }
                matrixWithBunnies[y][x] = 0
            }
        }

        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length; j++) {
                if (matrixWithBunnies[i][j] > 0) {
                    totalKillingSpree++
                    totalDmg += matrixWithBunnies[i][j]
                }
            }
        }
        console.log(totalDmg)
        console.log(totalKillingSpree)
    }
}
Problem2(['10'
])




//-------------------

function Problem2vol2() {

    let params = arguments[0]
    let matrixLength = params[0].split(' ').length
    let matrixHeight = params.length-1

    Bombing(MatrixReader(params, matrixLength, matrixHeight), BomberReader(params, matrixHeight), matrixLength, matrixHeight)


    // Function that reads the matrix
    function MatrixReader(forRead, lines, matrixHeight) {
        let result = []
        for (let i = 0; i < matrixHeight; i++) {
            result[i] = Array.from(params.shift().split(" ").map(Number))
        }
        return result
    }
    // Function that reads all cell with bombs
    function BomberReader(input, line) {
        if (input[0] == undefined) {
            return input[0]
        }
        let tempArr = input[0].split(" ")
        let bunnies = []
        tempArr.map(x => {
            let tempCor = x.split(",")
            bunnies.push([Number(tempCor[0]), Number(tempCor[1])])
        })
        return bunnies
    }
    // Function that takes the initial matrix, the cells with bomber bunies and the length of the matrix, and after that prints the total dmg and the killing spree
    function Bombing(matrixWithBunnies, bunniesWithBombs, length, height) {
        let totalDmg = 0
        let totalKillingSpree = 0

            for (let hopper of bunniesWithBombs) {
                let y = hopper[0]
                let x = hopper[1]
                let currentHopperCell = matrixWithBunnies[y][x]

                if (currentHopperCell <= 0) {
                    continue
                }
                totalDmg += currentHopperCell
                totalKillingSpree++

                // up
                if (y < height && y > 0 && x >= 0 && x < length) {
                    matrixWithBunnies[y - 1][x] -= currentHopperCell
                }
                // diagonal up right
                if (y < height && y > 0 && x >= 0 && x < length - 1) {
                    matrixWithBunnies[y - 1][x + 1] -= currentHopperCell
                }
                // right
                if (y >= 0 && y < height && x >= 0 && x < length - 1) {
                    matrixWithBunnies[y][x + 1] -= currentHopperCell
                }
                //diagonal right bot
                if (y >= 0 && y < height - 1 && x >= 0 && x < length - 1) {
                    matrixWithBunnies[y + 1][x + 1] -= currentHopperCell
                }
                // bot
                if (y >= 0 && y < height - 1 && x >= 0 && x < length) {
                    matrixWithBunnies[y + 1][x] -= currentHopperCell
                }
                // diagonala bot left
                if (y >= 0 && y < height - 1 && x > 0 && x < length) {
                    matrixWithBunnies[y + 1][x - 1] -= currentHopperCell
                }
                // left
                if (y >= 0 && y < height && x > 0 && x < length) {
                    matrixWithBunnies[y][x - 1] -= currentHopperCell
                }
                // diagonal left top
                if (y > 0 && y < height && x > 0 && x < length) {
                    matrixWithBunnies[y - 1][x - 1] -= currentHopperCell
                }
                matrixWithBunnies[y][x] = 0
            }
        
        for (let i = 0; i < height; i++) {
            for (let j = 0; j < length; j++) {
                if (matrixWithBunnies[i][j] > 0) {
                    totalKillingSpree++
                    totalDmg += matrixWithBunnies[i][j]
                }
            }
        }
        console.log(totalDmg)
        console.log(totalKillingSpree)
    }
    
}
Problem2vol2(['10 10 10',
'10 10 10',
'0,0'])

function CreateMatrix(size) {
    let result = []
    for (let i = 0; i < size; i++) {
        let temp = "1"
        for (let j = 0; j < size - 1; j++) {
            temp += " 1"
        }
        result[i] = temp
    }
    return result
}

// console.log(CreateMatrix(10))
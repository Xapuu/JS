// Medenka wars

function Problem1() {
    let params = arguments[0]

    let counter = 0

    let whiteDmg = 0
    let darkDmg = 0

    for (let i = 0; i < params.length; i++) {

        let current = params[i].split(' ')
        let medenkasCount = Number(current[0])
        let team = current[1]
        if (i == 0) {
            if (team == 'dark') {
                darkDmg += medenkasCount
            } else {
                whiteDmg += medenkasCount
            }
        }
        if (i != 0) {
            let prev = params[i - 1].split(' ')
            let prevMedenkasCount = Number(prev[0])
            let prevTeam = prev[1]

            if (team == prevTeam && medenkasCount == prevMedenkasCount) {
                counter++
            } else {
                counter = 0
            }

            if (team == 'white') {
                if (counter == 4) {
                    whiteDmg += medenkasCount * 4.5
                    counter = 0
                } else {
                    whiteDmg += medenkasCount
                }
            }

            if (team == "dark") {
                if (counter == 1) {
                    darkDmg += medenkasCount * 2.75
                    counter = -1
                } else {
                    darkDmg += medenkasCount
                }
            }
        }
    }
    if (whiteDmg > darkDmg) {
        console.log("Winner - Vitkor")
        console.log("Damage - " + whiteDmg * 60)
    } else {
        console.log("Winner - Naskor")
        console.log("Damage - " + darkDmg * 60)
    }
}

Problem1(['2 white medenkas', '2 white medenkas', '2 white medenkas', '2 white medenkas', '2 white medenkas'])


// bunny killer 

function Problem2() {
    let params = arguments[0]
    let bombs = params.pop().split(' ')
    let myMatrix = MatrixReader(params)
    let matrixForCalc =  BombedMatrix(bombs, myMatrix)
  
    let totalDmg = 0
    let counter = 0

    // myMatrix.map(row => {
    //     row.map(col => {
    //         if (col > 0) {
    //             totalDmg += col
    //             counter++
    //         }
    //     })
    // })

    for(let i = 0; i<myMatrix.length;i++){
        for(let j =0; j<myMatrix.length;j++){
            if(matrixForCalc[i][j]>0){
                totalDmg+=matrixForCalc[i][j]
                counter++
            }
        }
    }

    console.log(totalDmg)
    console.log(counter)


    function BombedMatrix(bombBunies, matrix) {


        let tempMatrix = matrix.map(x=>{
            return x.slice()
        })
        bombBunies.map(hopper => {
            let currentBunny = hopper.split(',').map(Number)
            let x = currentBunny[0]
            let y = currentBunny[1]
            let bunnyHp = matrix[x][y]

            
            //right
            if (y + 1 < matrix[0].length) {
                tempMatrix[x][y + 1] -= bunnyHp
            }
            //left
            if (y - 1 >= 0) {
                tempMatrix[x][y - 1] -= bunnyHp
            }
            //bot
            if (y + 1 < matrix.length) {
                tempMatrix[x][y+1] -= bunnyHp
            }
            //top
            if (x - 1 >= 0) {
                tempMatrix[x - 1][y] -= bunnyHp
            }
            // right top
            if (y + 1 < matrix[0].length && x - 1 >= 0) {
                tempMatrix[x - 1][y + 1] -= bunnyHp
            }
            // rightt bot
            if (y + 1 < matrix[0].length && x + 1 < matrix.length) {
                tempMatrix[x + 1][y + 1] -= bunnyHp
            }
            // left bot
            if (y - 1 >= 0 && x + 1 < matrix.length) {
                tempMatrix[x + 1][y - 1] -= bunnyHp
            }
            // left top
            if (y - 1 >= 0 && x - 1 >= 0) {
                tempMatrix[x - 1][y - 1] -= bunnyHp
            }

        })
                    return tempMatrix
    }
    function MatrixReader(params) {
        let result = []
        for (let i = 0; i < params.length; i++) {
            result.push(params[i].split(' ').map(Number))
        }
        return result
    }
}

Problem2(['5 10 15 20', '10 10 10 10', '10 15 10 10','10 10 10 10', '2,2 0,1'])
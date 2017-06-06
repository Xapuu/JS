// intersection multiplication

function Problem1() {
    let elems = arguments[0]

    let topSolution = 0


    elems.map(Number).map((cur, index, arr) => {

        if (cur < 10 && cur > 0 && index < arr.length - 1) {

            let tempSolution = arr[index + 1]
            let cap = index + cur < arr.length ? index + cur : arr.length
            for (let i = index; i < cap - 1; i++) {
                tempSolution *= arr[i + 2]
            }
            if (tempSolution > topSolution) {
                topSolution = tempSolution

            }
            if (topSolution == 0 && tempSolution != 0) {
                topSolution = tempSolution
            }

        }
    })

    console.log(topSolution)
}
Problem1([10, 20, 2, 30, -1, 10, 2, 0, 2])

// subscribers

function Problem4() {

    let params = arguments[0];

    let ppl = []

    params.map(humanForReg => {
        if (humanForReg.length == 1) {
            let test = IsInExistence(ppl, humanForReg)
            if (test.length == 0) {
                ppl.push(NewPerseon(humanForReg))
            }

        } else {
            var temp = humanForReg.split("-")
            var susbscriber = temp[0]
            var susbscribedTo = temp[1]

            if (IsInExistence(ppl, susbscriber).length != 0 && IsInExistence(ppl, susbscribedTo).length != 0) {
                let subs = IsInExistence(ppl, susbscriber)
                let subsTo = IsInExistence(ppl, susbscribedTo)
                subs[0].subscribtions.add(subsTo[0].name)
                subsTo[0].subscribers.add(subs[0].name)

            }
        }
    })

    let sortedHumans = ppl.sort((a, b) => {
        return b.subscribtions.size - a.subscribtions.size
    }).sort((a, b) => {
        return b.subscribers.size - a.subscribers.size
    })

    console.log(sortedHumans[0].name)

    let indexer = 1

    sortedHumans[0].subscribers.forEach(function (x) {
        console.log(indexer + ". " + x)
        indexer++
    })

    sortedHumans[0].subscribers

    function NewPerseon(name) {
        let human = {
            name: name,
            subscribers: new Set(),
            subscribtions: new Set()
        }
        return human;
    }

    function IsInExistence(ppl, name) {
        return ppl.filter(x => {
            if (name == x.name) {
                return true
            } else {
                return false
            }
        })
    }
}

Problem4(["A", "B", "C", "D", "A-B", "A-B", "B-A", "C-A", "D-A"])

//rosette

function Problem2() {
    let params = arguments[0]
    let size = Number(params[0])
    let sizeOfParamas = params[1].split(" ").length
    let inputText = params.slice(size + 1)
    let controlTab = CreateTablet(size)
    let codedText = ReadCode(inputText)
    let decriptedCode = DecriptCode(controlTab, codedText, sizeOfParamas, size)

    let result = ""

    for (let i = 0; i < codedText.length; i++) {
        for (let j = 0; j < codedText[i].length; j++) {
            if(decriptedCode[i][j]!==""){
            result += decriptedCode[i][j]
            }
        }
    }

    console.log(result)

    function DecriptCode(control, coded, sizeOfParamas, heightSize) {
        let result = []
        for (let i = 0; i < coded.length; i += heightSize) {
            for (let j = 0; j < coded[i].length; j += sizeOfParamas) {
                if (result[i] == undefined) {
                    result[i] = []
                }
                    
                
                for (let x = j; x < j+sizeOfParamas; x++) {
                    //current cell
                    if ( x < coded.length) {
                        result[i][x] = FinalDecription(coded[i][x] + control[i%heightSize][x% sizeOfParamas])
                    }
                    
                    
                //extra down
                for (let z = i+1; z < i+heightSize; z++) {
                   
                    if ( z < coded.length && result[z]==undefined) {
                        result[z] = []
                    }
                    if (z < coded.length) {
                        result[z][x] = FinalDecription(coded[z][x] + control[(z) % heightSize][x % sizeOfParamas])
                    }
                }}


            }
        }
        function FinalDecription(secretChar) {
            return secretChar % 27 + 64 == 64 ? " " : String.fromCharCode(secretChar % 27 + 64)
        }

        return result
    }

    function ReadCode(inputData) {
        let result = []
        for (let i = 0; i < inputData.length; i++) {
            let tempLine = inputData[i].split(" ").map(x => Number(x))
            for (let j = 0; j < tempLine.length; j++) {
                if (result[i] == undefined) {
                    result[i] = []
                }
                result[i][j] = tempLine[j]
            }
        }
        return result
    }

    function CreateTablet(size) {
        let controlTablet = []
        let tempCounter = 1

        for (let i = 0; i < size; i++) {
            if (controlTablet[i] == undefined) {
                controlTablet[i] = []
            }
            let tempLine = params[tempCounter].split(" ").map(x => Number(x))
            tempCounter++
            for (let j = 0; j < tempLine.length; j++) {
                controlTablet[i][j] = tempLine[j]
            }
        }
        return controlTablet
    }
}

Problem2(['2',
    '59 36',
    '82 52',
    '4 18 25 19 8',
    '4 2 8 2 18',
    '23 14 22 0 22',
    '2 17 13 19 20',
    '0 9 0 22 22'
    ]
)

function Problem3(input){
let specialKey =  input.shift()

let myRegEx = new RegExp ('/(\s?|^)('+specialKey+')+\s+[A-Z!%\$#]{8,}([\s\\.,]|$)/',"gi")
console.log(input)

let test = input[0]

console.log(test.match(myRegEx))

}
Problem3(['specialKey',
'In this text the specialKey HELLOWORLD! is correct, but',
'the following specialKey $HelloWorl#d and spEcIaLKEy HOLLOWORLD1 are not, while',
'SpeCIaLkeY   SOM%%ETH$IN and SPECIALKEY ##$$##$$ are!'
])
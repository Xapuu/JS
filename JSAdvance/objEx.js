// heroic Inventory

function Problem1() {
    let params = arguments[0]
    let heroes = []

    for (let hero of params) {
        let curParams = hero.replace(/\s+/g, "").split("/")
        if (curParams.length == 3) {
            heroes.push(CreateHero(curParams[0], Number(curParams[1]), curParams[2]))
        } else {
            heroes.push(CreateHeroNoInv(curParams[0], Number(curParams[1])))
        }
    }

    function CreateHero(name, level, inventory) {
        current = {
            name: name,
            level: level,
            items: inventory.split(",").filter(x => x != "").map(x => x.trim())
        }
        return current
    }
    function CreateHeroNoInv(name, level) {
        current = {
            name: name,
            level: level,
            items: []

        }
        return current
    }
    console.log(JSON.stringify(heroes))
}

Problem1(
    [
        'Isacc / 25 / Apple, GravityGun',
        'Derek / 12 / BarrelVest, ',
        'Hes / 1 '
    ]
)

function Problem2() {
    let params = arguments[0]

    console.log("<table>")
    for (let line of params) {
        let current = JSON.parse(line)
        console.log("    <tr>")
        console.log("        <td>" + current.name + "</td>")
        console.log("        <td>" + current.position + "</td>")
        console.log("        <td>" + current.salary + "</td>")
        console.log("    <tr>")
    }
    console.log("</table>")
}

Problem2(
    ['{"name":"Pesho","position":"Promenliva","salary":100000}',
        '{"name":"Teo","position":"Lecturer","salary":1000}',
        '{"name":"Georgi","position":"Lecturer","salary":1000}'
    ]
)

function Problem3() {

    let params = arguments[0]
    let juices = {}
    let appearance = new Set()


    for (let line of params) {
        let currentLine = line.replace(/\s*/, "").split("=>")
        let flavour = currentLine[0]
        let amount = Number(currentLine[1])

        if (juices[flavour] == undefined) {
            JuiceGenerator(juices, flavour, amount)
        } else {
            juices[flavour] += amount
        }

        if (juices[flavour] >= 1000) {
            appearance.add(flavour)
        }

    }
    let result = Array.from(appearance)
    for (let i = 0; i < result.length; i++) {
        console.log(result[i] + "=> " + Math.floor(juices[result[i]] / 1000))
    }

    function JuiceGenerator(batch, type, amount) {
        batch[type] = amount
    }

}

Problem3([
    'Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549'
])

function Problem4() {
    let params = arguments[0]

    let menu = {}

    FillTheMenu(menu, params)

    let keys = Object.keys(menu).sort()

    for (let i = 0; i < keys.length; i++) {
        console.log(keys[i])
        let currentObject = Object.keys(menu[keys[i]]).sort()

        for (let j = 0; j < currentObject.length; j++) {

            console.log("  " + currentObject[j] + ": " + menu[keys[i]][currentObject[j]])
        }
    }

    function FillTheMenu(menu, params) {
        for (let line of params) {
            let currentLine = line.split(":").map(x => x.trim())
            let letter = currentLine[0].substring(0, 1)
            let name = currentLine[0]
            let amount = Number(currentLine[1])
            if (menu[letter] == undefined) {
                AddClass(menu, letter)
            }
            AddItemInClass(menu, letter, name, amount)
        }
    }


    function AddClass(menu, letter) {
        menu[letter] = {}
    }

    function AddItemInClass(menu, classs, product, price) {
        menu[classs][product] = price
    }



}

Problem4([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'

])

function Problem5() {
    let params = arguments[0]

    let garage = {}

    for (let line of params) {
        let current = line.split("|")
        let mark = current[0].trim()
        let model = current[1].trim()
        let quantyty = Number(current[2].trim())


        if (garage[mark] == undefined) {
            AddMark(garage, mark)
        }
        if (garage[mark][model] == undefined) {
            AddModel(garage, mark, model)
        }
        garage[mark][model] += quantyty
    }

    let marks = Object.keys(garage)

    for (let i = 0; i < marks.length; i++) {
        console.log(marks[i])

        let models = Object.keys(garage[marks[i]])

        for (let model of models) {
            console.log("###" + model + " -> " + garage[marks[i]][model])
        }
    }

    function AddMark(garage, mark) {
        garage[mark] = {}
    }

    function AddModel(garage, mark, model) {
        garage[mark][model] = 0
    }

}

Problem5(
    ['Audi | Q7 | 1000',
        'Audi | Q6 | 100',
        'BMW | X5 | 1000',
        'BMW | X6 | 100',
        'Citroen | C4 | 123',
        'Volga | GAZ-24 | 1000000',
        'Lada | Niva | 1000000',
        'Lada | Jigula | 1000000',
        'Citroen | C4 | 22',
        'Citroen | C5 | 10'
    ]
)

function Problem6() {

    let params = arguments[0]

    let allElems = {}
    Reader(allElems, params)



    let mainKeys = Object.keys(allElems).sort((a,b)=>sorting(a,b))

    for (let primaryNode of mainKeys){
        console.log(primaryNode)

        let secondaryLvKeys = Object.keys(allElems[primaryNode]).sort((a,b)=>innerSorting(a,b,primaryNode))

        for(let elem of secondaryLvKeys){
                    console.log("|||"+elem)
                    allElems[primaryNode][elem].map(x=>console.log("||||||"+x))

        }

    }

    console.log(allElems)

    function innerSorting(a,b,primaryNode){
        let childA = Object.keys(allElems[primaryNode][a])
        let childB = Object.keys(allElems[primaryNode][b])


       if(childA.length>childB.length){
           return b
       }else if (childA.length<childB.length) {
           return a
       }else{
           return a.localeCompare(b)
       }
    }

    function sorting(a, b) {

       let childrenOfA = Object.keys(allElems[a]).length
       let childrenofB = Object.keys(allElems[b]).length

       if(childrenOfA>childrenofB){
           return b
       }else if (childrenOfA<childrenofB) {
           return a
       }else{
           return a.localeCompare(b)
       }
        
        
    }


    function Reader(allElems, params) {

        for (let line of params) {
            let cur = line.split(" | ")
            let main = cur[0]
            let sub = cur[1]
            let subSub = cur[2]

            if (allElems[main] == undefined) {
                AddMain(allElems, main)
            }
            if (allElems[main][sub] == undefined) {
                AddSub(allElems, main, sub)
            }

            AddSubSub(allElems, main, sub, subSub)
        }
    }

    function AddSubSub(allElems, mark, sub, subSub) {
        allElems[mark][sub].push(subSub)
    }

    function AddSub(allElems, main, sub) {
        allElems[main][sub] = []

    }

    function AddMain(allElems, main) {
        allElems[main] = {}
    }

}

Problem6([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'

])
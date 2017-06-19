// Towns to JSON

function Problem1() {
    let params = arguments[0]
    let answer = []

    let prime = params.shift().split("|").map(x => x.trim()).filter(x => x != "")
    while (params.length != 0) {
        let temp = params.shift().split("|").map(x => x.trim()).filter(x => x != "")
        let curObj = tempObj(prime, temp)
        answer.push(curObj)
    }
    console.log(JSON.stringify(answer))

    function tempObj(prime, temp) {
        let solution = {}
        solution[prime[0]] = temp[0]
        solution[prime[1]] = Number(temp[1])
        solution[prime[2]] = Number(temp[2])

        return solution
    }
}

Problem1(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'])

    // HTML Table

function Problem2(){
    let params = JSON.parse(arguments[0])
    console.log("<table>")
                console.log("   <tr><th>name</th><th>score</th></tr>")
    for(let line of params){
        console.log("   <tr><td>"+convert(line.name)+"</td><td>"+line.score+"</td></tr>")

    }
    console.log("</table>")
    function convert(str)
{
  str = str.replace(/&/g, "&amp;");
  str = str.replace(/>/g, "&gt;");
  str = str.replace(/</g, "&lt;");
  str = str.replace(/"/g, "&quot;");
  str = str.replace(/'/g, "&#39;");
  return str;
}
}

Problem2('[{"name":"Pesho & maria","score":479},{"name":"Gosho","score":205}]')
//split with delimer

function Problem1(text,delimeter){
    text.split(delimeter).map(
        x=>console.log(x)
    )
}

Problem1 ("text-with-delimeter","-")

function Problem2(text,times){
    console.log(text.repeat(Number(times)))
}

Problem2("oesth",5)

function Problem3 (maind,subComp){
    console.log(maind.indexOf(subComp)==0?true:false)
}

Problem3("az pa za az","z")

function Problem4(text,word){
console.log(text.lastIndexOf(word)==text.length-word.length?true:false)
}
Problem4("mew jsw sasd what what","what")

function Problem5(text){
    let temp = text.split(" ").map(x=>(x.substring(0,1).toUpperCase()+x.substring(1).toLowerCase()))
    console.log(temp.join(" "))
}
Problem5("Was that Easy? tRY thIs onE for SiZe!")

function Problem6(text){
let str =""
text.map(x=>str=str.concat(x))
test=str.match(/\d+/g)
console.log(test.join(" "))
}

Problem6(["qkepqk 122 pdapk 23:20","asdas 456 65"])

function Problem7(str) {
    let variables =[];
    let regex = /\b_([a-zA-Z0-9]+)\b/g;

    let match = regex.exec(str);

    while(match) {
        variables.push(match[1]);
        match = regex.exec(str);
    }

    console.log(variables.join(","));
}
Problem7("_asdsa _sda _sdas _temp _sdsass")

function Problem8(text,match){
    text = text.toLowerCase();
    match = match.toLowerCase();
    let counter = 0
    while(text.indexOf(match)>=0){
        counter++
        text=text.substring(text.indexOf(match)+match.length)
    }
    console.log(counter)
}
Problem8("How do you plan on achieving that? How? How can you even think of that?","How")

function Problem8Vol2(text,match){
    let count = 0;
    let regex = new RegExp("\\b"+match+"\\b", "gi");
    let matchA = regex.exec(text);

    while(matchA) {
        count++;
        matchA = regex.exec(text);
    }

    console.log(count)
}




Problem8Vol2("How do you plan on achieving that? How? How can you even think of that?","How")
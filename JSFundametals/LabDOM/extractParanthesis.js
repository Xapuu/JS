function Extract(params){

let matches = document.getElementById("params").value.match(/[(](.*?)[)]/g)

let test = Array.from(matches)

console.log(test.map(x=>{
    return x.slice(1,x.length-1)
}).join("; "))
}




Extract("(b)   (dfsdfs)")
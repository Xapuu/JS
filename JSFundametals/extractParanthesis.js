function Extract(params){
let matches = document.getElementById("params").innerHTML.match(/[(](.*?)[)]/g)
let test = Array.from(matches)
return(test.map(x=>{
    return x.slice(1,x.length-1)
}).join("; "))
}




Extract("(b)   (dfsdfs)")
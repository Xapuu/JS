/**
 * Created by Hary on 7.5.2017 г..
 */

// Sum 3 Numbers
function first() {
    let args = [arguments[0],arguments[1],arguments[2]]
    console.log(args.reduce(function (a, b) {
        return Number(a) + Number(b);
    }))
}

first('2', '3', '4');

// calculate Sum and Vat

function second(args) {
    let sum = args.reduce(function (a, b) {
        return Number(a) + Number(b);
    });
    console.log("sum = " + sum + "\n" + "VAT = " + sum * 0.2 + "\n" + "total = " + sum * 1.2);
}
second(['2', '3', '6']);

// Letter Occurence in String

function third() {
    console.log((arguments[0].match(new RegExp(arguments[1], "g")) || []).length);
}
third('lhelllo', 'l');

// Filter by Age

function fourth() {
    for (let i = 1; i < arguments.length; i += 2) {
        if (Number(arguments[i + 1]) >= Number(arguments[0])) {
            console.log({name: arguments[i], age: Number(arguments[i + 1])})
        }
    }
}

fourth('19', 'Pesho', '119', 'Gosho', '20');

// String of Numbers 1..N

function fifth(args) {
    let a = '';
    for (let i = 1; i <= Number(args); i++) {
        a += i;
    }
    console.log(a.toString());
}

fifth('11');

// figureArea 66/100

function sixth() {
    let w = Number(arguments[0]);
    let h = Number(arguments[1]);
    let w2 =Number(arguments[2]);
    let h2 =Number(arguments[3]);
    if((w>=w2&&h>=h2)||(w<=w2&&h<=h2)){
        console.log((Math.max(h,h2)*Math.max(w,w2)));
    }else {
        console.log(Math.max(h, h2) * Math.max(w, w2) - Math.abs((h - h2) * (w - w2)));
    }
}

sixth('1', '1', '2', '2');

// figureArea 100/100

function workingSixth() {

    let[s1,s2,s3]=[arguments[0]*arguments[1],arguments[2]*arguments[3],Math.min(arguments[0],arguments[2])*Math.min(arguments[1],arguments[3])]
    console.log(s1+s2-s3)

}
workingSixth('1', '1', '2', '2');

function seventh() {

    let x = new Date(Date.UTC(Number(arguments[0]), (Number(arguments[1] - 1)), Number(arguments[2])));

    x.setDate(x.getDate() + 1);

    console.log(x.getFullYear()+"-"+(Number(x.getMonth())+1)+"-"+x.getDate());
}

seventh('2016', '9', '30');

// Distance between 2 points in 2D

function eight() {
    let[x1,y1,x2,y2]=[Number(arguments[0]),Number(arguments[1]),Number(arguments[2]),Number(arguments[3])];
    console.log(Math.sqrt(((x1-x2)*(x1-x2))+((y1-y2)*(y1-y2))));
}
eight('2.34', '15.66', '-13.55', '-2.9985');
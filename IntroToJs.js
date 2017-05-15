/**
 * Created by Hary on 7.5.2017 г..
 */

// Sum 3 Numbers
function first(args) {
    console.log(args.reduce(function (a, b) {
        return Number(a) + Number(b);
    }))
}

first(['2', '3', '4']);

// calculate Sum and Vat

function second(args) {
    let sum = args.reduce(function (a, b) {
        return Number(a) + Number(b);
    });
    console.log("sum = " + sum + "\n" + "VAT = " + sum * 0.2 + "\n" + "total = " + sum * 1.2);
}
second(['2', '3', '6']);

// Letter Occurence in String

function third(args) {
    console.log((args[0].match(new RegExp(args[1], "g")) || []).length);
}
third(['lhelllo', 'l']);

// Filter by Age

function fourth(args) {
    for (let i = 1; i < args.length; i += 2) {
        if (Number(args[i + 1]) >= Number(args[0])) {
            console.log({name: args[i], age: Number(args[i + 1])})
        }
    }
}

fourth(['19', 'Pesho', '119', 'Gosho', '20']);

// String of Numbers 1..N

function fifth(args) {
    let a = '';
    for (let i = 1; i <= Number(args[0]); i++) {
        a += i;
    }
    console.log(a.toString());
}

fifth(['11']);

// figureArea 66/100

function sixth(args) {
    let w = parseFloat(args[0]);
    let h = parseFloat(args[1]);
    let w2 =parseFloat(args[2]);
    let h2 =parseFloat(args[3]);
    if((w>=w2&&h>=h2)||(w<=w2&&h<=h2)){
        console.log((Math.max(h,h2)*Math.max(w,w2)));
    }else {
        console.log(Math.max(h, h2) * Math.max(w, w2) - Math.abs((h - h2) * (w - w2)));
    }
}

sixth(['1', '1', '2', '2']);

// figureArea 100/100

function workingSixth(args) {

    let[s1,s2,s3]=[args[0]*args[1],args[2]*args[3],Math.min(args[0],args[2])*Math.min(args[1],args[3])]
    console.log(s1+s2-s3)

}
workingSixth(['1', '1', '2', '2']);

function seventh(args) {

    let x = new Date(Date.UTC(Number(args[0]), (Number(args[1] - 1)), Number(args[2])));

    x.setDate(x.getDate() + 1);

    console.log(x.getFullYear()+"-"+(Number(x.getMonth())+1)+"-"+x.getDate());
}

seventh(['2016', '9', '30']);

// Distance between 2 points in 2D

function eight(args) {
    let[x1,y1,x2,y2]=[Number(args[0]),Number(args[1]),Number(args[2]),Number(args[3])];
    console.log(Math.sqrt(((x1-x2)*(x1-x2))+((y1-y2)*(y1-y2))));
}
eight(['2.34', '15.66', '-13.55', '-2.9985']);
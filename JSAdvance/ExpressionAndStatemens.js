/**
 * Created by Hary on 7.5.2017 г..
 */

// Hello JS

function first() {
    console.log("Hello, " + arguments[0] + ", I am JavaScript!")
}

// area and perimeter of rect

function second() {
    let [a, b]= [Number(arguments[0]), Number(arguments[1])];

    console.log(a * b);
    console.log((a + b) * 2)
}
second(2, 2);

// distance
function third(args) {
    let [v1, v2, t]=[Number(args[0]), Number(args[1]), Number(args[2]) / 3.6]

    console.log(Math.abs((v1 * t) - (v2 * t)));
}

third(0, 60, 3600);

//distance in 3D 2 dots

function fourth(args) {
    let [x1, y1, z1, x2, y2, z2]=[Number(args[0]), Number(args[1]), Number(args[2]), Number(args[3]),
        Number(args[4]), Number(args[5])]

    let result = Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2) + (z1 - z2) * (z1 - z2));
    console.log(result);
}
fourth([1, 1, 0, 5, 4, 0]);

//Grads to Radians
function fifth(args) {
    let result = (((Number(args) % 400)) * 0.9) % 360;
    let second = 360 + result;
    console.log(result < 0 ? second : result);
}

fifth([850]);

// Compound Interest

function sixth(args) {

    let [p, r, m, y]=[Number(args[0]), Number(args[1]) / 100, Number(args[2]), Number(args[3])];

    console.log((p * Math.pow((1 + r / (12 / m)), y * (12 / m))).toFixed(2));
}

sixth([1500, 4.3, 3, 6]);

// Rounding

function seventh(args) {
    let num = Number(args[0]);
    let placeHolder = Number(args[1]);

    console.log(parseFloat(num.toFixed(Math.min(placeHolder, 20))))
}

seventh([2.00, 4])

// Imperial units

function eight(args) {
    let input = Number(args);
    let foots = Math.floor(input / 12);
    let inches = input % 12;

    console.log(foots + "'-" + inches + "\"");
}

eight([36]);

//Now playing

function ninth(args) {
    console.log("Now Playing: " + args[1] + " - " + args[0] + " [" + args[2] + "]");
}

ninth(['Number One', 'Nelly', '4:09']);

// Compose Tag

function tenth(args) {
    console.log("<img src=\""+args[0]+"\" alt=\""+args[1]+"\">")
}

tenth(['smiley.gif', 'Smiley Face']);

// Binarty to decimal

function eleventh(args) {

    console.log(parseInt(Number(args),2))
}
eleventh(['00001001']);

// assign params to obj

function twelfth(args) {
    let a = {};
    a[args[0]]=args[1];
    a[args[2]]=args[3];
    a[args[4]]=args[5];
    console.log(a);
}

twelfth(['name', 'Pesho', 'age', '23', 'gender', 'male']);

//last day of prev day

function thirteen(args) {
    let myDate = new Date(Date.UTC(Number(args[2]),((Number(args[1])-1)),0));

    console.log(myDate.getDate());
}

thirteen(['17','1','2002']);
/**
 * Created by Hary on 7.5.2017 г..
 */

// Multiply Numbers

function first(args) {
    console.log(Number(args[0]) * Number(args[1]));

    // why next lines dosent work ?????

    // console.log(args.reduce(function (a,b) {
    //     return (Number(a)*Number(b));
    // }))
}
first([3, 2]);

// Boxes and Bottles

function second(args) {
    console.log(Math.ceil(Number(args[0]) / Number(args[1])));
}

second([20, 5]);

// Leap Year

function third(args) {
    let year = Number(args[0]);
    if (year % 400 == 0) {
        console.log("yes")
    } else if (year % 4 == 0 && (year % 100 != 0)) {
        console.log("yes")
    } else {
        console.log("no");
    }
}

third([2000]);

// Circle Area

function fourth(args) {

    let result = Number(args[0]) * Number(args[0]) * Math.PI;
    console.log(result + "\n" + result.toFixed(2));
}

fourth([5]);

// Triangle area 3 sides

function fifth(args) {

    let [a, b, c]=[Number(args[0]), Number(args[1]), Number(args[2])];
    let p = (a + b + c) / 2;
    console.log(Math.sqrt(p * (p - a) * (p - b) * (p - c)));
}

fifth([2, 3.5, 4]);

// Cone - Volume and Area

function sixth(args) {
    let radius = Number(args[0]);
    let height = Number(args[1]);

    console.log("volume = " + (1 / 3 * radius * radius * Math.PI * height) + "\narea = "
        + (radius * radius * Math.PI + Math.PI * radius * Math.sqrt(radius * radius + height * height)));
}

sixth([3, 5]);

// Even Odd or invalid

function seventh(args) {
    let number = Number(args[0]);

    number % 1 != 0 ? console.log("invalid") : number % 2 == 0 ? console.log("even") : console.log("odd");
}

seventh([1.5]);

// Fruit Vegy or unknown

function eight(args) {
    let fruits = ["banana", "apple", "kiwi", "cherry", "lemon", "grapes", "peach"];
    let vegies = ["tomato", "cucumber", "pepper", "onion", "garlic", "parsley"];

    if (fruits.indexOf(args[0]) > -1) {
        console.log("fruit");
    } else if (vegies.indexOf(args[0]) > -1) {
        console.log("vegetable");
    } else {
        console.log("unknown");
    }

}
eight(["banana"]);

// Colorful Numbers

function ninth(args) {
    console.log("<ul>");
    for (let i = 1; i <= Number(args[0]); i++) {
        let color = i % 2 == 0 ? "blue" : "green";
        console.log("<li><span style='color:" + color + "'>" + i + "</span></li>");
    }
    console.log("</ul>");
}

ninth([10]);

// Chessboard

function tenth(args) {

    let black = "<span class=\"black\"></span>";
    let white = "<span class=\"white\"></span>";

    let dimension = Number(args[0]);
    let counter = -1;

    console.log("<div class=\"chessboard\">")
    for (let h = 0; h < dimension; h++) {
        console.log("<div>");

        for (let w = 1 + counter; w <= dimension + counter; w++) {

            w % 2 == 0 ? console.log(black) : console.log(white);

        }
        console.log("</div>");
        counter++;
    }
    console.log("</div>")

}

tenth([3]);

// Binary Logarithm

function eleventh(args) {
    args.map(function (a) {
        if (a != 0) {
            console.log(Math.log2(a))
        }
    })
}

eleventh([1024, 1048576, 256, 1, 2, 50, 100, 0]);

// Prime Number Checker

function twelfth(args) {

 let number = Number(args[0]);

    if(number<=1){
        console.log(false)
        return
    };

 let counter = 0;

 for (let i=2; i<= number;i++){
     if(number%i==0){
         counter++;
     }
     if(counter>1){
         console.log(false);
         break;
     }
 }
 if(counter<2){
     console.log(true)
 }
}

twelfth([12]);
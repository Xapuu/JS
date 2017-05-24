/**
 * Created by Hary on 8.5.2017 г..
 */

// Biggest of 3 Numbers 71/100
function first(args) {
    console.log(args.reduce(function (a, b) {
        return Math.max(Number(a), Number(b));
    }))
}
first(['-20', '-30', '-10']);

// Biggest of 3 Numbers 100/100

function first2(args) {
    console.log(Math.max(Number(args[0]), Number(args[1]), Number(args[2])));
}
first2(['-20', '-30', '-10']);

// Point in rectangle

function second(args) {
    let arr = args.map(Number);
    if (arr[0] <= arr[3] && arr[0] >= arr[2] && arr[1] <= arr[5] && arr[1] >= arr[4]) {
        console.log("inside")
    } else {
        console.log("outside");
    }
}

second([2, -3, 2, 12, -3, 3]);

// Odd numbers to N

function third(args) {
    for (let i = 1; i <= Number(args); i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}

third(7);

// Triangle of $

function fourth(args) {
    for (let row = 1; row <= Number(args); row++) {
        console.log('$'.repeat(row))
    }
}
fourth(4);

function fifth(args) {

    let info =
        {
            monday: {
                the_godfather: 12,
                schindler_s_list: 8.50,
                casablanca: 8,
                the_wizard_of_oz: 10
            },
            tuesday: {
                the_godfather: 10,
                schindler_s_list: 8.50,
                casablanca: 8,
                the_wizard_of_oz: 10
            },
            wednesday: {
                the_godfather: 15,
                schindler_s_list: 8.50,
                casablanca: 8,
                the_wizard_of_oz: 10
            },
            thursday: {
                the_godfather: 12.50,
                schindler_s_list: 8.50,
                casablanca: 8,
                the_wizard_of_oz: 10
            },
            friday: {
                the_godfather: 15,
                schindler_s_list: 8.50,
                casablanca: 8,
                the_wizard_of_oz: 10
            },
            saturday: {
                the_godfather: 25,
                schindler_s_list: 15,
                casablanca: 10,
                the_wizard_of_oz: 15
            },
            sunday: {
                the_godfather: 30,
                schindler_s_list: 15,
                casablanca: 10,
                the_wizard_of_oz: 15
            }
        };

    let movie = (args[0].replace(/['\s]/g, "_")).toLowerCase();
    let day = (args[1].replace(/['\s]/g, "_")).toLowerCase();

    try {
        console.log(info[day][movie].toFixed(2));
    } catch (err) {
        console.log("error");
    }
}

fifth(["schindler_s_lists", "MoNdAy"]);

//quadratic equasion 90/100

function sixth() {

    let a = Number(arguments[0]);
    let b = Number(arguments[1]);
    let c = Number(arguments[2]);

    if (b * b - 4 * a * c < 0) {
        console.log("No")
    } else if (b * b - 4 * a * c == 0) {
        console.log(-b / 2 * a);
    } else {
        console.log(parseFloat(((-b - Math.sqrt(b * b - 4 * a * c)) / (2 * a)).toFixed(5)));
        console.log(parseFloat(((-b + Math.sqrt(b * b - 4 * a * c)) / (2 * a)).toFixed(5)));
    }
}

sixth(6, 11, -35);

//multiplication table

function seventh(args) {

    let border = Number(args);
    console.log("<table border=\"1\">");
    let firstLine = "";
    firstLine += "<tr>";
    for (let f = 0; f <= border; f++) {
        f==0?firstLine += "<th>x</th>":firstLine += "<th>" + f + "</th>";
    }
    firstLine += "</tr>";
    console.log(firstLine);
    for (let row = 1; row <= border; row++) {
        let curLine = "";
        curLine += "<tr><th>" + row + "</th>";
        for (let coll = 1; coll <= border; coll++) {
            curLine += "<td>" + row * coll + "</td>";
        }
        curLine += "</tr>"
        console.log(curLine)
    }
    console.log("</table>");
}

seventh('10');

// draw 4 boxes
function eight(args) {
    let size = Number(args);

    if (size == 2) {
        console.log("+++")
    } else {
        let line = "+" + "-".repeat(Math.ceil(size - 2)) + "+" + "-".repeat(Math.ceil(size - 2)) + "+";
        let line2 = "|" + " ".repeat(Math.ceil(size - 2)) + "|" + " ".repeat(Math.ceil(size - 2)) + "|";
        let height = size % 2 == 0 ? (size - 4) / 2 : (size - 3) / 2;

        for (let prime = 0; prime < 3; prime++) {
            console.log(line);
            if (prime == 2) {
                break;
            }
            for (let fill = 0; fill < height; fill++) {
                console.log(line2);
            }
        }
    }
}

eight(18);

// Callendar

function ninth(args) {

    let currentMonthLength = new Date(Date.UTC(args[2], args[1], 0)).getDate();
    let prevMonthLastDay = new Date(Date.UTC(args[2], args[1], 0)).getDay();

    let previousMonthLength = new Date(Date.UTC(args[2], Number(args[1]) - 1, 0)).getDate();
    let theFirstOfTheMonth = new Date(Date.UTC(args[2], (Number(args[1]) - 1), 1)).getDay();


    console.log("<table>");
    console.log("<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>");

    let line1 = "";
    line1 += "<tr>";
    for (let first = theFirstOfTheMonth - 1; first >= 0; first--) {
        line1 += ("<td class=\"prev-month\">" + (previousMonthLength - first) + "</td>");
    }
    for (let firstSecondPart = 1; firstSecondPart <= 7 - theFirstOfTheMonth; firstSecondPart++) {

        firstSecondPart==Number(args[0])?line1 += "<td class=\"today\">" + firstSecondPart + "</td>":line1 += "<td>" + firstSecondPart + "</td>";

    }

    line1 += "</tr>";
    let filling = "";

    for (let fill = 8 - theFirstOfTheMonth, counter = 1; fill <= currentMonthLength; fill++, counter++) {
        if (counter % 7 == 1) {
            filling += "<tr>"
        }

        fill==Number(args[0])?filling += "<td class=\"today\">" + fill + "</td>":filling += "<td>" + fill + "</td>";

        if (counter % 7 == 0) {
            filling += "</tr>";
            if(fill!=currentMonthLength){
            filling += "\n";
            }
        }
    }
    let lastly=false;
    for (let last = 1; last <= 6 - prevMonthLastDay; last++) {
        filling += "<td class=\"next-month\">" + last + "</td>";
        lastly=true;
    }
    if(lastly){
        filling += "</tr>";
    }

    console.log(line1);
    console.log(filling);
    console.log("</table>");

}

ninth([12, 4, 2016])


function solve() {
    [a, b, c] = [arguments[0], arguments[1], arguments[2]].map(Number);
   
    let d = ((Math.pow(b, 2)) - (4 * a * c));
    let x1 = (-b + Math.sqrt(d)) / (2 * a);
    let x2 = (-b - Math.sqrt(d)) / (2 * a);
 
    if (d > 0 && x1 < x2) {
        console.log(x1 + "\n" + x2);
    }
    else if (d > 0 && x2 < x1) {
        console.log(x2 + "\n" + x1);
    }
    else if (d == 0) {
        console.log(x1);
    }
    else if (d < 0) {
        console.log("no");
    }
}
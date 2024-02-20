var userName = "Ahmad";
var userId = 123;
var graduate = false;

console.log("user name is:", userName);
console.log("user Id:", userId);
console.log("graduate:", graduate);

let x = 5;
let y = 10;
console.log(x + y);

// X + Y = {}
console.log("X+Y=", x + y);

// 5 + 10 = 15
console.log(x, "+", y, "=", x + y);

console.log(`${x}+${y}=${x + y}`);

// == and ===
let num1 = 15;
let num2 = "15";
console.log(num1 === num2);
/*
[10:20 PM] Yazan Alqadery
' ===  '  type and value comparison
*/
graduate = true;
if (graduate) {
    // action
    console.log(`${userName} is graduated`);
} else {
    console.log(`${userName} is not graduated`);
}
userId = 123;
if (userId === 123) {
    console.log("Ahamd");
} else if (userId === 124) {
    console.log("Khalid");
} else if (userId === 125) {
    console.log("Majd");
} else {
    console.log("Invalid input");
}

// switch
let dayOfWeek = "Monday";
switch (dayOfWeek) {
    case "Sunday":
        console.log("it's sunday");
        // break;
        break;
    case "Friday":
        console.log("It's Friday");
        break;
    default:
        console.log("It's neithre Sunday nor Friday");
}

// quiz
let no1 = 10,
    no2 = 20,
    no3 = 5;
if (no1 > no2 && no1 > no3) {
    console.log(no1);
} else if (no2 > no1 && no2 > no3) {
    console.log(no2);
} else {
    console.log(no3);
}
console.log("using Math", Math.max(no1, no2, no3));

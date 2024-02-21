// print number from 0-5
for (let i = 0; i <= 5; i++) {
    // i = i + 1
    console.log(i);
}
console.log("*****************");
// while loop
// print number from 5-0
let j = 5;
while (j >= 0) {
    // action
    console.log(j);
    j--;
}
// array
let student = ["Ahamd", 1234, false]; // 3

// length
console.log("Array length", student.length);

// push
student.push("Amal");
console.log(student);

// pop
student.pop();
console.log("After pop", student);

// for loop
let hobbies = ["sport", "video games", "coding", "Reading"];
for (let i = 0; i < hobbies.length; i++) {
    console.log(hobbies[i]);
}
console.log("-----------");
// forEach
hobbies.forEach((hobbie) => {
    console.log(hobbie);
});

console.log("----------");
// Map
/*
[9:33 PM] Yazan Alqadery
returns a new array
*/
let newArr = hobbies.map((hobbie) => {
    return hobbie.toUpperCase();
});
console.log(newArr);

console.log("-------------------------");
// Objects
let studentObj = {
    // key : value
    username: "Ahmad",
    userId: 123,
    graduate: false,
};
console.log(studentObj);
console.log(studentObj.username);
console.log(studentObj.userId);
console.log(studentObj.graduate);

// object destructing
let { username, userId } = studentObj;
console.log(username, userId);

// arrau destructing
let [hobbieOne, hobbieTwo] = hobbies;
console.log(hobbieTwo);

// Functions
/*
[9:56 PM] Yazan Alqadery
resuable code
*/
function greet(userName) {
    // action to perfom
    console.log(`Greetings ${userName}!`);
}

greet("Amal");

function sum(x, y) {
    return x + y;
}
console.log(sum("5", "5"));

// lambda function
const mul = function (x, y) {
    return x * y;
};

console.log(mul(5, 5));

// Arrow function
const greetTwo = () => {
    console.log("Greetings");
};

greetTwo();

const sayMyName = (username) => {
    if (username === "Heisenberg") {
        console.log("Your damn right");
    } else {
        console.log("Your not the cook");
    }
};

sayMyName("Heisenberg");

class Student {
    studetnName;
    studentId;
    graduateState;
    constructor(studetnName, studentId, graduateState) {
        this.studetnName = studetnName;
        this.studentId = studentId;
        this.graduateState = graduateState;
    }
    printDets = () => {
        console.log(`studetn name is: ${this.studetnName}`);
        console.log(`student ID is: ${this.studentId}`);
        /*
        [10:24 PM] Musaab Alfalahi
        ternanry operator
        heart 1
        */
        console.log(
            this.graduateState
                ? `${this.studetnName} is graduate student`
                : `${this.studetnName} is not graduate student`
        );
    };
}

const studentOne = new Student("Ahamd", 123, false);
studentOne.printDets();

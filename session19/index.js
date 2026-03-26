// console.log("Hello, World!");

// [SECTION]  Functions with parameters 
/*
Syntax

Function functionName(parameters 1, parameters 2, parameters 3, ... parameters n) {
 //code Block
}
*/

function greeting() {
    let userinput = prompt ("Please enter your name: ");
    console.log("Hello, " + userinput + "!");
}
greeting();

// Function with Parameter
//name -> is ou r parameter
// parameter acts as a variable or storage for a specific function
function sayHello(name) {
    console.log ( "Hello, from function with parameter," + name);
}
// sayhello(argurment) -> is to be passed in the function parameter
sayHello("John doe")

// Mutiple Parameters
function completeName(firstName, middleName ,lastName) {
    console.log(`Hello, ${firstName} ${middleName} ${lastName}`);
}

completeName("Juan", "Dela", "Cruz" );
completeName("Juan", "Dela", "Cruz", "Junior" );
completeName("Juan", "Dela", );

//function and return statement
//return -> will hold a value to be passed outside the function
function print(){
    console.log ("Hello world!");
    return "Hello world!";

}
print();

let sum =function   (num1, num2) {
    let total = num1 + num2;
    console.log("Total: " + total);
    return total;
}

let result = sum(40, 35);
console.log(result);

checkRemark(result);


//if (sum >= 70) {
//    console.log("anga");
//}else {
//    console.log("awit");
//}

function checkRemark(score){
    if (score >= 75) {
        console.log("Paldo,Passed");
    } else {
        console.log("Pakak,Failed");
    }
}
 let registration = function(name, age) {
    if (age >= 18) {
        console.log(`Welcome, ${name}! You are eligible for registration.`)
        return age;
    } else {
        console.log(`Sorry, ${name}. You must be at least 18 years old to register.`);
    }
 }

 let value = registration("Juan", 69);
 console.log("Age: " + value);

 function checkAge(age) {
    if (age <= 17) {
        console.log("Sorry, you must be at least 18 years old to register.");
    } else if (age <= 30) {
        console.log("Welcome! You are eligible for registration.");
    } else {
        console.log("You can apply for Premium Account.");
    }

}

checkAge(value);
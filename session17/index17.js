//console.log("Hellow World!");

//[SECTION] Repeatition COntrol Structures

// while loop

/* 
Syntax:

while(condition) {

    // code block
    // iteration    
}

>> 1st iteration
let counter = 0;
while (counter 0 < 5) {
    console.log("do LOOP: " + counter);
    counter++;
}

result -> Do loop: 1

>> 2nd iteration

let counter = 1;
while (counter 1 < 5) {
    console.log("do LOOP: " + counter);
    counter++;
}
result -> DO LOOP: 2

>> 3rd iteration


let counter = 2;
while (counter 2 < 5) {
    console.log("WHILE LOOP: " + counter);
    counter++;
}
result -> WHILE LOOP: 2


>> 4th iteration

let counter = 3;
while (counter 3 < 5) {
    console.log("WHILE LOOP: " + counter);
    counter++;
}

result -> WHILE LOOP: 3

>> 5th iteration
let counter = 4;
while (counter 4 < 5) {
    console.log("WHILE LOOP: " + counter);
    counter++;
}

result -> WHILE LOOP: 4

>> 6th iteration
let counter = 5;    
while (counter 5 < 5) {
    console.log("WHILE LOOP: " + counter);
    counter++;
}
    result -> Do loop: 5

/*
Syntax:
do {
    // code block
    // iteration    
}while(conditon);


*/

let score = 0;
do {
    console.log("DO LOOP: " + score);
    score++;
} while (score <! 5);

// 3. For loop 
/*
syntax:
for(intialization; condition; iterator) {
    // code block
}
*/

for (let i = 0; i < 5; i++) {
    console.log ("For loop:" + i);
}

for (let i = 0; i < 10; i++) {
    if (i % 3 == 0 ) {
        console.log("COUNT:" + i + "- DIVISIBLE BY 3.");
    } else {
        console.log("COUNT:" + i );
    }
}

// continue - break 

for (let count = 0; count < 20; count++) {
    if (count == 18 ) {
        break;
    }

    console.log("COUNT: " + count);
}

for (let count = 0; count < 20; count++) {
    if (count == 15 ) {
        continue;
    }

    console.log("COUNT: " + count);
}

let isRunning = true;
let accountLocked = 0;
let isLoggedIn = true;
let password = "hello123";

while (isRunning) {
    if (accountLocked != 3) {
    let input = prompt("Enter password: ");
    if (input != password) {
        console.log("Incorrect password. Chance:", 3- accountLocked);
        accountLocked++;
    } else {
        isLoggedIn = true;
        alert("Welcome, User!");
        isRunning = false;
    }

}else {alert("Account is locked. Please contact admin.");
    isRunning = false;
}
}

let input =parseInt(prompt("please enter a number."));

for (let i = 0; i < input; i++) {
    console.log(i);
}

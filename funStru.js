
// ABSTRACT ////////////////////////////////////////////////////////////////////////////////////////////
// Product: Rough outline of general function structure and problem solving examples, notes, musings, etc.
// Purpose: Experiment with structural examples and make concise models for beginners.
// Objective: Create concise tutorials for beginners on practical problem solving methdologies 


// SYNOPSIS ////////////////////////////////////////////////////////////////////////////////////////////
// What is the problem?: Concise problem solving examples, strategies, models, etc. are very few and far between. 
// Why hasn't the problem been solved?: Difficult to communicate ingrained problem solving experience to beginners. 
// What is possible?: Take basic examples, communicate problem solving strategies, provide common patterns to follow, build from there.
// What is different now?: You should have a better understand of problem solving and what is possible so your own methdology can grow.
// What should you do now?: 






// useful problem solving strategies

// 1. Always have a plan
// 2. Restate the problem
// 3. Divide the Problem
// 5. Start with what you know
// 6. Reduce the Problem
// 7. Look for Analogies
// 8. Experiment
// 9. Dont get frustrated
// 10.





// multiply and divide and number, use another function in operation

function minus(divide) {
    return divide - 1;
}

function multiplyDivide2(number, numberToMultiply, numberToDivide) {
    const start = number;
    const multiply = start * numberToMultiply;
    const divide = multiply / numberToDivide;
    const minused = minus(divide)
    return minused;
}

console.log(multiplyDivide2(2,5,2));





// multiplyt and divide a number.


function multiplyDivide(number, numberToMultiply, numberToDivide) {
    const start = number;
    const multiply = start * numberToMultiply;
    const divide = multiply / numberToDivide;
    return divide;
}

console.log(multiplyDivide(2,5,2));





// Example that demonstrates the interconnectivity of a function
// first pay attention tot he arguments in the call signtature.  These are "slots".  In this case, number = 6, numberToAdd = 4, and numberToSubtract = 2.
//also, pay attention to how the variables are chained together and work off the previous one.

function addSubtract(number, numberToAdd, numberToSubtract) {
    let start = number;
        console.log(`first, we start with the number ${start}`);
    let add = start + numberToAdd;
        console.log(`second, when we add ${start} to ${numberToAdd} we get ${add}`);
    let subtract = add - numberToSubtract;
        console.log(`and last, when we subtract ${numberToSubtract} from ${add}, we get ${subtract}`);
}

console.log(addSubtract(6,4,2))








// Objective: Take a string, replace a word in that string, reverse that string using seperated functions

function flip(string) {
    return string.split('').reverse().join('');
}

function print(string) {
    console.log(string);
}

function replace(string) {
     return string.replace("this","that");
 }

function replaceFlipPrint(string) {
    print(flip(replace(string)));
}

function variablesReplaceFlipPrint(string) {
    let replaced = replace(string);
    let flipped = flip(replaced);
    print(flipped); 
}

variablesReplaceFlipPrint("this is a tester string first");
replaceFlipPrint("this is a tester string second");






// Objective: Take a string, replace a word in that string, reverse that string using a single condensed function.

function replaceFlipPrint(string) {
    let replace = string.replace("this","that");
    let flip = replace.split('').reverse().join('');
    console.log(flip);
}

console.log(replaceFlipPrint("this is a tester"));






// Objective: Take a string, replace a word in that string, reverse that string using a single SIMPLIFIED condensed function.

function replaceFlipPrint2(string) {
    console.log(string.replace("this","that").split('').reverse().join(''));
}

console.log(replaceFlipPrint2("This is a tester 2"))



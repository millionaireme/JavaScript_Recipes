"use strict";
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//
//     Array Method: .some()
//
// SYNTAX ////////////////////////////////////////////////////////////////////////////////////////////////////
//
//     array.some(callback)
//
// SUMMARY ///////////////////////////////////////////////////////////////////////////////////////////////////
//
//      • .some() method tests whether at least one element in the array passes the test implemented by the 
//        provided function
//      • .some() returns true(if one or more condition is true) or false (if no condition is true).
//
// EXAMPLES //////////////////////////////////////////////////////////////////////////////////////////////////
//
//      EXAMPLE 1: Check an array for even numbers
//
// RESOURCES /////////////////////////////////////////////////////////////////////////////////////////////////
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////



// EXAMPLE 1: Check an array for even numbers

const myArray = [1,2,3,4,5,6,7,8,9,10];

function checkEvens(array) {
    let even = function(element) {
        return element % 2 === 0;
    }
    console.log(array.some(even));
}

checkEvens(myArray);                              // true
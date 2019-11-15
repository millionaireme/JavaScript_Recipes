"use strict";
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//
//     Array Method: .reduce()
//
// SYNTAX ////////////////////////////////////////////////////////////////////////////////////////////////////
//
//      array.reduce(reducerFunction)
//
//      function reducerFunction(accumulator, currentValue) {
//          return accumulator + currentValue
//      }
//
// SUMMARY ///////////////////////////////////////////////////////////////////////////////////////////////////
//
//      • .reduce() executes a reducer function on each element in the array resulting in a single output value.
//      • .reduce() essentially reduces an array to a single number.
//      •
//      •
//
// EXAMPLES //////////////////////////////////////////////////////////////////////////////////////////////////
//
//      EXAMPLE 1: Reduce an array to a single number
//
// RESOURCES /////////////////////////////////////////////////////////////////////////////////////////////////
//
//
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// EXAMPLE 1: Reduce an array to a single number:

const myArray = [1, 2, 3, 4];

function reducerFunction(array) {
  const reducer = function(accumulator, currentValue) {
    return accumulator + currentValue;
  };
  console.log(array.reduce(reducer));
}

reducerFunction(myArray);

// EXAMPLE 2:

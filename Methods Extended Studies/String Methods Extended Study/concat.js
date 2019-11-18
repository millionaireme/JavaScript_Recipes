"use strict";
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//
//     Array Method: .concat()
//
// SYNTAX ////////////////////////////////////////////////////////////////////////////////////////////////////
//
//      string.concat(string2, string3, string4, ...)
//
// SUMMARY ///////////////////////////////////////////////////////////////////////////////////////////////////
//
//      • .concat() methods concatenates the provided string arguments to the calling string and returns a new string
//      •
//
// EXAMPLES //////////////////////////////////////////////////////////////////////////////////////////////////
//
//      EXAMPLE 1: Concatenate a new string
//
// RESOURCES /////////////////////////////////////////////////////////////////////////////////////////////////
//
//
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

// EXAMPLE 1: Concatenate a new string from other provided strings.

let greeting = "Hello";
let name = "Joe";
let excitement = "!";

function concatIt(str1, str2, str3) {
  const concatString = str1.concat(str2, str3);
  console.log(concatString);
}

concatIt(greeting, name, excitement); // HelloJoe!
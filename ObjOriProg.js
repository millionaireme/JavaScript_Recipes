"use strict";
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//     Object-oriented Programming
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     1. What is Object Oriented Programming (OOP)?
//     2. What are the four core concepts in OOP? 
//
// NOTES ///////////////////////////////////////////////////////////////////////////////////////////////
//     1. Useful overview of information about Object-oriented programming (OOP) taken from study, research,  
//        tutorials, mentor meetings, peer discussions, and good ole' fashioned curiosity.  I've put the 
//        document in Question and Answer format for improved readability.
//     2. There is also a seperate section dedicated to objects (e.g. objects.js).  Although there might be 
//        some overlap in material here, this looks at that content in the context of OOP.
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////


/*
1. What is Object Oriented Programming (OOP)?
/////////////////////////////////////////////
    -- Object oriented programing (OOP) is a programming paradigm centered around objects rather than functions.
    -- Object oriented programming is not a programming language or tool.
    -- Languages such as C#, Java, Ruby, Python, and JavaScript, and more.
    -- Many frameworks are designed with object oriented programming concepts in mind (e.g. angular).
*/

/*
2. What are the four core concepts of OOP?
//////////////////////////////////////////
        
        1. Encapsulation   -- group related variables and function together to reduce complexity.
        2. Abstraction     -- hide details of complexity and show only essentials, reduces complexity, and isolates code impact.
        3. Inheritance     -- eliminates redundant code.
        4. Polymorphism    -- refactors if/else and switch/case statements.

    -- Before object oriented programming there was something called "procedural programming" where data was stored in a
       bunch of variables and function that operate on the data, which was very simple and straight forward.
       -- but eventually these function will break and function will have duplicate lines of codes (i.e. spaghetti code).
    -- Which object-oriented programming (OOP), you combine a group of related variables and function into a unit.
        -- That unit is called an "Object".
        -- variables are called "properties".
        -- function are called "methods".     

    Encapsulation
    =============
    -- In object oriented programming, we group related variables and function on them into objects, which is called "ENCAPSULATION"
        -- for example:
*/
            let salary = 30000;
            let overtime = 10;
            let rate = 20;

            function getWage(salary, overtime, rate) {
                return salary + (overtime * rate);
            }
/*
    -- the example above is a "procedural" implementation, with variables on the top and the function at the bottom.

    -- The OOP way to solve this problem would look something like this:
*/
            let employee = {
                salary: 30000,
                overtime: 10,
                rate: 20,
                getWage: function() {
                    return this.salary + (this.overtime * this.rate);
                }
            }; 
            employee.getWage();
/*
    -- Note that the getWage method above does not have parameters where the procedural example needs parameters passed in.
            -- the getWage method does not need parameters because the parameters are modeled as properties of the object.
            -- in other words, because they are related and part of one unit, it is more efficient.
  
    Abstraction
    ===========
    -- Think of a computer as an object, with a motherboard, a videocard, RAM, CPU, etc.
        -- When you push the power, all the complexity of the computer is hidden from you.
        -- This is abstraction in practice.
    -- In objects, we have parts of the object, like properties and methods, which are hidden from the outside which has the 
       benefit of:
            1. making the interface of those objects simpler.
            2. helps reduce the impact of change
                -- for example, if we chnage the inner properties or methods, none of them will leak outside and cause problems.

    Inheritance
    ===========
    -- Inheritance is a mechanism that allows you to eliminate redundant code.
    -- Inheretance helps eliminate redundant code. For exampleL
        -- Suppose you have a variety of buttons (click buttons, drop-downs, checkboxes, etc.).
        -- However, they have a few things in common.
            -- they all have properties like hidden, innerHTML, click, focus, etc.
        -- Instead of redefining all the properties and methods for each button, all we need to do is define them once 
           in a generic element.
        -- So what we do in this example is group all the properties together into something like "HTMLElement" and have
           other objects inherit those properties and methods.

    Polymorphism
    ============
    -- Polymorphism is a technique that lets you get rid of long if and else or switch and case statements.
*/


/*
What is an object?
///////////////////
    -- objects are complex data types that bring together properties and elements into a single entity.

    What is object literal syntax?
    ==============================
    -- an object literal is: 

            defined variable        assignment operator
                            \          |
                            const car = {};
                            |     \ 
                            name    curly braces


    -- inside the curly braces we can add key/value pairs.

                         key         value inside "quotes"
                            \       /
                            make: "honda",
                                |         \
                              colon        comma seperating key/value pairs


    -- values can be a string, number, boolean, function, object, or array.
*/
                            const car = {
                                make: "honda",                                // string
                                wheels: 4,                                    // number
                                isWorking: true,                              // boolean
                                startIgnition: function() {                   // "method" or function
                                    console.log("vroom")
                                },
                                options: {                                    // object
                                    airCon: true,
                                    sportExhaust: true,
                                    spareTire: false,
                                },
                                seats: ["driver", "passenger", "rear"]         // array
                            };
/*
    -- and to access the members of the object, we use "dot" notation.

                        object       member name
                            \         /
                            car.wheels
                               |
                              dot
*/
                            console.log(car.make);                        //=> honda
                            console.log(car.wheels);                      //=> 4
                            console.log(car.isWorking);                   //=> true
                            console.log(car.startIgnition());             //=> vroom
                            console.log(car.options);                     //=> { airCon: true, sportExhaust: true, spareTire: false }
                            console.log(car.seats);                       //=> [ 'driver', 'passenger', 'rear' ]


/*
What is a factory object?
/////////////////////////
    -- a factory functions create an individual instance of some model.
        -- For example, suppos you want to duplicate  
*/

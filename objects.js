"use strict";
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//     Objects
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     1. What is an Object?
//     2. What are the components of an object?
//     3. Why use objects?
//
// NOTES ///////////////////////////////////////////////////////////////////////////////////////////////
//     1. Useful overview of information on objects taken from study, research, tutorials, 
//        mentor meetings, peer discussions, and good ole' fashioned curiosity.  I've put the document in Question
//        and Answer format for improved readability.
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////


/*
1. What is an object?
//////////////////
    - objects are complex data types that allow you to bring together common properties and behaviors into a single entity.
    - objects are collections of key/value pairs.
        -- think of key value pairs like words in a dictionary, with a word (i.e. key) and its definition (i.e. value).
    - objects provide an excellent way of organizing code that belongs together.
    - objects helpyou avoid global variables.
    - objects let us represent instances of some model.
        
*/



/*
2. What are the components of an object?
/////////////////////////////////////
    - an OBJECT LITERAL is a comma seperated list of name/value pairs wrapped inside curly braces.
    - inside the object literal are key/value pairs.
    - each key/value pair has a name followed by a colon and a value followed by a comma.
    - values that are strings must be enclosed by quotation marks.
    - values can be any data type (i.e. string, number, boolean, null, undefined, function, object, array, etc.).
    - if you need a space or a period in a key, you need to use quotation marks. (i.e. 'first hobbit': 'frodo',).   
*/

//      variable   object name        object literal
//             \          |            /          
                const theFellowship = {
                    wizard: 'gandalf',        //- key: value,  (note the comma that seperates each key/value pair).
                    man: 'Aragon',
                    elf: 'Legolas',
                    dwarf: 'gimli',
                    hobbit: 'frodo'
                }



/*
3. why use objects?
///////////////////
    - the purpose of an object is to group related variables.
    - if we have properties that are highly related, we want to encapsulate them inside an object.
    - we want to create an object with these related properties because the alternative is inefficient.  
    - Observe the collection of variable below as an example of this inefficientcy:
*/
            let armor = 'chain mail';
            let weapon = 'sword';
            let shield = 'round';
/*
    - we are declaring variable, but all of these variables are highly related.
    - BUT if we encapsulate those variables in an object, we can send that object anywhere in our program.
    - so we create an object to hold those related variables:
*/
            let standardEquipment = {
                armor: 'chain mail',
                weapon: 'sword',
                shield: 'round'
            }
/*
    - object values can have any data type (i.e. strings, numbers, booleans, objects, arrays, functions, etc.).
    - special note: if a function is part of an object, we call that function a METHOD.
*/
            let equipment = {
                equipmentOwner: 'Sir Galahad',                                      // string
                weaponStrikes: 1,                                                     // number
                isDefensive: true,                                                  // boolean
                armor: {                                                            // object
                    helmet: 'sallet',
                    armor: 'chain mail'
                },
                useWeapon: function() {                                                // function (i.e. method)
                    console.log(`using weapon increases offensive ability +1!`);
                    equipment.weaponStrikes++;
                },
                shield: ['round', 'dragon picture', 'handle']                       // array
            }
/*
    - to access values and run object methods (i.e. functions), we can use two ways:
            -- dot notation (i.e. equipment.armor)
            -- bracket notation (i.e. equipment['armor'])
                - we use bracket notation is we need to use spaces or periods (because otherwise dot-notation would have breaks and not work).
*/
            console.log(equipment.equipmentOwner);   //-> Sir Galahad
            console.log(equipment.isDefensive);      //-> true
            console.log(equipment.armor);            //-> { helmet: 'sallet', armor: 'chain mail' }
            console.log(equipment.shield);           //-> [ 'round', 'dragon picture', 'handle' ]
/*
            -- for the object method (i.e. function), we need to call the function first.
*/
            console.log(equipment.weaponStrikes);    //-> 1
            equipment.useWeapon();                   //-> using weapon increases offensive ability +1!
            console.log(equipment.weaponStrikes);    //-> 2





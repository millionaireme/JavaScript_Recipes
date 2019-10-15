'use strict';
// TOPIC /////////////////////////////////////////////////////////////////////////////////////////////////////
//     Foundations of JavaScript
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//     1. What is a program?
//     2. What is JavaScript?
//     3. What is the history of JavaScript?
//
//
//
// NOTES ///////////////////////////////////////////////////////////////////////////////////////////////
//     1. Useful overview of information on establishing the foundations of JavaScript from study, research, tutorials,
//        mentor meetings, peer discussions, and good ole' fashioned curiosity.  I've put the document in Question
//        and Answer format for improved readability.
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
1. What is a program?
////////////////////
==SHORT ANSWER==
    •  A program is a set of instructions a computer carries out.
  
==EXTENDED ANSWER== 
    •  The skill of a programmer is finding a solution to a problem and implementing those solutions with a programming language
       so the computer can execute it.
    •  programming is like learning a language, where you need to learn new words, punctuation, and putting all these things 
       together to successfully communicate.
    •  Programming languages, like JavaScript, have thier own keywords an characters, as well as rules for putting them all together.
    •  This is called the 'syntax' of the programming language.
    •  A computer program (i.e. scripts) would be as simple as added a bit of javascript to your webpage.
    •  Programs work by manipulating values, like numbers or text.
    •  A program retains a values in a variable, which is and allows that value to be refered to by name.
*/

/*
2. What is JavaScript?
/////////////////////
==SHORT ANSWER==
  •   Javascript is a client-side langauge, meaning that it works inside a web browser.
        o    conversely, a server-side language would be node.js.

==EXTENDED ANSWER==
    •  JavaScript is the only language that can be used on all modern browsers.
    •  JavaScript is specified by ECMA and W3C specs.
    •  JavaScript relies on individual browsers to handle how to implement ECMA and W3C specifications. 
    •  JavaScript is used in two ways:
          o  First, modeling and manipulating data and proceses.
          o  Second, interacting with browser elements.
    •  The JavaScript interpreter performs automatic 'garbage colleciton' for memory management, meaning the program can create objects
       and the programmer does not need to worry about destruction or deallocation of those objects.  
          o  when the program has no way to refer to it (no longer reachable), the interpreter automatically reclaims the memory it occuiped.
*/

/*
3. What is the history of JavaScript?
/////////////////////////////////
==SHORT ANSWER==
    •	 Created in 1995 by Brandon Eich to make it easier to add interactive and dynamic element to websites, .
    
  Why JavaScript?
  ==============
    •	  Initially, websites just existed as pages of HTML, CSS, and some plugins in Java.
        o	  When JavaScript first became a thing, resources seemed to be very limited (take JS code and alter).
    •	  JavaScript was first created in 10 days in 1995 by Brandan Eich to make it easier to add interactive and dynamic elements to websites.
    •	  Orginally called "LiveScript", but was changed back to JavaScript as a marketing decision because Java was so popular at the time. 

  Improvements in Standardization
  ===============================
    •	  Over time, competing versions of JavaScript emerged, so it was taken to ECMA International so an official standard could be formed.
        o	  Initially, JavaScript was not properly standardized and browsers were problematic (IE, netscape) and all of them had different
            ways of dealing with the langauge.
    •	  When the web standardization movement came around (and html5 became accepted), browsers became standards-based and JavaScript 
        language development did not need to chase after the browser standards. 
    •	  jQuery initially became a way to level the playing field, but now browsers are good and standards have improved so much to
        the point where that you may not even need to use jQuery because you are adding extra code for an enviroment that doesnt exist
        anymore.
    •	  ECMA standardizations are now used to reference version (e.g. ES5, ES6, etc.) and now year-based version (e.g. ES2017, ES2018, etc.).
*/

/* 
What are some types of programmers?
////////////////////////////////////

  What is a front-end programmer?
  ================================
  •  A front-end programmer takes designs from designers and use HTML, CSS, and JavaScript to create a website.
  •	 Front-end programmers solve problems such as optimizing loading speeds, how the website fits on the screen 
     (i.e. responsive design), and translate design mockups and apply them to websites, and requests to API's.
     

  What is a back-end progammer?
  =============================
  •	 A back-end developer manages the interactions between clients and servers.
  •	 

*/

/*
Problem solving
////////////////
    •	 Problem solving is hard because learning programming syntax uses a different "mental muscle" or "mental hemesphere" than problem solving.
      •	 LEFT BRAIN activity involves programming syntax, readign programs, memorizing elements of an API which are analytical in nature.
      •	 RIGHT BRAIN activity involves using those left-brain analytical skills and applying them with right-brain creativity.
    •	 Problem solving is a CREATIVE activity
      •	 For example, problem solving would be like figuring out how to get something on a high shelf without a ladder.
    •	 Problem solving is the systemac approach to OVERCOMING an issue rather than AVOIDING it.
  
  What is problem solving?
  =======================
    •	 Problem solving is writing an orginal program that perfoms a particualr set of tasks and meets all stated constraints.

  What are constraints?
  ====================
    •	 Constraints include:
      •	 programming language.
      •	 performance.
      •	 memory footprint.


  Problem Solving Methdologies
  ============================
    •	 First, list the constraints of your problem.
      •	 e.g. Farmer can only take one item in the boat at one time.

    •	 Second, list the order of operations.
      •	 e.g. Carry the fox to the far side of the river.
      •	 e.g. Carry the hen to the far side of the river.
      •	 e.g. Carry the grain to the far side of the river.

    •	 Third, make those operations generic, or parameterized 
      •	 e.g. Row boat from the far side of the river.
              IF boat is empty, load item on boat.
              IF boat is NOT empty, unload item on shore. 

    •	 Remember to think about the problem in the most general terms.'
    •	 Think about all the possible sequences of moves in a problem.
    •	 Restate the problem in a formal manner.
    •	 When faced with an onerous problem, experiment with a reduced version of the problem, which provide invaluble insights.
    •	 recognize analogies to solve problems (e.g. A solution in the lotto app could apply to a current issue as well).


  Useful problem solving strategies
  =================================

    1. Always have a plan
      •	 A plan lets you set intermediate goals and achieve them.
      •	 Without a plan, you have only one goal... solve the whole problem which is difficult to do.

    2. Restate the problem
      •	 Restating the problem sometimes show the goal isnt what we originally thought it was.
      •	 Restatement can help you take a problem assigned to you to that person and confirm your understanding.
      •	 Restatement is also a necessary prereqisite for thing slike reducing and dividng a problem.

    3. Divide the Problem
      •	 Dividing a problem puts it into steps of phases that make the problem much easier.
      •	 Dividing a problem can often lower the difficulty a great deal.

    5. Start with what you know
      •	 Start with what you know and work out from there.
      •	 Starting with a partial solution may spark ideas about the rest of the problem.
      •	 Starting with what you builds confidence and momentum towards your goal.
      •	 Starting with what you know can apply to cases where you havent divided the problem

    6. Reduce the Problem
      •	 Reducing the problem means reducing the SCOPE of the problem by adding or removing constraints to produce a 
         problem that you know you can solve.
      •	 Reductions simplify the problem so you can handle it more easily.
      •	 Reductions help solve a problem when we cant figure out how to divide a problem into steps into steps.
      •	 Reducing a problem means we're not working on the FULL problem but problems that have enough in common to 
         with the full problem where we will make progress towards the ultimate solution.
      •	 Reduction allows us to pinpoint exactly where the remaining difficulty lies.

    7. Look for Analogies
      •	 An analogy is a similarity between a current problem and a problem already solved which can help solve
         current problem.
      •	 Analogies are not always direct and similarities in problems are not always full, but sometimes partial.
      •	 Reasoning by analogy is a difficult skill to develop because you cannot reason by analogy without a storehouse
         of previous solutions for reference.
      •	 This is where many programmers cut corners, finding code similar to what they need and modifying it.
          •	 this is a mistake because without developing your own solution, you wont understand and internalize it.
          •	 Second, this is a potnetial analogy for future reference so understanding the solution is critical. 

    8. Experiment
      •	 Experimenting is to try something and observe the results.
      •	 Experimenting is not the same as guessing and seeing if it works.
  




    1. Break problem into components.
    2. Write code to solve those components individually.
    3. Use the knowledge from writing the programs or lines of codes to solve the orginal program.
 */

// useful problem solving strategies

/*
Balance of active vs passive(conceptual) learning strategies
  •	 spend good time on conceptual learning, but never neglect practical application by coding
Applying spacing to learning
  •	 use effective memorization techniques or space the top out over a few days.
  •	 avoid cramming
teaching the concepts you learn
  •	 when you formulate an idea, you learn so much more.
  •	 you find grey areas while teaching
keep track of questions
  •	 keeping track of your "why's".
  •	 if you dont track what you dont know, you have gaps that can be frustrating.
pace yourself so you can recover
  •	

*/

/* 
Solving Programming Problems
-==-=-=-=-=-=-=-=-=-=-=-=-=-=-

    PHASE 1: UNDERSTAND THE PROBLEM:  
    
          1.1: READ THE PROBLEM AT LEAST 3 TIMES 
            • To understand a problem, read through it at least 3 times to make sure you catch all
              the special requirements and dont overlook something important.

          1.2: BREAK DOWN THE QUESTION
            • To get a better idea of the requirements of the problem/question, break down the 
              problem/question into smaller components that are expected (i.e. function names, etc).

          1.3: CREATE QUESTIONS ABOUT THE PROBLEM:
            • Create a small list of questions about the problem.
    1.3: EXPLAIN THE PROBLEM: 
            • Try explaining the problem to someone else (or even communicate it on paper).
        ----------------------------------------------------------------------------------------

    EXAMPLE PROBLEM:
    ================
    Create a simple function "selectEvenNumbers" that will take in an array of numbers 
    and return an array "evenNumbers" of only even numbers. If there are no even numbers, 
    return the empty array "evenNumbers".




        1.1: READ THE PROBLEM AT LEAST 3 TIMES
        ======================================

          Create a simple function "selectEvenNumbers" that will take in an array of numbers 
          and return an array "evenNumbers" of only even numbers. If there are no even numbers, 
          return the empty array "evenNumbers".

          Create a simple function "selectEvenNumbers" that will take in an array of numbers 
          and return an array "evenNumbers" of only even numbers. If there are no even numbers, 
          return the empty array "evenNumbers".

          Create a simple function "selectEvenNumbers" that will take in an array of numbers 
          and return an array "evenNumbers" of only even numbers. If there are no even numbers, 
          return the empty array "evenNumbers".

        


        1.2 BREAK DOWN THE QUESTION
        ============================
            1. Create a simple function "selectEvenNumbers...                            
            2. ...that will take in an array of numbers...                               
            3. ...and return an array "evenNumbers" of only even numbers.                
            4. If there are no even numbers, return the empty array "evenNumbers."       


          1. "Create a simple function "selectEvenNumbers..." 
                  • In this case, we'll just setup a simple function declaration named "selectEvenNumbers".
                        --------------------------------------
                          function selectEvenNumbers() {                          <== Created "selectEvenNumbers" function declaration.
                            // code goes here                 
                          }                                   
                        --------------------------------------

          2. "...that will take in an array of numbers..."
                  • This says that we need to PASS IN an array of numbers for the function to process.             
                        -------------------------------------------------
                          function selectEvenNumbers(arrayOfNumbers) {            <== Created "arrayOfNumbers" parameter.
                            // code goes here...                         
                          }                                              
                        -------------------------------------------------

          3. "...and return an array "evenNumbers" of only even numbers."
                  • So at this point, we actually get a hint of what to do next, which is how to store our even numbers in
                    an evenNumbers variable.
                        --------------------------------------------------
                          function selectEvenNumbers(arrayOfNumbers) { 
                            let evenNumbers = [];                                 <== Create a variable called "evenNumbers" to store any even numbers we find. 
                            
                            return evenNumbers;                                   <== Return evenNumbers.
                          }                
                        --------------------------------------------------

          4. "If there are no even numbers, return the empty array "evenNumbers."
                  • In this case, when we return evenNumbers and there are no even numbers in the data set, it
                    will return an empty array in any case!          



        CREATE QUESTIONS ABOUT THE PROBLEM
        ==================================                  
        At this point, think about what the problem is asking you. 
            • How can your program tell what an even number is?
            • 



                  
                  • How can a computer tell what an even number is?
                      • If you dont know, chances are the answer is on stack overflow or some other site.
                      • Best to get a few answers, write them down in case you need them later.
                        --------------------------------------
                          num % 2 === 0
                          if (n % 2) {...}
                        --------------------------------------
                  • How do you contain the even numbers?
                        --------------------------------------
                          
                        --------------------------------------
        
        








        ----------------------------------------------------------------------------------------

        




*/
// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
    //I: factory function that takes in numbers 1-100
    //O: prints numbers 1-100, for multiples of 3 fizz prints, multiples of five buzz prints, multiples of 3 & 5 FizzBuzz prints
    //C: none
    //E: none
    //init loop that counts between 1 and 100
    for(var i = 1; i <= 100; i++){
    //create conditional statements to print 1-100
        if(i % 3 !== 0 && i % 5 !== 0){
            console.log(i);
        }
        // create independent conditional stmts for multiples of three print “Fizz”
         if(i % 3 === 0 && i % 5 !== 0){ 
            console.log('Fizz');
        }
        // create independent conditional stmts for multiples of five print “Buzz”
         if(i % 5 === 0 && i % 3 !== 0){ 
            console.log('Buzz');
        }
        // create independent conditional stmts for multiples of three and five print “FizzBuzz”
        if(i % 5 === 0 && i % 3 === 0){ 
                        console.log('FizzBuzz');
        }
    
    } 


    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}
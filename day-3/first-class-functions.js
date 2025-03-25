// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    //I: function that takes a base either string or number as param
    //O: return function that tests whether a given is greater than the base
    //C: none
    //E: none
    //return function
return function(value){
    //create conditional stmt to determine if value is greater than base 
    if( value > base){
        //return true
        return true;
    }//create conditional stmt to determine if value is greater than base 
        else if (value < base){
            return false;
        }
    }




    
   
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base. (test means return true or false)
 * 
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
     // YOUR CODE BELOW HERE //
    //I: function that takes a base either string or number as param
    //O: return function that tests whether a given is less than the base
    //C: none
    //E: none
    //return function
return function(value){
    //create conditional stmt to determine if value is less than base 
    if( value < base){
        //return true
        return true;
    }//create conditional stmt to determine if value is greater than base 
        else if (value > base){
            return false;
        }
    }
  
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 * 
 * This function needs to be case insensitive.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    //I: function takes one param as a single character of string
    //O: return function that test whether a given string starts with the starts with character
    //C: must be case insensitive
    //E: none
    // return the function
    return function(string){
    //code block - init conditional chain to determine if string starts with startsWith character
    if(string[0].toUpperCase() === startsWith  || string[0].toLowerCase() === startsWith){
        return true;
    } else{ 
    return false;
    }
    }
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 * 
 * This function needs to be case insensitive.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    //I: function takes one param as a single character of string
    //O: return function that test whether a given string ends with the endsWith character
    //C: must be case insensitive
    //E: none
    // return the function
    return function(string){
         //code block - init conditional chain to determine if string ends with endsWith character 
         if(string[string.length - 1].toUpperCase() === endsWith  || string[string.length - 1].toLowerCase() === endsWith){
            return true;
        } else{ 
        return false;
        } 
    }
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return the Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    //I:function that takes two params array of strings and a function 
    //O: return the array of strings modified
    //C:none
    //E: none
    // init var as array to contain output values 
    var output = [];
    
    //init for loop to iterate over strings array
    for(var i = 0; i < strings.length; i++){
         output = output.push(modify(strings));
    
    }
    return output
    
    
    
    // YOUR CODE ABOVE HERE //
}




/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
    
    
    
    
    // YOUR CODE ABOVE HERE //
}




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}
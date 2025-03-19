// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */
function length(string) {
    // YOUR CODE BELOW HERE //
//I: function with string as param 
//O:return number indicating string length
//C: none
//E: none

// return string.length 
    return string.length;



    
    // YOUR CODE ABOVE HERE //
}



/**
 * Given an input String, return a new String forced to lowercase.
 */
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //
//I: function takes one string as param
//O: return input string in the lowercase
//C: none
//E: none
        return string.toLowerCase(); 


    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //
//I: function takes string as param
//O: input string is returned in uppercase
//C: none
//E: empty strings, strings with as numbers
//return string as uppercase using toUpperCase
return string.toUpperCase();


    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
function toDashCase(string) {
    // YOUR CODE BELOW HERE //
    //I: function takes string as param
    //O: input string is returned with dashes 
    //C: none
    //E: none
    // use .replace to add dashes between the space
    return string.replaceAll(' ', '-').toLowerCase();
    
}


    // YOUR CODE ABOVE HERE //


/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //
//I: function takes an input string and a single character
//O: return boolean true if first character of string begins with the single character input
//C: none
//E: needs to be case insensitive
// create conditional stmt to determine if first character of string and input character match
if(string[0].toUpperCase() === char  || string[0].toLowerCase() === char){
    return true;
} else{ 
return false;
}


    

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //
//I: function takes an input string and a single character
//O: return boolean true if last character of string begins with the single character input
//C: none
//E: needs to be case insensitive
// create conditional stmt to determine if last character of string and input character match
if(string[string.length - 1].toUpperCase() === char  || string[string.length - 1].toLowerCase() === char){
    return true;
} else{ 
return false;
}

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
//I: function takes two strings
//O: return the two input strings as one string 
//C: none
//E: none
// return one string using the + operator
return stringOne + stringTwo; 


    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    var args = Array.from(arguments);
//I: function takes two strings
//O: return all input strings joined together
//C: pulls out all the arguments passed to it and stores them in an Array called args
//E: none 
// if arguments are in the array separate the elements using split


// join the array together using join
    return args.join('');


    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
//I: function takes two strings as param
//O: return the longer of the two input strings
//C: none
//E: none
//init conditional stmt to compare strings
if(stringOne.length > stringTwo.length){
    //return the longer string
    return stringOne;
}
        else if(stringOne.length < stringTwo.length){
            //if condition is met return longer string
            return stringTwo;
        }



    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first string is higher in alphabetical order (meaning earlier in the alphabet) than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    //I: function takes two strings as param
    //O: return the numbers 1,0, or -1, dependent upon the first strings alphabetical order, 1 if stringOne is earlier, -1 if stringTwo is earlier, 0 if they are equal
    //C: none
    //E: none
    //init conditional stmt to determine order hierarchy of letters
    if(stringOne < stringTwo){
        // return 1 if stringOne is less than stringTwo
        return 1;
    }
        else if (stringOne > stringTwo){
            // return -1 if stringOne is greater than stringTwo
            return -1; 
        } 
        else if (stringOne === stringTwo){
            // return 0 if stringOne is equal to stringTwo
            return 0;
        }


    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order (meaning later in the alphabet) than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
//I: function takes two strings as param
    //O: return the numbers 1,0, or -1, dependent upon the first strings alphabetical order, 1 if stringOne is later, -1 if stringTwo is later, 0 if they are equal
    //C: none
    //E: none
    //init conditional stmt to determine order hierarchy of letters
    if(stringOne > stringTwo){
        // return 1 if stringOne is appears later in the alphabet than stringTwo
        return 1;
    }
        else if (stringOne < stringTwo){
            // return -1 if stringTwo appears later in the alphabet than stringTwo
            return -1; 
        } 
        else if (stringOne === stringTwo){
            // return 0 if stringOne is equal to stringTwo
            return 0;
        }



    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}
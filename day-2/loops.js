// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  //I: function takes an input array
  //O: log the values of the input array
  //C: none
  //E: none
  // init for loop to iterate over array
  for(var i = 0; i < array.length; i++){
  // console log values of the array
  console.log(array[i]);
  }
  
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  //I: function that takes an array as the param
  //O: new array with input array values reversed
  //C: none
  //E: none

  // init for loop to iterate over array- decrementing and starting at last value of array
  for(var i = array.length - 1; i >= 0; i--){
  
  
  //log the reversed array info
  console.log(array[i]);
  }
  
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  //I: function takes object as an param
  //O: return an array containing object keys
  //C: none
  //E: none
  // return array containing object keys using object.keys method
  return Object.keys(object);

  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  //I: function take object as input 
  //O: log the keys in the input object
  //C: none
  //E: none
  //init for in loop to iterate over the object
  for(var key in object){
    // console.log  key
    console.log(key);
  }
  
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  //I: function takes an object
  //O: returns a new array containing the objects values
  //C: none
  //E: none
  // return array with object values using Object.values method
  return Object.values(object);
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  //I: function takes object as param
  //O: log values of input object
  //C:none
  //E: none
  //init for in loop to iterate over the object
  for(var key in object){
    //console.log the values of the object
    console.log(object[key]);
  }
  
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  //I: function takes object as param 
  //O: return number representing the number of key/value pairs within the object
  //C: none
  //E: none
  // init var to count the number of key/value pairs
  var count = 0;
  // init for in loop to iterate over object
  for(var key in object){
      // add number to counter var 
      count += 1;
  }
  //return output from the count
  return count;
      
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  //I: function takes object as param
  //O: values of the object print to console in the reverse
  //C: none
  //E: none
  //init var assigned to array using convert values of object to array using object values
  var output = Object.values(object);
  // init for loop to iterate over container array in reverse
  for(var i = output.length - 1; i >= 0; i--){
        // print values to console
        console.log(output[i]);
  }
     
  
  
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
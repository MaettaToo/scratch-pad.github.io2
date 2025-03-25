// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List // Contacts
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
  //I: function takes  number and two strings as param 
  //O: return an object that has input values as values for the object keys
  //C: none
  //E: none
  //
        //return object
        return {
                  id: id,
                  nameFirst: nameFirst,
                  nameLast: nameLast
                };
    
} 



function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    
    return {
        // we implemented the length api for you //
      length:function(){
        return contacts.length;
      },
      //add key value pair as function takes a contact object to be added to the contact-list.
      addContact: function(contact){
        contacts.push(contact)
      },
      /*add key/value pair as a function that takes a full-name String,returns the contact object if found in the contacts-list, or, 
      undefined if the fullName does not match any contacts in the list.
      */
      findContact: function(fullName){
        // init loop to iterate through contacts array
        for (var i = 0; i < contacts.length; i++){
          //create conditional stmt to determine if fullName is part of the list
          if (fullName.includes(contacts[i]['nameFirst']) && fullName.includes(contacts[i]['nameLast'])){
            //return object from contacts array
          return contacts[i];
          }  
            else{
              //return undefined
              return undefined;
              }
            }
      },
     // add key removeContact(contact) value function that takes a contact object to be removed from the contact-list. 
     removeContact: function(contact){
      // create loop to iterate over contacts list 
      for(var i = 0; i < contacts.length; i++){
        //create conditional stmt to determine if contact is in the contacts list 
        if(contacts[i] === contact){
          //delete object from contacts array contacts[i]
          contacts.splice(i,1);
        }
      }
     },
     // add a printAllContactNames as a key  value is a function that should return a String formated with all the full-names of the separated with a line-break
     printAllContactNames: function(fullName){
      //init var as empty array to contain output
      var output = [];
      // init for loop to iterate over contacts array
      for(var i = 0; i < contacts.length; i++){
        //push nameFirst + nameLast into output tray
        output.push(contacts[i]['nameFirst'] + ' ' + contacts[i]['nameLast']);
      }
      // return string separated by new line
      return output.join('\n');
     }
    }
}





// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
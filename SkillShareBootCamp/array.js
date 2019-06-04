//Primitives & Undefined
//immutable
//some exceptions
//an array

//create an array
//var things = [];
//add things to an empty array as follows
var things = ['laptop', 'speaker', 13];

//evaluates
things;

// things.length <---find the number of items

// functions for array
//.push method

things.push(17)

//evalute to make sure

things;
//then run
// output has 17 added

//access an item
//use items index #
//begin at 0

things[2];

//remote items from array
//.splice method
//multiple arguments


things.splice(1, 1)
//should get rid of speaker

//final eval
things;
//speaker is gone



//.splice also adds arguments

things.splice(1, 3, 'pen', 'paper');

//final eval
things;

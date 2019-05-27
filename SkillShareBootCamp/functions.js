//functions
//use camelCasing
//function derclaration

function calculateTip(price, percentage) {
  //this is not needed, it's a side effect
  console.log ('calculating tip');


  return (percentage/100) * price;
}

//call function
//calculateTip();

//now pass through for return
calculateTip(50, 18);

//function expression

//var divideByN = function() {}

//in use

var divideByN = function(number, n) {
  return number / n;
}

//call function with params
divideByN(18, 3);

//anonymous function that is called

(function (){
  console.log('I am an expression')
  })();

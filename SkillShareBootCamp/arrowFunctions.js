//arrow functions

//syntax
//() => {}

var arrowFunc = () => {
  console.log('hello!');
}

//have to call function
arrowFunc();

//callbacks can have params as well
//in this instance () around info is optional
//arrow function can return data
var createLogInfo = (info) => {
  // console.log('info', info);
//concantonate the word info and the actual information
  return 'info ' + info;
};

createLogInfo('foobar');

//in arrow functions you can omit the {} for function body as well if == 1 line
//the above can be written as

// var createLogInfo = info => 'info ' + info;

//then call the function again with

// createLogInfo('foobar');

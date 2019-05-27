var foo = 10;
//condition logical
//foo == 13;
//foo == 20;
//reurns boolean
//if statements function
//if (foo == 10) {
//  console.log('hello');
//}
//returns undefined
//because return value console.log is undefined
//change code to
if (foo == 13) {
  console.log('hello!');

} else if (foo == 10) {
  console.log('greetings!');
} else {
  console.log('goodbye');
}
//add a switch
switch(foo) {
  case 13:
    console.log('foo is 13');
    break;
  case 10:
    console.log('foo is 10');
    break;
  default:
    console.log ('foo is something else');
}

//you get all three, so you want to edit the code
// you need to add break statements at the end of every case
//except default

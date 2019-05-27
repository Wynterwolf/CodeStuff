//an application that writes the first 16 rows of Pascal's Triangle.

var LIMIT = 16;

//The triangel will be an array of rows.
//Each row will be an array
var Triangle = [];

//Fill in the triangle using the well-known formula.
for (var row = 0; row < LIMIT; row += 1) {
  Triangle.push([]);
  for (var column = 0; column <= row; column += 1) {
    if(column == 0 || column == row) {
      Triangle[row][column] = 1;
    } else {
        Triangle [row][column] = Triangle[row-1][column-1] + Triangle[row-1][column];

    }
  }
}

//display the data, row by row
for (var row = 0; row < Triangle.length; row += 1) {
  console.log(Triangle[row].join(' '));
}

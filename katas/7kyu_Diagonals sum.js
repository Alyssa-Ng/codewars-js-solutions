//https://www.codewars.com/kata/5592fc599a7f40adac0000a8

function sum(matrix) {
  let result = 0;
  for(let i = 0; i < matrix.length ; i++) result += matrix[i][i] + matrix[i][matrix.length - i - 1];
  return result;
}

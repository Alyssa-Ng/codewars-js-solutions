//codewars.com/kata/586909e4c66d18dd1800009b

let multiplyAll = function(arr){
  return function multiply(int){
    return arr.map(e => e * int);
  };
}

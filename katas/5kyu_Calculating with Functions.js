//https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39

let fn = function(digit){
  return function (operation) {
    if(typeof operation === 'function') return operation(digit);
    return digit;
  }
}

let zero = fn(0);
let one = fn(1);
let two = fn(2);
let three = fn(3);
let four = fn(4);
let five = fn(5);
let six = fn(6);
let seven = fn(7);
let eight = fn(8);
let nine = fn(9);

function plus(x) {
  return function(y){
    return x + y;
  }
}
function minus(x) {
  return function(y){
    return y - x;
  }
}
function times(x) {
  return function(y){
    return x * y;
  }
}
function dividedBy(x) {
  return function(y){
    return Math.floor(y / x);
  }
}

function plus(x) {
  return function(y){
    return x + y;
  }
}
function minus(x) {
  return function(y){
    return y - x;
  }
}
function times(x) {
  return function(y){
    return x * y;
  }
}
function dividedBy(x) {
  return function(y){
    return Math.floor(y / x);
  }
}

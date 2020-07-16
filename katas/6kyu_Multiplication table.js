//https://www.codewars.com/kata/534d2f5b5371ecf8d2000a08

multiplicationTable = function(size) {
var result = [];
var temp = [];
  for(let i = 1; i < size + 1; i ++){
    temp = [];
    for(let j = 1; j < size + 1; j ++) temp.push(i *j);
    result.push(temp);
  }
  return result;
}

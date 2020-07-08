//https://www.codewars.com/kata/5340298112fa30e786000688

function twosDifference(input){
  var result = [];
  for (integer of input){
    for (var i = 0; i < input.length; i ++){
    integer - input[i] === 2 ? result.push([input[i],integer]) : null;
    }
  }
  return Array.from (new Set(result)).sort(([a, b], [c, d]) =>  a - c || d - b);
}

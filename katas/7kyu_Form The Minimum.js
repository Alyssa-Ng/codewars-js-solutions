//https://www.codewars.com/kata/5ac6932b2f317b96980000ca

function minValue(values){
  let valueSet = Array.from(new Set(values)).sort((a,b) => a -b);
  return parseInt(valueSet.join(''));
}

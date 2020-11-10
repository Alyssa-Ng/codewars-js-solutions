//https://www.codewars.com/kata/5a433c7a8f27f23bb00000dc

function splitByValue(k, elements){
  let smaller = [];
  let larger = [];
  for(e of elements) e < k ? smaller.push(e) : larger.push(e);
  return k === 0 ? elements : smaller.concat(larger);
}

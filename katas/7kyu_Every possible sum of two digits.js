//https://www.codewars.com/kata/5b4e474305f04bea11000148

function digits(num){
  let numArray = num.toString().split('').map(e => Number(e));
  let result = [];
  for(let i = 0; i < numArray.length; i++){
    for(let j = i + 1; j < numArray.length; j++) result.push([numArray[i], numArray[j]]);
  }
  return result.map(e => e.reduce((a,b)=> a + b));
}

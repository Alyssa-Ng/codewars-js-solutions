//https://www.codewars.com/kata/5a8d2bf60025e9163c0000bc

function solve(arr){
  let arrSet = Array.from(new Set(arr));
  let frequencyArray = [];
  arrSet.sort((a,b) => a - b);
  for(val of arrSet){
    let frequency = 0;
    for(num of arr) if (num === val) frequency++;
    frequencyArray.push([val,frequency]);
  }
  frequencyArray.sort((a,b) => b[1]===a[1] ? a[0] - b[0] : b[1] -a[1]); 
  let result = frequencyArray.map(e => Array(e[1]).fill(e[0]) );
  return result.reduce((acc, val) => acc.concat(val), []);
}

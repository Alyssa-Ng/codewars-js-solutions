//https://www.codewars.com/kata/5a29a0898f27f2d9c9000058

function solve(s){
  let result = Array(4).fill(0);
  let sList = s.split('');
  for(str of sList){
    if(str.match(/^[a-zA-Z]+$/)){
      if(str === str.toUpperCase()) result[0] += 1;
      if(str === str.toLowerCase()) result[1] += 1;
      continue;
    }
    if(str.match(/^[0-9]*$/)) result[2] += 1;
    else result[3] += 1;
  }
  return result;
}

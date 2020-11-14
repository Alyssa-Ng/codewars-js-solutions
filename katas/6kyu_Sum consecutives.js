//https://www.codewars.com/kata/55eeddff3f64c954c2000059

function sumConsecutives(s) {
  let count= 1;
  let result = [];
  for(let i = 0; i < s.length; i++){
    if(s[i] === s[i + 1]){
      count++;
      continue;
    } 
    if(count > 1 && s[i] !== s[i + 1]){
      result.push(Array(count).fill(s[i]).reduce((a,b) => a + b));
      count = 1;
    } else result.push(s[i]);  
  }
  return result;
}

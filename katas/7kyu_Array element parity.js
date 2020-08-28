//https://www.codewars.com/kata/5a092d9e46d843b9db000064

function solve(arr){
  for(val of arr) if(!arr.includes(val * -1)) return val;
}

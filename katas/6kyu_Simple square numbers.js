//https://www.codewars.com/kata/5edc8c53d7cede0032eb6029

function solve(n){
  for (let i = 1; i < Math.round(n/2); i ++){
    let temp = n;
    temp += i * i;
    if(Number.isInteger(Math.sqrt(temp))) return i * i;
  } 
  return -1;
}

//https://www.codewars.com/kata/5a262cfb8f27f217f700000b

function solve(a,b){
  return Array.from(a + b).filter(val => !Array.from(a).includes(val) + !Array.from(b).includes(val)).join('');
}

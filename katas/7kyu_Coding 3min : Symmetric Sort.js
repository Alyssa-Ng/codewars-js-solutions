//https://www.codewars.com/kata/5705aeb041e5befba20010ba

function sc(array){
  let left = [], right = [];
  array.sort((a,b) => a - b);
  for(let i = 0; i < array.length; i++) i % 2 === 0 ? left.push(array[i]) : right.unshift(array[i]);
  return left.concat(right);
}

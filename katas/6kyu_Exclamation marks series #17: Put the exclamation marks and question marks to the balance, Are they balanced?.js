//https://www.codewars.com/kata/57fb44a12b53146fe1000136

function balance(l,r){
  var left = 0;
  var right = 0;
  for(e of l)  e === '!' ? left += 2 : left +=3;
  for(i of r)  i === '!' ? right += 2 : right +=3;
  return left === right ? 'Balance' : left > right ? 'Left' : 'Right';
}

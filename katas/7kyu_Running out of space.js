//https://www.codewars.com/kata/56576f82ab83ee8268000059

function spacey(array){
  let result = [];
  for(let i = 0; i < array.length; i++) result.push(array.slice(0, i + 1).join(''));
  return result;
}

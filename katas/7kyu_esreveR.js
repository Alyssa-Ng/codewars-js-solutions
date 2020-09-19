//https://www.codewars.com/kata/5413759479ba273f8100003d

reverse = function(array) {
  let result = [];
  for(let i = array.length - 1; i >= 0 ; i --) result.push(array[i]);
  return result;
}

//https://www.codewars.com/kata/566044325f8fddc1c000002c

function evenChars(string) {
  let result = []
  for(let i =0; i < string.length; i++)if((i + 1) % 2 === 0) result.push(string[i]);
  return string.length < 2 || string.length > 100 ? 'invalid string' : result;
}

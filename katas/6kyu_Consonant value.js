//https://www.codewars.com/kata/59c633e7dcc4053512000073

function solve(s) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let consonantValues = [];
  let temp = [];
  for(let i = 0; i < s.length; i++){  
    if(vowels.includes(s[i])){
      consonantValues.push(temp);
      temp  = [];
      continue;
    }
    temp.push(alphabet.indexOf(s[i]) + 1);
  }
  if(temp.length !== 0) consonantValues.push(temp);
  let result = consonantValues
              .filter(e => e.length !== 0)
              .map(e => e.reduce((a,b) => a + b))
              .sort((a,b) => b - a);
  return result[0];
}

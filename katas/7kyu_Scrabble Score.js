//codewars.com/kata/558fa34727c2d274c10000ae

function scrabbleScore(str){
  let result = 0;
  for(letter of str.replace(/\s/g, '')) result += $dict[letter.toUpperCase()];
  return result;
}

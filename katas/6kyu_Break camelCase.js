//https://www.codewars.com/kata/5208f99aee097e6552000148

function solution(string) {
  let lowerCaseString = string.toLowerCase();
  let result = '';
  for(let i = 0; i < string.length; i ++){
    if(string[i] !== lowerCaseString[i]) result += ` ${string[i]}`;
    else result += string[i];
  }
  return result;
}

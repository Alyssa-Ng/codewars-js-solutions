//https://www.codewars.com/kata/59f08f89a5e129c543000069

function dup(s) {
  let result = [];
  for(string of s){
    let temp = string.split('');
    for(let i = 0; i < string.length; i++) if(string[i] === string[i + 1]) temp.splice(i, 1, '');
    result.push(temp.join(''))
  }
  return result;
}

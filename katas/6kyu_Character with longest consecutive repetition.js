//https://www.codewars.com/kata/586d6cefbcc21eed7a001155

function longestRepetition(s) {
  let result = [];
  let temp = [];
  for(let i = 0; i < s.length; i ++){
    if(i !== 0 && s[i] !== s[i - 1]){
      result.push(temp);
      temp = [];
    }
    temp.push(s[i]);
  } 
  result.push(temp);
  result.sort((a,b) =>  b.length === a.length ?
              s.indexOf(a.join('')) - s.indexOf(b.join('')) : 
              b.length - a.length);
  return s.length === 0 ? ['', 0] : [result[0][0], result[0].length];
}

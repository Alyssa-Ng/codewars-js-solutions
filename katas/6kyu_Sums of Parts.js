//codewars.com/kata/5ce399e0047a45001c853c2b

function partsSums(ls) {
  if(ls.length == 0) return [0];
  let initial = ls.reduce((a,b) => a+b);
  let result = [initial];
  for(let i = 0; i < ls.length; i ++) result.push(initial -= ls[i]);
  return result;
}

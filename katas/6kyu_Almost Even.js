//https://www.codewars.com/kata/529e2e1f16cb0fcccb000a6b

let splitInteger = function(num, parts) {
  if(num % parts === 0) return Array(parts).fill(num/parts);
  let result = Array(parts).fill(Math.floor(num/parts));
  let remainder = num % parts;
  for (let i = 0; i < remainder; i ++) result[i] += 1;
  return result.sort();
}

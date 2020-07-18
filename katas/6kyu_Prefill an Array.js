//https://www.codewars.com/kata/54129112fb7c188740000162

function prefill(n, v) {
  if(isNaN(parseInt(n)) || n % 1 !== 0 || n < 0)
    throw new TypeError(`${n} is invalid`);
  return Array.from({length: n }).fill(v);
}

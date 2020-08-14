//https://www.codewars.com/kata/5324945e2ece5e1f32000370

function sumStrings(inputA, inputB) {
  let a = Array.from(inputA, Number);
  let b = Array.from(inputB, Number);
  let result = [];
  let carry = 0;
  let i = Math.max(inputA.length, inputB.length);
  while (i--) {
    carry += (a.pop() || 0) + (b.pop() || 0);
    result.unshift(carry % 10);
    carry = Math.floor(carry / 10);
  }
  while (carry) {
    result.unshift(carry % 10);
    carry = Math.floor(carry / 10);
  }
  if (result[0] === 0) result.shift();
  return result.join('');
}

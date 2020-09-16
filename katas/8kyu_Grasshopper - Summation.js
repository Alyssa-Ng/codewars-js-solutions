//https://www.codewars.com/kata/55d24f55d7dd296eb9000030

const summation = (num) => Array(num).fill(0).map((v,i) => i + 1).reduce((a,b) => a + b);

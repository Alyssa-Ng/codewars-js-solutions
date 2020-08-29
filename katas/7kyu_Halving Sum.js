//https://www.codewars.com/kata/5a58d46cfd56cb4e8600009d

let halvingSum =(n) => n > 0 ? n + halvingSum(n>>1) : n;

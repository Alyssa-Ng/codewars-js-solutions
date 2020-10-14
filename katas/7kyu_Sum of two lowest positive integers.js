//https://www.codewars.com/kata/558fc85d8fd1938afb000014

let sumTwoSmallestNumbers = (numbers) => numbers.sort((a,b) => b - a).splice(-2).reduce((a,b) => a + b);

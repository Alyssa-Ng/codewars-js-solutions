//https://www.codewars.com/kata/546e2562b03326a88e000020

let squareDigits = (num) =>parseInt(num.toString().split('').map( e => Math.pow(parseInt(e),2)).join(''));

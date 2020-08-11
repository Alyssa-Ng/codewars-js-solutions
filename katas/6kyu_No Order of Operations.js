//https://www.codewars.com/kata/5e9df3a0a758c80033cefca1

function noOrder(s) {
  const operators = {
    '+': function(a, b) { return Number(a) + Number(b)},
    '-': function(a, b) { return a - b },
    '*': function(a, b) { return a * b },
    '/': function(a, b) { return Math.floor(a / b )},
    '^': function(a, b) { return a ** b },
    '%': function(a, b) { return a % b },
  }
  const number = s.replace(/\s+/g, '').match(/\d+/g);
  const sign = s.replace(/\d+/g, "").split("").filter(e => isNaN(e));
  let result = number[0];
  for(let i = 0; i < sign.length; i ++){
    result = operators[sign[i]](result, number[i + 1]);
  }
  return isNaN(result) || !isFinite(result) ? null : Math.round(result);
}

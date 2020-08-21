//https://www.codewars.com/kata/58ca658cc0d6401f2700045f

let findMultiples = (integer, limit) => Array(Math.floor(limit/integer)).fill(0).map((e,i)=> (i + 1) * integer);

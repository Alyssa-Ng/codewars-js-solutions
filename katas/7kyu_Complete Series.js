//https://www.codewars.com/kata/580a4001d6df740d61000301

function completeSeries(arr) {
  var result = Array.apply(null, {length: Math.max.apply(0, arr) +1}).map(Number.call, Number);
  var arrSet = Array.from(new Set(arr));
  return arr.length === arrSet.length ? result : [0];
}

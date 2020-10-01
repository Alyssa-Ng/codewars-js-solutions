//https://www.codewars.com/kata/583af10620dda4da270000c5

function mergeArrays(a, b) {
  let mergedArray = [];
  let longerLength = a.length > b.length ? a.length : b.length;
  for(let i = 0; i < longerLength; i ++){
    if(i < a.length)mergedArray.push(a[i]);
    if(i < b.length) mergedArray.push(b[i]);
  }
  return mergedArray;
}

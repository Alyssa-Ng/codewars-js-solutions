//https://www.codewars.com/kata/59c3e8c9f5d5e40cab000ca6

function addArrays(array1, array2) {
  let arrayToNumber1 = Number(array1.join(''));
  let arrayToNumber2 = Number(array2.join(''));
  let result = (arrayToNumber1 + arrayToNumber2).toString();
  if (result.includes('-')){
    result = result.split('').filter(e => e !== '-');
    result[0] = `-${result[0]}`;
    return result.map(e => Number(e));
  } 
  return result === '0' ? [] : result.toString().split('').map(e => Number(e));
}

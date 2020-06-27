//https://www.codewars.com/kata/58f8a3a27a5c28d92e000144

function firstNonConsecutive (arr) {
  function isNonConsecutive(element, index, array) {
  return (array[index] - array[index-1]) > 1;
  }
  return  arr.find(isNonConsecutive) == undefined ? null : arr.find(isNonConsecutive);
}

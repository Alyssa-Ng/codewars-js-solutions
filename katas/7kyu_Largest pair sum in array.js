//https://www.codewars.com/kata/556196a6091a7e7f58000018

function largestPairSum(numbers){
  var allPairs = [];
  for(let i = 0; i < numbers.length; i ++){
    for(num of numbers) if (num !== numbers[i]) allPairs.push(num + numbers[i]);
  }
  var result = Array.from(new Set(allPairs)).sort((a,b) => b-a);
  return result[0];
}

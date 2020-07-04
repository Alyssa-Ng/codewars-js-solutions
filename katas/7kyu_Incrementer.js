//https://www.codewars.com/kata/590e03aef55cab099a0002e8

function getLastDigit(number) {
  return Math.floor((number / Math.pow(10, 1 - 1)) % 10);
}

function incrementer(nums) { 
  let i = 1;
  for (let j = 0; j < nums.length; j ++){
    nums[j] = getLastDigit(nums[j] += i);
    i ++;
  }
  return nums;
}

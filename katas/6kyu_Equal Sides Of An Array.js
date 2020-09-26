//https://www.codewars.com/kata/5679aa472b8f57fb8c000047

function findEvenIndex(arr){
  let right = 0;
  let left = 0;
  for (let i = 0; i < arr.length; i++) right += arr[i];
  for (let i = 0; i < arr.length; i++){
    right -= arr[i];
    if(left === right) return i;
    left += arr[i];
  }
  return -1;
}

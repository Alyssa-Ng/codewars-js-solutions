//https://www.codewars.com/kata/54599705cbae2aa60b0011a4

function one(arr, fun){
  var result = [];
  for (num of arr){
    if (fun(num)) result.push(true);
  }
  return result.length === 1 ? true : false;
}

//https://www.codewars.com/kata/5ba38ba180824a86850000f7

function solve(arr){
  var result = [];
  var arrSet = Array.from(new Set(arr));
  for(e of arrSet) result.push([arr.lastIndexOf(e), e]);
  result.sort((a,b) => a[0] - b[0]);
  for (let i = 0; i < result.length; i ++) result[i] = result[i][1];
  return result;
}

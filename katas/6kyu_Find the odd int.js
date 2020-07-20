//https://www.codewars.com/kata/54da5a58ea159efa38000836

function findOdd(A) {
  var results = [];
  var aSet = Array.from(new Set(A));
  for (a of aSet){
    var temp = [];
    for (var i = 0; i < A .length; i ++)
    if (a === A[i]) temp.push(A[i]);
    results.push(temp);
  }
  for( result of results)
  if (result.length % 2 !== 0) return result[0];
}

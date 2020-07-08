//https://www.codewars.com/kata/593c9175933500f33400003e

function multiples(m, n){
  var results = [];
  for(var i = 1; i < m + 1 ; i ++){
    results.push( i * n );
  }
  return results;
}

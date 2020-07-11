//https://www.codewars.com/kata/55f2b110f61eb01779000053

let getSum = (a,b) => a === b ? a : allNumbers(a,b);  

function allNumbers(a,b){
  var result = [];
  if(b > a)
    for (var i = a; i <= b; i++) result.push(i);
  else 
    for (var i = b; i <= a; i++) result.push(i);
  return result.reduce((p,n)=> p+n,0);
}

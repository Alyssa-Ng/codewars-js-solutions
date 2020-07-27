//https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec

function persistence(num) {
  var steps= 0;
  while(9 < num ){
    var numArr = num.toString().split('').map((e)=> parseInt(e));
    num = numArr.reduce((a,b)=> a * b);
    steps += 1;
  }
  return steps;
}

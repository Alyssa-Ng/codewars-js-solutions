//https://www.codewars.com/kata/59f7fc109f0e86d705000043

function divisibleByThree(str){
  let sumOfStr = str.split('').map(e => parseInt(e)).reduce((a,b) => a+b);
  return sumOfStr % 3 === 0 ? true : false;
}

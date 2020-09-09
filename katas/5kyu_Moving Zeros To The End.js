//https://www.codewars.com/kata/52597aa56021e91c93000cb0

let moveZeros = function (arr) {
  let temp = Array.from(arr);
  for(let i = 0; i < temp.length; i++ ){
    if(arr[i] === 0){
      arr.splice(i,1,'');
      arr.push(0);
    } 
  }
  return arr.filter(e => e !== '');
}

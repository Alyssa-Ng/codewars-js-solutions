//https://www.codewars.com/kata/5800b6568f7ddad2c10000ae

function simplify(number){
  let numList = number.toString().split('');
  let power = numList.length - 1;
  let result = [];
  for(let i = 0; i < numList.length; i++){
    let powerOfTen = Array(power).fill(0).join('');
    power--;
    if(numList[i] === '0') continue;
    if(numList[i] !== '0' && i === numList.length - 1){
      result.push(numList[i]);
      break;
    } 
    result.push(`${numList[i]}*1${powerOfTen}`);
  }
  return result.join('+');
}

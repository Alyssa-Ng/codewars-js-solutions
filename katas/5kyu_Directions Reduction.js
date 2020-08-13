//https://www.codewars.com/kata/550f22f4d758534c1100025a

function dirReduc(arr){
  let result = arr.join(' ');
  while(result.includes('NORTH SOUTH') || result.includes('SOUTH NORTH') || result.includes('EAST WEST') || result.includes('WEST EAST')){
    result= result.replace('NORTH SOUTH', '').replace('WEST EAST', '').replace('SOUTH NORTH', '').replace('EAST WEST', '').replace(/\s+/g, " ").trim();
  }
  return result === '' ? [] : result.split('').length === 4 ? [result] : result.split(' ');
}

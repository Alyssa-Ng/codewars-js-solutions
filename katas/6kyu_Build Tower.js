//https://www.codewars.com/kata/576757b1df89ecf5bd00073b

function towerBuilder(nFloors) {
  let result = [];
  for (let i = 0;  i < nFloors ; i++){
    result.push(Array(nFloors - i - 1).fill(' ').join('') + Array(1 + i* 2).fill('*').join('') + Array(nFloors - i -1).fill(' ').join(''));
  }
  return result;
}

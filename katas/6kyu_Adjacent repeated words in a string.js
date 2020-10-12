//https://www.codewars.com/kata/5245a9138ca049e9a10007b8

function countAdjacentPairs(searchString) {
  let inputList = searchString.toLowerCase().split(' ');
  let result = [];
  let temp = [];
  for(let i = 0; i < inputList.length; i++){
    temp.push(inputList[i]);
    if(inputList[i] !== inputList[i + 1]){
      result.push(temp);
      temp = [];
      continue;
    }
  }
  if(temp.length !== 0) result.push(temp);
  return searchString === '' ? 0 : result.filter(e => e.length > 1).length;
}

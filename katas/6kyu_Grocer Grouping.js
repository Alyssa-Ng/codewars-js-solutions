//https://www.codewars.com/kata/593c0ebf8b90525a62000221

function solution(input) {
  const inputList = input.split(',').sort();
  var result = {fruit:[], meat:[], other:[], vegetable:[]};
  for(item of inputList){
    itemName = item.split('_')[1];
    item.includes('fruit') ? result['fruit'].push(itemName): item.includes('meat') ? result['meat'].push(itemName) : item.includes('vegetable') ? result['vegetable'].push(itemName) : result['other'].push(itemName);
  }
  return Object.keys(result).map(cat => `${cat}:${result[cat].sort().join(',')}`).join('\n');
}

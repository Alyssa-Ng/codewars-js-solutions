//https://www.codewars.com/kata/5b358a1e228d316283001892

function getStrings(city){
  let result = [];
  let citySet = Array.from(new Set(city.toLowerCase().replace(/ /g,'')));
  for(letter of citySet){
    let letterCount = 0
    for(let i = 0; i < city.length;  i ++) if (letter  === city[i].toLowerCase()) letterCount++;
    result.push(`${letter}:${Array(letterCount).fill('*').join('')}`);
  }
  return result.join(',');
}

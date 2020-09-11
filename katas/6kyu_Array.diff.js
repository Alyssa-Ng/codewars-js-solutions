//https://www.codewars.com/kata/523f5d21c841566fde000009

function arrayDiff(a, b) {
  let duplicates = [];
  for(let i = 0; i < b.length; i++) if(a.includes(b[i])) duplicates.push(b[i]);
  return a.filter(e => !duplicates.includes(e));
}

//https://www.codewars.com/kata/5a405ba4e1ce0e1d7800012e

function customChristmasTree(chars,n){
  let treeLength = Array(n + 1).fill(0).map((v,i) => i).reduce((a,b) => a +b);
  let treeValues = Array(treeLength).fill(chars.split('')).reduce((acc, val) => acc.concat(val), []);
  let result = [];
  let count = 0;
  for(let i = 0; i < n ; i ++){
    result.push(treeValues.slice(count, count + i + 1).join(' ')
                .padStart(n + i, ' '));
    count += (i + 1);
  }
  for(let i = 2; i < n; i += 3) result.push('|'.padStart(n, ' '));
  return result.join('\n');
}

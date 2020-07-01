//https://www.codewars.com/kata/52ab60b122e82a6375000bad

function sortReindeer(reindeerNames) {
  let lastNames = [];
  let results = [];
  for (let i = 0; i < reindeerNames.length; i++){
    lastNames.push(reindeerNames[i].toString().split(' ')[1]);
    lastNames.sort();
  }
  for (name of lastNames){
    for (let i = 0; i < reindeerNames.length; i++){
      if (name === reindeerNames[i].toString().split(' ')[1])
      results.push(reindeerNames[i]);
    }
  }
  return Array.from(new Set(results));
}

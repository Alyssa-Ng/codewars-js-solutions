//https://www.codewars.com/kata/550498447451fbbd7600041c

function comp(a,b){
  if (a === null || b === null) return false;
  if (a === [] &&  b === []) return true;
  const aSquared = a.map(e => e*e);
  aSquared.sort((a,b)=> a-b);
  b.sort((a,b) =>  a-b);
  for (let i =0; i < a.length; i ++) if(aSquared[i] !== b[i]) return false;
  return true;
}

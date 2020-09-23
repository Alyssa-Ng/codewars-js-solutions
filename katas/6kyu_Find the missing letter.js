//https://www.codewars.com/kata/5839edaa6754d6fec10000a2

function findMissingLetter(array){
  let arrayCharCodes = array.map(e => e.charCodeAt(0));
  for(let i = array.length - 1 ; i > 0 ; i --){
    if(arrayCharCodes[i] - arrayCharCodes[i - 1] !== 1) return String.fromCharCode(arrayCharCodes[i] - 1);
  }
}

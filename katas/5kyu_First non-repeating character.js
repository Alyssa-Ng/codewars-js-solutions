//https://www.codewars.com/kata/52bc74d4ac05d0945d00054e

function firstNonRepeatingLetter(s) {
  let sList = s.split('');
  for(let i = 0; i < sList.length; i++){
    let isRepeat = false;
    for(let j = 0; j < sList.length; j++){
      if(i === j) continue;
      if(sList[i].toLowerCase() === sList[j].toLowerCase()){
        sList[j] = '';
        isRepeat = true;
      }
    }
    if(isRepeat === true ) sList[i] = '';
  }
  let result = sList.filter(e => e!== '');
  return s === ''|| result.length === 0 ? '' : result[0];
}

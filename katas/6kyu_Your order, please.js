//https://www.codewars.com/kata/55c45be3b2079eccff00010f

function order(words){
  let wordsArr = words.split(' ');
  let wordsIndex = words.split('').filter(e => !isNaN(e) && e !== ' ').map(e => parseInt(e));
  let result = Array(wordsArr.length).fill(0);
  for (let i = 0; i < wordsArr.length; i++){
    let index = wordsIndex[i] - 1;
    result[index] = wordsArr[i];
  }
  return words === '' ? '' : result.join(' ');
}

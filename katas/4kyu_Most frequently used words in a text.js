//https://www.codewars.com/kata/51e056fe544cf36c410000fb

function topThreeWords(text) {
  var textArray = text.toLowerCase().replace('//', '').split(' ');
  var textSet = Array.from(new Set(textArray)).filter((e) => !e.match(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g)).filter((e) => e !== '').filter ((e) => e!== '\'');
  var result = [];
  for (char of textSet){
    var count = 0;
    for(let i = 0; i < textArray.length; i ++){
      char == textArray[i] ? count+= 1 : null;
    }
    result.push([char,count]);
  }
  result.sort((a,b) => b[1] - a[1] );
  return result.length === 1 ? [result[0][0]] : result.length === 2 ? [result[0][0], result[1][0]] : result.length >= 3 ? [result[0][0], result[1][0], result[2][0]] : result; 
}

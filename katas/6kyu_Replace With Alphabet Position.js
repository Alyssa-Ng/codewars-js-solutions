//https://www.codewars.com/kata/546f922b54af40e1e90001da

function alphabetPosition(text) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
  let textList = text.split('').filter(e => alphabet.includes(e.toLowerCase()) );
  let result = [];
  for (letter of textList){
    for(let i = 0; i< alphabet.length; i ++){
      if(letter.toLowerCase() === alphabet[i]){
        result.push(i + 1);
        continue;
      }
    }
  }
  return result.join(' ');
}

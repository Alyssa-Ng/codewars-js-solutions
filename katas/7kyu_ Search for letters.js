//https://www.codewars.com/kata/52dbae61ca039685460001ae

function change(string){
  var alphabet = String.fromCharCode(...Array(123).keys()).slice(97);
  var result = [];
  for(var i = 0; i < alphabet.length; i ++){
    result.push(0);
    for (var j = 0; j < string.length; j ++)  {
     string[j].toLowerCase() == alphabet[i] ? result[i] = 1 : null;
    }
  }
  return result.join('');
}

//https://www.codewars.com/kata/581e014b55f2c52bb00000f8

function decipherThis(str) {
  var strArray = str.split(' ');
  var result = [];
  for (e of strArray){
    var numberDecoded = String.fromCharCode(e.match(/[0-9]/g).join(''));
    var word = e.match(/[a-zA-Z]/g);
    if (word!== null && word.length > 1){
      var temp = word[0];
      word[0] = word[word.length - 1];
      word.pop();
      word.push(temp);
    }
    word !== null ? result.push(numberDecoded + word.join('')) : result.push(numberDecoded);
    }
  return result.join(' ');
}

//https://www.codewars.com/kata/57a6633153ba33189e000074

var orderedCount = function (text) {
  var textArray = Array.from(new Set(text));
  var result = [];
  for(char of textArray){
    var numberOfChar = 0;
    for(let i = 0; i < text.length; i ++){
      text[i] === char ? numberOfChar += 1: null;
    }
    result.push([char, numberOfChar]); 
    }
  return result;
}

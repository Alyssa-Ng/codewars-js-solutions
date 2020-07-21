//https://www.codewars.com/kata/5842df8ccbd22792a4000245

function expandedForm(num) {
  var numString = num.toString();
  var result = [];
  for (let i = 0; i < numString.length; i ++){
    if(numString[i] !== '0')
     result.push(numString[i] + Array(numString.length - i -1).fill('0').join(''));
  }
  return result.join(' + ');
}

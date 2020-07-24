//https://www.codewars.com/kata/53368a47e38700bd8300030d

function list(names){
  var result = [];
  for(let i = 0; i < names.length; i++){
   i == names.length - 1 ? result.push('& ' + names[i]['name']) : i == names.length - 2 ? result.push( names[i]['name']) : result.push( names[i]['name'] + ',');
  }
  return names === [] ? '' : names.length === 1 ? names[0]['name'] : result.join(' ');
}

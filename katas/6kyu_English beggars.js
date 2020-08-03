//https://www.codewars.com/kata/59590976838112bfea0000fa

function beggars(values, n){
  var result = [];
  var count = 0;
  if (n >= 1) for(let i = 0; i < n ; i ++) result.push([0]) 
  else return [];
  for(let i = 0; i < values.length; i ++){
    if (count > n -1) count = 0;
    result[count].push(values[i]);
    count ++;
  } 
  return result.map((e)=> e.reduce((a,b) => a +b));
}

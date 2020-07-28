//https://www.codewars.com/kata/5616868c81a0f281e500005c

function rank(st, we, n) {
  const alphaVal = (s) => s.toLowerCase().charCodeAt(0) - 97 + 1;
  const names = st.split(',');
  var result = [];
  for (let i = 0; i < names.length; i++){
    var nameVal = 0;
    for(char of names[i]) nameVal += alphaVal(char);
    result.push([ names[i], (names[i].length + nameVal) * we[i]]);
  }
  result.sort((a,b)=> b[1]=== a[1] ? a[0] > b[0] : b[1] -a[1]);
  return st==='' ? 'No participants' : n > we.length ? 'Not enough participants': result[n-1][0];
}

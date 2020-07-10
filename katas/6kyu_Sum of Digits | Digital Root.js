//https://www.codewars.com/kata/541c8630095125aba6000c00

function digital_root(n) {
  var result = Array.from(n.toString()).map(Number);
  return result.length === 1 ? result.reduce((p,n)=> p+n,0) : digital_root(result.reduce((p,n)=> p+n,0)) ;
}

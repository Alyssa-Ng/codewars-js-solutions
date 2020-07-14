//https://www.codewars.com/kata/5650ab06d11d675371000003

var splitInParts = function(s, partLength){
  const numParts = Math.ceil(s.length / partLength);
  const parts = new Array(numParts);
  for (let i = 0, o = 0; i < numParts; ++i, o += partLength) {
    parts[i] = s.substr(o, partLength);
  }
  return parts.join(' ');
}

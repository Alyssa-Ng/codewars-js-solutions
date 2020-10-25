//https://www.codewars.com/kata/56bdf9d50d0b6433df001074

Array.prototype.sum = function(){
  return this.length === 0 ? 0 : this.reduce((a,b) => a + b);
}

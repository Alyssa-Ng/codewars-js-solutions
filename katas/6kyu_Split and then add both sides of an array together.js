//https://www.codewars.com/kata/5946a0a64a2c5b596500019a

function splitAndAdd(arr, n) {
  for(let i = 0; i < n; i ++){
    let top =  arr.slice(0, Math.floor(arr.length/2));
    let bottom = arr.length % 2 === 0 ? arr.slice(Math.floor(arr.length/2), arr.length) : arr.slice(Math.floor(arr.length/2), arr.length);
    let temp = [];
    if(bottom.length > top.length){
      temp.push(bottom[0]);
      bottom.shift();
    }
    for(let i = 0; i < bottom.length; i++) temp.push(bottom[i] + top[i]);
    arr = temp;
  }
  return arr;
}

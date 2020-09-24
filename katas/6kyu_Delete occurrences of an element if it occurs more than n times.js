//https://www.codewars.com/kata/554ca54ffa7d91b236000023

function deleteNth(arr,n){
  let extraElements = [];
  let arrSet = Array.from(new Set(arr));
  if(n === 1) return arrSet;
  for(num of arrSet){
    let elementCount = 0;
    for(let i = 0; i < arr.length; i++){
      if(num === arr[i]) elementCount++;
      if(elementCount > n){
        extraElements.push(num);
        elementCount--;
      }
    } 
  }
  for(element of extraElements) arr.splice(arr.lastIndexOf(element), 1);
  return arr;
}

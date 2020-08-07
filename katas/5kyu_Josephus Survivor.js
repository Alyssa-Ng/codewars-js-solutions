//https://www.codewars.com/kata/555624b601231dc7a400017a

function josephusSurvivor(n,k){
  let survivors = Array.from(Array(n), (e,i)=> i+1);
  let count = 0;
  for(let i = 0; i < n - 1; i ++){
    count += (k -1);
    while(count >= survivors.length) count -= survivors.length;
    survivors.splice(count,1);
  } 
  return parseInt(survivors.join(''));
}

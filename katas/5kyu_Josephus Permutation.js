//https://www.codewars.com/kata/5550d638a99ddb113e0000a2

function josephus(items,k) {
  let temp = Array.from(items);
  let result = [];
  let count = 0;
  for(let i = 0; i < items.length - 1; i ++){
    count += (k -1);
    while(count >= temp.length) count -= temp.length;
    result.push(temp[count]);
    temp.splice(count,1);
  } 
  return result.concat(temp);
}

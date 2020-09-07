//https://www.codewars.com/kata/52b23340c65ea422b1000045

function willFit(present, box){
  present.sort((a,b) => a-b);
  box.sort((a,b) => a-b);
  return box.every((v,i)=> v >= present[i]+ 2 );
} 

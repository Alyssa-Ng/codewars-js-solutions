//https://www.codewars.com/kata/55437532b73f053bac000096

function createTiles(n){
  if(n % 2 !==0 || n === 0 ) return [];
  let tiles = Array(n/2).fill(0).map((e,l) => l + 1).concat(Array(n/2).fill(0).map((e,l) => l + 1));
  return tiles.sort((a, b) => 0.5 - Math.random());
}

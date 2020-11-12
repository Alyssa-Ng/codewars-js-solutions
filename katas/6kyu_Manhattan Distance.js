//https://www.codewars.com/kata/52998bf8caa22d98b800003a

function manhattanDistance(pointA, pointB){
  let distance = 0;
  for(let i = 0; i < pointA.length; i++ ) distance += pointA[i] > pointB[i] ? pointA[i] - pointB[i] : pointB[i] - pointA[i];
  return distance;
}

//https://www.codewars.com/kata/511f11d355fe575d2c000001

function twoOldestAges(ages){
  let sortedAges = ages.sort((a,b) => b -  a);
  return [sortedAges[1], sortedAges[0]];
}

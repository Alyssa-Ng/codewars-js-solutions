//https://www.codewars.com/kata/58356a94f8358058f30004b5

let flyBy = (lamps, drone) => drone.length > lamps.length ? Array(lamps.length).fill('o').join('') : Array(drone.length).fill('o').join('').padEnd(lamps.length, 'x');

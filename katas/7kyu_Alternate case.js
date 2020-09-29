//https://www.codewars.com/kata/57a62154cf1fa5b25200031e

let alternateCase = (s) => s.split('').map(e => e.toLowerCase() === e? e.toUpperCase() : e.toLowerCase()).join('');

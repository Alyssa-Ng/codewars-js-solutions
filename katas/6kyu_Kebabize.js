//https://www.codewars.com/kata/57f8ff867a28db569e000c4a

var kebabize = (str) => str.replace(/[0-9]/g, '').match(/([A-Z]?[^A-Z]*)/g).slice(0,-1).join('-').toLowerCase();

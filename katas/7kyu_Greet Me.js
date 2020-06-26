//https://www.codewars.com/kata/535474308bb336c9980006f2

function capitalize(string){
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
var greet = function(name) {
  return 'Hello ' + capitalize(name) + '!';
};

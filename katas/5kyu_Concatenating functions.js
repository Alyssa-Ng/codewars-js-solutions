//https://www.codewars.com/kata/527176c487961e5900000106

let addOne = function(e) {return e + 1;};
let square = function(e) {return e * e;};
Function.prototype.pipe = function(e) {
   return (elem) => e(this(elem));
}

let result = [1,2,3,4,5].map(addOne.pipe(square));

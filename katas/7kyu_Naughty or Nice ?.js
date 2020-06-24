//https://www.codewars.com/kata/52a6b34e43c2484ac10000cd

var getNiceNames = (people) => people.filter( name => name.wasNice == true).map(e => e.name);
var getNaughtyNames = (people) => people.filter( name => name.wasNice == false).map(e => e.name);

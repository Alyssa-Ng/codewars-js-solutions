//https://www.codewars.com/kata/52a6b34e43c2484ac10000cd

let getNiceNames = (people) => people.filter( name => name.wasNice == true).map(e => e.name);
let getNaughtyNames = (people) => people.filter( name => name.wasNice == false).map(e => e.name);

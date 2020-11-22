//https://www.codewars.com/kata/586a933fc66d187b6e00031a

function generateName(){
  let randomString = function(){
    let string = '';
    for(let i = 0; i < 6; i ++ ) string += String.fromCodePoint( Math.floor(Math.random() * (91 - 65) + 65) );
    return string;                           
  }
  let name = randomString();
  while (photoManager.nameExists(name)) name = randomString();
  return name;
}

//https://www.codewars.com/kata/54a91a4883a7de5d7800009c

function incrementString (strng) {
  let digits = strng.replace(/[^\d]/g, '').trim();
  let letters = strng.replace(/[0-9]/g, '');
  if(digits.length == 0) return `${letters}1`.trim();
  return `${letters}${(parseInt(digits) + 1).toString().padStart(digits.length, '0')}`;
}

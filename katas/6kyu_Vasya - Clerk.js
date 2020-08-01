//https://www.codewars.com/kata/555615a77ebc7c2c8a0000b8

function tickets(peopleInLine){
  var cashier= {50: [], 25: []}
  for (let i = 0; i < peopleInLine.length; i ++){
    if(peopleInLine[0] !== 25) return "NO";
    if(peopleInLine[i] === 25) cashier['25'].push(25);
    if(peopleInLine[i] === 50){ 
      cashier['50'].push(50);
      if(cashier['25'].length === 0) return "NO";
      cashier['25'].pop();
    }
    if(peopleInLine[i] === 100){
      if(cashier['50'].length >= 1 && cashier['25'].length >= 1){
        cashier['50'].pop();
        cashier['25'].pop();
      } else if(cashier['25'].length >= 3) cashier['25'].splice(0,3);
        else return 'NO';
    }
  }
  return 'YES';
}

//https://www.codewars.com/kata/59c68ea2aeb2843e18000109

function amort(rate, bal, term, num_payments) {
  let r = rate/100/12;
  let monthlyPayment = r * bal/(1 - (1+ r)**(-term));
  let int = 0;
  for(let i = 0; i < num_payments; i++){
    int = bal * r;
    bal -= monthlyPayment - int;
  }
  return `num_payment ${num_payments} c ${Math.round(monthlyPayment)} princ ${Math.round(monthlyPayment-int)} int ${Math.round(int)} balance ${Math.round(bal)}`;
}

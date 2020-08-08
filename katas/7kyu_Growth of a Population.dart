//https://www.codewars.com/kata/563b662a59afc2b5120000c6

int nbYear(int p0, double percent, int aug, int p) {
  int numberOfYears;
  for (var i = 1; p0 < p; i++){ 
  p0 = (p0 +(p0 * percent/100) + aug).toInt();
  numberOfYears = i;
  }
  return numberOfYears;
}

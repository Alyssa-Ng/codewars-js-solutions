//https://www.codewars.com/kata/55d1d6d5955ec6365400006d

var roundToNext5 = (n) => n % 5 === 0 ? n : roundToNext5(++n);

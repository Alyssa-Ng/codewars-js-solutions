//https://www.codewars.com/kata/586f6741c66d18c22800010a

const sequenceSum = (begin, end, step) => begin <= end ? sequenceSum(begin + step, end, step) + begin : 0;

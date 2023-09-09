"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2 - 4*a*c;
  let x1;
  let x2;

  if (d === 0) {
    x1 = - b / (2*a);
    arr.push(x1);
    
  } else if (d > 0) {
    x1 = (- b + Math.sqrt(d)) / (2*a);
    x2 = (- b - Math.sqrt(d)) / (2*a);
    arr.push(x1,x2);
  }

  return arr;
}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let p = ( percent / 100 ) / 12;
  let s = amount - contribution;
  let n = countMonths;
  let generalPayment = ((s * (p + (p / (((1 + p) ** n) - 1)))) * n).toFixed(2);
  
  return Number(generalPayment);
  
}

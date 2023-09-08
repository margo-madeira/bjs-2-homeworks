function getArrayParams(...arr) {
  let min = Infinity;
  let max = - Infinity;
  let sum = 0;
  for(let i = 0; i < arr.length; i++) {
    if(i > max) {
      i = max;
    } else if (i < min) {
      i = min;
    }
    sum += i;
  }
  let avg;
  avg = Number((sum / arr.length).toFixed(2));

  return { min: min, max: max, avg: avg };
}



function summElementsWorker(...arr) {
  let sum;
  for(let i = 0; i < arr.length; i++) {
    sum += i;
  }
  return sum;
}

function differenceMaxMinWorker(...arr) {
  let difference;
  let max;
  let min;
  for(let i = 0; i < arr.length; i++) {
    if(i > max) {
      i = max;
    } else if (i < min) {
      i = min;
    }
  difference = max - min;
  return difference;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for(let i = 0; i < arr.length; i++) {
    if(i % 2 === 0) {
      i += sumEvenElement;
    }
  } else {
    i += sumOddElement;

  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for(let i = 0; i < arr.length; i++){
    if(i % 2 ===0) {
      sumEvenElement += i;
      countEvenElement += 1;
    }
    return sumEvenElement / countEvenElement;
  }

}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = - Infinity;

  for(let i = 0; i < arrOfArr.length; i++){
    
  }
}

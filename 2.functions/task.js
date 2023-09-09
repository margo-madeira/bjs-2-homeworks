function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  let counter = 0;
  let avg;
  
  for(let i = 0; i < arr.length; i++) {
   
    if(arr[i] >= max) {
      max = arr[i];
    } else if (arr[i] <= min) {
      min = arr[i];
    }
    sum += arr[i];
    counter += 1;
    if(counter === 1) {
      max = min = avg = arr[i];
    }
  }
  avg = Number((sum / counter).toFixed(2));

  return { min: min, max: max, avg: avg };
}


function summElementsWorker(...arr) {
  let sum = 0;
  if(arr.length === 0) {
    sum = 0;
  } else {
  for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
}
  return sum;
}

function differenceMaxMinWorker(...arr) {
  let difference = 0;
  let max = arr[0];
  let min = arr[0];
  
  if(arr.length === 0) {
    difference = 0;
  } else {
    for(let i = 0; i < arr.length; i++) {
      
      if(arr[i] > max) {
        max = arr[i];
      } else if (arr[i] < min) {
        min = arr[i];
      }
    }
  
    difference = max - min;
  }
  return difference;
}

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  let difference = 0;

  if(arr.length === 0) {
    difference = 0;
  } else {
    for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
        sumOddElement += arr[i];
      }
    }
    difference = sumEvenElement - sumOddElement;
  }
  return difference;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  let avg = 0;

  if(arr.length === 0){
    avg =0;
  } else {
    for(let i = 0; i < arr.length; i++){
      if(arr[i] % 2 ===0) {
        sumEvenElement += arr[i];
        countEvenElement += 1;
      }
    }
    avg = sumEvenElement / countEvenElement;
  }
  return avg;
}

function makeWork (func, ...arrOfArr) {
  let maxWorkerResult = -Infinity;

  for(let i = 0; i < arrOfArr.length; i++){
    function func(...arrOfArr){};
    const result = func();
    if(result > maxWorkerResult) {
      maxWorkerResult = result;
    } 
  }
  return maxWorkerResult;
}

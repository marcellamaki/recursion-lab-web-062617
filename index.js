// Code your solution here!

function printArray(array) {
  let sum = 0
  sum += array[0]
  if (array.length > 1){
  printArray()
}
}


function includesNumber(myArray, myNumber) {
  if (!myArray.length) {
    return false;
  } else if (myArray[0] === myNumber) {
    return true;
  } else {
    return includesNumber(myArray.slice(1), myNumber);
  }
}

function maxOf(myArray) {
  if (myArray.length === 1) {
    return myArray[0];
  } else {
    return Math.max(myArray.pop(), maxOf(myArray));
  }
}

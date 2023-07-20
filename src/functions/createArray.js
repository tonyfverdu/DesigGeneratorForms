function createArray(parNumberElem) {
  let arrayResult = []

  if (Number.isInteger(parNumberElem) && parNumberElem >= 1) {
    for (let i = 0; i < parNumberElem; i++) {
      arrayResult[i] = i
    }
  } else {
    console.error('Error:  The argument of the function "createArray" must be an integer number > 1')
    arrayResult = null
  }
  return arrayResult;
}

export default createArray;
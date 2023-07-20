function changeElementInArray(parArray, element) {

  console.log({ parArray, element })

  let arrayResult = []
  if (Array.isArray(parArray)) {
    const indice = parArray.findIndex(elem => elem === element)
    if (indice > -1) {
      arrayResult = parArray.splice(indice, 1, element)
    } else {
      console.error(`Error:  There is not the element: ${element} in the array of the function "changeElementInArray"`)
      arrayResult = null
    }
  } else {
    console.error('Error:  The argument of the function "changeElementInArray" must be an array!!')
    arrayResult = null
  }
  return arrayResult
}

export default changeElementInArray;
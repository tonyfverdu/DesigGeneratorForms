function changeElementInArray(parArray, id_OldElement, newElement) {

  console.log(`Voy a cambiar un elemento, con id: ${id_OldElement} de un array por otro elemento`)

  let arrayResult = []
  if (Array.isArray(parArray) && typeof id_OldElement === 'string') {
    const indexOld = parArray.findIndex(elem => elem.id_Block === id_OldElement)

    if (indexOld > -1) {
      arrayResult = parArray.splice(indexOld, 1, newElement)
    } else {
      console.error(`Error:  There is not the element old in the array of the function "changeElementInArray"`)
      arrayResult = null
    }
  } else {
    console.error('Error:  The arguments of the function "changeElementInArray" must be an array and strings!!')
    arrayResult = null
  }
  return arrayResult
}

export default changeElementInArray;

//  probe

/*
  const oldArray = [
    {
      id_Block: "uno",
      body: "Soy el uno"
    },
    {
      id_Block: "dos",
      body: "Soy el dos"
    },
    {
      id_Block: "tres",
      body: "Soy el tres"
    },
    {
      id_Block: "cuatro",
      body: "Soy el cuatro"
    },
    {
      id_Block: "cinco",
      body: "Soy el cinco"
    }
  ]

   const newArray = changeElementInArray(oldArray, "tres", {
      id_Block: "caca",
      body: "Soy una caca"
    })
    console.log("Array inicial:  ", oldArray, "  Array resultado", newArray)
*/
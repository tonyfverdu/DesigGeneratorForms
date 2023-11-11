/**
 * Generate the function comment for the given function body.
 *
 * @param {Object} parBlock - The parameter parBlock is an object representing a block.
 * @param {Array} parBlock.columns - The columns property of parBlock is an array of columns.
 * @throws {Error} Throws an error if parBlock.columns is not an array.
 * @returns {Array} Returns an array of components.
 */
export default function compByBlock(parBlock) {
  if (!Array.isArray(parBlock.columns)) {
    throw new Error('Error: parBlock.columns in the function "compByBlock" must be an array!!');
  }

  return parBlock.columns.flatMap(col => col.components);
}

/*
    This code exports a JavaScript function named compByBlock as the default export. 
    
    It takes a parameter called "parBlock". It extracts the "columns" property from "parBlock" using 
    destructuring assignment. 
    
    If columns is not an array, it throws an error. Otherwise, it returns a new array created by 
    concatenating all the components arrays from each col object in the columns array.
*/

//  Metodo de array  flatMap.

/*
    El metodo "flatMap()" primero "mapea" (hace un "map") cada elemento del array usando una función de mapeo,
  (callback), y luego "aplana" (realiza un "flat") el resultado en una nueva matriz. 
  
    Es idéntico a un "map" seguido de un "flatten" de profundidad 1, pero flatMap a menudo útil y la fusión 
    de ambos en un método es ligeramente más eficiente.

    El metodo de arrays "flatMap()" asigna todos los elementos de la matriz y crea una nueva matriz plana.

    "flatMap()" crea una nueva matriz llamando a una función (callback) para cada elemento de la matriz (map),
    seguido de un flaten de profundidad 1.

    Nota.-  "flatMap()":  no ejecuta la función para elementos vacíos.

    Nota.-  "flatMap()" no cambia la matriz original.

    Sintaxis:  let new_array = arr.flatMap(function callback(currentValue[, index[, array]]) {
                                  // return element for new_array
                                }[, thisArg])

    Parámetros:
                                callback:  función que produce un elemento de la nueva matriz, tomando tres argumentos:

                                            currentValue:  el elemento actual que se procesa en la matriz.

                                            index:  Opcional.  El índice del elemento actual que se procesa en la matriz.

                                            arrayOpcional: La matriz inicial que fue llamada.

                                            thisArg:  Opcional. Valor para usar como "this" al ejecutar callback.

    Valor de retorno:  una nueva matriz con cada elemento es el resultado de la función de devolución de llamada y se aplana a una profundidad de 1.

    Descripción:  El método "flatMap()" es idéntico al metodo "map", seguido de una llamada a flatten de profundidad 1.

    Ejemplo:   const arr1 = [1, 2, 3, 4];

               arr1.map((x) => [x * 2]);  // [[2], [4], [6], [8]]

               arr1.flatMap((x) => [x * 2]); // [2, 4, 6, 8], solo un nivel es aplanado

          arr1.flatMap((x) => [[x * 2]]);  // [[2], [4], [6], [8]]
*/

//  Metodo "flat"
/*
    El metodo "flat()" de Array crea una nueva matriz con todos los elementos de la submatriz concatenados en ella de forma recursiva 
    hasta la profundidad especificada.  
    
    const arr1 = [0, 1, 2, [3, 4]];

    console.log(arr1.flat());  // expected output: Array [0, 1, 2, 3, 4]
    

    Sintaxis:  flat(depth)

               Parámetros:
                          depth: Opcional. El "nivel de profundidad" que especifica la profundidad a la que se debe aplanar una estructura 
                          de matriz anidada. El valor predeterminado es 1.

               Valor de retorno: una nueva matriz con los elementos de la submatriz "concatenados" en ella.

               Descripción:  el metodo "flat()" es un método de copia. No modifica "this", sino que devuelve una copia superficial que contiene 
                             los mismos elementos que los de la matriz original.

                             El método "flat" ignora las ranuras vacías si la matriz que se está aplanando es escasa. Por ejemplo, si depth es 1, 
                             se ignoran las ranuras vacías en la matriz raíz y en el primer nivel de las matrices anidadas, pero las ranuras 
                             vacías en otras matrices anidadas se conservan con las matrices mismas.

                             El método "flat" es genérico. Solo espera que el valor "this" tenga una propiedad "lenght" y propiedades de clave 
                             entera. Sin embargo, sus elementos deben ser matrices si se van a aplanar.
    
    
    Ejemplos:  
                            const arr1 = [1, 2, [3, 4]];
                            arr1.flat();
                            // [1, 2, 3, 4]

                            const arr2 = [1, 2, [3, 4, [5, 6]]];
                            arr2.flat();
                            // [1, 2, 3, 4, [5, 6]]

                            const arr3 = [1, 2, [3, 4, [5, 6]]];
                            arr3.flat(2);
                            // [1, 2, 3, 4, 5, 6]

                            const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
                            arr4.flat(Infinity);
                            // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
*/

import { useEffect, useContext, useCallback } from 'react'
import { MyContext } from '../../context/TheContext.jsx';
import '../../sass/componentSass/TeilRight/Row.scss'

function RowBlock({ formInput, count, setLengthOfArrayOfBlocks }) {
  const { setFormObject, arrayOfBlocks, setArrayOfBlocks, masterBlock } = useContext(MyContext);

  useEffect(() => {
    setArrayOfBlocks(formInput.blocks);
    setLengthOfArrayOfBlocks(formInput.blocks.length);
    setFormObject(formInput);
  }, [formInput]);

  useEffect(() => {
    setFormObject(prevFormObject => ({
      ...prevFormObject,
      blocks: arrayOfBlocks,
    }));
  }, [arrayOfBlocks]);

  const addNewBlock = useCallback(() => {
    if (!Array.isArray(arrayOfBlocks)) {
      throw new Error('In "addNewBlock" the value of arrayOfBlocks is not an array!!');
    }

    const newArrayOfBlocks = structuredClone(arrayOfBlocks); // Copia profunda del arreglo existente
    newArrayOfBlocks.splice(count, 0, masterBlock); // Agregar el bloque en la posición deseada

    // Actualizar el ordenDisplay_Block
    const arrayBlockSortNumber = newArrayOfBlocks.map((block, i) => ({ ...block, ordenDisplay_Block: i, }));

    //  Actualizacion de ArrayOfBlocks del contexto
    setArrayOfBlocks(arrayBlockSortNumber);
    setLengthOfArrayOfBlocks(arrayBlockSortNumber.length);
  }, [arrayOfBlocks, setArrayOfBlocks, count, masterBlock, setLengthOfArrayOfBlocks]);

  const deleteBlock = useCallback(() => {
    if (!Array.isArray(arrayOfBlocks)) {
      throw new Error('In "deleteBlock" the value of arrayOfBlocks is not an array!!');
    }
    const updatedArrayOfBlocks = structuredClone(arrayOfBlocks); // Copia profunda del arreglo existente
  
    // Remove the element at the specified index
    updatedArrayOfBlocks.splice(count, 1);


    // Actualizar el ordenDisplay_Block
    const arrayBlockSortNumber = updatedArrayOfBlocks.map((block, i) => ({ ...block, ordenDisplay_Block: i, }));

    //  Actualizacion de ArrayOfBlocks del contexto
    setArrayOfBlocks(arrayBlockSortNumber);
    setLengthOfArrayOfBlocks(arrayBlockSortNumber.length);
  }, [arrayOfBlocks, setArrayOfBlocks, count, setLengthOfArrayOfBlocks]);

  return (
    <div className="d-flex flex-row justify-content-center align-item-center p-0 m-0">
      <span className="fs-6 fw-bold text-success p-0 me-1">{count <= 0 ? 0 : count}</span>
      <div className="col d-flex flex-row justify-content-start align-item-start p-0 m-0">
        <>
          <button
            type="button"
            className="circle d-flex flex-row justify-content-center align-item-center fw-bold btn btn-outline-secondary rounded-circle p-0 me-1"
            onClick={addNewBlock}
          >
            <span className="text-center text-black fw-bold">+</span>
          </button>
          <div className="contLine d-flex flex-row justify-content-center align-item-center graycolor600 p-0 mt-2"></div>
          <button
            type="button"
            className="circle d-flex flex-row justify-content-center align-item-center fw-bold btn btn-danger rounded-circle mx-auto ms-1"
            onClick={deleteBlock}
          >
            <span className="text-center text-black fw-bold">-</span>
          </button>
        </>
      </div>
    </div>
  );
}

export default RowBlock;

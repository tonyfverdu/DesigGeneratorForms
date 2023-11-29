import { useState, useEffect, useContext, useCallback, useRef } from 'react'
import { MyContext } from '../../../context/TheContext.jsx';
import '../../../sass/componentSass/TeilRight/Row.scss'

function ColAddLine({ block, setArrayColumnsLocal2, col, numRow }) {
  const { formObject, setFormObject,
    arrayOfBlocks, setArrayOfBlocks,
    arrayOfColumnsOfBlock, setArrayColumnsOfBlock,
    blockSelectObject, setBlockSelectObject,
    columnSelectObject, setColumnSelectObject,
    masterRowCompsIni, tooRead } = useContext(MyContext);

  //  STATE VARIABLES:
  const [variableBlockLocal, setVariableBlockLocal] = useState({});  //  <<===   User-selected Block
  const [arrayColumnsLocal, setArrayColumnsLocal] = useState([]);  //  <<===   User-selected Array of Columns of the Block
  const [contColumnsOfBlocks, setContColumnsOfBlock] = useState(0);  // <<== Contador de columnas en un bloque
  const [variableColLocal, setVariableColLocal] = useState({});  // <<=== Column-selected Column of the Block

  const [variableColumnsComponents, setVariableColumnsComponets] = useState({});
  const [toggleNewColComps, setToggleNewColComps] = useState(true);
  const [contColumnsComponents, setContColumnsComponents] = useState(0);
  const [indexOfBlock, setIndexOfBlock] = useState(0);

  //  USE REFERENCES:
  const referenceArrayColumnsInBlock = useRef(block.columns);

  useEffect(() => {
    setVariableBlockLocal(block);
    setArrayColumnsLocal(block.columns);

    const indexOfBlock = arrayOfBlocks.findIndex((b) => b.id_Block === block.id_Block)
    setIndexOfBlock(indexOfBlock);
    setContColumnsOfBlock(block.columns.length);

    referenceArrayColumnsInBlock.current = block.columns;


    setVariableColumnsComponets({
      ...variableColumnsComponents,
      orderColInBlock: numRow
    });
    setContColumnsComponents(block.columns.length);
    setToggleNewColComps(true);
  }, [block, numRow]);

  useEffect(() => {
    setBlockSelectObject(variableBlockLocal);
    // const newArrayBlocks = structuredClone(arrayOfBlocks);
    // newArrayBlocks[arrayOfBlocks.indexOf(blockSelectObject)].columns = variableArrayColLocal;
    // setArrayOfBlocks(newArrayBlocks);
  }, [variableBlockLocal]);

  useEffect(() => {
    setArrayColumnsOfBlock(arrayColumnsLocal);
    setBlockSelectObject(prevBlockSelectObject => ({ ...prevBlockSelectObject, columns: arrayColumnsLocal }));

    setVariableBlockLocal(prevVariableBlock => ({ ...prevVariableBlock, columns: arrayColumnsLocal }));
    // setArrayColumnsLocal2(arrayColumnsLocal);

    referenceArrayColumnsInBlock.current = arrayColumnsLocal;

    setContColumnsComponents(prevContColComps => prevContColComps + 1);
    setToggleNewColComps(prevToggleNewColComps => !prevToggleNewColComps);
  }, [arrayColumnsLocal]);


  //  MIRA ESTO
  useEffect(() => {
    setArrayColumnsLocal2(referenceArrayColumnsInBlock.current);
    setArrayColumnsOfBlock(referenceArrayColumnsInBlock.current);
  }, [referenceArrayColumnsInBlock.current]);

  // useEffect(() => {
  //   console.log('En useEffect de ColAddLine, indexOfBlock: ', indexOfBlock);

  // }, [indexOfBlock]);


  // Function to add a new row
  // const addNewRow = (parBlock) => {
  //   console.log('En addNewRow, parBlock: ', parBlock);
  //   if (!Array.isArray(parBlock.columns)) {
  //     throw new Error('In "addNewRow" the value of "parBlock.blocks" is not an array!!');
  //   }
  //   const indexEstimate = parBlock.columns.findIndex((c) => c.orderColInBlock === col.orderColInBlock);
  //   console.log('En addNewRow, indexEstimate: ', indexEstimate);
  //   // setIndexOfBlock(indexEstimate);
  //   // console.log('En addNewRow, referenceArrayColumnsInBlock.current[indexOfBlock]: ', referenceArrayColumnsInBlock.current[indexOfBlock]);
  //   console.log('referenceArrayColumnsInBlock.current:  ', referenceArrayColumnsInBlock.current)
  //   setArrayColumnsLocal(prevArrayColumns => referenceArrayColumnsInBlock.current[indexOfBlock]);
  //   // console.log('addNewRow, parBlock.columns: ', parBlock.columns);

  //   // 1.- Delete Column to arrayColumnsLocal and update orderColInBlock
  //   const newArrayColumnsLocal = structuredClone(referenceArrayColumnsInBlock.current);
  //   newArrayColumnsLocal.splice(numRow, 0, masterRowCompsIni);
  //   // console.log('En addNewRow, newArrayColumnsLocal:  ', newArrayColumnsLocal);

  //   // 2.- Update arrayColumnsLocal
  //   const updateArrayColumnsLocal = newArrayColumnsLocal.map((col, i) => {
  //     col.orderColInBlock = i;
  //     return col;
  //   });
  //   // console.log('En addNewRow, updateArrayColumnsLocal:  ', updateArrayColumnsLocal);

  //   // 3.- Update: arrayColumnsLocal, variableBlock and blockSelectObject
  //   setArrayColumnsLocal(prev => updateArrayColumnsLocal);
  //   setArrayColumnsOfBlock(prev => updateArrayColumnsLocal);

  //   referenceArrayColumnsInBlock.current = updateArrayColumnsLocal;
  //   // console.log('En addNewRow, referenceArrayColumnsInBlock.current:  ', referenceArrayColumnsInBlock.current);
  //   setArrayColumnsOfBlock(referenceArrayColumnsInBlock);


  //   setContColumnsOfBlock(prevContColComps => parBlock.columns.length);
  // }

  // 1.- Function to add a new row
  const addNewRow = (parBlock) => {
    if (!Array.isArray(arrayColumnsLocal)) {
      throw new Error('In "addNewRow" the value of "arrayColumnsLocal = block.columns" is not an array!!');
    }

    // 1.- Add Column to arrayColumnsLocal and update orderColInBlock
    const newArrayColumnsLocal = structuredClone(arrayColumnsLocal.splice(numRow, 0, masterRowCompsIni));

    // 2.- Update arrayColumnsLocal
    const updateArrayColumnsLocal = newArrayColumnsLocal.map((col, i) => {
      col.orderColInBlock = i;
      return col;
    });

    // 3.- Update: arrayColumnsLocal, variableBlock and blockSelectObject
    setVariableBlockLocal(updateArrayColumnsLocal);

    setContColumnsComponents(prevContColComps => prevContColComps + 1);
    setToggleNewColComps(prevToggleNewColComps => !prevToggleNewColComps);
  };

  // Function to delete a new column
  const deleteRow = (parBlock) => {
    if (!Array.isArray(arrayColumnsLocal)) {
      throw new Error('In "addNewRow" the value of "arrayColumnsLocal" is not an array!!');
    }

    // 1.- Delete Column to arrayColumnsLocal and update orderColInBlock
    const newArrayColumnsLocal = structuredClone(arrayColumnsLocal.splice(numRow, 1));

    // 2.- Update arrayColumnsLocal
    const updateArrayColumnsLocal = newArrayColumnsLocal.map((col, i) => {
      col.orderColInBlock = i;
      return col;
    });

    // 3.- Update: arrayColumnsLocal, variableBlock and blockSelectObject
    setVariableBlockLocal(updateArrayColumnsLocal);

    setContColumnsComponents(prevContColComps => prevContColComps - 1);
    setToggleNewColComps(prevToggleNewColComps => !prevToggleNewColComps);
  }

  return (
    <div className="d-flex flex-row justify-content-start align-item-center">
      {col && contColumnsOfBlocks <= 0 ? (
        <span className="fw-bold text-dark me-1" style={{ fontSize: "0.64rem" }}>
          {0}
        </span>
      ) : (
        <span className="fw-bold text-dark me-1" style={{ fontSize: "0.64rem" }}>
          {numRow}
        </span>
      )}

      <div className="col d-flex flex-row justify-content-start align-item-start">
        <button
          type="button"
          className="circleComp d-flex flex-row justify-content-center align-item-center btn btn-danger rounded-circle me-1 border-0"
          onClick={() => addNewRow(block)}
        >
          <span className="text-center fw-bolder text-white p-0">+</span>
        </button>
        <div className="contLineComp d-flex flex-row justify-content-start align-item-center green mt-1"></div>
        <button
          type="button"
          className="circleComp bg-danger d-flex flex-row justify-content-center align-item-center btn btn-danger rounded-circle ms-1"
          onClick={() => deleteRow(block)}
        >
          <span className="text-center fw-bolder text-white p-0">-</span>
        </button>
      </div>
    </div>
  );
}

export default ColAddLine;

/*
const { formObject, setFormObject, arrayOfBlocks, setArrayOfBlocks, arrayOfColumnsOfBlock, setArrayColumnsOfBlock,
    blockSelectObject, setBlockSelectObject,
    columnSelectObject, setColumnSelectObject,
    masterRowCompsIni, tooRead } = useContext(MyContext);

  //  State variables: variableBlockLocal => blockSelectObject
  const [variableBlockLocal, setVariableBlockLocal] = useState({});
  const [arrayColumnsLocal, setArrayColumnsLocal] = useState([]);

  const [variableColumnsComponents, setVariableColumnsComponets] = useState({});
  const [toggleNewColComps, setToggleNewColComps] = useState(true);
  const [contColumnsComponents, setContColumnsComponents] = useState(0);

  //  Se actualiza el array de columnas por bloque
  useEffect(() => {
    console.log('En useEffect de ColAddLine, block: ', block);
    console.log('En useEffect de ColAddLine, blockSelectObject: ', blockSelectObject);
    setBlockSelectObject(prevState => block);
    setVariableBlockLocal(prevState => block);

    setArrayColumnsLocal(arrayOfColumnsOfBlock);

    setContColumnsComponents(prevContColComps => prevContColComps + 1);
    setToggleNewColComps(prevToggleNewColComps => !prevToggleNewColComps);
  }, [arrayOfColumnsOfBlock]);


  //  Se actualiza el objeto de block, cambio de bloque
  useEffect(() => {
    // console.log('En useEffect de ColAddLine, block: ', block);
    // console.log('En useEffect de ColAddLine, blockSelectObject: ', blockSelectObject);

    setBlockSelectObject(prevState => block);
    setVariableBlockLocal(prevState => block);

    setVariableColumnsComponets({
      ...variableColumnsComponents,
      orderColInBlock: numRow
    });
    setContColumnsComponents(block.columns.length);
    setToggleNewColComps(true);
  }, [block]);

  // useEffect(() => {
  //   // const newArrayColumnsLocal = structuredClone(arrayColumnsLocal);
  //   //console.log('Despues del splice, newArrayColumnsLocal:  ', newArrayColumnsLocal);

  //   // for (let i = 0; i < newArrayColumnsLocal.length; i++) {
  //   //   newArrayColumnsLocal[i].orderColInBlock = i;
  //   // }
  //   //console.log('Despues del splice y for, newArrayColumnsLocal:  ', newArrayColumnsLocal);

  //   // setArrayColumnsLocal(newArrayColumnsLocal);
  //   console.log('En useEffect de ColAddLine, block: ', block);
  //   console.log('En useEffect de ColAddLine, col: ', col);
  //   setVariableBlock(prevVariableBlock => ({ ...prevVariableBlock, columns: arrayColumnsLocal }));
  //   setBlockSelectObject(prevBlockSelectObject => ({ ...prevBlockSelectObject, columns: arrayColumnsLocal }));

  //   setContColumnsComponents(prevContColComps => prevContColComps + 1);
  //   setToggleNewColComps(prevToggleNewColComps => !prevToggleNewColComps);
  // }, [arrayColumnsLocal]);

  const addNewRow = () => {
    if (!Array.isArray(arrayColumnsLocal)) {
      throw new Error('In "addNewRow" the value of "arrayColumnsLocal" is not an array!!');
    }

    // 1.- Add Column to arrayColumnsLocal and update orderColInBlock
    const newArrayColumnsLocal = structuredClone(arrayColumnsLocal);
    newArrayColumnsLocal.splice(numRow, 0, masterRowCompsIni);
    // console.log('En addNewRow, newArrayColumnsLocal:  ', newArrayColumnsLocal);

    // 2.- Update arrayColumnsLocal
    const updateArrayColumnsLocal = newArrayColumnsLocal.map((col, i) => {
      col.orderColInBlock = i;
      return col;
    });
    console.log('En addNewRow, updateArrayColumnsLocal:  ', updateArrayColumnsLocal);

    // 3.- Update: arrayColumnsLocal, variableBlock and blockSelectObject
    setArrayColumnsLocal(prev => updateArrayColumnsLocal);
    setArrayColumnsOfBlock(prev => updateArrayColumnsLocal);
    // setArrayOfBlocks(updateArrayColumnsLocal);
    // setVariableBlock(prevVariableBlock => ({ ...prevVariableBlock, columns: updateArrayColumnsLocal }));
    // setBlockSelectObject(prevBlockSelectObject => ({ ...prevBlockSelectObject, columns: updateArrayColumnsLocal }));
  };

  useEffect(() => {
    setArrayColumnsOfBlock(prevArrayColumnsOfBlock => arrayColumnsLocal);
    // setArrayOfBlocks(prevArrayOfBlocks => [...prevArrayOfBlocks, arrayColumnsLocal]);
    // setBlockSelectObject(prevBlockSelectObject => ({ ...prevBlockSelectObject, columns: arrayColumnsLocal }));
  }, [arrayColumnsLocal]);

  // useEffect(() => {
  //   setFormObject({...formObject, blocks: arrayOfBlocks});
  // },[arrayOfBlocks])

  const deleteRow = () => {
    if (!Array.isArray(arrayColumnsLocal)) {
      throw new Error('In "deleteRow" the value of variableBlock.columns is not an array!!');
    }
    if (arrayColumnsLocal.length < 0) {
      return;
    }
    //console.log("en deleteRow, arrayColumnsLocal:  ", arrayColumnsLocal);
    const newArrayColumnsLocal = structuredClone(arrayColumnsLocal.splice(numRow, 1));

    // 3.- Update arrayColumnsLocal
    for (let i = 0; i < newArrayColumnsLocal.length; i++) {
      newArrayColumnsLocal[i].orderColInBlock = i;
    }

    // 4.- Update: arrayColumnsLocal, variableBlock and blockSelectObject
    setArrayColumnsLocal(newArrayColumnsLocal);
    setVariableBlock(prevVariableBlock => ({ ...prevVariableBlock, columns: newArrayColumnsLocal }));
    setBlockSelectObject(prevBlockSelectObject => ({ ...prevBlockSelectObject, columns: newArrayColumnsLocal }));

    setContColumnsComponents(prevContColComps => prevContColComps - 1);
    setToggleNewColComps(prevToggleNewColComps => !prevToggleNewColComps);
  };

  return (
    <div className="d-flex flex-row justify-content-start align-item-center">
      {contColumnsComponents <= 0 ? (
        <span className="fw-bold text-dark me-1" style={{ fontSize: "0.64rem" }}>
          {0}
        </span>
      ) : (
        <span className="fw-bold text-dark me-1" style={{ fontSize: "0.64rem" }}>
          {numRow}
        </span>
      )}

      <div className="col d-flex flex-row justify-content-start align-item-start">
        <button
          type="button"
          className="circleComp d-flex flex-row justify-content-center align-item-center btn btn-danger rounded-circle me-1 border-0"
          onClick={addNewRow}
        >
          <span className="text-center fw-bolder text-white p-0">+</span>
        </button>
        <div className="contLineComp d-flex flex-row justify-content-start align-item-center green mt-1"></div>
        <button
          type="button"
          className="circleComp bg-danger d-flex flex-row justify-content-center align-item-center btn btn-danger rounded-circle ms-1"
          onClick={deleteRow}
        >
          <span className="text-center fw-bolder text-white p-0">-</span>
        </button>
      </div>
    </div>
  );
}
*/

/*
  // useEffect(() => {
  //   const indexOfBlock = arrayOfBlocks.indexOf(blockSelectObject);
  //   const newArrayBlocks = structuredClone(arrayOfBlocks);
  //   newArrayBlocks.splice(indexOfBlock, 1, blockSelectObject);
  //   console.log("newArrayBlocks: ", newArrayBlocks)

  //   // setFormObject(prevFormObject => ({
  //   //   ...prevFormObject,
  //   //   blocks: newArrayBlocks
  //   // }));
  // },[blockSelectObject]);

  // useEffect(() => {
  //   setBlockSelectObject(variableBlock);
  //   setArrayOfBlocks(variableArrayBlocks);
  // }, tooRead);
*/

//  ANTIGUO
/*
function ColAddLine({ block, numRow }) {
  const { blockSelectObject, setBlockSelectObject, arrayOfBlocks, setArrayOfBlocks, masterRowCompsIni, tooRead } = useContext(MyContext);

  const [variableBlock, setVariableBlock] = useState({});
  const [variableColumnsComponents, setVariableColumnsComponets] = useState(masterRowCompsIni);
  const [toggleNewColComps, setToggleNewColComps] = useState(true);
  const [contColumnsComponets, setContColumnsComponets] = useState(0);

  const [arrayColumnsLocal, setArrayColumnsLocal] = useState([]);
  const [indexInArrayColumnsLocal, setIndexInArrayColumnsLocal] = useState(0);

  // const masterRowCompsIni = {
  //   "orderColInBlock": 0,
  //   "components": [masterComponentIni]
  // }

  // useEffect(() => {
  //   setArrayColumnsLocal(block.columns);
  //   console.log("arrayColumnsLocal:  ", arrayColumnsLocal);

  // }, [variableBlock.columns]);


  //  Esta incompleto, realmente deberia crearse un array de columns y a partir de hay empezar a trabajar
  useEffect(() => {
    setVariableBlock(block);
    setArrayColumnsLocal(block.columns);
    setVariableColumnsComponets({
      ...variableColumnsComponents,
      orderColInBlock: numRow
    });
    setContColumnsComponets(block.columns.length);
    setIndexInArrayColumnsLocal(numRow);
  }, [block, numRow]);

  useEffect(() => {
    setBlockSelectObject(variableBlock);
    // setArrayOfBlocks({ ...arrayOfBlocks, variableBlock });
  }, [variableBlock]);

  const addNewRow = useCallback((block) => {
    if (!Array.isArray(arrayColumnsLocal)) {
      throw new Error('In "addNewRow" the value of block.columns is not an array!!');
    }
    //const updateArrayColumnsLocal = arrayColumnsLocal.splice(numRow, 0, masterRowCompsIni);
    const updateArrayColumnsLocal = structuredClone(arrayColumnsLocal);
    console.log('updateArrayColumnsLocal:  ', updateArrayColumnsLocal);

    updateArrayColumnsLocal.splice(contColumnsComponets, 0, masterRowCompsIni);
    console.log('updateArrayColumnsLocal:  ', updateArrayColumnsLocal);

    // console.log('numRow:  ', numRow);
    // console.log('contColumnsComponets:  ', contColumnsComponets);
    // console.log("vamosaverqueconoesesto:  ", vamosaverqueconoesesto);
    
    //const newArrayColumns = structuredClone(arrayColumnsLocal.splice(contColumnsComponets, 0, masterRowCompsIni));
    
    // vamosaverqueconoesesto.forEach((column, index) => {
    //   column.orderColInBlock = index;
    // });
    // console.log("vamosaverqueconoesesto:  ", vamosaverqueconoesesto);

    // setVariableBlock(prevVariableBlock => ({ ...prevVariableBlock, columns: vamosaverqueconoesesto }));
    // setBlockSelectObject(prevBlockSelectObject => ({ ...prevBlockSelectObject, columns: vamosaverqueconoesesto }));

    // setContColumnsComponets(prevContColComps => prevContColComps + 1);
    // setToggleNewColComps(prevToggleNewColComps => !prevToggleNewColComps);
  }, [variableBlock.columns, contColumnsComponets]);

  const deleteRow = useCallback(() => {
    if (!Array.isArray(arrayColumnsLocal)) {
      throw new Error('In "deleteRow" the value of variableBlock.columns is not an array!!');
    }
    if(arrayColumnsLocal.length <= 0) {
      return;
    }
    const newArrayColumns = structuredClone(arrayColumnsLocal.splice(contColumnsComponets, 1));

    newArrayColumns.forEach((column, index) => {
      column.orderColInBlock = index;
    });
    setVariableBlock({ ...variableBlock, columns: newArrayColumns });

    setContColumnsComponets(prevContColComps => prevContColComps + 1);
    setToggleNewColComps(!toggleNewColComps);
  }, [variableBlock.columns, contColumnsComponets]);

  return (
    <div className="d-flex flex-row justify-content-start align-item-center">
      {contColumnsComponets <= 0 ? (
        <span className="fw-bold text-dark me-1" style={{ fontSize: "0.64rem" }}>
          {0}
        </span>
      ) : (
        <span className="fw-bold text-dark me-1" style={{ fontSize: "0.64rem" }}>
          {numRow}
        </span>
      )}

      <div className="col d-flex flex-row justify-content-start align-item-start">
        <button
          type="button"
          className="circleComp d-flex flex-row justify-content-center align-item-center btn btn-danger rounded-circle me-1 border-0"
          onClick={() => addNewRow(block)}
        >
          <span className="text-center fw-bolder text-white p-0">+</span>
        </button>
        <div className="contLineComp d-flex flex-row justify-content-start align-item-center green mt-1"></div>
        <button
          type="button"
          className="circleComp bg-danger d-flex flex-row justify-content-center align-item-center btn btn-danger rounded-circle ms-1"
          onClick={deleteRow}
        >
          <span className="text-center fw-bolder text-white p-0">-</span>
        </button>
      </div>
    </div>
  );
}

export default ColAddLine;
*/


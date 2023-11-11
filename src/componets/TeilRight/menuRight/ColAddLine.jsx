import { useState, useEffect, useContext, useCallback } from 'react'
import { MyContext } from '../../../context/TheContext.jsx';
import '../../../sass/componentSass/TeilRight/Row.scss'

function ColAddLine({ block, col, numRow }) {
  const { blockSelectObject, setBlockSelectObject, arrayOfBlocks, setArrayOfBlocks, masterRowCompsIni, tooRead } = useContext(MyContext);

  const [variableBlock, setVariableBlock] = useState({});
  const [variableColumnsComponents, setVariableColumnsComponets] = useState({});
  const [toggleNewColComps, setToggleNewColComps] = useState(true);
  const [contColumnsComponents, setContColumnsComponents] = useState(0);

  const [arrayColumnsLocal, setArrayColumnsLocal] = useState(block.columns);

  //  Esta incompleto, realmente deberia crearse un array de columns y a partir de hay empezar a trabajar
  useEffect(() => {
    setArrayColumnsLocal(block.columns);
    setVariableBlock(block);

    setVariableColumnsComponets({
      ...variableColumnsComponents,
      orderColInBlock: numRow
    });
    setContColumnsComponents(block.columns.length);
    setToggleNewColComps(true);
  }, [block, numRow]);

  useEffect(() => {
    // const newArrayColumnsLocal = structuredClone(arrayColumnsLocal);
    //console.log('Despues del splice, newArrayColumnsLocal:  ', newArrayColumnsLocal);

    // for (let i = 0; i < newArrayColumnsLocal.length; i++) {
    //   newArrayColumnsLocal[i].orderColInBlock = i;
    // }
    //console.log('Despues del splice y for, newArrayColumnsLocal:  ', newArrayColumnsLocal);

    // setArrayColumnsLocal(newArrayColumnsLocal);
    setVariableBlock(prevVariableBlock => ({ ...prevVariableBlock, columns: arrayColumnsLocal }));
    setBlockSelectObject(prevBlockSelectObject => ({ ...prevBlockSelectObject, columns: arrayColumnsLocal }));

    setContColumnsComponents(prevContColComps => prevContColComps + 1);
    setToggleNewColComps(prevToggleNewColComps => !prevToggleNewColComps);
  }, [arrayColumnsLocal]);

  const addNewRow = () => {
    if (!Array.isArray(arrayColumnsLocal)) {
      throw new Error('In "addNewRow" the value of block.columns is not an array!!');
    }

    // 1.- Add Column to arrayColumnsLocal and update orderColInBlock
    // setArrayColumnsLocal(previewArrayColumnsLocal => previewArrayColumnsLocal
    //   .splice(numRow, 0, masterRowCompsIni)
    //   .map((col, i) => {
    //     return { ...col, orderColInBlock: i };
    //   }));

    const newArrayColumnsLocal = structuredClone(arrayColumnsLocal.splice(numRow, 0, masterRowCompsIni));

    // console.log('updateArrayColumnsLocal:  ', updateArrayColumnsLocal);
    // 2.- Update arrayColumnsLocal
    const updateArrayColumnsLocal = newArrayColumnsLocal.map((col, i) => {
      col.orderColInBlock = i;
    });

    // 3.- Update: arrayColumnsLocal, variableBlock and blockSelectObject
    setArrayColumnsLocal(updateArrayColumnsLocal);
    // setVariableBlock(prevVariableBlock => ({ ...prevVariableBlock, columns: newArrayColumnsLocal }));
    // setBlockSelectObject(prevBlockSelectObject => ({ ...prevBlockSelectObject, columns: newArrayColumnsLocal }));
  };

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

export default ColAddLine;

/*
  // Antigua funcion addNewRow:

   const addNewRow = useCallback(() => {
    if (!Array.isArray(arrayColumnsLocal)) {
      throw new Error('In "addNewRow" the value of block.columns is not an array!!');
    }

    // 1.- Add Column to arrayColumnsLocal and update orderColInBlock
    const newArrayColumnsLocal = structuredClone(arrayColumnsLocal);
    newArrayColumnsLocal.splice(numRow, 0, masterRowCompsIni);

    // 2.- Update arrayColumnsLocal
    for (let i = 0; i < newArrayColumnsLocal.length; i++) {
      newArrayColumnsLocal[i].orderColInBlock = i;
    }
    console.log('En el newArrayColumnsLocal es:  ', newArrayColumnsLocal);

    // 3.- Update: arrayColumnsLocal, variableBlock and blockSelectObject
    setArrayColumnsLocal(newArrayColumnsLocal);
    // setVariableBlock(prevVariableBlock => ({ ...prevVariableBlock, columns: newArrayColumnsLocal }));
    // setBlockSelectObject(prevBlockSelectObject => ({ ...prevBlockSelectObject, columns: newArrayColumnsLocal }));

    setContColumnsComponents(prevContColComps => prevContColComps + 1);
    setToggleNewColComps(prevToggleNewColComps => !prevToggleNewColComps);
  }, []);
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

/*
  //  2.- Component Master ini
  const masterComponentIni = {
    "id_Element": "id_component_master",
    "title_Element": "Component Master",
    "type_Element": "master",
    "orderInBlock": 0,
    "label_Element": "Component Master",
    "required": true,
    "disabled": false,
    "response": [],
    "placeholder": "Default",
    "size": 0,
    "position": {
      "rowElem": 0,
      "colElem": 0
    },
    "dimension": {
      "width": 1,
      "height": "2.4rem"
    },
    "valueComponent": undefined,
    "setComponent": undefined,
    "name": undefined,
    "borderElement": true,
    "colorElement": "black",
    "fontSizeElement": "0.6rem",

    //  Element Select
    "optionValues": [],

    //  Element Area Text 
    "readonly": false,
    "row": 0,
    "col": 0,

    //  Element Checkbox
    "checked": false,

    //  Element Radio Buttons
    "legend": "",
    "radioButtons": [
      {
        "id_Element": "",
        "labelElement": "",
        "name": "",
        "required": true,
        "disabled": false,
        "checked": false,
        "response": [
          false
        ],
        "setRadioButton": undefined
      }
    ],

    //  Element Table

    //  Element Icon Image
    "srcURLIcon": "",
    "nameImage": "",
    "widthImage": 0
  }

  const newColComponentIni = {
    "orderColInBlock": 0,
    "components": []
  }
*/

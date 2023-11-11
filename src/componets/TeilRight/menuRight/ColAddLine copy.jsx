import { useState, useEffect, useContext, useCallback } from 'react'
import { MyContext } from '../../../context/TheContext.jsx';
import '../../../sass/componentSass/TeilRight/Row.scss'

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

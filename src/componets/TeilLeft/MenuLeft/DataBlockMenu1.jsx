import { useState, useContext, useEffect, useCallback, useMemo } from 'react';
import { MyContext } from '../../../context/TheContext.jsx';
import HeaderHead from './HeaderHead.jsx';
import FieldText from './FieldText.jsx';
import FieldTextArea from './FieldTextArea.jsx';
import FieldSelect from './FieldSelect.jsx';
import FieldSelectAdd from './FieldSelectAdd.jsx';
import { TITLES_RCM_LEFT } from '../../../constants/contants.js';
import compByBlock from '../../../functions/compByBlock.js';

function DataBlockMenu({ blockSelect, setBlockSelect, rowSelect, setRowSelect, valueComp, setValueComp }) {
  const { formObject, setFormObject, arrayOfBlocks, setArrayOfBlocks, blockSelectObject, setBlockSelectObject, tooRead } = useContext(MyContext);

  //  State variables
  const [blockSelectLocal, setBlockSelectLocal] = useState(blockSelect);
  const [newArrayLocalBlocks, setNewArrayLocalBlocks] = useState(formObject.blocks);
  const [indexBlockSelect, setIndexBlockSelect] = useState(0);
  const [parChangeBlock, setParChangeBlock] = useState("");


  const [compSelectObj, setCompSelectObj] = useState({}); // Initial value can be an empty object
  const [indexRowSelect, setIndexRowSelect] = useState(0);
  const [arrayOrders, setArrayOrders] = useState([]);
  const [arrayComponents, setArrayOfComponents] = useState([]);

  useEffect(() => {
    setBlockSelectLocal(blockSelect);
    setNewArrayLocalBlocks(formObject.blocks);
    // setIndexBlockSelect(0);
    setParChangeBlock("");
    setCompSelectObj({});

    const indexOfBlock = formObject.blocks.findIndex(block => block === blockSelect);

    if (indexOfBlock !== -1) {
      setIndexBlockSelect(indexOfBlock);
      setNewArrayLocalBlocks(prevArrayBlocksLocal => {
        const newArrayBlocksLocal = [...prevArrayBlocksLocal];
        newArrayBlocksLocal.splice(indexOfBlock, 1, blockSelect);
        return newArrayBlocksLocal;
      });
    }

    const newArrayComponents = compByBlock(blockSelectLocal);
    setArrayOfComponents(newArrayComponents);
    setRowSelect(blockSelectLocal.columns[0]);
    setCompSelectObj(blockSelectLocal.columns[0].components[0]);
  }, [blockSelect]);

  //  Mirar bien este useEffect
  useEffect(() => {
    // setBlockSelect(arrayOfBlocks[indexBlockSelect]);
    setBlockSelectObject(arrayOfBlocks[indexBlockSelect]);
  }, [indexBlockSelect]);

  useEffect(() => {
    setBlockSelectObject(blockSelectLocal);

    // const newArrayBlocks = structuredClone(arrayOfBlocks);
    // console.log("newArrayBlocks:  ", newArrayBlocks);
    // newArrayBlocks.splice(indexBlockSelect, 1, blockSelectLocal);
    // setNewArrayLocalBlocks(newArrayBlocks);
    // setArrayOfBlocks(newArrayBlocks);
    // setFormObject(prevFormSelect => ({ ...prevFormSelect, blocks: newArrayBlocks }));
  }, [blockSelectLocal]);

  // useEffect(() => {
  //   console.log("entro aqui")
  //   setArrayOfBlocks(newArrayLocalBlocks);
  //   setFormObject(prevFormSelect => ({ ...prevFormSelect, blocks: newArrayLocalBlocks }));
  // }, [newArrayLocalBlocks]);



  // useEffect(() => {
  //   console.log("blockSelect:  ", blockSelect);
  //   setBlockSelectObject(blockSelect);
  // }, [tooRead])


  //  Functions
  const handleChange = useCallback((ev, blockKey) => {
    ev.preventDefault();
    const newValue = ev.target.value;
    setParChangeBlock(blockKey);

    setBlockSelectLocal({ ...blockSelectLocal, [blockKey]: newValue });
    // setBlockSelectObject({ ...blockSelectObject, [blockKey]: newValue });
    // setBlockSelect({ ...blockSelect, [blockKey]: newValue });
    // setBlockSelectLocal(prevBlockSelect => ({ ...prevBlockSelect, [blockKey]: newValue }));


    // const indexOfBlockInArrayOfBlocks = newArrayBlocks.findIndex(block => block === blockSelectLocal);
    // // setBlockSelectObject(prevBlockSelect => ({ ...prevBlockSelect, [blockKey]: newValue }));

    // // const newArrayBlocks = [...arrayOfBlocks];
    // // newArrayBlocks[indexOfBlockInArrayOfBlocks] = { ...blockSelect, [blockKey]: newValue };
    // // setArrayBlocksLocal(newArrayBlocks);
    // // setArrayOfBlocks(newArrayBlocks);
  }, []);

  /*
  const handleChange = useCallback((ev, blockKey) => {
    ev.preventDefault();
    const newValue = ev.target.value;

    setParChangeBlock(blockKey);
    setBlockSelect(prevBlockSelect => ({ ...prevBlockSelect, [blockKey]: newValue }));
  }, []);
  */

  const handleComponentSelect = useCallback((ev) => {
    ev.preventDefault();
    const newValue = ev.target.value;

    // const selectedComponent = arrayComponents.find(comp => comp.title_Element === newValue);
    // if (selectedComponent) {
    //   setParChangeBlock("components_Block");
    //   setValueComp(selectedComponent);
    // } else {
    //   throw new Error('Error: There is not the elements in the array of the function "handleComponentSelect"');
    // }
  }, [arrayComponents]);

  const handleRowSelect = useCallback((ev) => {
    ev.preventDefault();
    // const rowValue = 'Row: ' + ev.target.value;

    // const newRowSelectObject = blockSelectLocal.columns.find(row => row.orderColInBlock === rowValue);

    // if (newRowSelectObject) {
    //   const newIndexRowSelect = blockSelectLocal.columns.indexOf(newRowSelectObject);
    //   setIndexRowSelect(newIndexRowSelect);
    //   setRowSelect(newRowSelectObject);
    // }
  }, [blockSelectLocal.columns, setRowSelect]);

  const fieldText1 = (
    <FieldText
      title={TITLES_RCM_LEFT.BLOCK_TITLE}
      value={blockSelectObject.title_Block}
      fontSize="0.6rem"
      action={(ev) => handleChange(ev, "title_Block")}
    />
  );
  const fieldText2 = (
    <FieldText
      title={TITLES_RCM_LEFT.BLOCK_ID_TITLE}
      value={blockSelectObject.id_Block}
      fontSize="0.6rem"
      action={(ev) => handleChange(ev, "id_Block")}
    />
  );
  const fieldText3 = (
    <FieldText
      title={TITLES_RCM_LEFT.BLOCK_LABEL}
      value={blockSelect.label_Block}
      fontSize="0.6rem"
      action={(ev) => handleChange(ev, "label_Block")}
    />
  );
  const fieldTextArea = (
    <FieldTextArea
      title={TITLES_RCM_LEFT.BLOCK_DESCRIPTION}
      value={blockSelect.description_Block}
      fontSize="0.6rem"
      action={(ev) => handleChange(ev, "description_Block")}
    />
  );
  const fieldSelect1 = (
    <FieldSelect
      title={TITLES_RCM_LEFT.BLOCK_ORDER_DISPLAY}
      value={blockSelect.ordenDisplay_Block}
      fontSize="0.6rem"
      arrayValues={arrayOrders}
      action={(ev) => handleChange(ev, "ordenDisplay_Block")}
    />
  );

  return (
    <div id="accordionBlock" className="accordion container-fluid graycolor400 d-flex flex-column justify-content-center align-items-center p-1 mx-auto mb-1">
      <div className="accordion-item rounded-0 container-fluid mx-auto graycolor400 border-0" style={{ marginBottom: "0.3rem" }} >
        <HeaderHead
          idHeading="headingBlock"
          dataTarget="#collapseBlock"
          ariaControl="collapseBlock"
          fontSize="0.62rem"
          title={TITLES_RCM_LEFT.BLOCK_HEAD}
          value={blockSelectObject.title_Block}
        />

        <div id="collapseBlock" className="accordion-collapse collapse ms-0 h-auto" aria-labelledby="headingBlock" data-bs-parent="#accordionBlock">
          <div className="accordion-body p-0 mb-0">
            <div className="row d-flex justify-content-center align-items-center gap-1 m-1" >
              <div className="col-5 d-flex flex-column justify-content-start align-items-start m-0 p-1 bg-body" >
                {fieldText1}
              </div>

              <div className="col d-flex flex-column justify-content-start align-items-start m-0 p-1 bg-body" >
                {fieldText2}
              </div>
            </div>

            <div className="row d-flex justify-content-center align-items-center gap-1 m-1" >
              <div className="col-12 d-flex flex-row justify-content-start align-items-start m-0 p-1 bg-body">
                {fieldText3}
              </div>
            </div>

            <div className="row d-flex justify-content-start align-items-center gap-1 m-1">
              <div className="col-12 d-flex flex-column justify-content-start align-items-start m-0 p-1 bg-body">
                {fieldTextArea}
              </div>
            </div>

            <div className="row d-flex justify-content-start align-items-center gap-1 m-1">
              <div className="col-12 d-flex flex-column justify-content-center align-items-start m-0 p-1 bg-body" >
                <FieldSelectAdd
                  title="Rows"
                  type="rows"
                  value={blockSelect.columns}
                  fontSize="0.6rem"
                  fontSizeButton="0.64rem"
                  action={handleRowSelect}
                />
              </div>
            </div>

            <div className="row d-flex justify-content-start align-items-center gap-1 m-1">
              <div className="col h-auto d-flex flex-column justify-content-start align-items-center m-0 py-1 bg-body">
                <FieldSelectAdd
                  title={TITLES_RCM_LEFT.BLOCK_COMPONENTS}
                  type="components"
                  value={rowSelect.components}
                  fontSize="0.6rem"
                  fontSizeButton="0.62rem"
                  action={handleComponentSelect}
                />
              </div>
              <div className="col-3 d-flex flex-column justify-content-start align-items-center m-0 p-1 bg-body"
                style={{ height: "4.05rem" }} >
                {fieldSelect1}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataBlockMenu;

//  Arreglar esto
/*
  const [blockSelectLocal, setBlockSelectLocal] = useState(blockSelect);
  const [indexOfBlockInArrayOfBlocks, setIndexOfBlockInArrayOfBlocks] = useState(0);
  const [arrayBlocksLocal, setArrayBlocksLocal] = useState(arrayOfBlocks);
  const [compSelectObj, setCompSelectObj] = useState({}); // Initial value can be an empty object
  const [indexRowSelect, setIndexRowSelect] = useState(0);
  const [arrayOrders, setArrayOrders] = useState([]);
  const [parChangeBlock, setParChangeBlock] = useState("");
  const [arrayComponents, setArrayOfComponents] = useState([]);

  // const [state, setState] = useState({
  //   blockSelectLocal: blockSelect,
  //   indexOfBlockInArrayOfBlocks: 0,
  //   arrayBlocksLocal: arrayOfBlocks,
  //   compSelectObj: {},
  //   indexRowSelect: 0,
  //   arrayOrders: [],
  //   parChangeBlock: "",
  //   arrayComponents: [],
  // });

  useEffect(() => {
    const indexOfBlock = arrayOfBlocks.findIndex(block => block === blockSelectLocal);
    setIndexOfBlockInArrayOfBlocks(indexOfBlock);

    if (indexOfBlock !== -1) {
      setArrayBlocksLocal(prevArrayBlocksLocal => {
        const newArrayBlocksLocal = [...prevArrayBlocksLocal];
        newArrayBlocksLocal.splice(indexOfBlock, 1, blockSelectLocal);
        return newArrayBlocksLocal;
      });
    }

    const newArrayComponents = compByBlock(blockSelectLocal);
    setArrayOfComponents(newArrayComponents);
    setRowSelect(blockSelectLocal.columns[0]);
    setCompSelectObj(blockSelectLocal.columns[0].components[0]);

    setBlockSelect(blockSelectLocal);
    // setFormObject({ ...formObject, blocks: arrayBlocksLocal });
  }, [blockSelectLocal]);

  useEffect(() => {
    setBlockSelectObject(blockSelect);
  }, [tooRead])


  const handleChange = useCallback((ev, blockKey) => {
    ev.preventDefault();
    const newValue = ev.target.value;

    setParChangeBlock(blockKey);
    setBlockSelectLocal(prevBlockSelect => ({ ...prevBlockSelect, [blockKey]: newValue }));
    // setBlockSelectObject(prevBlockSelect => ({ ...prevBlockSelect, [blockKey]: newValue }));
    //const newArrayBlocks = arrayBlocksLocal.splice(indexOfBlockInArrayOfBlocks, 1, { ...blockSelect, [blockKey]: newValue });

    // const newArrayBlocks = [...arrayOfBlocks];
    // newArrayBlocks[indexOfBlockInArrayOfBlocks] = { ...blockSelect, [blockKey]: newValue };
    // setArrayBlocksLocal(newArrayBlocks);
    // setArrayOfBlocks(newArrayBlocks);
  }, []);

  const handleComponentSelect = useCallback((ev) => {
    ev.preventDefault();
    const newValue = ev.target.value;

    const selectedComponent = arrayComponents.find(comp => comp.title_Element === newValue);
    if (selectedComponent) {
      setParChangeBlock("components_Block");
      setValueComp(selectedComponent);
    } else {
      throw new Error('Error: There is not the elements in the array of the function "handleComponentSelect"');
    }
  }, [arrayComponents]);

  const handleRowSelect = useCallback((ev) => {
    ev.preventDefault();
    const rowValue = 'Row: ' + ev.target.value;

    const newRowSelectObject = blockSelectLocal.columns.find(row => row.orderColInBlock === rowValue);

    if (newRowSelectObject) {
      const newIndexRowSelect = blockSelectLocal.columns.indexOf(newRowSelectObject);
      setIndexRowSelect(newIndexRowSelect);
      setRowSelect(newRowSelectObject);
    }
  }, [blockSelectLocal.columns, setRowSelect]);


*/
























/*
// useEffect(() => {
  //   const indexOfBlock = arrayOfBlocks.findIndex(block => block === blockSelect);
  //   setIndexOfBlockInArrayOfBlocks(indexOfBlock);

  //   // if (indexOfBlock !== -1) {
  //   //   setArrayBlocksLocal(prevArrayBlocksLocal => {
  //   //     const newArrayBlocksLocal = [...prevArrayBlocksLocal];
  //   //     newArrayBlocksLocal.splice(indexOfBlock, 1, blockSelect);
  //   //     return newArrayBlocksLocal;
  //   //   });
  //   // } else {
  //   //   setArrayBlocksLocal(prevArrayBlocksLocal => {
  //   //     const newArrayBlocksLocal = [...prevArrayBlocksLocal];
  //   //     newArrayBlocksLocal.splice(indexOfBlock, 0, blockSelect);
  //   //     return newArrayBlocksLocal;
  //   //   });
  //   // }

  //   const newArrayComponents = compByBlock(blockSelect);
  //   setArrayOfComponents(newArrayComponents);
  //   setRowSelect(blockSelect.columns[0]);
  //   setCompSelectObj(blockSelect.columns[0].components[0]);

  //   // setFormObject({ ...formObject, blocks: arrayBlocksLocal });
  // }, [blockSelect, rowSelect, valueComp]);

  // useEffect(() => {
  //   setBlockSelectObject(blockSelectLocal);

  // }, [blockSelectLocal])

  // useEffect(() => {
  //   setBlockSelect(blockSelectLocal);
  //   const newIndexBlockSelect = formObject.blocks.findIndex(block => block === blockSelectLocal);
  //   setIndexOfBlockInArrayOfBlocks(newIndexBlockSelect);

  //   // const newArrayBlocks = [...arrayOfBlocks];
  //   // newArrayBlocks.splice(newIndexBlockSelect, 1, blockSelect);
  //   // setArrayOfBlocks(newArrayBlocks);

  //   const newArrayComp = compByBlock(blockSelectLocal);
  //   setArrayOfComponents(newArrayComp);
  //   setRowSelect(blockSelectLocal.columns[0]);
  //   setCompSelectObj(blockSelectLocal.columns[0].components[0]);

  //   setFormObject({ ...formObject, blocks: arrayBlocksLocal });
  // }, [blockSelectLocal]);

  // useEffect(() => {
  //   console.log("arrayBlocksLocal:  ", arrayBlocksLocal);
  //   // setFormObject({ ...formObject, blocks: arrayBlocksLocal });
  // }, [arrayBlocksLocal]);

  // useEffect(() => {
  //   if (indexOfBlockInArrayOfBlocks !== -1 && formObject.blocks.length > 1) {
  //     const newArrayBlocks = arrayOfBlocks.splice(indexOfBlockInArrayOfBlocks, 1, blockSelect);
  //     setArrayOfBlocks(newArrayBlocks);

  //     setFormObject({ ...formObject, blocks: arrayOfBlocks });
  //   }
  // }, [indexOfBlockInArrayOfBlocks]);

*/

/*
  // useEffect(() => {
  //   setBlockSelectObject(blockSelect);


  //   // const newIndexBlockSelect = arrayBlocks.findIndex(block => block === blockSelect);
  //   // const newArrayBlocks = arrayBlocks.splice(newIndexBlockSelect, 0, blockSelect);
  //   // setArrayBlocks(newArrayBlocks);

  //   const newArrayComp = compByBlock(blockSelect);  
  //   setArrayOfComponents(newArrayComp);
  //   setRowSelect(blockSelect.columns[0]);
  //   setCompSelectObj(blockSelect.columns[0].components[0]);

  // }, [blockSelect]);
*/

/*
  // useEffect(() => {
  //   if (theContext.tooRead) {
  //     const newArray = valueArrays.map(value => {
  //       if (value.id_Block === blockSelect.id_Block) {
  //         return {
  //           ...value,
  //           title_Block: parChangeBlock === "title_Block" ? blockSelect.title_Block : value.title_Block,
  //           id_Block: parChangeBlock === "id_Block" ? blockSelect.id_Block : value.id_Block,
  //           label_Block: parChangeBlock === "label_Block" ? blockSelect.label_Block : value.label_Block,
  //           description_Block: parChangeBlock === "description_Block" ? blockSelect.description_Block : value.description_Block,
  //           ordenDisplay_Block: parChangeBlock === "ordenDisplay_Block" ? blockSelect.ordenDisplay_Block : value.ordenDisplay_Block,
  //           components: parChangeBlock === "components_Block" ? blockSelect.columns : value.components
  //         };
  //       }
  //       return value;
  //     });

  //     setValueArrays(newArray);
  //     setArrayBlocks(newArray);
  //     setFormSelect(prevFormSelect => ({ ...prevFormSelect, blocks: newArray }));
  //     cambioArray();
  //   }
  // }, [theContext.tooRead, parChangeBlock]);


  // const cambioArray = useCallback(() => {
  //   const newArray = valueArrays.map(value => {
  //     if (value.id_Block === blockSelect.id_Block) {
  //       return {
  //         ...value,
  //         title_Block: parChangeBlock === "title_Block" ? blockSelect.title_Block : value.title_Block,
  //         id_Block: parChangeBlock === "id_Block" ? blockSelect.id_Block : value.id_Block,
  //         label_Block: parChangeBlock === "label_Block" ? blockSelect.label_Block : value.label_Block,
  //         description_Block: parChangeBlock === "description_Block" ? blockSelect.description_Block : value.description_Block,
  //         ordenDisplay_Block: parChangeBlock === "ordenDisplay_Block" ? blockSelect.ordenDisplay_Block : value.ordenDisplay_Block,
  //         components: parChangeBlock === "components_Block" ? blockSelect.columns : value.components
  //       };
  //     }
  //     return value;
  //   });

  //   setValueArrays(newArray);
  //   setArrayBlocks(newArray);
  //   setFormSelect(prevFormSelect => ({ ...prevFormSelect, blocks: newArray }));
  //   // setFormSelect(prevFormSelect => {
  //   //   prevFormSelect.blocks = newArray;
  //   //   return prevFormSelect;
  //   // });
  // }, [parChangeBlock, blockSelect, valueArrays, setFormObject, setArrayBlocks]);

  //  Move static elements outside the component's return statement => Define static JSX elements outside the return statement
*/

/*
    This code snippet defines a React functional component called DataBlockMenu. 
    
    It takes in several props and uses React hooks like useState, useEffect, useContext, and useCallback 
    to manage state and perform side effects.

    The component renders a form-like structure with various input fields and selects. The values of these 
    fields are controlled by the component's state variables, which are updated when the user interacts with 
    the form elements.

    The component also contains several event handlers that update the state variables based on user input.

    Overall, this component is responsible for rendering a menu for managing data blocks and their properties.
*/

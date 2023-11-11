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
  const { formObject, setFormObject, arrayOfBlocks, setArrayOfBlocks, blockSelectObject, setBlockSelectObject,
    setArrayOfRowsCompsObject, setArrayOfComponetsObject, tooRead } = useContext(MyContext);

  //  State variables
  const [blockSelectLocal, setBlockSelectLocal] = useState(blockSelect);
  const [indexBlockSelect, setIndexBlockSelect] = useState(0);
  const [parChangeBlock, setParChangeBlock] = useState("");
  const [newArrayLocalBlocks, setNewArrayLocalBlocks] = useState(formObject.blocks);

  const [indexRowSelect, setIndexRowSelect] = useState(0);
  const [compSelectObj, setCompSelectObj] = useState({});
  const [arrayOrders, setArrayOrders] = useState([]);
  const [orderOfComponent, setOrderOfComponent] = useState(0);
  const [arrayCompsByRow, setArrayOfCompsByRow] = useState([]);
  const [arrayComponentsLocal, setArrayComponentsLocal] = useState([]);

  useEffect(() => {
    setBlockSelectLocal(blockSelect);
    setParChangeBlock("");
    const newIndexSelect = formObject.blocks.findIndex(block => block.id_Block === blockSelect.id_Block);
    setIndexBlockSelect(newIndexSelect);

    setNewArrayLocalBlocks(formObject.blocks);
  }, []);

  useEffect(() => {
    setBlockSelect(arrayOfBlocks[indexBlockSelect]);
    setBlockSelectObject(arrayOfBlocks[indexBlockSelect]);
  }, [indexBlockSelect]);

  // useEffect(() => {
  //   setFormObject(prevFormSelect => ({ ...prevFormSelect, blocks: newArrayLocalBlocks }));
  // }, [newArrayLocalBlocks]);

  useEffect(() => {
    setRowSelect(blockSelect.columns[0]);
    setArrayOfCompsByRow(blockSelect.columns[0].components);
    setCompSelectObj(blockSelect.columns[0].components[0]);

    const newArrayComp = compByBlock(blockSelect);  //  <<==  All components of the block
    setArrayComponentsLocal(newArrayComp);
    setArrayOfComponetsObject(newArrayComp);
    setOrderOfComponent(blockSelect.columns[0].components[0].orderInBlock);

    setArrayOrders(newArrayComp.map((_, index) => index));

    // setRowSelect(blockSelect.columns[0]);
    setArrayOfCompsByRow(blockSelect.columns[0].components);
    setCompSelectObj(blockSelect.columns[0].components[0]);
  }, [formObject.blocks, blockSelect]);

  //  Functions that should be called when the block is selected.
  const handleChange = (ev, blockKey) => {
    ev.preventDefault();
    const { value: newValue } = ev.target;
    setParChangeBlock(blockKey);

    // 1.- Update block. Update blockSelectLocal, blockSelect, and blockSelectObject using a single spread operator
    const updatedBlockSelectLocal = { ...blockSelect, [blockKey]: newValue };
    setBlockSelectLocal(updatedBlockSelectLocal);
    setBlockSelect(updatedBlockSelectLocal);
    setBlockSelectObject(updatedBlockSelectLocal);

    // 2.- Update array of blocks. Update the array of blocks by directly modifying the block at the index
    // const newArrayBlocksArray = structuredClone(newArrayLocalBlocks);
    const indexBlockSelect = formObject.blocks.findIndex(block => block.ordenDisplay_Block === blockSelect.ordenDisplay_Block);

    if (indexBlockSelect === -1) {
      throw new Error("Block not found");
    }
    const updatedArrayBlocks = formObject.blocks.map((block, index) => {
      if (index === indexBlockSelect) {
        return updatedBlockSelectLocal;
      } else {
        return block;
      }
    });
    setIndexBlockSelect(indexBlockSelect);
    setNewArrayLocalBlocks(updatedArrayBlocks);
    setArrayOfBlocks(updatedArrayBlocks);

    // 4.- Update formObject
    // setFormObject(prevFormObject => ({
    //   ...prevFormObject,
    //   blocks: updatedArrayBlocks
    // }));
  };



  /*
    const handleChange = useCallback((ev, blockKey) => {
      ev.preventDefault();
      const { value: newValue } = ev.target;
      setParChangeBlock(blockKey);
  
      // 1.- Update block. Update blockSelectLocal, blockSelect, and blockSelectObject using a single spread operator
      // const updatedBlockSelectLocal = { ...blockSelect, [blockKey]: newValue };
      // setBlockSelectLocal(updatedBlockSelectLocal);
      // setBlockSelect(updatedBlockSelectLocal);
      // setBlockSelectObject(updatedBlockSelectLocal);
  
      // 2.- Update array of blocks. Update the array of blocks by directly modifying the block at the index
      // const newArrayBlocksArray = structuredClone(arrayOfBlocks);
      // const indexBlockSelect = newArrayBlocksArray.findIndex(block => block.ordenDisplay_Block === blockSelect.ordenDisplay_Block);
      // if (indexBlockSelect === -1) {
      //   throw new Error("Block not found");
      // }
      // const updatedArrayBlocks = arrayOfBlocks.map((block, index) => (index === indexBlockSelect ? updatedBlockSelectLocal : block));
      // console.log('newArrayBlocksArray:  ', newArrayBlocksArray);
      // console.log('En update array de blocks II, indexBlockSelect:  ', indexBlockSelect);
      // updatedArrayBlocks[indexBlockSelect] = updatedBlockSelectLocal;
      // setIndexBlockSelect(indexBlockSelect);
      // setNewArrayLocalBlocks(updatedArrayBlocks);
      // setArrayOfBlocks(updatedArrayBlocks);
  
      // console.log('En handleChange: updatedBlockSelectLocal:  ', updatedBlockSelectLocal);
  
      // 3.- Update array of componets of block select local
      // const updateArrayComponents = newArrayBlocksArray.columns.map(col => col.components.map(comp => comp));
      // setArrayOfComponetsObject(updateArrayComponents);
  
  
      // 4.- Update formObject
      // setFormObject(prevFormObject => ({
      //   ...prevFormObject,
      //   blocks: updatedArrayBlocks
      // }));
    }, [setParChangeBlock, blockSelect, setNewArrayLocalBlocks, setFormObject]);
  */



  // useEffect(() => {
  //   setNewArrayLocalBlocks(formObject.blocks);
  // }, [formObject.blocks])

  /*
    //  UseEffect is used internally by the component implementation to determine whether the component 
    //  should be used for the effect
    // useEffect(() => {
    //   // const indexBlockSelect = formObject.blocks.findIndex(block => block.title_Block === blockSelect.title_Block);
    //   // console.log('indexBlockSelect', indexBlockSelect);
    //   // setIndexBlockSelect(indexBlockSelect);
    //   setNewArrayLocalBlocks(formObject.blocks);
    //   setIndexBlockSelect(0);
    // }, []);
  
    // useEffect(() => {
    //   setNewArrayLocalBlocks(formObject.blocks);
    // }, [formObject]);
  
    // useEffect(() => {
    //   setBlockSelectLocal(blockSelect);
    //   setBlockSelectObject(blockSelect);
  
    //   setParChangeBlock("");
  
    //   setArrayOfRowsCompsObject(blockSelect.columns);
    //   console.log('En useEffect: blockSelect.columns:  ', blockSelect.columns);
  
    //   setRowSelect(blockSelect.columns[0]);
    //   setArrayOfCompsByRow(blockSelect.columns[0].components);
    //   setCompSelectObj(blockSelect.columns[0].components[0]);
  
    //   const newArrayComp = compByBlock(blockSelect);  //  <<==  All components of the block
    //   setArrayComponentsLocal(newArrayComp);
    //   setArrayOfComponetsObject(newArrayComp);
    //   setOrderOfComponent(blockSelect.columns[0].components[0].orderInBlock);
  
    //   setArrayOrders(newArrayComp.map((_, index) => index));
    // }, [blockSelect]);
  
    // // useEffect(() => {
    // //   // console.log('En useEffect: arrayOfBlocks:  ', arrayOfBlocks);
    // //   setFormObject({ ...formObject, blocks: arrayOfBlocks });
    // // }, [arrayOfBlocks])
  */



  // const handleChange = (ev, blockKey) => {

  //   // 2.- Update array of blocks. Update the array of blocks by directly modifying the block at the index


  //   // 3.- Update array of componets of block select local
  //   const updateArrayComponents = updatedBlockSelectLocal.columns.map(col => col.components.map(comp => comp));
  //   setArrayOfComponetsObject(updateArrayComponents);

  //   // 4.- Update formObject
  //   //setFormObject({ ...formObject, blocks: newArrayBlocks });
  // }




  const handleRowSelect = useCallback((ev) => {
    ev.preventDefault();
    const { value: rowValue } = ev.target;

    const newRowSelectObject = blockSelect.columns.find(row => "Row: " + row.orderColInBlock === rowValue);

    if (newRowSelectObject) {
      const newIndexRowSelect = blockSelectObject.columns.indexOf(newRowSelectObject);

      if (newIndexRowSelect > -1) {
        const { orderColInBlock, components } = newRowSelectObject;

        setIndexRowSelect(orderColInBlock);
        setRowSelect(orderColInBlock);

        setArrayComponentsLocal(components);
        //setArrayOfRowsCompsObject

        setArrayOfComponetsObject(compByBlock(blockSelect));
      } else {
        throw new Error("Error: The newIndexRowSelect is: " + newIndexRowSelect);
      }
    } else {
      throw new Error('Error: There are no elements in the array of the function "handleRowSelect"');
    }
  }, [blockSelect, blockSelectObject, setRowSelect, setArrayComponentsLocal, setIndexRowSelect, setArrayOfRowsCompsObject, setArrayOfComponetsObject, compByBlock]);

  const handleComponentSelect = useCallback((ev) => {
    ev.preventDefault();
    const { value: newValue } = ev.target;

    const selectedComponent = arrayComponentsLocal.find(comp => comp.title_Element === newValue);
    if (!selectedComponent) {
      throw new Error(`Error: The selected component with value "${newValue}" does not exist in the array of components.`);
    }

    setParChangeBlock("components_Block");
    setValueComp(selectedComponent);
    setCompSelectObj(selectedComponent);
    setOrderOfComponent(selectedComponent.orderInBlock);
  }, [arrayComponentsLocal]);

  //  Fields of DataBlock
  const headerMenuBlock = (
    <HeaderHead
      idHeading="headingBlock"
      dataTarget="#collapseBlock"
      ariaControl="collapseBlock"
      fontSize="0.62rem"
      title={TITLES_RCM_LEFT.BLOCK_HEAD}
      value={blockSelect.title_Block}
    />
  );
  const fieldTextBlockTitle = (
    <FieldText
      title={TITLES_RCM_LEFT.BLOCK_TITLE}
      value={blockSelect.title_Block}
      fontSize="0.6rem"
      action={(ev) => handleChange(ev, "title_Block")}
    />
  );
  const fieldTextBlockID = (
    <FieldText
      title={TITLES_RCM_LEFT.BLOCK_ID_TITLE}
      value={blockSelect.id_Block}
      fontSize="0.6rem"
      action={(ev) => handleChange(ev, "id_Block")}
    />
  );
  const fieldTextBlockLabel = (
    <FieldText
      title={TITLES_RCM_LEFT.BLOCK_LABEL}
      value={blockSelect.label_Block}
      fontSize="0.6rem"
      action={(ev) => handleChange(ev, "label_Block")}
    />
  );
  const fieldTextAreaBlockDescription = (
    <FieldTextArea
      title={TITLES_RCM_LEFT.BLOCK_DESCRIPTION}
      value={blockSelect.description_Block}
      fontSize="0.6rem"
      action={(ev) => handleChange(ev, "description_Block")}
    />
  );
  const fieldSelectRowsAdd = (
    <FieldSelectAdd
      title="Rows"
      type="rows"
      value={blockSelect.columns}
      fontSize="0.6rem"
      fontSizeButton="0.64rem"
      action={handleRowSelect}
    />
  );
  const fieldSelectBlockComponents = (
    <FieldSelectAdd
      title={TITLES_RCM_LEFT.BLOCK_COMPONENTS}
      type="components"
      value={arrayComponentsLocal}
      fontSize="0.6rem"
      fontSizeButton="0.62rem"
      action={handleComponentSelect}
    />
  );
  const fieldSelectBlockOrders = () => {
    if (tooRead) {
      return (
        <FieldText
          title={TITLES_RCM_LEFT.BLOCK_TITLE}
          value={blockSelect.orderInBlock}
          fontSize="0.6rem"
          action={(ev) => handleChange(ev, "title_Block")}
        />
      );
    } else {
      return (
        <FieldSelect
          title={TITLES_RCM_LEFT.BLOCK_ORDER_DISPLAY}
          value={blockSelect.ordenDisplay_Block}
          fontSize="0.6rem"
          arrayValues={arrayOrders}
          action={(ev) => handleChange(ev, "ordenDisplay_Block")}
        />
      );
    }
  };

  return (
    <div id="accordionBlock" className="accordion container-fluid graycolor400 d-flex flex-column justify-content-center align-items-center p-1 mx-auto mb-1">
      <div className="accordion-item rounded-0 container-fluid mx-auto graycolor400 border-0" style={{ marginBottom: "0.3rem" }} >
        {headerMenuBlock}
        <div id="collapseBlock" className="accordion-collapse collapse ms-0 h-auto" aria-labelledby="headingBlock" data-bs-parent="#accordionBlock">
          <div className="accordion-body p-0 mb-0">
            <div className="row d-flex justify-content-center align-items-center gap-1 m-1" >
              <div className="col-5 d-flex flex-column justify-content-start align-items-start m-0 p-1 bg-body" >
                {fieldTextBlockTitle}
              </div>

              <div className="col d-flex flex-column justify-content-start align-items-start m-0 p-1 bg-body" >
                {fieldTextBlockID}
              </div>
            </div>

            <div className="row d-flex justify-content-center align-items-center gap-1 m-1" >
              <div className="col-12 d-flex flex-row justify-content-start align-items-start m-0 p-1 bg-body">
                {fieldTextBlockLabel}
              </div>
            </div>

            <div className="row d-flex justify-content-start align-items-center gap-1 m-1">
              <div className="col-12 d-flex flex-column justify-content-start align-items-start m-0 p-1 bg-body">
                {fieldTextAreaBlockDescription}
              </div>
            </div>

            <div className="row d-flex justify-content-start align-items-center gap-1 m-1">
              <div className="col-12 d-flex flex-column justify-content-center align-items-start m-0 p-1 bg-body" >
                {fieldSelectRowsAdd}
              </div>
            </div>

            <div className="row d-flex justify-content-start align-items-center gap-1 m-1">
              <div className="col h-auto d-flex flex-column justify-content-start align-items-center m-0 py-1 bg-body">
                {fieldSelectBlockComponents}
              </div>
              <div className="col-3 d-flex flex-column justify-content-start align-items-center m-0 p-1 bg-body"
                style={{ height: "4.05rem" }} >
                {fieldSelectBlockOrders()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataBlockMenu;


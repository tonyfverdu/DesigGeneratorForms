import { useState, useEffect, useContext } from 'react';
import { MyContext } from '../../context/TheContext.jsx';
import HeaderMenuDesig from './MenuLeft/HeaderMenuDesig.jsx';
import DataFormMenu from './MenuLeft/DataFormMenu.jsx';
import DataBlockMenu from './MenuLeft/DataBlockMenu.jsx';
import ShowElements from './ShowElements.jsx';
import IconsElem from '../icons/IconsElem.jsx';
import DataCompMenu from './MenuLeft/DataCompMenu.jsx';
import '../../sass/componentSass/TeilLeft/InfoOfElement.scss';

function InfoOfElement() {
  const { formObject, setBlockSelectObject, tooRead } = useContext(MyContext);

  //  VARIABLES DE ESTADO LOCALES PARA LOS DATOS DEL FORMULARIO
  const [formMenuForm, setFormMenuForm] = useState({});

  const [arrayBlocksSelect, setArrayBlocksSelect] = useState([]);
  const [blockSelectIndex, setBlockSelectIndex] = useState(0);
  const [blockSelect, setBlockSelect] = useState(formObject.blocks[0]);

  const [arrayColumnsSelect, setArrayColumnsSelect] = useState([]);
  const [columnSelect, setColumnSelect] = useState({});

  const [componentSelectIndex, setComponentSelectIndex] = useState(0);
  const [arrayCompsSelect, setArrayCompsSelect] = useState([]);
  const [componentSelect, setComponentSelect] = useState({})  //  <<===   User-selected Component

  useEffect(() => {
    setFormMenuForm(formObject);
    setArrayBlocksSelect(formObject.blocks);
    setBlockSelectIndex(0);
    setBlockSelect(formObject.blocks[0]);

    setArrayColumnsSelect(formObject.blocks[0].columns);
    setColumnSelect(formObject.blocks[0].columns[0]);

    setComponentSelectIndex(0);
    setArrayCompsSelect(formObject.blocks[0].columns.map(col => col.components.map(comp => comp)));
    setComponentSelect(formObject.blocks[0].columns[0].components[0]);

    setBlockSelectObject(formObject.blocks[0]);  //  <<==  New !!
  }, [formObject]);

  // useEffect(() => {
  //   console.log("formMenuForm: ", formMenuForm);
  // setArrayColumnsSelect(formMenuForm.blocks[0].columns);
  // setColumnSelect(formMenuForm.blocks[0].columns[0]);

  // setComponentSelectIndex(0);
  // setArrayCompsSelect(formMenuForm.blocks[0].columns.map(col => col.components.map(comp => comp)));
  // setComponentSelect(formMenuForm.blocks[0].columns[0].components[0]);
  // }, [formMenuForm]);


  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center m-0 mx-auto p-0">
      <div className="container-fluid d-flex flex-column justify-content-center align-items-center mx-auto bg-secondary rounded-top">
        <HeaderMenuDesig />
      </div>

      {/*   ****    FORM DATA SHOW    **** */}
      <DataFormMenu
        setBlockSelect={setBlockSelect}
      />

      {/* ****      BLOCK DATA SHOW   **** */}
      <DataBlockMenu
        blockSelect={blockSelect}
        setBlockSelect={setBlockSelect}

        arrayBlocks={arrayBlocksSelect}
        setArrayBlocks={setArrayBlocksSelect}

        rowSelect={columnSelect}
        setRowSelect={setColumnSelect}

        valueComp={componentSelect}
        setValueComp={setComponentSelect}
      />

      {/* ****     ELEMENT SHOW:     **** */}
      <ShowElements
        valueComp={componentSelect}
      />

      {/* ****     Icons - Components    **** */}
      {
        !tooRead &&
        <div className="row p-1">
          <IconsElem
            height={"0.9"}
            valueComp={componentSelect}
            setValueComp={setComponentSelect}
          />
        </div>
      }

      {/* ****     COMPONENT DATA SHOW   **** */}
      <DataCompMenu
        // formSelect={formLocalSelect}
        // setFormSelect={setFormLocalSelect}

        // arrayBlocks={valueArrays}
        // setArrayBlocks={setValueArrays}

        // blockSelect={blockSelect}
        // setBlockSelect={setBlockSelect}

        // valueArrays={valueArrays}
        // setValueArrays={setValueArrays}
        // valueBlock={valueBlock}
        // setValueBlock={setValueBlock}

        valueComp={componentSelect}
        setValueComp={setComponentSelect}
      />
    </div>
  );
}

export default InfoOfElement;



/*
function InfoOfElement() {
  const { formObject, setFormObject, setBlockSelectObject, arrayOfBlocks, setArrayOfBlocks, tooRead } = useContext(MyContext);

  const [formMenuForm, setFormMenuForm] = useState({});
  const [blockSelectIndex, setBlockSelectIndex] = useState(0);
  const [blockSelect, setBlockSelect] = useState(formObject.blocks[0]);

  const [arrayBlocksLocal, setArrayBlocksLocal] = useState(formObject.blocks);
  const [rowSelect, setRowSelect] = useState(formObject.blocks[0].columns[0]);
  // const [rowSelect, setRowSelect] = useState({});
  const [componentSelectIndex, setComponentSelectIndex] = useState(0);

  const [arrayColumnsSelect, setArrayColumnsSelect] = useState([]);
  const [arrayCompsSelect, setArrayCompsSelect] = useState([]);
  const [componentSelect, setComponentSelect] = useState({})  //  <<===   User-selected Component


  useEffect(() => {
    setFormMenuForm(formObject);
    setArrayBlocksLocal(formObject.blocks);
    setBlockSelectIndex(0);
    setBlockSelect(formObject.blocks[0]);

    setBlockSelectObject(formObject.blocks[0]);  //  <<==  New !!

    setRowSelect(formObject.blocks[0].columns[0]);
    // setComponentSelectIndex(0);
    // setArrayColumnsSelect(formObject.blocks[0].columns);
    // setArrayCompsSelect(formObject.blocks[0].columns.map(col => col.components.map(comp => comp)));
    // setComponentSelect(formObject.blocks[0].columns[0].components[0]);
  }, [formObject]);

  //  Change BlockSelect
  const [indexBlockSelect, setIndexBlockSelect] = useState(0);
  const findIndexBlockSelect = (parArrayBlocks, parBlockSelect) => {
    if (!Array.isArray(parArrayBlocks)) {
      console.error('Error: The argument of the function "findIndexBlockSelect" must be an array!!');
      return null;
    }

    const indexBlockSelect = parArrayBlocks.findIndex(block => block.id_Block === parBlockSelect.id_Block);
    if (indexBlockSelect <= -1) {
      console.error('Error: There are no elements in the array of the function "findIndexBlockSelect"');
      return null;
    }

    return indexBlockSelect;
  };

  ////////////////////////////////////////////////  GESTION DE VARIABLES DE ESTADO LOCALES DEL FORMULARIO   ///////////////////////////
  const [valueArrays, setValueArrays] = useState(formMenuForm.blocks);
  const [valueBlock, setValueBlock] = useState(blockSelect);
  const [valueComp, setValueComp] = useState(componentSelect);

  useEffect(() => {
    setValueBlock(blockSelect);
    setValueComp(componentSelect);
  }, [valueArrays, valueBlock, componentSelect]);


  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center m-0 mx-auto p-0">
      <div className="container-fluid d-flex flex-column justify-content-center align-items-center mx-auto bg-secondary rounded-top">
        <HeaderMenuDesig />
      </div>

      <DataFormMenu setBlockSelect={setBlockSelect} />

      {/* ****      BLOCK DATA SHOW   **** * /}
      <DataBlockMenu
        blockSelect={blockSelect}
        setBlockSelect={setBlockSelect}

        arrayBlocks={valueArrays}
        setArrayBlocks={setValueArrays}

        rowSelect={rowSelect}
        setRowSelect={setRowSelect}

        valueArrays={valueArrays}
        setValueArrays={setValueArrays}

        valueComp={valueComp}
        setValueComp={setValueComp}
      />

      {/* <ShowElements
        type_Element={valueComp.type_Element}
        valueComp={valueComp}
      /> * /}

      {/* {
        !tooRead &&
        <div className="row p-1">
          <IconsElem
            height={"0.9"}
            valueComp={valueComp}
            setValueComp={setValueComp}
          />
        </div>
      } * /}

      {/* <DataCompMenu
        valueComp={valueComp}
        setValueComp={setValueComp}
      /> * /}
    </div>
  );
}
*/























/*

 // useEffect(() => {
  //   const indexBlockSelect = findIndexBlockSelect(formMenuForm.blocks, formMenuForm.blocks[blockSelectIndex]);
  //   if (indexBlockSelect !== null) {
  //     setComponentSelectIndex(indexBlockSelect);
  //   }
  // }, [blockSelectIndex]);

//  blockSelect, setBlockSelect
// function InfoOfElement({ formSelectLocal, setFormSelectLocal }) {

      {/*   ****    FORM DATA SHOW    **** * /}
      <DataFormMenu
        // formSelectLocal={formObject}
        // setFormSelectLocal={setFormObject}
        // formSelectLocal={formSelectLocal}
        // setFormSelectLocal={setFormSelectLocal}
        // blockSelect={blockSelect}
        setBlockSelect={setBlockSelect}
      // componentSelect={formSelectLocal.blocks[blockSelectIndex].columns[componentSelectIndex].components[componentSelectIndex]}
      // setComponentSelectIndex={setComponentSelectIndex}
      />

            {/* ****      BLOCK DATA SHOW   **** * /}
            <DataBlockMenu
            setFormSelect={setFormObject}
    
            arrayBlocks={valueArrays}
            setArrayBlocks={setValueArrays}
            blockSelect={blockSelect}
            setBlockSelect={setBlockSelect}
    
            rowSelect={rowSelect}
            setRowSelect={setRowSelect}
    
            valueArrays={valueArrays}
            setValueArrays={setValueArrays}
            valueComp={valueComp}
            setValueComp={setValueComp}
          />



      {/* ****     COMPONENT DATA SHOW   **** * /}
      <DataCompMenu
        // formSelect={formLocalSelect}
        // setFormSelect={setFormLocalSelect}

        // arrayBlocks={valueArrays}
        // setArrayBlocks={setValueArrays}

        // blockSelect={blockSelect}
        // setBlockSelect={setBlockSelect}

        // valueArrays={valueArrays}
        // setValueArrays={setValueArrays}
        // valueBlock={valueBlock}
        // setValueBlock={setValueBlock}

        valueComp={valueComp}
        setValueComp={setValueComp}
      />
*/




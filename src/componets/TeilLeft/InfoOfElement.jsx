import { useState, useEffect, useContext } from 'react';
import { MyContext } from '../../context/TheContext.jsx';
import HeaderMenuDesig from './MenuLeft/HeaderMenuDesig.jsx';
import DataFormMenu from './MenuLeft/DataFormMenu.jsx';
import DataBlockMenu from './MenuLeft/DataBlockMenu.jsx';
import ShowElements from './ShowElements.jsx';
import IconsElem from '../icons/IconsElem.jsx';
import DataCompMenu from './MenuLeft/DataCompMenu.jsx';
import '../../sass/componentSass/TeilLeft/InfoOfElement.scss'

function InfoOfElement({ formInput }) {
  const theContext = useContext(MyContext);

  const [formLocalSelect, setFormLocalSelect] = useState(formInput);
  const [blockSelectIndex, setBlockSelectIndex] = useState(0);
  const [blockSelect, setBlockSelect] = useState(formLocalSelect.blocks[blockSelectIndex]);
  const [rowSelect, setRowSelect] = useState(blockSelect.columns[0]);
  const [componentSelectIndex, setComponentSelectIndex] = useState(0);

  const [arrayColumnsSelect, setArrayColumnsSelect] = useState(blockSelect.columns)
  const [arrayCompsSelect, setArrayCompsSelect] = useState(arrayColumnsSelect.map(col => col.components.map(comp => comp)))
  const [componentSelect, setComponentSelect] = useState(arrayCompsSelect[0][0])  //  <<===   User-selected Component

  useEffect(() => {
    setFormLocalSelect(formInput);
    setBlockSelectIndex(0);
    setComponentSelectIndex(0);
  }, [formInput]);

  //  Change BlockSelect
  const [indexBlockSelect, setIndexBlockSelect] = useState(0)
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

  useEffect(() => {
    const indexBlockSelect = findIndexBlockSelect(formInput.blocks, formInput.blocks[blockSelectIndex]);
    if (indexBlockSelect !== null) {
      setComponentSelectIndex(indexBlockSelect);
    }
  }, [blockSelectIndex]);

  ////////////////////////////////////////////////  GESTION DE VARIABLES DE ESTADO LOCALES DEL FORMULARIO   ///////////////////////////
  const [valueArrays, setValueArrays] = useState(formInput.blocks);
  const [valueBlock, setValueBlock] = useState(blockSelect);
  const [valueComp, setValueComp] = useState(componentSelect);

  useEffect(() => { 
    setValueBlock(blockSelect);
    setValueComp(componentSelect);
  }, [valueArrays, valueBlock, valueComp]);


  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center m-0 mx-auto p-0">
      <div className="container-fluid d-flex flex-column justify-content-center align-items-center mx-auto bg-secondary rounded-top">
        <HeaderMenuDesig />
      </div>

      {/*   ****    FORM DATA SHOW    **** */}
      <DataFormMenu
        formSelect={formLocalSelect}
        setFormSelect={setFormLocalSelect}
        blockSelect={blockSelect}
        setBlockSelect={setBlockSelect}
        componentSelect={formLocalSelect.blocks[blockSelectIndex].columns[componentSelectIndex].components[componentSelectIndex]}
        setComponentSelectIndex={setComponentSelectIndex}
      />

      {/* ****      BLOCK DATA SHOW   **** */}
      <DataBlockMenu
        setFormSelect={setFormLocalSelect}

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

      {/* ****     ELEMENT SHOW:     **** */}
      <ShowElements
        type_Element={valueComp.type_Element}
        valueComp={valueComp}
      />

      {/* ****     Icons - Components    **** */}
      {
        !theContext.tooRead &&
        <div className="row p-1">
          <IconsElem
            height={"0.9"}
            valueComp={valueComp}
            setValueComp={setValueComp}
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

        valueComp={valueComp}
        setValueComp={setValueComp}
      />
    </div>
  );
}

export default InfoOfElement;




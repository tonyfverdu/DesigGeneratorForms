import { useState, useEffect, useContext } from 'react'
import { MyContext } from '../../context/TheContext.jsx';

import HeaderMenuDesig from './MenuLeft/HeaderMenuDesig.jsx';
import DataFormMenu from './MenuLeft/DataFormMenu.jsx';
import DataBlockMenu from './MenuLeft/DataBlockMenu.jsx';
import DataCompMenu from './MenuLeft/DataCompMenu.jsx';

import ShowElements from './ShowElements.jsx';
import IconsElem from '../icons/IconsElem.jsx';  //  <<==  Iconos
import '../../sass/componentSass/TeilLeft/InfoOfElement.scss'

import formJSON_prueba_01 from '../../Data/JSONFormPrueba_01.js';
import changeElementInArray from '../../functions/changeElementOfArray.js';
import findIndexBlockSelect from '../../functions/findIndexBlockSelect.js';
import findIndexCompSelect from '../../functions/findIndexCompSelect.js';


function InfoOfElement({ formInput }) {
  const theContext = useContext(MyContext)

  //  ****    Local state variable    **************************************************************************************************
  const [formLocalSelect, setFormLocalSelect] = useState(formInput) //  <<===   User-selected Form

  //  ==>>  Loading the form block array in the context variable:  theContext.arrayOfBlocks
  const [arrayBlocksSelect, setArrayBlocksSelect] = useState(formLocalSelect.blocks)
  const [blockSelect, setBlockSelect] = useState(arrayBlocksSelect[0])    //  <<===   User-selected Block
  const [arrayColumnsSelect, setArrayColumnsSelect] = useState(blockSelect.columns)
  const [arrayCompsSelect, setArrayCompsSelect] = useState(arrayColumnsSelect.map(col => col.components.map(comp => comp)))
  const [componentSelect, setComponentSelect] = useState(arrayCompsSelect[0][0])  //  <<===   User-selected Component

  //  Change formInput
  useEffect(() => {
    setFormLocalSelect(formInput)
    setArrayBlocksSelect(formLocalSelect.blocks)
    setBlockSelect(arrayBlocksSelect[0])
    setArrayColumnsSelect(blockSelect.columns)
    setArrayCompsSelect(blockSelect.columns.map(col => col.components.map(comp => comp)))
    setComponentSelect(arrayCompsSelect[0][0])
    
  }, [formInput])

  //  Change BlockSelect
  const [indexBlockSelect, setIndexBlockSelect] = useState(0)
  function findIndexBlockSelect(parArrayBlocks, parBlockSelect) {
    if (Array.isArray(parArrayBlocks)) {
      setIndexBlockSelect(parArrayBlocks.findIndex(block => block.id_Block === parBlockSelect.id_Block))
      if (indexBlockSelect <= -1) {
        console.error(`Error:  There is not the elements in the array of the function "findIndexBlockSelect"`)
        setIndexBlockSelect(null)
      }
    } else {
      console.error('Error:  The argument of the function "findIndexBlockSelect" must be an array!!')
      setIndexBlockSelect(null)
    }
  }

  useEffect(() => {
    // setArrayBlocks(changeElementInArray(arrayBlocks, blockSelect))
    findIndexBlockSelect(valueForm.blocks, blockSelect)
    setComponentSelect(blockSelect.columns[0].components[0][indexBlockSelect])
  }, [blockSelect])


  ////////////////////////////////////////////////  GESTION DE VARIABLES DE ESTADO LOCALES DEL FORMULARIO   ///////////////////////////
  const [valueForm, setValueForm] = useState(formInput)
  const [valueArrays, setValueArrays] = useState(formInput.blocks)
  const [valueBlock, setValueBlock] = useState(blockSelect)
  const [valueComp, setValueComp] = useState(componentSelect)

  useState(() => {
    setValueForm(formLocalSelect)
  }, [formLocalSelect])
  useState(() => {
    setValueArrays(formLocalSelect.blocks)
  }, [formLocalSelect.blocks])
  useState(() => {
    setValueBlock(blockSelect)
  }, [blockSelect])

  useState(() => {
    setValueComp(componentSelect)
  }, [componentSelect])


  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center m-0 mx-auto p-0" >
      <div className="container-fluid d-flex flex-column justify-content-center align-items-center mx-auto bg-secondary" >
        <HeaderMenuDesig />
      </div>

      {/*   ****    FORM DATA SHOW    **** */}
      <DataFormMenu
        formSelect={formLocalSelect}
        setFormSelect={setFormLocalSelect}
        blockSelect={blockSelect}
        setBlockSelect={setBlockSelect}
        valueForm={valueForm}
        setValueForm={setValueForm}

        indexBlockSelect={indexBlockSelect}
        setIndexBlockSelect={setIndexBlockSelect}
      />

      {/* ****      BLOCK DATA SHOW   **** */}
      <DataBlockMenu
        formSelect={formLocalSelect}
        setFormSelect={setFormLocalSelect}

        arrayBlocks={valueArrays}
        setArrayBlocks={setValueArrays}
        blockSelect={blockSelect}
        setBlockSelect={setBlockSelect}

        valueForm={valueForm}
        setValueForm={setValueForm}
        valueArrays={valueArrays}
        setValueArrays={setValueArrays}
        valueBlock={valueBlock}
        setValueBlock={setValueBlock}
        valueComp={valueComp}
        setValueComp={setValueComp}

        indexBlockSelect={indexBlockSelect}
        setIndexBlockSelect={setIndexBlockSelect}
      />

      {/* ****     ELEMENT SHOW:     **** */}
      <ShowElements
        type_Element={valueComp.type_Element}
        componentSelect={valueComp}
      />

      {/* ****     2.-  Menu Left:  Icons - Components    **** */}
      {
        !theContext.tooRead &&
        <div className="row p-1">
          <IconsElem
            height={"0.81"}
          // situation={"componentInfo"}
          />
        </div>
      }

      {/* ****      COMPONENT DATA SHOW   **** */}
      <DataCompMenu
        formSelect={formLocalSelect}
        setFormSelect={setFormLocalSelect}

        arrayBlocks={valueArrays}
        setArrayBlocks={setValueArrays}

        blockSelect={blockSelect}
        setBlockSelect={setBlockSelect}

        valueForm={valueForm}
        setValueForm={setValueForm}
        valueArrays={valueArrays}
        setValueArrays={setValueArrays}
        valueBlock={valueBlock}
        setValueBlock={setValueBlock}

        valueComp={valueComp}
        setValueComp={setValueComp}
      />
    </div>
  )
}

export default InfoOfElement;






/*
  //  ==>>  Loading the form block array in the context variable:  theContext.arrayOfBlocks
  theContext.setArrayOfBlocks(formInput.blocks)
  const [lengthOfArrayOfBlocks, setLengthOfArrayOfBlocks] = useState(0)


  const [blockSelect, setBlockSelect] = useState({})    //  <<===   User-selected Block
  const [indexBlockSelect, setIndexBlockSelect] = useState(0)
  // const [lengthOfArrayOfBlocks, setLengthOfArrayOfBlocks] = useState(0)

  useEffect(() => {
    setFormLocalSelect(formInput)
    theContext.setArrayOfBlocks(formLocalSelect.blocks)
    //setLengthOfArrayOfBlocks(theContext.arrayOfBlocks.length)
    setLengthOfArrayOfBlocks(0)

    setBlockSelect(theContext.arrayOfBlocks[0])
    setIndexBlockSelect(0)


  }, [formInput])

  ////////////////////////////////////////////////  GESTION DE VARIABLES DE ESTADO LOCALES DEL FORMULARIO   ///////////////////////////
  const [valueForm, setValueForm] = useState(formLocalSelect)
  useState(() => {
    setValueForm(formLocalSelect)
  }, [formLocalSelect])
*/

/*
  const [componentSelect, setComponentSelect] = useState({})  //  <<===   User-selected Component

  //    ESTO ES UNA COPIA DE LO QUE HAY EN PRINTFORMTEMPLATE
  useEffect(() => {
setLengthOfArrayOfBlocks(theContext.arrayOfBlocks.length)


    // setArrayColumnsSelect(theContext.arrayOfBlocks[0].columns)
    // setArrayCompsSelect(theContext.arrayOfBlocks[0].columns[0].components)
    setComponentSelect(theContext.arrayOfBlocks[0].columns[0].components[0])
  }, [formInput])




  ////////////////////////////////////////////////  GESTION DE VARIABLES DE ESTADO LOCALES DEL FORMULARIO   ///////////////////////////
  const [valueForm, setValueForm] = useState(formLocalSelect)
  const [valueArrays, setValueArrays] = useState(theContext.arrayOfBlocks)
  const [valueBlock, setValueBlock] = useState(blockSelect)
  const [valueComp, setValueComp] = useState(componentSelect)


  // useState(() => {
  //   setArrayColumnsSelect(theContext.setArrayOfBlocks)
  // }, [theContext.setArrayOfBlocks])
  useState(() => {
    setValueBlock(blockSelect)
  }, [blockSelect])
  useState(() => {
    setValueComp(componentSelect)
  }, [componentSelect])






*/

/*
const [arrayColumnsSelect, setArrayColumnsSelect] = useState([])
  const [arrayCompsSelect, setArrayCompsSelect] = useState([])
  const [componentSelect, setComponentSelect] = useState({})  //  <<===   User-selected Component





  //  Change BlockSelect
  const [indexBlockSelect, setIndexBlockSelect] = useState(0)
  // useEffect(() => {
  //   findIndexBlockSelect(valueForm.blocks, blockSelect, indexBlockSelect, setIndexBlockSelect)
  //   // setComponentSelect(blockSelect.columns[0].components[0])
  // }, [blockSelect])

  //  Change CompSelect
  const [indexCompSelect, setIndexCompSelect] = useState(0)
  // useEffect(() => {
  //   findIndexCompSelect(valueForm.blocks.components, valueComp, indexCompSelect, setIndexCompSelect)
  //   setComponentSelect(blockSelect.columns[0].components[0])
  // }, [componentSelect])

  //  MIRAR ESTO BIEN CON DETALLE
  // useEffect(() => {
  //   // setFormInput({...formInput, blocks: valueBlock})
  //   setFormInput({...formInput, blocks: valueBlock})
  // }, [valueBlock])

*/




//  Change formInput
// useEffect(() => {
//   setFormLocalSelect(JSON.parse(JSON.stringify(formInput)))
//   setArrayBlocksSelect(formLocalSelect.blocks)
//   setBlockSelect(arrayBlocksSelect[0])
//   setArrayColumnsSelect(blockSelect.columns)
//   setArrayCompsSelect(blockSelect.columns.map(col => col.components.map(comp => comp)))
//   setComponentSelect(arrayCompsSelect[0])
// }, [formInput])




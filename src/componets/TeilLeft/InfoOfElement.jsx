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


function InfoOfElement({ formInput, setFormInput }) {
  const theContext = useContext(MyContext)

  //  Local state variable
  const [formLocalSelect, setFormLocalSelect] = useState(JSON.parse(JSON.stringify(formInput))) //  <<===   User-selected Form

  const [arrayBlocksSelect, setArrayBlocksSelect] = useState(formLocalSelect.blocks)
  const [blockSelect, setBlockSelect] = useState(arrayBlocksSelect[0])    //  <<===   User-selected Block

  const [arrayColumnsSelect, setArrayColumnsSelect] = useState(blockSelect.columns)
  const [arrayCompsSelect, setArrayCompsSelect] = useState(blockSelect.columns.map(col => col.components.map(comp => comp)))
  const [componentSelect, setComponentSelect] = useState(arrayCompsSelect[0])  //  <<===   User-selected Component

  // console.log("Componentes:  arrayCompsSelect:  ", arrayCompsSelect)

  //  Change formInput
  useEffect(() => {
    setFormLocalSelect(JSON.parse(JSON.stringify(formInput)))
    setArrayBlocksSelect(formLocalSelect.blocks)
    setBlockSelect(arrayBlocksSelect[0])
    setArrayColumnsSelect(blockSelect.columns)
    setArrayCompsSelect(blockSelect.columns.map(col => col.components.map(comp => comp)))
    setComponentSelect(arrayCompsSelect[0])
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
    setComponentSelect(blockSelect.columns[0].components[0])
  }, [blockSelect])


  ////////////////////////////////////////////////  GESTION DE VARIABLES DE ESTADO LOCALES DEL FORMULARIO   ///////////////////////////
  const [valueForm, setValueForm] = useState(formInput)
  const [valueBlock, setValueBlock] = useState(blockSelect)
  const [valueComp, setValueComp] = useState(componentSelect)

  useState(() => {
    setValueForm(formLocalSelect)
  }, [formLocalSelect])
  useState(() => {
    setValueBlock(blockSelect)
  }, [blockSelect])
  useState(() => {
    setValueComp(componentSelect)
  }, [componentSelect])

  useEffect(() => {
    // formJSON_prueba_01.id_Form = valueForm.id_Form
    // formJSON_prueba_01.title_Form = valueForm.title_Form
    // formJSON_prueba_01.creation_date_Form = valueForm.creation_date_Form
    // formJSON_prueba_01.version_Form = valueForm.version_Form
    // formJSON_prueba_01.readonly_Form = valueForm.readonly_Form
    // formJSON_prueba_01.description_Form = valueForm.description_Form
    // formJSON_prueba_01.blocks = valueForm.blocks



    // setFormInput(valueForm)
    setFormInput(valueForm)
    // theContext.setFormObject(valueForm)
  }, [valueForm])

  //  MIRAR ESTO BIEN CON DETALLE
  // useEffect(() => {
  //   // setFormInput({...formInput, blocks: valueBlock})
  //   setFormInput({...formInput, blocks: valueBlock})
  // }, [valueBlock])


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

        setIndexBlockSelect={setIndexBlockSelect}
      />

      {/* ****      BLOCK DATA SHOW   **** */}
      <DataBlockMenu
        formSelect={formLocalSelect}
        setFormSelect={setFormLocalSelect}

        arrayBlocks={arrayBlocksSelect}
        setArrayBlocks={setArrayBlocksSelect}
        blockSelect={blockSelect}
        setBlockSelect={setBlockSelect}

        valueForm={valueForm}
        setValueForm={setValueForm}
        valueBlock={valueBlock}
        setValueBlock={setValueBlock}
        valueComp={valueComp}
        setValueComp={setValueComp}

        indexBlockSelect={indexBlockSelect}
        // setIndexBlockSelect={setIndexBlockSelect}
      />

      {/* ****     ELEMENT SHOW:     **** */}
      {/* < div className="container-fluid bg-secondary d-flex flex-column justify-content-center align-items-center py-2 px-3 mx-auto my-1" >
        <div className="row container-fluid d-flex justify-content-center align-items-center gap-0 my-1 mx-auto bg-secondary">
          <div className="col bg-body mx-1 p-2 graycolor400">
            <ShowElements
              type_Element={valueComp.type_Element}
              componentSelect={valueComp}
            />
          </div>
        </div>
      </div > */}

      {/* ****     2.-  Menu Left:  Icons - Components    **** */}
      {/* {
        !theContext.tooRead &&
        <div className="row p-1">
          <IconsElem
            height={"0.81"}
          // situation={"componentInfo"}
          />
        </div>
      } */}

      {/* ****      COMPONENT DATA SHOW   **** */}
      {/* <DataCompMenu
        formInput={formSelect}
        setFormInput={setFormSelect}
        blockSelect={blockSelect}
        componentSelect={componentSelect}
        setComponentSelect={setComponentSelect}
      /> */}

    </div>
  )
}

export default InfoOfElement;

/*
  //  Control of read, create and modify state  ???????
  useEffect(() => {
    setTooRead(theContext.toogleReadLeft)
    setTooModify(theContext.toogleCreateLeft)

    switch (theContext.optionState) {
      case "read":
        theContext.setObjComponentShow(theContext.componentRead)
        break;
      case "modify":
        theContext.setObjComponentShow(theContext.componentModify)
        break;
      default:
        break;
    }
  }, [theContext.toogleReadLeft], [theContext.toogleModifyLeft])


  
*/

/*
  // useEffect(() => {
  //   formJSON_prueba_01.id_Form = valueForm.id_Form
  //   formJSON_prueba_01.title_Form = valueForm.title_Form
  //   formJSON_prueba_01.creation_date_Form = valueForm.creation_date_Form
  //   formJSON_prueba_01.version_Form = valueForm.version_Form
  //   formJSON_prueba_01.readonly_Form = valueForm.readonly_Form
  //   formJSON_prueba_01.description_Form = valueForm.description_Form
  //   formJSON_prueba_01.blocks = valueForm.blocks



  //   // setFormInput(valueForm)
  //   setFormSelect(valueForm)
  //   // theContext.setFormObject(valueForm)
  // }, [valueForm])

  // useEffect(() => {
  //   // console.log("formJSON_prueba_01.blocks:  ", formJSON_prueba_01.blocks, " proximo indice:  ", formJSON_prueba_01.blocks.length)

  //   formJSON_prueba_01.blocks[formJSON_prueba_01.blocks.length].title_Block = valueBlock.title_Block
  //   formJSON_prueba_01.blocks[formJSON_prueba_01.blocks.length].ordenDisplay_Block = valueBlock.ordenDisplay_Block
  //   formJSON_prueba_01.blocks[formJSON_prueba_01.blocks.length].label_Block = valueBlock.label_Block
  //   formJSON_prueba_01.blocks[formJSON_prueba_01.blocks.length].description_Block= valueBlock.description_Block

  //   setSelectForm(valueForm)
  //   setFormSelect({ ...formSelect, blocks: blockSelect })
  //   // setSelectForm(structuredClone(valueForm))

  // }, [valueBlock])




  // const [selectComponent, setSelectComponent] = useState(componentSelect)  //  <==  ??
  // useEffect(() => {
  //   setFormInput(formSelect)
  //   theContext.setArrayOfBlocks(formSelect.blocks)

  //   setBlockSelect(formSelect.blocks[0])
  //   setComponentSelect(formSelect.blocks[0].columns[0].components[0])

  //   setSelectComponent(componentSelect)

  //   setTooRead(true)
  //   setTooModify(false)
  // }, [formSelect])
  /*
   
  
    useEffect(() => {
      setSelectComponent(componentSelect)
    }, [componentSelect])
  
    useEffect(() => {
      // setSelectForm(theContext.formObject)
  
      setSelectComponent(theContext.objComponentShow)
    }, [theContext.objComponentShow])
  
  
  
    function handleOnChangeComponent(ev) {
      ev.preventDefault();
      console.log("Se ha seleccionado a, ev.target.value:  ", ev.target.value)
  
      // setSelectComponent(ev.target.value)
      // theContext.setElement(selectComponent)
    }
  
 
  
    function handleComponentSelect(ev) {
      ev.preventDefault()
      let compSelectObj = null
  
      // if (Array.isArray(blockSelect.components)) {
      //   compSelectObj = blockSelect.components.find(component => component.type_Element === ev.target.value)
      // }
      // setComponentSelect(compSelectObj)
    }
  
    function handleCompSelectObj(ev) {
      ev.preventDefault()
  
      // if (Array.isArray(blockSelect.components)) {
      //   const compSelectObj = blockSelect.components.find(component => {
      //     return component.type_Element === ev.target.value
      //   })
      //   setComponentSelect(compSelectObj)
      // }
  
      // if (Array.isArray(TYPE_COMPONENTS)) {
      //   const compSelectObj = TYPE_COMPONENTS.find(component => component.type === ev.target.value)
      //   setComponentSelect(compSelectObj)
      // }
    }
  
    //   3.-  COMPONENTS
  
    
*/




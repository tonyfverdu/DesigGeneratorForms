import { useState, useEffect, useContext } from 'react';
import { MyContext } from '../../../context/TheContext.jsx';

import HeaderHead from './HeaderHead.jsx';
import FieldText from './FieldText.jsx';
import FieldTextArea from './FieldTextArea.jsx';
import FieldSelect from './FieldSelect.jsx';
import FieldSelectComponents from './FieldSelectComponents.jsx';

import { TITLES_RCM_LEFT } from '../../../constants/contants.js';  //  Constants of Form
import createArray from '../../../functions/createArray.js';
import changeElementInArray from '../../../functions/changeElementOfArray.js';

import formJSON_prueba_01 from '../../../Data/JSONFormPrueba_01.js';


function DataBlockMenu({ formSelect, setFormSelect, arrayBlocks, setArrayBlocks, blockSelect, setBlockSelect,
  valueForm, setValueForm, valueBlock, setValueBlock, valueComp, setValueComp, indexBlockSelect }) {
  const theContext = useContext(MyContext)

  const [indexBlockSelect2, setIndexBlockSelect2] = useState(indexBlockSelect)
  function findIndexBlockSelect2(parArrayBlocks, parBlockSelect) {
    if (Array.isArray(parArrayBlocks)) {
      setIndexBlockSelect2(parArrayBlocks.findIndex(block => block.id_Block === parBlockSelect.id_Block))
      if (indexBlockSelect <= -1) {
        console.error(`Error:  There is not the elements in the array of the function "findIndexBlockSelect"`)
        setIndexBlockSelect2(null)
      }
    } else {
      console.error('Error:  The argument of the function "findIndexBlockSelect2" must be an array!!')
      setIndexBlockSelect2(null)
    }
  }
  useEffect(()=> {
    findIndexBlockSelect2(arrayBlocks, blockSelect) 

  }, [blockSelect])
  // const [indexBlockSelect, setIndexBlockSelect] = useState(0)

  // function findIndexBlockSelect(parArrayBlocks, parBlockSelect) {
  //   if (Array.isArray(parArrayBlocks)) {
  //     setIndexBlockSelect(parArrayBlocks.findIndex(block => block.id_Block === parBlockSelect.id_Block))
  //     if (indexBlockSelect <= -1) {
  //       console.error(`Error:  There is not the elements in the array of the function "findIndexBlockSelect"`)
  //       setIndexBlockSelect(null)
  //     }
  //   } else {
  //     console.error('Error:  The argument of the function "findIndexBlockSelect" must be an array!!')
  //     setIndexBlockSelect(null)
  //   }
  // }

  // useEffect(() => {
  //   findIndexBlockSelect(formSelect.blocks, blockSelect)

  //   // setArrayBlocks([...arrayBlocks, arrayBlocks[indexBlockSelect] = blockSelect])
  // }, [blockSelect])

  useEffect(() => {
    // formSelect.blocks[indexBlockSelect].title_Block = valueBlock.title_Block

    // arrayBlocks[indexBlockSelect] = {...arrayBlocks, title_Block: valueBlock.title_Block}
    // setArrayBlocks([...arrayBlocks, arrayBlocks[indexBlockSelect] = arrayBlocks[indexBlockSelect]])
    // setTheFormIs({...theFormIs, blocks: arrayBlocks})

    // formSelect.blocks[indexBlockSelect].id_Block = valueBlock.id_Block
    // setBlockSelect([...formSelect.blocks, formSelect.blocks[indexBlockSelect].title_Block = valueBlock.title_Block])
    // formSelect.blocks[indexBlockSelect].ordenDisplay_Block = valueBlock.ordenDisplay_Block
    // formSelect.blocks[indexBlockSelect].label_Block = valueBlock.label_Block
    // formSelect.blocks[indexBlockSelect].description_Block = valueBlock.description_Block

    // setFormSelect(structuredClone(valueForm))
    // theContext.setFormObject(valueForm)

    // setFormSelect({ ...formSelect, blocks: [...blocks, blocks[indexBlockSelect] = valueBlock] })

    // setArrayBlocks([...arrayBlocks, arrayBlocks[indexBlockSelect] = blockSelect])
    // setFormSelect({ ...formSelect, blocks: arrayBlocks })

    
    setFormSelect({ ...formSelect, blocks: arrayBlocks })

  }, [valueBlock])

  useEffect(() => {
    findIndexBlockSelect2(arrayBlocks, blockSelect) 
    setArrayBlocks([...arrayBlocks, arrayBlocks[indexBlockSelect2] = blockSelect])

  }, [blockSelect])

  //  BLOCK FUNCTIONS
  function handleChangeTITLEBLOCK(ev) {
    ev.preventDefault()
    const newValue = ev.target.value

    setValueBlock({ ...valueBlock, title_Block: newValue })
    setBlockSelect({ ...blockSelect, title_Block: newValue })
    // setArrayBlocks([...arrayBlocks, arrayBlocks[indexBlockSelect] = valueBlock])
    // setArrayBlocks(arrayBlocks.splice(indexBlockSelect, 0, valueBlock))
    // setArrayBlocks(arrayBlocks.splice(indexBlockSelect, 0, valueBlock))
    // const newArrayBlock = arrayBlocks.map((block, index) => {
    //   if (index === indexBlockSelect) {
    //     block = valueBlock
    //   }
    //   return block
    // })
    // setArrayBlocks(newArrayBlock)
    // setValueForm({ ...valueForm, blocks: arrayBlocks })
    
    // )

  }
  function handleChangeIDBLOCK(ev) {
    ev.preventDefault()
    const newValue = ev.target.value

    setValueBlock({ ...valueBlock, id_Block: newValue })
    setBlockSelect({ ...blockSelect, id_Block: newValue })

    setFormSelect({ ...formSelect, blocks: arrayBlocks })

    //  formJSON_prueba_01.blocks[indexBlockSelect] = blockSelect
  }
  function handleChangeLABELBLOCK(ev) {
    ev.preventDefault()
    const newValue = ev.target.value

    setValueBlock({ ...valueBlock, label_Block: newValue })
    setBlockSelect({ ...blockSelect, label_Block: newValue })

    setFormSelect({ ...formSelect, blocks: arrayBlocks })

    //  formJSON_prueba_01.blocks[indexBlockSelect] = blockSelect
  }




  return (
    <div id="accordionBlock" className="accordion container-fluid graycolor400 d-flex flex-column justify-content-center align-items-center p-1 mx-auto mb-1">
      <div className="accordion-item rounded-0 container-fluid mx-auto graycolor400 border-0 " style={{ marginBottom: "0.3rem" }} >

        <HeaderHead
          idHeading={"headingBlock"}
          dataTarget={"#collapseBlock"}
          ariaControl={"collapseBlock"}
          fontSize={"0.75rem"}
          title={TITLES_RCM_LEFT.BLOCK_HEAD}
          value={blockSelect.title_Block}
        />

        <div id="collapseBlock" className="accordion-collapse collapse ms-0" aria-labelledby="headingBlock" data-bs-parent="#accordionBlock">
          <div className="accordion-body p-0 mb-0">

            <div className="row d-flex justify-content-center align-items-center gap-1 m-1" >

              <div className="col-5 d-flex flex-column justify-content-start align-items-start m-0 p-1 bg-body" >
                <FieldText
                  title={TITLES_RCM_LEFT.BLOCK_TITLE}
                  value={blockSelect.title_Block}
                  fontSize={"0.64rem"}
                  action={handleChangeTITLEBLOCK}
                />
              </div>

              <div className="col d-flex flex-column justify-content-start align-items-start m-0 p-1 bg-body" >
                <FieldText
                  title={TITLES_RCM_LEFT.BLOCK_ID_TITLE}
                  value={blockSelect.id_Block}
                  fontSize={"0.64rem"}
                  action={handleChangeIDBLOCK}
                />
              </div>

            </div>

            <div className="row d-flex justify-content-center align-items-center gap-1 m-1" >
              <div className="col-12 d-flex flex-row justify-content-start align-items-start m-0 p-1 bg-body">
                <FieldText
                  title={TITLES_RCM_LEFT.BLOCK_LABEL}
                  value={blockSelect.label_Block}
                  fontSize={"0.64rem"}
                  action={handleChangeLABELBLOCK}
                />
              </div>
            </div>




          </div>
        </div>
      </div>
    </div>
  )
}

export default DataBlockMenu;

//   Functions

/*
 const [numberBlocks, setNumberBlocks] = useState(formSelect.blocks.length)
  const [arrayOrders, setArrayOrders] = useState(createArray(numberBlocks))
  const [arrayComponents, setArrayOfComponents] = useState(blockSelect.columns[0].components)
  const [compSelect, setCompSelect] = useState(blockSelect.columns[0].components[0])

  //  ATENCION:  VOY A UTILIZAR EL ARRAY DE BLOQUES AQUI HABER QUE PASA
  const [matrizBloques, setMatrizBloques] = useState([])
  console.log("matrizBloques:  ", matrizBloques)

  const [indexBlockSelect, setIndexBlockSelect] = useState(0)

  useEffect(() => {
    // const changeBlock = formSelect.blocks.find(block => block.id_Block === blockSelect.id_Block)
    // console.log("changeBlock:  ", changeBlock)
    // console.log("Antes:  formSelect.blocks:  ", formSelect.blocks)
    // setFormSelect(changeElementInArray(formSelect.blocks, blockSelect))
    // console.log("Despues:  formSelect.blocks:  ", formSelect.blocks)
    setMatrizBloques(formSelect.blocks)

    setNumberBlocks(formSelect.blocks.length)
    setArrayOrders(createArray(numberBlocks))
    setArrayOfComponents(blockSelect.columns[0].components)

    setValueComp(blockSelect.columns[0].components[0])
    setCompSelect(valueComp)

    //setIndexBlockSelect(formSelect.blocks.findIndex(block => block.id_Block === blockSelect.id_Block))
  }, [blockSelect])




//  BLOCK FUNCTIONS

  function handleChangeDESCRIPTIONBLOCK(ev) {
    ev.preventDefault()
    const newValue = ev.target.value

    setValueBlock({ ...valueBlock, description_Block: newValue })
    setBlockSelect({ ...blockSelect, description_Block: newValue })

    //  formJSON_prueba_01.blocks[indexBlockSelect] = blockSelect
  }
  function handleChangeORDERBLOCK(ev) {
    ev.preventDefault()
    const newValue = ev.target.value

    setValueBlock({ ...valueBlock, ordenDisplay_Block: newValue })
    setBlockSelect({ ...blockSelect, ordenDisplay_Block: newValue })

    //  formJSON_prueba_01.blocks[indexBlockSelect] = blockSelect
  }


  //  Arreglo de componentes en en select DE COMPONENTES
  const [compSelectObj, setCompSelectObj] = useState(arrayComponents[0])

  function handleComponentSelect(ev) {
    ev.preventDefault()
    console.log("type_Element:  ", ev.target.value)

    if (Array.isArray(arrayComponents)) {
      setCompSelectObj(arrayComponents.find(comp => comp.type_Element === ev.target.value))
      console.log("compSelectObj:  ", compSelectObj)
    }
    // setComponentSelect(compSelectObj)
  }






  const [selectComponent, setSelectComponent] = useState("")

  // useEffect(() => {
  //   setFormInput(formInput)
  //   theContext.setArrayOfBlocks(formInput.blocks)

  //   setBlockSelect(formInput.blocks[0])
  //   setComponentSelect(formInput.blocks[0].columns[0].components[0])

  //   setSelectComponent(componentSelect)
  //   setTooRead(true)
  //   setTooModify(false)
  //   setTooCreate(false)
  // }, [formSelect])

  // useEffect(() => {
  //   setSelectComponent(componentSelect)
  // }, [componentSelect])

  // useEffect(() => {
  //   // setSelectForm(theContext.formObject)

  //   setSelectComponent(theContext.objComponentShow)
  // }, [theContext.objComponentShow])

  function handleOnChangeComponent(ev) {
    ev.preventDefault();
    console.log("Se ha seleccionado a, ev.target.value:  ", ev.target.value)

    // setSelectComponent(ev.target.value)
    // theContext.setElement(selectComponent)
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
*/



//    RETURNS (SHOW)
/*

            <div className="row d-flex justify-content-start align-items-center gap-1 m-1">
              <div className="col-12 d-flex flex-column justify-content-start align-items-start m-0 p-1 bg-body">
                <FieldTextArea
                  title={TITLES_RCM_LEFT.BLOCK_DESCRIPTION}
                  value={blockSelect.description_Block}
                  fontSize={"0.64rem"}
                  action={handleChangeDESCRIPTIONBLOCK}
                />
              </div>
            </div>

            <div className="row d-flex justify-content-start align-items-center gap-1 m-1">

              <div className="col d-flex flex-column justify-content-start align-items-center m-0 p-1 bg-body" style={{ height: "3.6rem" }} >
                <FieldSelectComponents
                  title={TITLES_RCM_LEFT.BLOCK_COMPONENTS}
                  value={compSelect}
                  fontSize={"0.64rem"}
                  arrayValues={arrayComponents}
                  action={handleComponentSelect}
                />
              </div>

              <div className="col-3 d-flex flex-column justify-content-start align-items-center m-0 p-1 bg-body" style={{ height: "3.6rem" }} >
                <FieldSelect
                  title={TITLES_RCM_LEFT.BLOCK_ORDER_DISPLAY}
                  value={blockSelect.ordenDisplay_Block}
                  fontSize={"0.64rem"}
                  arrayValues={arrayOrders}
                  action={handleChangeORDERBLOCK}
                />
              </div>
            </div>

          </div>
*/

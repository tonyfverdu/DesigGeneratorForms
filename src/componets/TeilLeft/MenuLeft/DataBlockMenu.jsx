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

import compByBlock from '../../../functions/compByBlock.js';


function DataBlockMenu({ formSelect, setFormSelect, arrayBlocks, setArrayBlocks, blockSelect, setBlockSelect,
  valueForm, setValueForm, valueArrays, setValueArrays, valueBlock, setValueBlock, valueComp, setValueComp, indexBlockSelect }) {
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

  const [arrayComponents, setArrayOfComponents] = useState(compByBlock(blockSelect))
  const [compSelectObj, setCompSelectObj] = useState(valueComp)
  const [numberBlocks, setNumberBlocks] = useState(formSelect.blocks.length)
  const [arrayOrders, setArrayOrders] = useState(createArray(numberBlocks))

  //  PONER TODOS LOS COMPONENTES DE BLOQUE UTILIZANDO LA FUNCION CREADA
  useEffect(() => {
    setArrayOfComponents(compByBlock(blockSelect))
    // console.log("arrayComponents:  ", arrayComponents)
    // setCompSelectObj(valueComp)
  }, [blockSelect])

  useEffect(() => {
    setCompSelectObj(valueComp)
  }, [valueComp])


  useEffect(() => {
    findIndexBlockSelect2(arrayBlocks, blockSelect)
  }, [blockSelect])

  const [parChangeBlock, setParChangeBlock] = useState("")
  let newArray = []

  function cambioArray(parChangeBlock) {
    if (theContext.tooRead) {
      switch (parChangeBlock) {
        case "title_Block":

          // const arrayNuevo = changeElementInArray(valueArrays, valueArrays[indexBlockSelect2].id_Block, valueArrays)
          // console.log("arrayNuevo:  ", arrayNuevo)

          console.log("ValueBlock:  ", valueBlock)


          //setValueArrays([...valueArrays, valueArrays[indexBlockSelect2] = valueBlock])
          newArray = valueArrays.map(value => {
            if (value.id_Block === valueBlock.id_Block) {
              value = { ...value, title_Block: valueBlock.title_Block }
            }
            return value
          })

          // setValueArrays(changeElementInArray(valueArrays, valueArrays[indexBlockSelect2].id_Block, valueArrays))
          // setValueForm({ ...valueForm, blocks: newArray })

          // setArrayBlocks(newArray)
          // setFormSelect(valueForm)
          // findIndexBlockSelect2(newArray, valueBlock)
          // console.log("indexBlockSelect2:  ", indexBlockSelect2)

          console.log("newArray? es array:  ", Array.isArray(newArray), "  newArray:  ", newArray)
          setValueArrays(newArray)
          setArrayBlocks(newArray)
          setBlockSelect(valueBlock)
          setValueForm({ ...valueForm, blocks: newArray })
          setFormSelect(valueForm)
          break;

        case "id_Block":
          newArray = valueArrays.map(value => {
            if (value.id_Block === valueBlock.id_Block) {
              value = { ...value, id_Block: valueBlock.id_Block }
            }
            return value
          })
          setValueArrays(newArray)
          setValueForm({ ...valueForm, blocks: newArray })
          setArrayBlocks(newArray)
          setFormSelect(valueForm)
          break;

        case "label_Block":
          newArray = valueArrays.map(value => {
            if (value.id_Block === valueBlock.id_Block) {
              value = { ...value, label_Block: valueBlock.label_Block }
            }
            return value
          })
          setValueArrays(newArray)
          setValueForm({ ...valueForm, blocks: newArray })
          setArrayBlocks(newArray)
          setFormSelect(valueForm)
          break;

        case "description_Block":
          newArray = valueArrays.map(value => {
            if (value.id_Block === valueBlock.id_Block) {
              value = { ...value, description_Block: valueBlock.description_Block }
            }
            return value
          })
          setValueArrays(newArray)
          setValueForm({ ...valueForm, blocks: newArray })
          setArrayBlocks(newArray)
          setFormSelect(valueForm)
          break;

        case "ordenDisplay_Block":
          newArray = valueArrays.map(value => {
            if (value.id_Block === valueBlock.id_Block) {
              value = { ...value, ordenDisplay_Block: valueBlock.ordenDisplay_Block }
            }
            return value
          })
          setValueArrays(newArray)
          setValueForm({ ...valueForm, blocks: newArray })
          setArrayBlocks(newArray)
          setFormSelect(valueForm)
          break;

        case "components_Block":
          console.log("En components_Block newArray:  ", newArray)

          newArray = valueArrays.map(value => {
            if (value.id_Block === valueBlock.id_Block) {
              value = { ...value, components: valueBlock.columns }
            }
            console.log("value:  ", value)
            return value
          })
          setValueArrays(newArray)
          setValueForm({ ...valueForm, blocks: newArray })
          setArrayBlocks(newArray)
          setFormSelect(valueForm)
          break;

        default:
          setParChangeBlock("")
          break;
      }
    }
  }


  useEffect(() => {
    cambioArray(parChangeBlock)
    theContext.setArrayOfBlocks([...theContext.arrayOfBlocks, blockSelect])
  }, [theContext.tooRead])

  useEffect(() => {
    setValueBlock(blockSelect)
    findIndexBlockSelect2(arrayBlocks, blockSelect)
    setArrayOfComponents(blockSelect.columns[0].components)
  }, [blockSelect])


  //  BLOCK FUNCTIONS
  function handleChangeTITLEBLOCK(ev) {
    ev.preventDefault()
    const newValue = ev.target.value

    setParChangeBlock("title_Block")
    setValueBlock({ ...valueBlock, title_Block: newValue })
    setBlockSelect({ ...blockSelect, title_Block: newValue })
  }
  function handleChangeIDBLOCK(ev) {
    ev.preventDefault()
    const newValue = ev.target.value

    setParChangeBlock("id_Block")
    setValueBlock({ ...valueBlock, id_Block: newValue })
    setBlockSelect({ ...blockSelect, id_Block: newValue })
  }
  function handleChangeLABELBLOCK(ev) {
    ev.preventDefault()
    const newValue = ev.target.value

    setParChangeBlock("label_Block")
    setValueBlock({ ...valueBlock, label_Block: newValue })
    setBlockSelect({ ...blockSelect, label_Block: newValue })
  }
  function handleChangeDESCRIPTIONBLOCK(ev) {
    ev.preventDefault()
    const newValue = ev.target.value

    setParChangeBlock("description_Block")
    setValueBlock({ ...valueBlock, description_Block: newValue })
    setBlockSelect({ ...blockSelect, description_Block: newValue })
  }
  function handleChangeORDERBLOCK(ev) {
    ev.preventDefault()
    const newValue = ev.target.value

    setParChangeBlock("ordenDisplay_Block")
    setValueBlock({ ...valueBlock, ordenDisplay_Block: newValue })
    setBlockSelect({ ...blockSelect, ordenDisplay_Block: newValue })
  }

  //  Arrangement of components in the Component Select
  function handleComponentSelect(ev) {
    ev.preventDefault()
    const newValue = ev.target.value

    setParChangeBlock("components_Block")

    if (Array.isArray(arrayComponents)) {
      setValueComp(arrayComponents.find(comp => comp.title_Element === newValue))
    }
  }

  // useEffect(() => {
  //   console.log("arrayComponents:  ", arrayComponents)
  //   console.log("compSelectObj:  ", compSelectObj)

  // }, [arrayComponents])

  //  IMPORTANT !!
  // useEffect(()=> {
  //   console.log("Ejecuto esto")
  //   theContext.setArrayOfBlocks([...theContext.arrayOfBlocks, blockSelect])
  //   theContext.setFormObject({...theContext.formObject, blocks: theContext.arrayOfBlocks})
  // }, [valueForm])

  return (
    <div id="accordionBlock" className="accordion container-fluid graycolor400 d-flex flex-column justify-content-center align-items-center p-1 mx-auto mb-1">
      <div className="accordion-item rounded-0 container-fluid mx-auto graycolor400 border-0 " style={{ marginBottom: "0.3rem" }} >

        <HeaderHead
          idHeading={"headingBlock"}
          dataTarget={"#collapseBlock"}
          ariaControl={"collapseBlock"}
          fontSize={"0.75rem"}
          title={TITLES_RCM_LEFT.BLOCK_HEAD}
          value={valueBlock.title_Block}
        />

        <div id="collapseBlock" className="accordion-collapse collapse ms-0" aria-labelledby="headingBlock" data-bs-parent="#accordionBlock">
          <div className="accordion-body p-0 mb-0">

            <div className="row d-flex justify-content-center align-items-center gap-1 m-1" >

              <div className="col-5 d-flex flex-column justify-content-start align-items-start m-0 p-1 bg-body" >
                <FieldText
                  title={TITLES_RCM_LEFT.BLOCK_TITLE}
                  value={valueBlock.title_Block}
                  fontSize={"0.64rem"}
                  action={handleChangeTITLEBLOCK}
                />
              </div>

              <div className="col d-flex flex-column justify-content-start align-items-start m-0 p-1 bg-body" >
                <FieldText
                  title={TITLES_RCM_LEFT.BLOCK_ID_TITLE}
                  value={valueBlock.id_Block}
                  fontSize={"0.64rem"}
                  action={handleChangeIDBLOCK}
                />
              </div>

            </div>

            <div className="row d-flex justify-content-center align-items-center gap-1 m-1" >
              <div className="col-12 d-flex flex-row justify-content-start align-items-start m-0 p-1 bg-body">
                <FieldText
                  title={TITLES_RCM_LEFT.BLOCK_LABEL}
                  value={valueBlock.label_Block}
                  fontSize={"0.64rem"}
                  action={handleChangeLABELBLOCK}
                />
              </div>
            </div>

            <div className="row d-flex justify-content-start align-items-center gap-1 m-1">
              <div className="col-12 d-flex flex-column justify-content-start align-items-start m-0 p-1 bg-body">
                <FieldTextArea
                  title={TITLES_RCM_LEFT.BLOCK_DESCRIPTION}
                  value={valueBlock.description_Block}
                  fontSize={"0.64rem"}
                  action={handleChangeDESCRIPTIONBLOCK}
                />
              </div>
            </div>

            <div className="row d-flex justify-content-start align-items-center gap-1 m-1">

              <div className="col d-flex flex-column justify-content-start align-items-center m-0 p-1 bg-body" style={{ height: "3.6rem" }} >
                <FieldSelect
                  title={TITLES_RCM_LEFT.BLOCK_COMPONENTS}
                  value={compSelectObj.title_Element}
                  fontSize={"0.64rem"}
                  arrayValues={arrayComponents.map(comp => comp.title_Element)}
                  action={handleComponentSelect}
                />
              </div>

              <div className="col-3 d-flex flex-column justify-content-start align-items-center m-0 p-1 bg-body" style={{ height: "3.6rem" }} >
                <FieldSelect
                  title={TITLES_RCM_LEFT.BLOCK_ORDER_DISPLAY}
                  value={valueBlock.ordenDisplay_Block}
                  fontSize={"0.64rem"}
                  arrayValues={arrayOrders}
                  action={handleChangeORDERBLOCK}
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

/*
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

  // useEffect(() => {
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


  //   setFormSelect({ ...formSelect, blocks: arrayBlocks })

  // }, [valueBlock])

  // useEffect(() => {
  //   console.log("useEffect de cambio de blockSelect")
  //   setValueForm({ ...valueForm, blocks: arrayBlocks })


  // }, [blockSelect])

  //    TRATAMIENTO DE CAMBIOS EN LOS ATRIBUTOS DE BLOCK
  
*/
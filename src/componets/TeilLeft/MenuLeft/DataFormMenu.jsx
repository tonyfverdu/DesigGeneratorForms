import { useState, useEffect, useContext } from 'react';
import { MyContext } from '../../../context/TheContext.jsx';

import HeaderHead from './HeaderHead.jsx';
import FieldText from './FieldText.jsx';
import FieldData from './FieldData.jsx';
import FieldTextArea from './FieldTextArea.jsx';
import FieldSelect from './FieldSelect.jsx';
import FieldSelectAdd from './FieldSelectAdd.jsx';
import { TITLES_RCM_LEFT } from '../../../constants/contants.js';  //  Constants of Form

import formJSON_prueba_01 from '../../../Data/JSONFormPrueba_01.js';


function DataFormMenu({ formSelect, setFormSelect, blockSelect, setBlockSelect, valueForm, setValueForm, indexBlockSelect, setIndexBlockSelect }) {
  const theContext = useContext(MyContext)

  function findIndexBlockSelect(parArrayBlocks, parBlockSelect) {
    if (Array.isArray(parArrayBlocks)) {
      setIndexBlockSelect(parArrayBlocks.findIndex(block => block.id_Block === parBlockSelect.id_Block))
      if (indexBlockSelect <= -1) {
        console.error(`Error: There is not the elements in the array of the function "findIndexBlockSelect"`)
        setIndexBlockSelect(null)
      }
    } else {
      console.error('Error:  The argument of the function "findIndexBlockSelect" must be an array!!')
      setIndexBlockSelect(null)
    }
  }

  useEffect(() => {
    findIndexBlockSelect(valueForm.blocks, blockSelect)
  }, [blockSelect])

  //  FORM FUNCTIONS
  function handleChangeTITLEFORM(ev) {
    ev.preventDefault()
    const newValue = ev.target.value

    setValueForm({ ...valueForm, title_Form: newValue })
    setFormSelect({ ...formSelect, title_Form: newValue })
  }
  function handleChangeIDFORM(ev) {
    ev.preventDefault()
    const newValue = ev.target.value

    setValueForm({ ...valueForm, id_Form: newValue })
    setFormSelect({ ...formSelect, id_Form: newValue })
    formJSON_prueba_01.id_Form = formSelect.id_Form
  }
  function handleChangeCREADATEFORM(ev) {
    ev.preventDefault()
    const newValue = ev.target.value

    setValueForm({ ...valueForm, creation_date_Form: newValue })
    setFormSelect({ ...formSelect, creation_date_Form: newValue })
    formJSON_prueba_01.creation_date_Form = formSelect.creation_date_Form
  }
  function handleChangeVERSIONFORM(ev) {
    ev.preventDefault()
    const newValue = ev.target.value

    setValueForm({ ...valueForm, version_Form: newValue })
    setFormSelect({ ...formSelect, version_Form: newValue })
    formJSON_prueba_01.version_Form = formSelect.version_Form
  }
  const arrayValues = ["YES", "NOT"]
  let selectObject = ""
  function handleChangeREADONLYFORM(ev) {
    ev.preventDefault()
    let newValue = ev.target.value

    selectObject = arrayValues.find(value => value === newValue)
    if (selectObject === "YES") {
      newValue = true.toString()
    } else {
      newValue = false.toString()
    }

    setValueForm({ ...valueForm, readonly_Form: selectObject })
    setFormSelect({ ...formSelect, readonly_Form: newValue })
    formJSON_prueba_01.readonly_Form = formSelect.readonly_Form
  }
  function handleChangeDESCRIPTIONFORM(ev) {
    ev.preventDefault()
    const newValue = ev.target.value

    setValueForm({ ...valueForm, description_Form: newValue })
    setFormSelect({ ...formSelect, description_Form: newValue })
    //formJSON_prueba_01.description_Form = formSelect.description_Form
  }

  //  Add a block in the array "formSelect.blocks"
  //  Input "text" input of value the new block
  const [newBlock, setNewBlock] = useState(theContext.masterBlock)
  const [newArrayBlocks, setNewArrayBlocks] = useState(valueForm.blocks)

  useEffect(() => {
    setValueForm({ ...valueForm, blocks: newArrayBlocks })
    setFormSelect({ ...formSelect, blocks: newArrayBlocks })

    theContext.setArrayOfBlocks([...theContext.arrayOfBlocks, newBlock])
  }, [newArrayBlocks])

  function handleBlockSelect(ev) {
    ev.preventDefault()

    const blockSelectObject = formSelect.blocks.find(block => block.title_Block === ev.target.value)
    setIndexBlockSelect(formSelect.blocks.findIndex(block => block.title_Block === ev.target.value))
    setBlockSelect(blockSelectObject)
  }

  function handleAddBlock(ev) {
    ev.preventDefault()

    setNewBlock({ ...newBlock, title_Block: ev.target.value })
  }

  // Button "Add"
  function handleClickAddBlock(ev) {
    ev.preventDefault()

    setNewArrayBlocks([...newArrayBlocks, newBlock])
  }

  //  IMPORTANT !!
  useEffect(()=> {
    theContext.setFormObject(valueForm)
  }, [valueForm])


  return (
    <div id="accordionForm" className="accordion container-fluid graycolor400 d-flex flex-column justify-content-center align-items-center p-1 mx-auto mb-1">
      <div className="accordion-item rounded-0 container-fluid mx-auto graycolor400 border-0 " style={{ marginBottom: "0.3rem" }} >

        <HeaderHead
          idHeading={"headingForm"}
          dataTarget={"#collapseForm"}
          ariaControl={"collapseForm"}
          fontSize={"0.75rem"}
          title={TITLES_RCM_LEFT.FORM_HEAD}
          value={valueForm.title_Form}
        />

        <div id="collapseForm" className="accordion-collapse collapse ms-0" aria-labelledby="headingForm" data-bs-parent="#accordionForm">
          <div className="accordion-body p-0 mb-0">

            <div className="row d-flex justify-content-center align-items-center gap-1 m-1" >
              <div className="col-12 d-flex flex-row justify-content-start align-items-start m-0 p-1 bg-body">
                <FieldText
                  title={TITLES_RCM_LEFT.FORM_TITLE}
                  value={valueForm.title_Form}
                  fontSize={"0.64rem"}
                  action={handleChangeTITLEFORM}
                />
              </div>
            </div>

            <div className="row d-flex justify-content-center align-items-center gap-1 m-1">
              <div className="col-12 d-flex flex-row justify-content-start align-items-start m-0 p-1 bg-body">
                <FieldText
                  title={TITLES_RCM_LEFT.FORM_ID_TITLE}
                  value={valueForm.id_Form}
                  fontSize={"0.64rem"}
                  action={handleChangeIDFORM}
                />
              </div>
            </div>

            <div className="row d-flex justify-content-between align-items-center gap-1 m-1">
              <div className="col-4 d-flex flex-column justify-content-start align-items-center m-0 p-1 bg-body" style={{ height: "3.6rem" }}>
                <FieldData
                  title={TITLES_RCM_LEFT.FORM_DATE_CREATION}
                  value={valueForm.creation_date_Form}
                  fontSize={"0.64rem"}
                  action={handleChangeCREADATEFORM}
                />
              </div>

              <div className="col-4 d-flex flex-column justify-content-start align-items-center m-0 py-1 px-0 bg-body" style={{ height: "3.6rem" }}>
                <FieldText
                  title={TITLES_RCM_LEFT.FORM_VERSION}
                  value={valueForm.version_Form}
                  fontSize={"0.64rem"}
                  action={handleChangeVERSIONFORM}
                />
              </div>

              <div className="col d-flex flex-column justify-content-start align-items-center m-0 p-1 bg-body" style={{ height: "3.6rem" }}>
                <FieldSelect
                  title={TITLES_RCM_LEFT.FORM_READONLY}
                  value={valueForm.readonly_Form.toString().toUpperCase()}
                  fontSize={"0.64rem"}
                  arrayValues={arrayValues}
                  action={handleChangeREADONLYFORM}
                />
              </div>
            </div>

            <div className="row d-flex justify-content-start align-items-center gap-1 m-1">
              <div className="col-12 d-flex flex-column justify-content-start align-items-start m-0 p-1 bg-body">
                <FieldTextArea
                  title={TITLES_RCM_LEFT.FORM_DESCRIPTION}
                  value={valueForm.description_Form}
                  fontSize={"0.64rem"}
                  tooRead={theContext.tooRead}
                  action={handleChangeDESCRIPTIONFORM}
                />
              </div>
            </div>

            <div className="row d-flex justify-content-start align-items-center gap-1 m-1">
              <div className="col-12 d-flex flex-column justify-content-center align-items-start m-0 p-1 bg-body" >
                <FieldSelectAdd
                  title={TITLES_RCM_LEFT.FORM_BLOCKS}
                  value={valueForm.blocks}
                  fontSize={"0.64rem"}
                  fontSizeButton={"0.7rem"}
                  tooRead={theContext.tooRead}
                  action={handleBlockSelect}
                  actionAddButton={handleAddBlock}
                  actionClickAdd={handleClickAddBlock}
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default DataFormMenu;
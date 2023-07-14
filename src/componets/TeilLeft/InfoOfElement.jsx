import { useState, useEffect, useContext } from 'react'
import { MyContext } from '../../context/TheContext.jsx'
import ShowElements from './ShowElements.jsx';
import IconsElem from '../icons/IconsElem.jsx';  //  <<==  Iconos
import { TITLES_RCM_LEFT, TYPE_COMPONENTS, tableColorComponents } from '../../constants/contants.js';  //  Constants of Form
import '../../sass/componentSass/TeilLeft/InfoOfElement.scss'

import formJSON_prueba_01 from '../../Data/JSONFormPrueba_01.js';


function InfoOfElement({ formInput, setFormInput }) {
  const theContext = useContext(MyContext)

  //  Local state variable of ComponentShow:  [theContext.objComponentShow, theContext.setObjComponentShow]
  const [selectForm, setSelectForm] = useState(formInput)     //  <<===   User-selected Form
  const [blockSelect, setBlockSelect] = useState(formInput.blocks[0])          //  <<===   User-selected Block
  const [componentSelect, setComponentSelect] = useState(formInput.blocks[0].columns[0].components[0])  //  <<===   User-selected Component

  const [tooRead, setTooRead] = useState(true)
  const [tooModify, setTooModify] = useState(false)
  const [tooCreate, setTooCreate] = useState(false)

  const [selectComponent, setSelectComponent] = useState("")


  useEffect(() => {
    setSelectForm(formInput)
    setBlockSelect(formInput.blocks[0])
    setComponentSelect(formInput.blocks[0].columns[0].components[0])

    setSelectComponent(componentSelect)
    setTooRead(true)
    setTooModify(false)
    setTooCreate(false)
  }, [formInput])

  useEffect(() => {
    setSelectComponent(componentSelect)
  }, [componentSelect])

  useEffect(() => {
    // setSelectForm(theContext.formObject)

    setSelectComponent(theContext.objComponentShow)
  }, [theContext.objComponentShow])

  useEffect(() => {
    setTooRead(theContext.toogleReadLeft)
    setTooModify(theContext.toogleCreateLeft)
    setTooCreate(theContext.toogleModifyLeft)

    switch (theContext.optionState) {
      case "read":
        theContext.setObjComponentShow(theContext.componentRead)
        break;
      case "create":
        theContext.setObjComponentShow(theContext.componentCreate)
        break;
      case "modify":
        theContext.setObjComponentShow(theContext.componentModify)
        break;
      default:
        break;
    }
  }, [theContext.toogleReadLeft, theContext.toogleCreateLeft, theContext.toogleModifyLeft])

  function handleOnChangeComponent(ev) {
    ev.preventDefault();
    console.log("Se ha seleccionado a, ev.target.value:  ", ev.target.value)

    // setSelectComponent(ev.target.value)
    // theContext.setElement(selectComponent)
  }

  function handleBlockSelect(ev) {
    ev.preventDefault()
    const blockSelectObject = selectForm.blocks.find(block => block.title_Block === ev.target.value)
    setBlockSelect(blockSelectObject)
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

  // useEffect(() => {
  //   console.log("Hay componentes??  ", blockSelect.components)


  // }, [blockSelect])

  ////////////////////////////////////////////////  GESTION DE VARIABLES DE ESTADO DEL FORMULARIO   ///////////////////////////

  //  1.-  FORM
  const [valueForm, setValueForm] = useState(selectForm)

  useEffect(() => {
    formJSON_prueba_01.id_Form = valueForm.id_Form
    formJSON_prueba_01.title_Form = valueForm.title_Form
    formJSON_prueba_01.creation_date_Form = valueForm.creation_date_Form
    formJSON_prueba_01.version_Form = valueForm.version_Form
    formJSON_prueba_01.readonly_Form = valueForm.readonly_Form
    formJSON_prueba_01.description_Form = valueForm.description_Form
    formJSON_prueba_01.blocks = valueForm.blocks

    // setSelectForm(valueForm)
    setSelectForm(structuredClone(valueForm))
    theContext.setFormObject(valueForm)

  }, [valueForm])

  function handleChangeIDFORM(ev) {
    ev.preventDefault()
    const newValue = ev.target.value

    setValueForm({ ...valueForm, id_Form: newValue })
    setSelectForm({ selectForm, id_Form: newValue })
    formJSON_prueba_01.id_Form = selectForm.id_Form
  }
  function handleChangeTITLEFORM(ev) {
    ev.preventDefault()
    const newValue = ev.target.value

    setValueForm({ ...valueForm, title_Form: newValue })
    setSelectForm({ selectForm, title_Form: newValue })
    formJSON_prueba_01.title_Form = selectForm.title_Form
  }
  function handleChangeCREADATEFORM(ev) {
    ev.preventDefault()
    const newValue = ev.target.value

    setValueForm({ ...valueForm, creation_date_Form: newValue })
    setSelectForm({ selectForm, creation_date_Form: newValue })
    formJSON_prueba_01.creation_date_Form = selectForm.creation_date_Form
  }
  function handleChangeVERSIONFORM(ev) {
    ev.preventDefault()
    const newValue = ev.target.value

    setValueForm({ ...valueForm, version_Form: newValue })
    setSelectForm({ selectForm, version_Form: newValue })
    formJSON_prueba_01.version_Form = selectForm.version_Form
  }
  function handleChangeREADONLYFORM(ev) {
    ev.preventDefault()
    const arrayValues = ["YES", "NOT"]

    let newValue = ev.target.value
    const selectObject = arrayValues.find(value => value === newValue)
    if (selectObject === "YES") {
      newValue = true
    } else {
      newValue = false
    }

    setValueForm({ ...valueForm, readonly_Form: selectObject })
    setSelectForm({ selectForm, readonly_Form: newValue })
    formJSON_prueba_01.readonly_Form = selectForm.readonly_Form
  }
  function handleChangeDESCRIPTIONFORM(ev) {
    ev.preventDefault()
    const newValue = ev.target.value

    setValueForm({ ...valueForm, description_Form: newValue })
    setSelectForm({ selectForm, description_Form: newValue })
    formJSON_prueba_01.description_Form = selectForm.description_Form
  }

  //  Add a block in the array "selectForm.blocks"
  //  Input "text" input of value the new block
  const [newBlock, setNewBlock] = useState(theContext.masterBlock)
  const [newArrayBlocks, setNewArrayBlocks] = useState(selectForm.blocks)

  useEffect(() => {
    setValueForm({ ...valueForm, blocks: newArrayBlocks })
    setSelectForm({ ...selectForm, blocks: newArrayBlocks })

    theContext.setArrayOfBlocks([...theContext.arrayOfBlocks, newBlock])
  }, [newArrayBlocks])

  function handleAddBlock(ev) {
    ev.preventDefault()

    setNewBlock({ ...newBlock, title_Block: ev.target.value })
  }

  // Button "Add"
  function handleClickAddBlock(ev) {
    ev.preventDefault()

    setNewArrayBlocks([...newArrayBlocks, newBlock])
  }

  //   2.-  BLOCK
  const [valueBlock, setValueBlock] = useState(blockSelect)

  useEffect(() => {
    formJSON_prueba_01.blocks[formJSON_prueba_01.blocks.length - 1].id_Block = valueBlock.id_Block
    formJSON_prueba_01.blocks[formJSON_prueba_01.blocks.length - 1].title_Block = valueBlock.title_Block
    formJSON_prueba_01.blocks[formJSON_prueba_01.blocks.length - 1].ordenDisplay_Block = valueBlock.ordenDisplay_Block
    formJSON_prueba_01.blocks[formJSON_prueba_01.blocks.length - 1].label_Block = valueBlock.label_Block
    formJSON_prueba_01.blocks[formJSON_prueba_01.blocks.length - 1].description_Block= valueBlock.description_Block

    // setSelectForm(valueForm)
    setSelectForm(structuredClone(valueForm))
    theContext.setFormObject(valueForm)

  }, [valueBlock])

  function handleChangeIDBLOCK(ev) {
    ev.preventDefault()
    const newValue = ev.target.value

    setValueBlock({ ...valueBlock, id_Block: newValue })
    setBlockSelect({ blockSelect, id_Block: newValue })
    // formJSON_prueba_01.blocks.id_Block = blockSelect.id_Block
  }
  function handleChangeTITLEBLOCK(ev) {
    ev.preventDefault()
    const newValue = ev.target.value

    setValueBlock({ ...valueBlock, title_Block: newValue })
    setBlockSelect({ blockSelect, title_Block: newValue })
    // formJSON_prueba_01.title_Form = selectForm.title_Form
  }
  function handleChangeLABELBLOCK(ev) {
    ev.preventDefault()
    const newValue = ev.target.value

    setValueBlock({ ...valueBlock, label_Block: newValue })
    setBlockSelect({ blockSelect, label_Block: newValue })

  }
  function handleChangeDESCRIPTIONBLOCK(ev) {
    ev.preventDefault()
    const newValue = ev.target.value

    setValueBlock({ ...valueBlock, description_Block: newValue })
    setBlockSelect({ blockSelect, description_Block: newValue })
  }
  function handleChangeORDERBLOCK(ev) {
    ev.preventDefault()
    const newValue = ev.target.value

    setValueBlock({ ...valueBlock, ordenDisplay_Block: newValue })
    setBlockSelect({ blockSelect, ordenDisplay_Block: newValue })
  }




  //   3.-  COMPONENTS


  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center m-0 mx-auto p-0" >
      <div className="container-fluid d-flex flex-column justify-content-center align-items-center mx-auto bg-secondary" >
        <header className="d-flex flex-column justify-content-center align-items-center mx-auto py-1 mt-1 mb-2">
          <h6 className="text-white h6 fw-bold m-0 p-0">
            {TITLES_RCM_LEFT.TITLE_OF_SECTION}
          </h6>
          <h6 className={"fw-bold text-light m-0 p-0 py-1"} style={{ fontSize: "0.6rem" }}>
            {TITLES_RCM_LEFT.SUBTITLE_OF_SECTION}
          </h6>
        </header>

        {/*   ****    Form Data   **** */}
        <div id="accordionForm" className="accordion container-fluid graycolor400 d-flex flex-column justify-content-center align-items-center p-1 mx-auto mb-1">
          <div className="accordion-item rounded-0 container-fluid mx-auto graycolor400 border-0 " style={{ marginBottom: "0.3rem" }} >
            <header id="headingForm" className="accordion-header container d-flex flex-row justify-content-center align-items-center mx-auto p-0 ">
              <button className="accordion-button collapsed text-start fw-bold ms-1 mt-1 rounded-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseForm"
                aria-expanded="false" aria-controls="collapseForm"
                style={{ color: "navy", fontSize: "0.68rem", textShadow: "-4px -3px 4px rgba(0, 0, 0, 0.39), 2px 3px 4px rgba(0, 0, 0, 0.3)" }} >
                {TITLES_RCM_LEFT.FORM_HEAD}<span className={`ps-2 ms-2 ${tooRead ? 'text-black' : 'text-primary'}`}
                  style={{ fontSize: "0.7rem" }}>{selectForm.title_Form}</span>
              </button>
            </header>

            <div id="collapseForm" className="accordion-collapse collapse ms-0" aria-labelledby="headingForm" data-bs-parent="#accordionForm">
              <div className="accordion-body p-0 mb-0">

                <div className="row d-flex justify-content-start align-items-center gap-1 m-1">
                  <div className="col-12 d-flex flex-row justify-content-start align-items-start m-0 p-1 bg-body">
                    <span className="ms-1 p-1 fw-bold"
                      style={{ fontSize: "0.64rem", textShadow: "-4px -3px 4px rgba(0, 0, 0, 0.39), 2px 3px 4px rgba(0, 0, 0, 0.3)" }} >
                      {TITLES_RCM_LEFT.FORM_TITLE}
                    </span>
                    {
                      tooRead ?
                        <span className="ms-1 p-1 fw-normal" style={{ fontSize: "0.6rem" }} >
                          {selectForm.title_Form}
                        </span>
                        :
                        <input type="text" className="contInputText form-control ms-2 rounded-0 text-start" autoComplete="off" required={true}
                          placeholder={"Type Form Title ..."} size={18}
                          value={selectForm.title_Form} onChange={(ev) => handleChangeTITLEFORM(ev)} />
                    }
                  </div>
                </div>

                <div className="row d-flex justify-content-start align-items-center gap-1 m-1">
                  <div className="col-12 d-flex flex-row justify-content-start align-items-start m-0 p-1 bg-body">
                    <span className="ms-1 p-1 fw-bold"
                      style={{ fontSize: "0.64rem", textShadow: "-4px -3px 4px rgba(0, 0, 0, 0.39), 2px 3px 4px rgba(0, 0, 0, 0.3)" }} >
                      {TITLES_RCM_LEFT.FORM_ID_TITLE}
                    </span>
                    {
                      tooRead ?
                        <span className="ms-1 p-1 fw-normal" style={{ fontSize: "0.6rem" }} >
                          {selectForm.id_Form}
                        </span>
                        :
                        <input type="text" className="contInputText form-control ms-1 rounded-0 text-start" autoComplete="off" required={true}
                          placeholder={"Type Form Id ..."} size={15}
                          value={selectForm.id_Form} onChange={(ev) => handleChangeIDFORM(ev)} />
                    }
                  </div>
                </div>

                <div className="row d-flex justify-content-between align-items-center gap-1 m-1">
                  <div className="col-4 d-flex flex-column justify-content-start align-items-center m-0 p-1 bg-body" style={{ height: "3.6rem" }}>
                    <span className="ms-1 p-1 fw-bold"
                      style={{ fontSize: "0.64rem", textShadow: "-4px -3px 4px rgba(0, 0, 0, 0.39), 2px 3px 4px rgba(0, 0, 0, 0.3)" }} >
                      {TITLES_RCM_LEFT.FORM_DATE_CREATION}
                    </span>
                    {
                      tooRead ?
                        <span className="ms-1 p-1 fw-normal" style={{ fontSize: "0.6rem" }} >
                          {selectForm.creation_date_Form}
                        </span>
                        :
                        <input type="date" className="contInputDate form-control text-center rounded-0" required={true}
                          placeholder={"01/01/2023"} size={5}
                          value={selectForm.creation_date_Form} onChange={(ev) => handleChangeCREADATEFORM(ev)} />
                    }
                  </div>

                  <div className="col-4 d-flex flex-column justify-content-start align-items-center m-0 p-1 bg-body" style={{ height: "3.6rem" }}>
                    <span className="ms-1 p-1 fw-bold"
                      style={{ fontSize: "0.64rem", textShadow: "-4px -3px 4px rgba(0, 0, 0, 0.39), 2px 3px 4px rgba(0, 0, 0, 0.3)" }} >
                      {TITLES_RCM_LEFT.FORM_VERSION}
                    </span>
                    {
                      tooRead ?
                        <span className="ms-1 p-1 fw-normal" style={{ fontSize: "0.6rem" }} >
                          {selectForm.version_Form}
                        </span>
                        :
                        <input type="text" className="contInputText form-control ms-0 rounded-0 text-start" autoComplete="off" required={true}
                          placeholder={"Form Version ..."} size={8}
                          value={selectForm.version_Form} onChange={(ev) => handleChangeVERSIONFORM(ev)} />
                    }
                  </div>

                  <div className="col d-flex flex-column justify-content-start align-items-center m-0 p-1 bg-body" style={{ height: "3.6rem" }}>
                    <span className="ms-1 p-1 fw-bold"
                      style={{ fontSize: "0.64rem", textShadow: "-4px -3px 4px rgba(0, 0, 0, 0.39), 2px 3px 4px rgba(0, 0, 0, 0.3)" }} >
                      {TITLES_RCM_LEFT.FORM_READONLY}
                    </span>
                    {
                      tooRead ?
                        <span className="ms-1 p-1 fw-normal" style={{ fontSize: "0.6rem" }} >
                          {selectForm.readonly_Form ? "YES" : "NO"}
                        </span>
                        :
                        <select size="1" required={true} aria-label=".form-select-sm" className="contSelect rounded-0 container 
                        border border-secondary 
                        bg-white fw-bold p-1 my-1 mx-1 text-danger" style={{ fontSize: "0.6rem" }}
                          value={selectForm.readonly_Form} onChange={(ev) => handleChangeREADONLYFORM(ev)}
                        >
                          <option value="" className="fw-bold text-secondary text-danger"
                            style={{ color: "rgb(9, 9, 9)", fontSize: "0.65rem" }}>
                          </option>
                          <option className="fw-normal text-dark" Select>YES</option>
                          <option className="fw-normal text-dark">NO</option>
                        </select>
                    }
                  </div>
                </div>


                <div className="row d-flex justify-content-start align-items-center gap-1 m-1">
                  <div className="col-12 d-flex flex-column justify-content-start align-items-start m-0 p-1 bg-body">
                    <span className="ms-1 p-1 fw-bold"
                      style={{ fontSize: "0.64rem", textShadow: "-4px -3px 4px rgba(0, 0, 0, 0.39), 2px 3px 4px rgba(0, 0, 0, 0.3)" }} >
                      {TITLES_RCM_LEFT.FORM_DESCRIPTION}
                    </span>
                    {
                      tooRead ?
                        <textarea className="p-1 ms-2" required={true} disabled={true} autoComplete="off" readOnly={true} placeholder={""}
                          rows={3} cols={46} style={{ resize: "none", color: "rgb(9, 9, 9)", fontSize: "0.6rem" }} value={selectForm.description_Form}>
                        </textarea>
                        :
                        <textarea className="contAreaText p-1 ms-2" required={true} disabled={false} autoComplete="off" readOnly={false} placeholder={""}
                          rows={3} cols={46} style={{ resize: "none", color: "rgb(9, 9, 9)", fontSize: "0.6rem" }}
                          value={selectForm.description_Form} onChange={(ev) => handleChangeDESCRIPTIONFORM(ev)} >
                        </textarea>
                    }
                  </div>
                </div>

                <div className="row d-flex justify-content-start align-items-center gap-1 m-1">
                  <div className="col-12 d-flex flex-column justify-content-center align-items-start m-0 p-1 bg-body" >
                    <span id="id_select_blocks" className="ms-1 p-1 fw-bold"
                      style={{ fontSize: "0.64rem", textShadow: "-4px -3px 4px rgba(0, 0, 0, 0.39), 2px 3px 4px rgba(0, 0, 0, 0.3)" }} >
                      {TITLES_RCM_LEFT.FORM_BLOCKS}
                    </span>
                    {
                      tooRead ?
                        <select id="id_select_blocks" size="1" required disabled={false}
                          className="contSelect rounded-0 container border border-secondary bg-white fw-bold p-1 my-1 mx-1 me-2 text-danger"
                          onChange={(ev) => handleBlockSelect(ev)}
                          style={{ color: "rgb(9, 9, 9)", fontSize: "0.6rem" }} >

                          <option value="select" className="fw-bold text-secondary text-center text-danger"
                            style={{ fontSize: "0.65rem" }}>
                            Select
                          </option>
                          {
                            Array.isArray(selectForm.blocks) &&
                            selectForm.blocks.map(block => <option key={block.id_Block} value={block.title_Block} className="fw-normal text-dark">{block.title_Block}</option>)
                          }
                        </select>
                        :
                        <div className="container d-flex flex-column justify-content-center align-items-start m-0 p-0" >

                          <div className="row container-fluid d-flex justify-content-between align-items-start m-0 p-0 gap-1" >
                            <div className="col-8 mx-auto p-0">
                              <input type="text" className="contInputText form-control ms-1 rounded-0 text-start" autoComplete="off" required={true}
                                placeholder={"Add block ..."} size={15}
                                onChange={(ev) => handleAddBlock(ev)} />
                            </div>

                            <div className="col-2  offset-md-2 mx-auto p-0">
                              <button type="button" class="btn btn-sm btn-outline-success p-0 px-3" style={{ height: "1.68rem" }}
                                onClick={(ev) => handleClickAddBlock(ev)}>
                                <span className="text-center fw-bold" style={{ fontSize: "0.7rem" }}>
                                  Add
                                </span>
                              </button>
                            </div>
                          </div>

                          <div className="row container m-0 p-0">
                            <select id="id_select_blocks" size="1" required disabled={false}
                              className="contSelect col rounded-0 container border border-secondary bg-white fw-bold p-1 my-1 mx-1 text-danger"
                              onChange={(ev) => handleBlockSelect(ev)}
                              style={{ color: "rgb(9, 9, 9)", fontSize: "0.6rem", width: "auto" }} >

                              <option value="select" className="fw-bold text-secondary text-center text-danger"
                                style={{ fontSize: "0.65rem" }}>
                                Select
                              </option>
                              {
                                Array.isArray(selectForm.blocks) &&
                                selectForm.blocks.map(block => <option key={block.id_Block} value={block.title_Block} className="fw-normal text-dark">{block.title_Block}</option>)
                              }
                            </select>
                          </div>
                        </div>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*   ****    Block Data   **** */}
        <div id="accordionBlock" className="accordion container graycolor400 d-flex flex-column justify-content-center align-items-center p-1 mx-auto mb-1">
          <div className="accordion-item rounded-0 container-fluid mx-auto graycolor400 border-0 " style={{ marginBottom: "0.3rem" }}>
            <header id="headingBlock" className="accordion-header container d-flex flex-row justify-content-center align-items-center mx-auto p-0 ">
              <button className="accordion-button collapsed text-start fw-bold ms-1 mt-1 rounded-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseBlock"
                aria-expanded="false" aria-controls="collapseBlock"
                style={{ color: "navy", fontSize: "0.68rem", textShadow: "-4px -3px 4px rgba(0, 0, 0, 0.39), 2px 3px 4px rgba(0, 0, 0, 0.3)" }}>
                {TITLES_RCM_LEFT.BLOCK_HEAD}<span className={`ps-2 ms-2 ${tooRead ? 'text-black' : 'text-primary'}`}
                  style={{ fontSize: "0.7rem" }}>{blockSelect.title_Block}</span>
              </button>
            </header>

            <div id="collapseBlock" className="accordion-collapse collapse m-0" aria-labelledby="headingBlock" data-bs-parent="#accordionBlock">
              <div className="accordion-body p-0 mb-0">

                <div className="row d-flex justify-content-start align-items-center gap-1 m-1">
                  <div className="col-12 d-flex flex-row justify-content-start align-items-start m-0 p-1 bg-body">
                    <span className="ms-1 p-1 fw-bold"
                      style={{ fontSize: "0.64rem", textShadow: "-4px -3px 4px rgba(0, 0, 0, 0.39), 2px 3px 4px rgba(0, 0, 0, 0.3)" }} >
                      {TITLES_RCM_LEFT.BLOCK_TITLE}
                    </span>
                    {
                      tooRead ?
                        <span className="ms-1 p-1 fw-normal" style={{ fontSize: "0.6rem" }} >
                          {blockSelect.title_Block}
                        </span>
                        :
                        <input type="text" className="contInputText form-control ms-2 rounded-0 text-start" autoComplete="off" required={true}
                          value={blockSelect.title_Block} onChange={(ev) => handleChangeTITLEBLOCK(ev)}
                          placeholder={"Type Block Title ..."} size={15} />
                    }

                  </div>
                </div>

                <div className="row d-flex justify-content-start align-items-center gap-1 m-1">
                  <div className="col-12 d-flex flex-row justify-content-start align-items-start m-0 m-0 p-1 bg-body">
                    <span className="ms-1 p-1 fw-bold"
                      style={{ fontSize: "0.64rem", textShadow: "-4px -3px 4px rgba(0, 0, 0, 0.39), 2px 3px 4px rgba(0, 0, 0, 0.3)" }} >
                      {TITLES_RCM_LEFT.BLOCK_ID_TITLE}
                    </span>
                    {
                      tooRead ?
                        <span className="ms-1 p-1 fw-normal" style={{ fontSize: "0.6rem" }} >
                          {blockSelect.id_Block}
                        </span>
                        :
                        <input type="text" className="contInputText form-control ms-2 rounded-0 text-start" autoComplete="off" required={true}
                          placeholder={"Type Block Id ..."} size={15}
                          value={blockSelect.id_Block} onChange={(ev) => handleChangeIDBLOCK(ev)}
                        />
                    }
                  </div>
                </div>

                <div className="row d-flex justify-content-start align-items-center gap-1 m-1">
                  <div className="col-12 d-flex flex-row justify-content-start align-items-start m-0 p-1 bg-body">
                    <span className="ms-1 p-1 fw-bold"
                      style={{ fontSize: "0.64rem", textShadow: "-4px -3px 4px rgba(0, 0, 0, 0.39), 2px 3px 4px rgba(0, 0, 0, 0.3)" }} >
                      {TITLES_RCM_LEFT.BLOCK_LABEL}
                    </span>
                    {
                      tooRead ?
                        <span className="ms-1 p-1 fw-normal" style={{ fontSize: "0.6rem" }} >
                          {blockSelect.label_Block}
                        </span>
                        :
                        <input type="text" className="contInputText form-control ms-2 rounded-0 text-start" autoComplete="off" required={true}
                          placeholder={"Type Block Label ..."} size={15} 
                          value={blockSelect.label_Block} onChange={(ev) => handleChangeLABELBLOCK(ev)}/>
                    }
                  </div>
                </div>

                <div className="row d-flex justify-content-start align-items-center gap-1 m-1">
                  <div className="col-12 d-flex flex-column justify-content-start align-items-start m-0 p-1 bg-body">
                    <span className="ms-1 p-1 fw-bold"
                      style={{ fontSize: "0.64rem", textShadow: "-4px -3px 4px rgba(0, 0, 0, 0.39), 2px 3px 4px rgba(0, 0, 0, 0.3)" }} >
                      {TITLES_RCM_LEFT.BLOCK_DESCRIPTION}
                    </span>
                    {
                      tooRead ?
                        <textarea className="p-1 ms-2" required={true} disabled={true} autoComplete="off" readOnly={true} placeholder={""}
                          rows={3} cols={46} style={{ resize: "none", color: "rgb(9, 9, 9)", fontSize: "0.6rem" }} value={blockSelect.description_Block}>
                        </textarea>
                        :
                        <textarea className="contAreaText p-1 ms-2" required={true} disabled={false} autoComplete="off" readOnly={false} placeholder={""}
                          rows={3} cols={46} style={{ resize: "none", color: "rgb(9, 9, 9)", fontSize: "0.6rem" }} 
                          value={blockSelect.description_Block} onChange={(ev) => handleChangeDESCRIPTIONBLOCK(ev)}>
                        </textarea>
                    }
                  </div>
                </div>

                <div className="row d-flex justify-content-start align-items-center gap-1 m-1">
                  <div className="col-8 d-flex flex-column justify-content-center align-items-center m-0 p-1 bg-body" style={{ height: "3.4rem" }} >
                    <span id="id_span_componets" className="ms-1 p-1 fw-bold"
                      style={{ fontSize: "0.64rem", textShadow: "-4px -3px 4px rgba(0, 0, 0, 0.39), 2px 3px 4px rgba(0, 0, 0, 0.3)" }} >
                      {TITLES_RCM_LEFT.BLOCK_COMPONENTS}
                    </span>
                    <select id="id_select_components" size="1" required disabled={false}
                      className="contSelect rounded-0 container border border-secondary bg-white fw-bold p-1 my-1 mx-1 text-danger"
                      onChange={(ev) => handleComponentSelect(ev)}
                      style={{ color: "rgb(9, 9, 9)", fontSize: "0.6rem" }} >

                      <option value="select" className="fw-bold text-secondary text-center text-danger"
                        style={{ fontSize: "0.65rem" }}>
                        Select
                      </option>

                      {
                        Array.isArray(blockSelect.columns) &&
                        blockSelect.columns[0].components.map(component => <option key={component.id_Element} value={component.title_Element} className="fw-normal text-dark">{component.title_Element}</option>)
                      }
                    </select>
                  </div>

                  <div className="col d-flex flex-column justify-content-center align-items-center m-0 p-1 bg-body" style={{ height: "3.4rem" }} >
                    <span id="id_select_blocks" className="p-0 m-0 fw-bold"
                      style={{ fontSize: "0.64rem", textShadow: "-4px -3px 4px rgba(0, 0, 0, 0.39), 2px 3px 4px rgba(0, 0, 0, 0.3)" }} >
                      {TITLES_RCM_LEFT.BLOCK_ORDER_DISPLAY}
                    </span>
                    {
                      tooRead ?
                        <span className="p-1 fw-normal" style={{ fontSize: "0.6rem" }} >
                          {blockSelect.ordenDisplay_Block}
                        </span>
                        :
                        <input id="id_order_blocks" type="number" className="contInputNumber rounded-0 border border-secondary bg-white fw-bold p-1 gap-1"
                          required disabled={true} size="1" placeholder={0} min="0" max={100}
                          value={blockSelect.ordenDisplay_Block} onChange={(ev) => handleChangeORDERBLOCK(ev)}
                          style={{ color: "rgb(9, 9, 9)", fontSize: "0.65rem", height: "1.4rem", width: "2rem" }} />
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*   ****    Component Show   **** */}
      <div className="container-fluid bg-secondary d-flex flex-column justify-content-center align-items-center py-2 px-3 mx-auto my-1">
        <div className="row container-fluid d-flex justify-content-center align-items-center gap-0 my-1 mx-auto bg-secondary">
          <div className="col bg-body mx-1 p-2 graycolor400">
            <ShowElements
              type_Element={componentSelect.type_Element}
              componentSelect={componentSelect}
            />
          </div>
        </div>
      </div>

      {/* ****     2.-  Menu Left:  Icons - Components    **** */}
      {
        theContext.optionState !== 'read' &&
        <div className="row p-1">
          <IconsElem
            height={"0.81"}
          // situation={"componentInfo"}
          />
        </div>
      }

      {/*   ****    Component Data   **** */}
      <div className="container-fluid d-flex flex-column justify-content-center align-items-center mx-auto bg-secondary" >
        <div id="accordionComponent" className="accordion container-fluid graycolor400 d-flex flex-column justify-content-center align-items-center p-1 mx-auto my-1">
          <div className="accordion-item rounded-0 container-fluid mx-auto graycolor400 border-0 " style={{ marginBottom: "0.3rem" }} >
            <header id="headingComponent" className="accordion-header container d-flex flex-row justify-content-start align-items-center mx-auto p-0">
              <button className="accordion-button collapsed text-start fw-bold ms-1 mt-1 rounded-0" type="button" data-bs-toggle="collapse" data-bs-target="#collapseComponent"
                aria-expanded="false" aria-controls="collapseBlock"
                style={{ color: "navy", fontSize: "0.68rem", textShadow: "-4px -3px 4px rgba(0, 0, 0, 0.39), 2px 3px 4px rgba(0, 0, 0, 0.3)" }}>
                {TITLES_RCM_LEFT.COMPONENT_HEAD}
                <span className={`ps-2 ms-2 ${tooRead ? 'text-black' : 'text-primary'}`}
                  style={{ fontSize: "0.7rem" }}>
                  {componentSelect.title_Element}
                </span>
              </button>
            </header>

            <div id="collapseComponent" className="accordion-collapse collapse m-0" aria-labelledby="headingComponent" data-bs-parent="#accordionComponent">
              <div className="accordion-body p-0 mb-0">

                <div className="row d-flex justify-content-start align-items-center gap-1 m-1">

                  {/* //    *******************************************************************************************************************************  //
          Esto no funciona, pensar como segun la opcion seleccionada en el select se dibuja o selecciona para dibujar el 
          componente seleccionado.  Hay que mirar y hacer pruebas, un "select", las opciones del "nombre" del componente, 
          al seleccionar uno inmediatamente debe mostrar arriba el componente seleccionado, los datos del componente no cambian  */}

                  <div className={`col-3 d-flex ${tooRead ? "flex-row" : "flex-column"} justify-content-center align-items-center m-0 mt-1 p-1 bg-body `}>
                    <span className="ms-0 p-1 fw-bold"
                      style={{ fontSize: "0.64rem", textShadow: "-4px -3px 4px rgba(0, 0, 0, 0.39), 2px 3px 4px rgba(0, 0, 0, 0.3)" }} >
                      {TITLES_RCM_LEFT.COMPONENT_TYPE}
                    </span>
                    {
                      tooRead ?
                        <span className="ms-0 p-1 fw-normal" style={{ fontSize: "0.6rem" }} >
                          {componentSelect.type_Element}
                        </span>
                        :
                        <select id="id_selectType_Comp" disabled={false}
                          className="contSelect form-select-sm rounded-0 border border-secondary bg-white fw-bold p-1 my-1 mx-0 text-danger"
                          aria-label=".form-select-sm" required={true} size="1" defaultValue="Select"
                          value={componentSelect} onChange={(ev) => handleCompSelectObj(ev)}
                          style={{ color: "rgb(9, 9, 9)", fontSize: "0.55rem", width: "3.6rem" }} >

                          <option value="select" className="fw-bold text-secondary text-danger" style={{ fontSize: "0.58rem" }}>
                            Select
                          </option>
                          {
                            Array.isArray(TYPE_COMPONENTS) &&
                            TYPE_COMPONENTS.map(component => <option key={component.id_Component} value={component.title} className="fw-normal text-start text-dark">{component.title}</option>)
                          }
                        </select>
                    }
                  </div>
                  {/* //    *******************************************************************************************************************************  // */}

                  <div className={`col-6 d-flex ${tooRead ? "flex-row" : "flex-column"} justify-content-start align-items-start m-0 mt-1 p-1 bg-body `}>
                    <span className="p-1 fw-bold"
                      style={{ fontSize: "0.64rem", textShadow: "-4px -3px 4px rgba(0, 0, 0, 0.39), 2px 3px 4px rgba(0, 0, 0, 0.3)" }} >
                      {TITLES_RCM_LEFT.COMPONENT_ID}
                    </span>
                    {
                      tooRead ?
                        <span className="p-1 fw-normal" style={{ fontSize: "0.6rem" }} >
                          {componentSelect.id_Element}
                        </span>
                        :
                        <input type="text" className="contInputText form-control mx-auto my-1 p-1 rounded-0 text-start" autoComplete="off" required={true}
                          placeholder={"Type Id..."} size={18} />
                    }
                  </div>
                  <div className={`col d-flex ${tooRead ? "flex-row p-1" : "flex-column p-2"} justify-content-start align-items-start m-0 mt-1 bg-body `}>
                    <span className="p-1 fw-bold"
                      style={{ fontSize: "0.64rem", textShadow: "-4px -3px 4px rgba(0, 0, 0, 0.39), 2px 3px 4px rgba(0, 0, 0, 0.3)" }} >
                      {TITLES_RCM_LEFT.COMPONENT_DISPLAY_ORDER}
                    </span>
                    {
                      tooRead ?
                        <span className="p-1 fw-normal" style={{ fontSize: "0.6rem" }}>
                          {componentSelect.orderInBlock}
                        </span>
                        :
                        <input type="number" className="contInputNumber form-control mx-auto rounded-0 text-center" required={true}
                          placeholder="0" min="0" max={Math.pow(10, parseInt(3, 10)) - 1} />
                    }

                  </div>
                </div>

                <div className="row d-flex justify-content-start align-items-center gap-1 m-1">
                  <div className="col d-flex flex-row justify-content-start align-items-start m-0 mt-1 p-1 bg-body">
                    <span className="ms-0 p-1 fw-bold"
                      style={{ fontSize: "0.64rem", textShadow: "-4px -3px 4px rgba(0, 0, 0, 0.39), 2px 3px 4px rgba(0, 0, 0, 0.3)" }} >
                      {TITLES_RCM_LEFT.COMPONENT_LABEL}
                    </span>
                    {
                      tooRead ?
                        <span className="ms-0 p-1 fw-normal" style={{ fontSize: "0.6rem" }} >{componentSelect.label_Element}</span>
                        :
                        <input type="text" className="contInputText form-control mx-1 p-1 rounded-0 text-start" autoComplete="off" required={true}
                          placeholder={"Type label..."} size={30} />
                    }
                  </div>
                </div>

                <div className="row d-flex justify-content-start align-items-center gap-1 m-1">
                  <div className={`col ${tooRead ? "mx-1" : "d-flex flex-row justify-content-center align-items-center mx-auto"} mt-1 p-1 bg-body`}>
                    <span className="ms-0 p-1 fw-bold"
                      style={{ fontSize: "0.64rem", textShadow: "-4px -3px 4px rgba(0, 0, 0, 0.39), 2px 3px 4px rgba(0, 0, 0, 0.3)" }} >
                      {TITLES_RCM_LEFT.COMPONENT_REQUIRED_ASK}
                    </span>
                    {
                      tooRead ?
                        <span className="ms-0 p-1 fw-normal" style={{ fontSize: "0.6rem" }} >{componentSelect.required + ""}</span>
                        :
                        <select className="contSelect form-select-sm rounded-0 border border-secondary bg-white fw-normal p-1 my-1 mx-0 text-dark"
                          aria-label=".form-select-sm" required={true} size="1" defaultValue="Select"
                          style={{ color: "rgb(9, 9, 9)", fontSize: "0.55rem", width: "3.6rem" }} >
                          <option disabled value="true" className="text-danger fw-bold px-1">Select</option>
                          <option value="true">True</option>
                          <option value="false">False</option>
                        </select>
                    }
                  </div>
                  <div className={`col ${tooRead ? "mx-1" : "d-flex flex-row justify-content-center align-items-center mx-auto"} mt-1 p-1 bg-body`}>
                    <span className="ms-0 p-1 fw-bold"
                      style={{ fontSize: "0.64rem", textShadow: "-4px -3px 4px rgba(0, 0, 0, 0.39), 2px 3px 4px rgba(0, 0, 0, 0.3)" }} >
                      {TITLES_RCM_LEFT.COMPONENT_DISABLED_ASK}
                    </span>
                    {
                      tooRead ?
                        <span className="ms-0 p-1 fw-normal" style={{ fontSize: "0.6rem" }} >{componentSelect.disabled + ""}</span>
                        :
                        <select className="contSelect form-select-sm rounded-0 border border-secondary bg-white fw-normal p-1 my-1 mx-0 text-dark"
                          aria-label=".form-select-sm" required={true} size="1" defaultValue="select"
                          style={{ color: "rgb(9, 9, 9)", fontSize: "0.55rem", width: "3.6rem" }} >
                          <option disabled value="select" className="text-danger fw-bold px-1">Select</option>
                          <option value="true">True</option>
                          <option value="false">False</option>
                        </select>
                    }
                  </div>
                </div>

                <div className="row d-flex justify-content-start align-items-center gap-1 m-1">
                  <div className={`col-8 d-flex ${tooRead ? "flex-row align-items-center " : "flex-column align-items-start"} m-0 mt-1 p-1 bg-body `}>
                    <span className="ms-0 p-1 fw-bold"
                      style={{ fontSize: "0.64rem", textShadow: "-4px -3px 4px rgba(0, 0, 0, 0.39), 2px 3px 4px rgba(0, 0, 0, 0.3)" }} >
                      {TITLES_RCM_LEFT.COMPONENT_PLACEHOLDER}
                    </span>
                    {
                      tooRead ?
                        <span className="ms-0 p-1 fw-normal" style={{ fontSize: "0.6rem" }} >{componentSelect.placeholder}</span>
                        :
                        theContext.objComponentShow.type !== "select" ?
                          <div className="d-flex flex-row justify-content-center align-items-center mx-1">
                            <input type="text" className="contInputText form-control mx-1 rounded-0 text-start" autoComplete="off" required={true}
                              placeholder={"Default..."} size={24} />
                          </div>
                          :
                          <div className="d-flex flex-row justify-content-center align-items-center gap-1">
                            <input type="text" className="contInputText form-control mx-1 rounded-0 text-start" autoComplete="off" required={true}
                              placeholder={"Default..."} size={18} />
                            <button type="button" className="btn btn-sm btn-success fw-bold mx-auto"
                              style={{ width: "1.9rem", height: "1.3rem", fontSize: "0.55rem" }}>Add</button>
                          </div>
                    }
                  </div>
                  <div className="col d-flex flex-row justify-content-start align-items-center m-0 mt-1 p-1 bg-body" >
                    <span className="ms-0 p-1 fw-bold"
                      style={{ fontSize: "0.64rem", textShadow: "-4px -3px 4px rgba(0, 0, 0, 0.39), 2px 3px 4px rgba(0, 0, 0, 0.3)" }} >
                      {TITLES_RCM_LEFT.COMPONENT_SIZE}
                    </span>
                    {
                      tooRead ?
                        <span className="ms-0 p-1 fw-normal" style={{ fontSize: "0.6rem" }} >{componentSelect.size}</span>
                        :
                        <div className="d-flex flex-row justify-content-center align-items-center mx-auto" style={{ height: "3.2rem" }} >
                          <input type="number" className="contInputNumber form-control mx-auto rounded-0 text-center" required={true}
                            placeholder="0" min="0" max={Math.pow(10, parseInt(3, 10)) - 1} />
                        </div>
                    }
                  </div>

                </div>

                {
                  (componentSelect.type_Element === "textArea" || componentSelect.type_Element === "select" || componentSelect.type_Element === "checkbox") &&
                  <p> Hola pepsicola</p>
                }

                <div className="row d-flex justify-content-start align-items-center gap-1 m-1">
                  <div className={`col-4 ${tooRead ? "flex-row  align-items-center" : "flex-column align-items-start"} justify-content-start m-0 mt-1 p-1 bg-body`}>
                    <span className="ms-0 p-1 fw-bold"
                      style={{ fontSize: "0.64rem", textShadow: "-4px -3px 4px rgba(0, 0, 0, 0.39), 2px 3px 4px rgba(0, 0, 0, 0.3)" }} >
                      {TITLES_RCM_LEFT.COMPONENT_BORDER}
                    </span>
                    {
                      tooRead ?
                        <span className="ms-0 p-1 fw-normal" style={{ fontSize: "0.6rem" }} >{componentSelect.borderElement + ""}</span>
                        :
                        <select id="id_selectBorder_Comp" disabled={false}
                          className="contSelect form-select-sm rounded-0 border border-secondary bg-white fw-bold p-1 my-1 mx-0 text-danger"
                          aria-label=".form-select-sm" required={true} size="1" defaultValue="Select"
                          // value={componentSelect} onChange={(ev) => handleCompSelectObj(ev)}
                          style={{ color: "rgb(9, 9, 9)", fontSize: "0.55rem", width: "3.6rem" }} >

                          <option value="select" className="fw-bold text-secondary text-danger" style={{ fontSize: "0.60rem" }}>Select</option>
                          <option value="YES" className="fw-normal text-secondary text-black" style={{ fontSize: "0.58rem" }}>YES</option>
                          <option value="NO" className="fw-normal text-secondary text-black" style={{ fontSize: "0.58rem" }}>NO</option>

                        </select>
                    }
                  </div>
                  <div className="col-4 flex-row justify-content-start align-items-center m-0 mt-1 p-1 bg-body">
                    <span className="ms-0 p-1 fw-bold"
                      style={{ fontSize: "0.64rem", textShadow: "-4px -3px 4px rgba(0, 0, 0, 0.39), 2px 3px 4px rgba(0, 0, 0, 0.3)" }} >
                      {TITLES_RCM_LEFT.COMPONENT_COLOR}
                    </span>
                    {
                      tooRead ?
                        <span className="ms-0 p-1 fw-normal" style={{ fontSize: "0.6rem" }} >{componentSelect.colorElement}</span>
                        :
                        <select id="id_selectColor_Comp" disabled={false}
                          className="contSelect form-select-sm rounded-0 border border-secondary bg-white fw-bold p-1 my-1 mx-0 text-danger"
                          aria-label=".form-select-sm" required={true} size="1" defaultValue="Select"
                          // value={componentSelect} onChange={(ev) => handleCompSelectObj(ev)}
                          style={{ color: "rgb(9, 9, 9)", fontSize: "0.6rem", width: "5.2rem" }} >

                          <option value="select" className="fw-bold text-secondary text-danger" style={{ fontSize: "0.60rem" }}>Select</option>
                          {tableColorComponents.map(color => {
                            return (
                              <option key={color.code} className="fw-bolder graycolor400"
                                style={{ fontSize: "0.58rem", color: `${color.code}` }}>
                                {color.color}
                              </option>
                            )
                          })
                          }
                        </select>
                    }


                  </div>
                  <div className={`col ${tooRead ? "flex-row justify-content-start ms-1" : "flex-column justify-content-center ms-2"} align-items-center mt-1 p-1 bg-body`} >
                    <span className="ms-0 p-1 fw-bold"
                      style={{ fontSize: "0.64rem", textShadow: "-4px -3px 4px rgba(0, 0, 0, 0.39), 2px 3px 4px rgba(0, 0, 0, 0.3)" }} >
                      {TITLES_RCM_LEFT.COMPONENT_FONT_SIZE}
                    </span>
                    {
                      tooRead ?
                        <span className="ms-1 fw-normal" style={{ fontSize: "0.65rem" }} >
                          {componentSelect.fontSizeElement}
                        </span>
                        :
                        <div style={{ height: "2.1rem" }}>
                          <input type="number" className="contInputNumber form-control ms-1 rounded-0" required={true}
                            placeholder="0" min="0" max={Math.pow(10, parseInt(2, 10)) - 1} />
                        </div>
                    }
                  </div>
                </div>

                <div className="row d-flex justify-content-start align-items-center gap-1 m-1">
                  <div className={`col-12 d-flex ${tooRead ? "flex-row" : "flex-column"} justify-content-start align-items-center m-0 mt-1 p-1 bg-body`}>
                    <div className={`d-flex ${tooRead ? "col-5 flex-column align-items-start" : "col-12 flex-row align-items-center"} justify-content-start bg-body p-1 me-1`}>
                      <span className="ms-0 p-1 fw-bold"
                        style={{ fontSize: "0.64rem", textShadow: "-4px -3px 4px rgba(0, 0, 0, 0.39), 2px 3px 4px rgba(0, 0, 0, 0.3)" }} >
                        {TITLES_RCM_LEFT.COMPONENT_POSITION}
                      </span>
                      <div className="d-flex flex-row justify-content-center align-items-center gx-1 mx-2">
                        <span className="ms-0 p-1 fw-bold"
                          style={{ fontSize: "0.64rem", textShadow: "-4px -3px 4px rgba(0, 0, 0, 0.39), 2px 3px 4px rgba(0, 0, 0, 0.3)" }} >
                          {TITLES_RCM_LEFT.COMPONENT_POSITION_ROW}
                        </span>
                        {
                          tooRead ?
                            <span className="ms-1 fw-normal" style={{ fontSize: "0.65rem" }} >{componentSelect.position === undefined ? 0 : componentSelect.position.rowElem}</span>
                            :
                            <input type="number" className="contInputNumber form-control ms-1 rounded-0" required={true}
                              placeholder="0" min="0" max={Math.pow(10, parseInt(2, 10)) - 1} />
                        }
                        <span className="ms-0 p-1 fw-bold"
                          style={{ fontSize: "0.64rem", textShadow: "-4px -3px 4px rgba(0, 0, 0, 0.39), 2px 3px 4px rgba(0, 0, 0, 0.3)" }} >
                          {TITLES_RCM_LEFT.COMPONENT_POSITION_COLUMN}
                        </span>
                        {
                          tooRead ?
                            <span className="ms-1 fw-normal" style={{ fontSize: "0.65rem" }} >{componentSelect.position === undefined ? 0 : componentSelect.position.colElem}</span>
                            :
                            <input type="number" className="contInputNumber form-control ms-1 rounded-0" required={true}
                              placeholder="0" min="0" max={12} />
                        }
                      </div>
                    </div>
                    <div className={`d-flex ${tooRead ? "col-5 flex-column align-items-start" : "col-12 flex-row align-items-center"} justify-content-start bg-body p-1 me-1`}>
                      <span className="ms-0 p-1 fw-bold"
                        style={{ fontSize: "0.64rem", textShadow: "-4px -3px 4px rgba(0, 0, 0, 0.39), 2px 3px 4px rgba(0, 0, 0, 0.3)" }} >
                        {TITLES_RCM_LEFT.COMPONENT_DIMENSION}
                      </span>
                      <div className="d-flex flex-row justify-content-center align-items-center gx-1 mx-2">
                        <span className="ms-0 p-1 fw-bold"
                          style={{ fontSize: "0.64rem", textShadow: "-4px -3px 4px rgba(0, 0, 0, 0.39), 2px 3px 4px rgba(0, 0, 0, 0.3)" }} >
                          {TITLES_RCM_LEFT.COMPONENT_DIMENSION_WIDTH}
                        </span>
                        {
                          tooRead ?
                            <span className="mx-1 fw-normal" style={{ fontSize: "0.65rem" }} >{componentSelect.dimension === undefined ? "0" : componentSelect.dimension.width}</span>
                            :
                            <input type="number" className="contInputNumber form-control mx-1 rounded-0" required={true}
                              placeholder="0" min="0" max={12} />
                        }
                        <span className="ms-0 p-1 fw-bold"
                          style={{ fontSize: "0.64rem", textShadow: "-4px -3px 4px rgba(0, 0, 0, 0.39), 2px 3px 4px rgba(0, 0, 0, 0.3)" }} >
                          {TITLES_RCM_LEFT.COMPONENT_DIMENSION_HEIGHT}
                        </span>
                        {
                          <span className="mx-1 fw-normal" style={{ fontSize: "0.65rem" }} >{componentSelect.dimension === undefined ? "2.4rem" : componentSelect.dimension.height}</span>
                          // tooRead ?
                          //   <span className="valuePosDim">{componentSelect.dimension.height}</span>
                          //   :
                          //   <span className="valuePosDim">{componentSelect.dimension.height}</span>
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoOfElement;









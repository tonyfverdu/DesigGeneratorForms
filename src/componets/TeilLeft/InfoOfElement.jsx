import { useState, useEffect, useContext } from 'react'
import { MyContext } from '../../context/TheContext.jsx'
import ShowElements from './ShowElements.jsx';
import { TITLES_RCM_LEFT } from '../../constants/contants.js';  //  Constants of Form
import '../../sass/componentSass/TeilLeft/InfoOfElement.scss'


function InfoOfElement() {
  const theContext = useContext(MyContext)

  const [tooRead, setTooRead] = useState(false)
  const [tooModify, setTooModify] = useState(false)
  const [tooCreate, setTooCreate] = useState(false)

  //  Local state variable of ComponentShow:  [theContext.objComponentShow, theContext.setObjComponentShow]
  const [selectForm, setSelectForm] = useState(theContext.formObject)
  const [selectComponent, setSelectComponent] = useState("")
  const [blockSelect, setBlockSelect] = useState({})
  const [componentSelect, setComponentSelect] = useState({})

  useEffect(() => {
    setSelectForm(theContext.formObject)
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
    const blockSelectObject = selectForm.blocks.find(block => block.label_Block === ev.target.value)
    setBlockSelect(blockSelectObject)
  }

  function handleComponentSelect(ev) {
    ev.preventDefault()
    if (Array.isArray(blockSelect.components)) {
      const componentSelectObject = blockSelect.components.find(component => component.title_Element === ev.target.value)
      setComponentSelect(componentSelectObject)
    }
  }

  useEffect(() => {
    console.log("Hay componentes??  ", blockSelect.components)


  }, [blockSelect])


  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center m-0 mx-auto p-0">
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
        <div className="container-fluid graycolor400 d-flex flex-column justify-content-center align-items-center mx-auto mb-1">
          <header className="container d-flex flex-row justify-content-start align-items-center mx-auto p-0">
            <h6 className="text-start fw-bold ms-1 mt-1"
              style={{ color: "navy", fontSize: "0.68rem", textShadow: "-4px -3px 4px rgba(0, 0, 0, 0.39), 2px 3px 4px rgba(0, 0, 0, 0.3)" }}>
              Form info
            </h6>
          </header>

          <div className="row container-fluid d-flex justify-content-start align-items-center gap-1 mb-1">
            <div className="col d-flex flex-column justify-content-start align-items-start m-0 mt-1 p-1 bg-body">
              <span className="text-start fw-bold m-0 p-0 me-1"
                style={{ color: "rgb(9, 9, 9)", fontSize: "0.64rem", textShadow: "-4px -3px 4px rgba(0, 0, 0, 0.39), 2px 3px 4px rgba(0, 0, 0, 0.3)" }} >
                {TITLES_RCM_LEFT.FORM_TITLE}
              </span>
              <span className="text-center fw-normal m-0 p-0"
                style={{ color: "rgb(9, 9, 9)", fontSize: "0.64rem" }} >
                {selectForm.title_Form}
              </span>
            </div>
            <div className="col d-flex flex-column justify-content-start align-items-start m-0 mt-1 p-1 bg-body">
              <span className="text-start fw-bold m-0 p-0 me-1"
                style={{ color: "rgb(9, 9, 9)", fontSize: "0.64rem", textShadow: "-4px -3px 4px rgba(0, 0, 0, 0.39), 2px 3px 4px rgba(0, 0, 0, 0.3)" }} >
                {TITLES_RCM_LEFT.FORM_ID_TITLE}
              </span>
              <span className="text-center fw-normal m-0 p-0"
                style={{ color: "rgb(9, 9, 9)", fontSize: "0.64rem" }} >
                {selectForm.id_Form}
              </span>
            </div>
          </div>

          <div className="row container-fluid d-flex justify-content-between align-items-center mb-1">
            <div className="col-4 m-0 p-0 bg-body">
              <div className="container-fluid">
                <h6 className="text-start fw-bold mt-1"
                  style={{ color: "rgb(9, 9, 9)", fontSize: "0.64rem", textShadow: "-4px -3px 4px rgba(0, 0, 0, 0.39), 2px 3px 4px rgba(0, 0, 0, 0.3)" }} >
                  {TITLES_RCM_LEFT.FORM_DATE_CREATION}
                </h6>
                <span className="text-center fw-normal m-0 p-0"
                  style={{ color: "rgb(9, 9, 9)", fontSize: "0.6rem" }} >
                  {selectForm.creation_date_Form}
                </span>
              </div>
            </div>

            <div className="col-4 m-0 p-0 bg-body">
              <div className="container-fluid">
                <h6 className="text-start fw-bold mt-1"
                  style={{ color: "rgb(9, 9, 9)", fontSize: "0.64rem", textShadow: "-4px -3px 4px rgba(0, 0, 0, 0.39), 2px 3px 4px rgba(0, 0, 0, 0.3)" }} >
                  {TITLES_RCM_LEFT.FORM_VERSION}
                </h6>
                <span className="text-center fw-normal m-0 p-0"
                  style={{ color: "rgb(9, 9, 9)", fontSize: "0.6rem" }} >
                  {selectForm.version_Form}
                </span>
              </div>
            </div>

            <div className="col-4 m-0 p-0 bg-body">
              <div className="container-fluid">
                <h6 className="text-start fw-bold mt-1"
                  style={{ color: "rgb(9, 9, 9)", fontSize: "0.64rem", textShadow: "-4px -3px 4px rgba(0, 0, 0, 0.39), 2px 3px 4px rgba(0, 0, 0, 0.3)" }} >
                  {TITLES_RCM_LEFT.FORM_READONLY}
                </h6>
                <span className="text-center fw-normal m-0 p-0"
                  style={{ color: "rgb(9, 9, 9)", fontSize: "0.6rem" }} >
                  {selectForm.readonly_Form ? "YES" : "NO"}
                </span>
              </div>
            </div>
          </div>

          <div className="row container-fluid d-flex justify-content-start align-items-center mb-1">
            <div className="col-12 m-0 p-0 bg-body">
              <div className="container-fluid d-flex flex-column justify-content-start align-items-start">
                <h6 className="text-start fw-bold mt-1"
                  style={{ color: "rgb(9, 9, 9)", fontSize: "0.64rem", textShadow: "-4px -3px 4px rgba(0, 0, 0, 0.39), 2px 3px 4px rgba(0, 0, 0, 0.3)" }} >
                  {TITLES_RCM_LEFT.FORM_DESCRIPTION}
                </h6>

                <div className="container-fluid d-flex flex-center justify-content-center align-items-start my-1 border-1 border-secondary" >
                  <textarea id="id_textAreaDescriptionForm"
                    className="contAreaText p-1" required={true} disabled={true} autoComplete="off" readOnly={true} placeholder={""}
                    rows={3} cols={39} style={{ resize: "none", color: "rgb(9, 9, 9)", fontSize: "0.6rem" }} value={selectForm.description_Form}>
                  </textarea>
                </div>
              </div>
            </div>
          </div>

          <div className="row container-fluid d-flex flex-row justify-content-center align-items-center mb-1">
            <div className="col-12 m-0 p-0 bg-body">
              <div className="container-fluid d-flex flex-row justify-content-start align-items-center m-1 gap-2">
                <h6 id="id_select_blocks" className="text-start fw-bold mt-1"
                  style={{ color: "rgb(9, 9, 9)", fontSize: "0.64rem", textShadow: "-4px -3px 4px rgba(0, 0, 0, 0.39), 2px 3px 4px rgba(0, 0, 0, 0.3)" }} >
                  {TITLES_RCM_LEFT.FORM_BLOCKS}
                </h6>

                <select id="id_select_blocks" size="1" required disabled={false}
                  // className={`form-select-sm contSelect rounded-0 ${disabled ? "selectNotActiv" : "selectActiv border border-secondary"} bg-white`} >
                  className="contSelect rounded-0 border border-secondary bg-white fw-bold p-1"
                  value={blockSelect} onChange={(ev) => handleBlockSelect(ev)}
                  style={{ color: "rgb(9, 9, 9)", fontSize: "0.60rem", maxWidth: "8rem" }} >

                  <option value="" className="fw-bold text-secondary text-danger"
                    style={{ fontSize: "0.64rem" }}>
                    Select
                  </option>
                  <>
                    {
                      selectForm.blocks.map(block => <option key={block.id_Block} value={block.label_Block} className="fw-normal text-dark">{block.label_Block}</option>)
                    }
                  </>
                </select>

              </div>
            </div>
          </div>

        </div>

        {/*   ****    Block Data   **** */}
        <div className="container-fluid graycolor400 d-flex flex-column justify-content-center align-items-center mx-auto mb-1">
          <header className="container d-flex flex-row justify-content-start align-items-center mx-auto p-0">
            <h6 className="text-start fw-bold ms-1 mt-1"
              style={{ color: "navy", fontSize: "0.68rem", textShadow: "-4px -3px 4px rgba(0, 0, 0, 0.39), 2px 3px 4px rgba(0, 0, 0, 0.3)" }}>
              Block info:  <span className="pe-2 text-danger" style={{ fontSize: "0.7rem" }}>{blockSelect.title_Block}</span>
            </h6>
          </header>

          <div className="row container-fluid d-flex justify-content-start align-items-center gap-1 mb-1">
            <div className="col-7 d-flex flex-column justify-content-start align-items-start m-0 mt-1 p-1 bg-body">
              <span className="text-start fw-bold m-0 p-0 me-1"
                style={{ color: "rgb(9, 9, 9)", fontSize: "0.64rem", textShadow: "-4px -3px 4px rgba(0, 0, 0, 0.39), 2px 3px 4px rgba(0, 0, 0, 0.3)" }} >
                {TITLES_RCM_LEFT.BLOCK_TITLE}
              </span>
              <span className="text-start fw-normal m-0 p-0"
                style={{ color: "rgb(9, 9, 9)", fontSize: "0.58rem" }} >
                {blockSelect.title_Block}
              </span>
            </div>
            <div className="col d-flex flex-column justify-content-start align-items-start m-0 mt-1 p-1 bg-body">
              <span className="text-start fw-bold m-0 p-0 me-1"
                style={{ color: "rgb(9, 9, 9)", fontSize: "0.64rem", textShadow: "-4px -3px 4px rgba(0, 0, 0, 0.39), 2px 3px 4px rgba(0, 0, 0, 0.3)" }} >
                {TITLES_RCM_LEFT.BLOCK_ID_TITLE}
              </span>
              <span className="text-start fw-normal m-0 p-0"
                style={{ color: "rgb(9, 9, 9)", fontSize: "0.58rem" }} >
                {blockSelect.id_Block}
              </span>
            </div>
          </div>

          <div className="row container-fluid d-flex justify-content-start align-items-center gap-1 mb-1">
            <div className="col-12 d-flex flex-row justify-content-start align-items-start m-0 mt-1 p-1 bg-body">
              <span className="text-start fw-bold m-0 p-0 me-1"
                style={{ color: "rgb(9, 9, 9)", fontSize: "0.64rem", textShadow: "-4px -3px 4px rgba(0, 0, 0, 0.39), 2px 3px 4px rgba(0, 0, 0, 0.3)" }} >
                {TITLES_RCM_LEFT.BLOCK_LABEL}
              </span>
              <span className="text-center fw-normal m-0 p-0"
                style={{ color: "rgb(9, 9, 9)", fontSize: "0.64rem" }} >
                {blockSelect.label_Block}
              </span>
            </div>
          </div>

          <div className="row container-fluid d-flex justify-content-start align-items-center gap-1 mb-1">
            <div className="col-12 m-0 p-0 bg-body">
              <div className="container-fluid d-flex flex-column justify-content-start align-items-start">
                <h6 className="text-start fw-bold mt-1"
                  style={{ color: "rgb(9, 9, 9)", fontSize: "0.64rem", textShadow: "-4px -3px 4px rgba(0, 0, 0, 0.39), 2px 3px 4px rgba(0, 0, 0, 0.3)" }} >
                  {TITLES_RCM_LEFT.BLOCK_DESCRIPTION}
                </h6>

                <div className="container-fluid d-flex flex-center justify-content-center align-items-start my-1 border-1 border-secondary" >
                  <textarea id="id_textAreaDescriptionForm"
                    className="contAreaText p-1" required={true} disabled={true} autoComplete="off" readOnly={true} placeholder={""}
                    rows={3} cols={39} value={blockSelect.description_Block}

                    style={{ resize: "none", color: "rgb(9, 9, 9)", fontSize: "0.6rem" }}></textarea>
                </div>
              </div>
            </div>
          </div>

          <div className="row container-fluid d-flex flex-row justify-content-start align-items-center mb-1 gap-0">
            <div className="col-7 m-0 p-0 bg-body" >
              <div className="container-fluid d-flex flex-row justify-content-start align-items-center my-1 mx-0 gap-1">
                <h6 id="id_select_blocks" className="text-start fw-bold mt-1"
                  style={{ color: "rgb(9, 9, 9)", fontSize: "0.64rem", textShadow: "-4px -3px 4px rgba(0, 0, 0, 0.39), 2px 3px 4px rgba(0, 0, 0, 0.3)" }} >
                  {TITLES_RCM_LEFT.BLOCK_COMPONENTS}
                </h6>

                <select id="id_select_blocks" size="1" required disabled={false}
                  className="rounded-0 border border-secondary bg-white fw-bold p-1 my-1 mx-0 gap-1"
                  value={componentSelect} onChange={(ev) => handleComponentSelect(ev)}
                  style={{ color: "rgb(9, 9, 9)", fontSize: "0.60rem" }} >

                  <option value="select" className="fw-bold text-secondary text-danger"
                    style={{ fontSize: "0.64rem" }}>
                    Select
                  </option>
                  {
                    Array.isArray(blockSelect.components) && 
                      blockSelect.components.map(component => <option key={component.id_Element} value={component.title_Element} className="fw-normal text-dark">{component.title_Element}</option>)
                    //  blockSelect
                    // optionsValues.map((element, index) => <option key={index} value={element} className="fw-normal text-dark">{element}</option>)
                    // <>
                    //   <option value={"Component 1"} className="fw-normal text-dark"
                    //     style={{ color: "rgb(9, 9, 9)", fontSize: "0.60rem" }}>
                    //     {"Component  1"}
                    //   </option>
                    //   <option value={"Component 2"} className="fw-normal text-dark"
                    //     style={{ color: "rgb(9, 9, 9)", fontSize: "0.60rem" }} >
                    //     {"Component 2"}
                    //   </option>
                    //   <option value={"Component 3"} className="fw-normal text-dark"
                    //     style={{ color: "rgb(9, 9, 9)", fontSize: "0.60rem" }}>
                    //     {"Component  3"}
                    //   </option>
                    //   <option value={"Component 4"} className="fw-normal text-dark"
                    //     style={{ color: "rgb(9, 9, 9)", fontSize: "0.60rem" }} >
                    //     {"Component 4"}
                    //   </option>
                    // </>
                  }
                </select>
              </div>
            </div>

            <div className="col-5 m-0 p-0 bg-body">
              <div className="container-fluid d-flex flex-row justify-content-start align-items-center my-1 mx-0 gap-1">
                <h6 id="id_order_blocks" className="text-start fw-bold mt-1"
                  style={{ color: "rgb(9, 9, 9)", fontSize: "0.64rem", textShadow: "-4px -3px 4px rgba(0, 0, 0, 0.39), 2px 3px 4px rgba(0, 0, 0, 0.3)" }} >
                  {TITLES_RCM_LEFT.BLOCK_ORDER_DISPLAY}
                </h6>

                <input id="id_order_blocks" type="number" className="rounded-0 border border-secondary bg-white fw-bold p-1 my-1 mx-0 gap-1"
                  required disabled={true} size="1" placeholder={0} min="0" max={100} value={blockSelect.ordenDisplay_Block}
                  style={{ color: "rgb(9, 9, 9)", fontSize: "0.68rem", height: "1.4rem" }} />

              </div>
            </div>
          </div>
        </div>
      </div>

      {/*   ****    Component Show   **** */}
      <div className="container-fluid bg-secondary d-flex flex-column justify-content-center align-items-center py-2 px-3 mx-auto my-1">
        <div className="row container-fluid d-flex justify-content-center align-items-center gap-0 my-1 bg-body mx-auto">
          <div className="col container-fluid bg-body mx-1 p-2">
            <ShowElements />
          </div>
        </div>
      </div>

      {/*   ****    Component Data   **** */}
      <div className="container-fluid d-flex flex-row justify-content-center align-items-center mx-auto p-2 bg-secondary">
        <div className="container-fluid graycolor400 d-flex flex-column justify-content-center align-items-center mx-auto mb-1">
          <header className="container d-flex flex-row justify-content-start align-items-center mx-auto p-0">
            <h6 className="text-start fw-bold ms-1 mt-1"
              style={{ color: "navy", fontSize: "0.68rem", textShadow: "-4px -3px 4px rgba(0, 0, 0, 0.39), 2px 3px 4px rgba(0, 0, 0, 0.3)" }}>
              Component info
            </h6>
          </header>

          <div className="row container-fluid d-flex justify-content-start align-items-center gap-1 mb-1">

            {/* //    *******************************************************************************************************************************  //
          Esto no funciona, pensar como segun la opcion seleccionada en el select se dibuja o selecciona para dibujar el 
          componente seleccionado.  Hay que mirar y hacer pruebas, un "select", las opciones del "nombre" del componente, 
          al seleccionar uno inmediatamente debe mostrar arriba el componente seleccionado, los datos del componente no cambian  */}

            <div className="container col d-flex justify-content-start align-items-center gap-1 mt-1 ms-1 p-1 bg-body">
              <span className="ms-1 fw-bold" style={{ fontSize: "0.6rem" }}>{TITLES_RCM_LEFT.COMPONENT_TITLE}</span>
              {
                tooRead ?
                  <span className="ms-1 fw-bold" style={{ fontSize: "0.6rem" }}>{theContext.objComponentShow.type}</span>
                  :
                  <>
                    <select id="idSelectComponent"
                      className="form-select form-select-sm fw-bold p-1 border mx-1 border-secondary" aria-label=".form-select-sm"
                      required="true" size="1" defaultValue="master"
                      style={{ width: "auto", fontSize: "0.55rem" }}


                      value={selectComponent} onChange={(ev) => handleOnChangeComponent(ev)}>
                      <option value="master" className="text-danger fw-bold">Master</option>
                      <option value="label">Label</option>
                      <option value="text">Text</option>
                      <option value="phone">Phone</option>
                      <option value="email">Email</option>
                      <option value="number">Number</option>
                      <option value="date">Date</option>
                      <option value="select">Select</option>
                      <option value="textArea">Text Area</option>
                      <option value="checkbox">Checkbox</option>
                      <option value="radioButtons">Radio Buttons</option>
                      <option value="table">Table</option>
                      <option value="icon">Icon</option>
                    </select>
                  </>
              }
            </div>
            {/* //    *******************************************************************************************************************************  // */}

            <div className="col d-flex justify-content-start align-items-center gap-1 mt-1 mx-0 p-1 bg-body">
              <span className="ms-1 fw-bold" style={{ fontSize: "0.6rem" }}>{TITLES_RCM_LEFT.COMPONENT_ID}</span>
              {
                tooRead ?
                  <span className="ms-1 fw-bold" style={{ fontSize: "0.6rem" }} >{theContext.objComponentShow.elementID}</span>
                  :
                  <input type="text" className="contInputText form-control mx-1 p-1 rounded-0 text-start" autoComplete="off" required="true"
                    placeholder={"Type Id..."} size={10} />
              }
            </div>
            <div className="col d-flex justify-content-start align-items-center gap-1 mt-1 mx-0 p-1 bg-body">
              <span className="ms-1 fw-bold" style={{ fontSize: "0.6rem" }}>{TITLES_RCM_LEFT.COMPONENT_DISPLAY_ORDER}</span>
              {
                tooRead ?
                  <span className="ms-1 fw-bold" style={{ fontSize: "0.6rem" }}>{theContext.objComponentShow.orderInBlock}</span>
                  :
                  <input type="number" className="contInputNumber form-control mx-1 rounded-0 text-center" required="true"
                    placeholder="0" min="0" max={Math.pow(10, parseInt(3, 10)) - 1} />
              }

            </div>
          </div>

          <div className="row container-fluid d-flex justify-content-start align-items-center gap-1 mb-1">
            <div className="container col d-flex justify-content-start align-items-center gap-1 mt-1 ms-1 p-1 bg-body">
              {
                tooRead ?
                  <span className="ms-1 fw-bold" style={{ fontSize: "0.6rem" }}>{theContext.objComponentShow.labelElement}</span>
                  :
                  <input type="text" className="contInputText form-control mx-1 p-1 rounded-0 text-start" autoComplete="off" required="true"
                    placeholder={"Type label..."} size={30} />
              }
            </div>
          </div>

          <div className="row container-fluid d-flex justify-content-start align-items-center gap-1 mb-1">
            <div className={`col ${tooRead ? "mx-1" : "d-flex flex-row justify-content-center align-items-center mx-auto"} mt-1 p-1 bg-body`}>
              <span className="col-5 mb-1 ms-1 fw-bold" style={{ fontSize: "0.6rem" }}>{TITLES_RCM_LEFT.COMPONENT_REQUIRED_ASK}</span>
              {
                tooRead ?
                  <span className="ms-1 px-0 fw-bold" style={{ fontSize: "0.6rem" }} >{theContext.objComponentShow.required.toString()}</span>
                  :
                  <select className="form-select form-select-sm fw-bold p-1 border border-secondary" aria-label=".form-select-sm"
                    required="true" size="1" defaultValue="Select"
                    style={{ width: "3.5rem", fontSize: "0.6rem" }} >
                    <option disabled value="true" className="text-danger fw-bold px-1">Select</option>
                    <option value="true">True</option>
                    <option value="false">False</option>
                  </select>
              }
            </div>
            <div className={`col ${tooRead ? "mx-1" : "d-flex flex-row justify-content-center align-items-center mx-auto"} mt-1 p-1 bg-body`}>
              <span className="col-5 mb-1 ms-1 fw-bold" style={{ fontSize: "0.6rem" }}>{TITLES_RCM_LEFT.COMPONENT_DISABLED_ASK}</span>
              {
                tooRead ?
                  <span className="ms-1 px-0 fw-bold" style={{ fontSize: "0.6rem" }} >{theContext.objComponentShow.disabled.toString()}</span>
                  :
                  <select className="form-select form-select-sm fw-bold p-1 border border-secondary" aria-label=".form-select-sm"
                    required="true" size="1" defaultValue="select"
                    style={{ width: "3.5rem", fontSize: "0.6rem" }} >
                    <option disabled value="select" className="text-danger fw-bold px-1">Select</option>
                    <option value="true">True</option>
                    <option value="false">False</option>
                  </select>
              }
            </div>
          </div>

          <div className="row container-fluid d-flex justify-content-start align-items-center gap-1 mb-1">
            <div className="container col-8 d-flex justify-content-start align-items-center gap-1 mt-1 ms-1 p-1 bg-body">
              <span className="ms-1 fw-bold" style={{ fontSize: "0.6rem" }}>{TITLES_RCM_LEFT.COMPONENT_PLACEHOLDER}</span>
              {
                tooRead ?
                  <span className="ms-1 px-1 fw-bold" style={{ fontSize: "0.6rem" }} >{theContext.objComponentShow.placeholder}</span>
                  :
                  theContext.objComponentShow.type !== "select" ?
                    <input type="text" className="contInputText form-control mx-1 rounded-0 text-start" autoComplete="off" required="true"
                      placeholder={"Default..."} size={24} />
                    :
                    <div className="d-flex flex-row justify-content-center align-items-center m-0">
                      <input type="text" className="contInputText form-control mx-1 rounded-0 text-start" autoComplete="off" required="true"
                        placeholder={"Default..."} size={18} />
                      <button type="button" className="btn btn-sm btn-success fw-bold mx-auto"
                        style={{ width: "1.9rem", height: "1.3rem", fontSize: "0.55rem" }}>Add</button>
                    </div>
              }
            </div>
            <div className="container col d-flex justify-content-start align-items-center gap-1 mt-1 ms-1 p-1 bg-body">
              <span className="ms-1 fw-bold" style={{ fontSize: "0.6rem" }}>{TITLES_RCM_LEFT.COMPONENT_SIZE}</span>
              {
                tooRead ?
                  <span className="ms-1 fw-bold" style={{ fontSize: "0.6rem" }}>{theContext.objComponentShow.size}</span>
                  :
                  <input type="number" className="contInputNumber form-control mx-1 rounded-0" required="true"
                    placeholder="0" min="0" max={Math.pow(10, parseInt(3, 10)) - 1} style={{ height: "1.7rem" }} />
              }
            </div>
          </div>

          {/* //  Row conditionals to type of component:  areaText, select, Checkbox */}
          {
            (selectComponent.type === "textArea" || selectComponent.type === "select" || selectComponent.type === "checkbox") &&
            <p> Hola pepsicola</p>
          }

          <div className="row container-fluid d-flex justify-content-start align-items-center gap-1 mb-1">
            <div className={`container col gap-1 d-flex ${tooRead ? "flex-row" : "flex-column"} justify-content-start align-items-center p-1`}>
              <div className={`${tooRead ? "col-6" : "col-12"} d-flex flex-column justify-content-start align-items-start bg-body p-1 me-1`}>
                <span className="mx-2 fw-bold" style={{ fontSize: "0.65rem" }} >{TITLES_RCM_LEFT.COMPONENT_POSITION}</span>
                <div className="d-flex flex-row justify-content-center align-items-center gx-1 mx-2">
                  <span className="fw-bold mx-1" style={{ fontSize: "0.65rem" }} >{TITLES_RCM_LEFT.COMPONENT_POSITION_ROW}</span>
                  {
                    tooRead ?
                      <span className="ms-1 fw-normal" style={{ fontSize: "0.65rem" }} >{theContext.objComponentShow.position.rowElem}</span>
                      :
                      <input type="number" className="contInputNumber form-control ms-1 rounded-0" required="true"
                        placeholder="0" min="0" max={Math.pow(10, parseInt(2, 10)) - 1} />
                  }
                  <span className="fw-bold mx-1" style={{ fontSize: "0.65rem" }} >{TITLES_RCM_LEFT.COMPONENT_POSITION_COLUMN}</span>
                  {
                    tooRead ?
                      <span className="ms-1 fw-normal" style={{ fontSize: "0.65rem" }} >{theContext.objComponentShow.position.colElem}</span>
                      :
                      <input type="number" className="contInputNumber form-control ms-1 rounded-0" required="true"
                        placeholder="0" min="0" max={12} />
                  }
                </div>
              </div>
              <div className={`${tooRead ? "col-6" : "col-12 mt-1"} d-flex flex-column justify-content-start align-items-start bg-body p-1 me-1`}>
                <span className="mx-2 fw-bold" style={{ fontSize: "0.65rem" }} >{TITLES_RCM_LEFT.COMPONENT_DIMENSION}</span>
                <div className="d-flex flex-row justify-content-center align-items-center gx-1 mx-2">
                  <span className="fw-bold mx-1" style={{ fontSize: "0.65rem" }} >{TITLES_RCM_LEFT.COMPONENT_DIMENSION_WIDTH}</span>
                  {
                    tooRead ?
                      <span className="ms-1 fw-normal" style={{ fontSize: "0.65rem" }} >{theContext.objComponentShow.dimensions.width}</span>
                      :
                      <input type="number" className="contInputNumber form-control ms-1 rounded-0" required="true"
                        placeholder="0" min="0" max={12} />
                  }
                  <span className="fw-bold ms-1" style={{ fontSize: "0.65rem" }}>{TITLES_RCM_LEFT.COMPONENT_DIMENSION_HEIGHT}</span>
                  {
                    <span className="ms-1 fw-normal" style={{ fontSize: "0.65rem" }} >{theContext.objComponentShow.dimensions.height}</span>
                    // tooRead ?
                    //   <span className="valuePosDim">{theContext.objComponentShow.dimensions.height}</span>
                    //   :
                    //   <span className="valuePosDim">{theContext.objComponentShow.dimensions.height}</span>
                  }
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

/*
  const objComponentIni = {
    elementID: "",
    type: "",
    blockOrigen: "",
    orderInBlock: "",
    position: { rowElem: 0, colElem: 0 },
    dimensions: { width: 1, height: "2.4rem" },
    labelElement: "",
    required: true,
    disabled: false,
    checked: undefined,
    response: [""],
    placeholder: "",
    size: 1,
    optionsValues: [""],
    legend: "",
    name: "nameProb",
    valueComponent: "",
    setComponent: "",
    radioButtons: [
      {
        elementID: "",
        labelElement: "",
        name: "",
        required: true,
        disabled: false,
        checked: false,
        response: [false],
        setRadioButton: ""
      }
    ]
  }
*/

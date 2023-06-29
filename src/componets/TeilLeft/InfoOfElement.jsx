import { useState, useEffect, useContext } from 'react'
import { MyContext } from '../../context/TheContext.jsx'
import ShowElements from './ShowElements.jsx';
import { TITLES_RCM_LEFT } from '../../constants/contants.js';  //  Constants of Form
import '../../sass/componentSass/TeilLeft/InfoOfElement.scss'
import SelectElement_PB from '../elementsForms/SelectElem_PB.jsx';


function InfoOfElement() {
  const theContext = useContext(MyContext)

  const [tooRead, setTooRead] = useState(false)
  const [tooModify, setTooModify] = useState(false)
  const [tooCreate, setTooCreate] = useState(false)

  const [selectComponent, setSelectComponent] = useState("")

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

  function handleOnChange(ev) {
    ev.preventDefault();
    setSelectComponent(ev.target.value)
    theContext.setElement(selectComponent)
  }


  return (
    <div className="contInfoOfElement container-fluid d-flex flex-column justify-content-center align-items-center m-0 mx-auto p-0">
      <div className="infoComponent container-fluid d-flex flex-column justify-content-center align-items-center mx-auto bg-secondary" >
        <header className="contHeaderTitle d-flex flex-column justify-content-center align-items-center mx-auto mt-1 mb-2">
          <h4 className={"title m-0 p-0"}>
            {TITLES_RCM_LEFT.TITLE_OF_SECTION}
          </h4>
          <h6 className={"subtitle m-0 p-0"}>
            {TITLES_RCM_LEFT.SUBTITLE_OF_SECTION}
          </h6>
        </header>

        {/*   ****    Form Data   **** */}
        <div className="contInfoForm container-fluid d-flex flex-column justify-content-center align-items-center mx-auto mb-1">
          <header className="container contTitles">
            <h6 className="titles text-start">Form info</h6>
          </header>
          <div className="row container-fluid d-flex justify-content-start align-items-center gap-0 mb-2">
            <div className="Fields col mt-1 p-1 bg-body">
              <span className="Field">{TITLES_RCM_LEFT.FORM_TITLE}</span>
              <span className="valueSpan">{"Encuesta de Varicela"}</span>
            </div>
            <div className="Fields col mt-1 ms-1 p-1 bg-body">
              <span className="Field">{TITLES_RCM_LEFT.FORM_ID_TITLE}</span>
              <span className="valueSpan">{"form_encuesta_varicela_000345"}</span>
            </div>
          </div>
          <div className="row container-fluid d-flex justify-content-start align-items-center gap-0 mb-1">
            <div className="FieldsHorizontal col mt-1 p-1 bg-body">
              <span className="Field">{TITLES_RCM_LEFT.TITLE_FORM_READONLY}</span>
              <span className="valueSpan">{TITLES_RCM_LEFT.VALUE_FORM_READONLY.toString()}</span>
            </div>
            <div className="FieldsHorizontal col mt-1 ms-1 p-1 bg-body">
              <span className="Field">{TITLES_RCM_LEFT.TITLE_BLOCK_NUMBER}</span>
              <span className="valueSpan">{TITLES_RCM_LEFT.VALUE_BLOCK_NUMBER}</span>
            </div>
          </div>
        </div>

        {/*   ****    Block Data   **** */}
        <div className="contInfoForm container-fluid d-flex flex-column justify-content-center align-items-center mx-auto mb-1">
          <header className="container contTitles m-0 ">
            <h6 className="titles text-start">Block info</h6>
          </header>
          <div className="row container-fluid d-flex justify-content-start align-items-center gap-0 mb-2 mx-auto">
            <div className="FieldsHorizontal col mt-1 mx-1 p-1 bg-body">
              <span className="Field">{TITLES_RCM_LEFT.BLOCK_TITLE}</span>
              <span className="valueSpan">{theContext.blockRead.titleOfBlock}</span>
            </div>
            <div className="FieldsHorizontal col mt-1 mx-1 p-1 bg-body">
              <span className="Field">{TITLES_RCM_LEFT.BLOCK_ID_TITLE}</span>
              <span className="valueSpan">{theContext.blockRead.idOfBlock}</span>
            </div>
          </div>
          <div className="row container-fluid d-flex justify-content-start align-items-center gap-0 mb-2 mx-auto">
            <div className="FieldsHorizontal col mx-1 p-1 bg-body">
              <span className="Field">{TITLES_RCM_LEFT.TITLE_DISPLAY_ORDER}</span>
              <span className="valueSpan">{theContext.blockRead.displayOrderOfBlock}</span>
            </div>
            <div className="FieldsHorizontal col mx-1 p-1 bg-body">
              <span className="Field">{TITLES_RCM_LEFT.TITLE_BLOCK_NUMBER}</span>
              <span className="valueSpan">{theContext.blockRead.numberOfBlockInForm}</span>
            </div>
          </div>
        </div>
      </div>

      {/*   ****    Component Show   **** */}
      <div className="infoComponent container-fluid d-flex flex-column justify-content-center align-items-center mx-auto my-1 bg-secondary">
        <div className="contInfoForm container-fluid d-flex flex-column justify-content-center align-items-center mx-auto my-1">
          <div className="row container-fluid d-flex justify-content-center align-items-center gap-0 my-1 bg-body mx-auto">
            <div className="col container-fluid mx-1 p-1">
              <ShowElements />
            </div>
          </div>
        </div>
      </div>

      {/*   ****    Component Data   **** */}
      <div className="infoComponent container-fluid d-flex flex-column justify-content-center align-items-center mx-auto mb-1 bg-secondary">
        <div className="contInfoForm container my-1">
          <header className="container contTitles m-0">
            <h6 className="titles text-start">Component info</h6>
          </header>
          <div className="row gap-0 mb-1 mx-auto">

{/* //    *******************************************************************************************************************************  //
          Esto no funciona, pensar como segun la opcion seleccionada en el select se dibuja o selecciona para dibujar el 
          componente seleccionado.  Hay que mirar y hacer pruebas, un "select", las opciones del "nombre" del componente, 
          al seleccionar uno inmediatamente debe mostrar arriba el componente seleccionado, los datos del componente no cambian 

            <div className="FieldsHorizontal col mt-1 ms-1 p-1 bg-body">
              <span className="Field">{TITLES_RCM_LEFT.COMPONENT_TITLE}</span>
              {
                tooRead ?
                  <span className="Field ms-2">{theContext.objComponentShow.type}</span>
                  :
                  <>
                    <select id="idSelectComponent"
                      className="select form-select form-select-sm border mx-1 border-secondary" aria-label=".form-select-sm"
                      required="true" size="1" defaultValue="Select" value={selectComponent} onChange={(ev) => handleOnChange(ev)}>
                      <option value="label">Select</option>
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
//    *******************************************************************************************************************************  // */}

            <div className="FieldsHorizontal col mt-1 mx-0 p-1 bg-body">
              <span className="Field">{TITLES_RCM_LEFT.COMPONENT_ID}</span>
              {
                tooRead ?
                  <span className="valueSpan">{theContext.objComponentShow.elementID}</span>
                  :
                  <input type="text" className="contInputText form-control mx-1 rounded-0" autoComplete="off" required="true"
                    placeholder={"Type Id..."} size={10} />
              }
            </div>
            <div className="FieldsHorizontal col mt-1 mx-0 p-1 bg-body">
              <span className="Field">{TITLES_RCM_LEFT.COMPONENT_DISPLAY_ORDER}</span>
              {
                tooRead ?
                  <span className="valueSpan">{theContext.objComponentShow.orderInBlock}</span>
                  :
                  <input type="number" className="contInputNumber form-control mx-1 rounded-0" required="true"
                    placeholder="0" min="0" max={Math.pow(10, parseInt(3, 10)) - 1} />
              }

            </div>
          </div>

          <div className="row gap-0 mb-1 mx-auto">
            <div className="FieldsHorizontal col mt-1 mx-1 p-1 bg-body">
              {
                tooRead ?
                  <span className="Field">{theContext.objComponentShow.labelElement}</span>
                  :
                  <input type="text" className="contInputText form-control mx-2 rounded-0" autoComplete="off" required="true"
                    placeholder={"Type label..."} size={30} />
              }
            </div>
          </div>

          <div className="row gx-1 mb-1  mx-auto">
            <div className={`FieldsHorizontal col ${tooRead ? "mx-1" : "d-flex flex-column justify-content-center align-items-center mx-auto"} mt-1 p-1 bg-body`}>
              <span className="Field col-6 mb-1">{TITLES_RCM_LEFT.COMPONENT_REQUIRED_ASK}</span>
              {
                tooRead ?
                  <span className="valueSpan">{theContext.objComponentShow.required.toString()}</span>
                  :
                  <select className="select form-select form-select-sm ms-0 px-5" aria-label=".form-select-sm" required="true" size="1"
                    defaultValue="true">
                    <option disabled>Select</option>
                    <option value="true">True</option>
                    <option value="false">False</option>
                  </select>
              }
            </div>
            <div className={`FieldsHorizontal col ${tooRead ? "mx-1" : "d-flex flex-column justify-content-center align-items-center mx-auto"} mt-1 p-1 bg-body`}>
              <span className="Field col-6 mb-1">{TITLES_RCM_LEFT.COMPONENT_DISABLED_ASK}</span>
              {
                tooRead ?
                  <span className="valueSpan">{theContext.objComponentShow.disabled.toString()}</span>
                  :
                  <select className="select form-select form-select-sm ms-0 px-5" aria-label=".form-select-sm" required="true" size="1"
                    defaultValue="false" >
                    <option disabled>Select</option>
                    <option value="true">True</option>
                    <option value="false">False</option>
                  </select>
              }
            </div>
          </div>

          <div className="row gx-1 mb-1 mx-auto">
            <div className={`FieldsHorizontal ${tooRead ? "col" : "col-12"} mt-1 mx-auto p-1 bg-body`}>
              <span className="Field">{TITLES_RCM_LEFT.COMPONENT_RESPONSE}</span>
              {
                tooRead ?
                  <span className="valueSpan">{theContext.objComponentShow.response[0]}</span>
                  :
                  <input type="text" className="contInputText form-control mx-1 rounded-0" autoComplete="off" required="true"
                    placeholder={"Type label..."} size={30} />
              }
            </div>
            <div className={`FieldsHorizontal ${tooRead ? "col" : "col-12"} mt-1 mx-auto p-1 bg-body`}>
              <span className="Field">{TITLES_RCM_LEFT.COMPONENT_PLACEHOLDER}</span>
              {
                tooRead ?
                  <span className="valueSpan">{theContext.objComponentShow.placeholder}</span>
                  :
                  <input type="text" className="contInputText form-control mx-1 rounded-0" autoComplete="off" required="true"
                    placeholder={"Type label..."} size={30} />
              }
            </div>
          </div>

          <div className="row m-0 gx-0 mb-1">
            <div className="FieldsHorizontal col mt-1 mx-auto p-1 bg-body">
              <span className="Field">{TITLES_RCM_LEFT.COMPONENT_VALUE}</span>
              {
                tooRead ?
                  <span className="valueSpan">{theContext.objComponentShow.valueComponent}</span>
                  :
                  theContext.objComponentShow.type !== "select" ?
                    <input type="text" className="contInputText form-control mx-1 rounded-0" autoComplete="off" required="true"
                      placeholder={"Value..."} size={30} />
                    :
                    <div className="d-flex flex-row justify-content-center align-items-center m-0">
                      <input type="text" className="contInputText form-control mx-1 rounded-0" autoComplete="off" required="true"
                        placeholder={"Value..."} size={20} />
                      <button type="button" className="btn btn-sm btn-success fw-bold mx-auto"
                        style={{ width: "1.9rem", height: "1.3rem", fontSize: "0.55rem" }}>Add</button>
                    </div>
              }
            </div>
            <div className="FieldsHorizontal col mt-1 mx-1 p-1 bg-body">
              <span className="Field">{TITLES_RCM_LEFT.COMPONENT_SIZE}</span>
              {
                tooRead ?
                  <span className="valueSpan">{theContext.objComponentShow.size}</span>
                  :
                  <input type="number" className="contInputNumber form-control mx-1 rounded-0" required="true"
                    placeholder="0" min="0" max={Math.pow(10, parseInt(3, 10)) - 1} />
              }
            </div>
          </div>

          <div className="row gap-0 mb-1 mx-0">
            <div className={`FieldsHorizontal d-flex ${tooRead ? "flex-row" : "flex-column"} justify-content-start align-items-center p-1`}>
              <div className={`${tooRead ? "col-4" : "col-12"} d-flex flex-column justify-content-start align-items-start bg-body p-1 me-1`}>
                <span className="titlePosDim">{TITLES_RCM_LEFT.COMPONENT_POSITION}</span>
                <div className="d-flex flex-row justify-content-center align-items-center gx-1 px-2">
                  <span className="subTitlePosDim">{TITLES_RCM_LEFT.COMPONENT_POSITION_ROW}</span>
                  {
                    tooRead ?
                      <span className="valuePosDim">{theContext.objComponentShow.position.rowElem}</span>
                      :
                      <input type="number" className="contInputNumber form-control mx-1 rounded-0" required="true"
                        placeholder="0" min="0" max={Math.pow(10, parseInt(2, 10)) - 1} />
                  }
                  <span className="subTitlePosDim">{TITLES_RCM_LEFT.COMPONENT_POSITION_COLUMN}</span>
                  {
                    tooRead ?
                      <span className="valuePosDim">{theContext.objComponentShow.position.colElem}</span>
                      :
                      <input type="number" className="contInputNumber form-control mx-1 rounded-0" required="true"
                        placeholder="0" min="0" max={12} />
                  }
                </div>
              </div>
              <div className={`${tooRead ? "col-8" : "col-12 mt-2"} d-flex flex-column justify-content-start align-items-start bg-body p-1`}>
                <span className="titlePosDim">{TITLES_RCM_LEFT.COMPONENT_DIMENSION}</span>
                <div className="d-flex flex-row justify-content-center align-items-center gx-1 px-2">
                  <span className="subTitlePosDim">{TITLES_RCM_LEFT.COMPONENT_DIMENSION_WIDTH}</span>
                  {
                    tooRead ?
                      <span className="valuePosDim">{theContext.objComponentShow.dimensions.width}</span>
                      :
                      <input type="number" className="contInputNumber form-control mx-1 rounded-0" required="true"
                        placeholder="0" min="0" max={12} />
                  }
                  <span className="subTitlePosDim">{TITLES_RCM_LEFT.COMPONENT_DIMENSION_HEIGHT}</span>
                  {
                    <span className="valuePosDim">{theContext.objComponentShow.dimensions.height}</span>
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
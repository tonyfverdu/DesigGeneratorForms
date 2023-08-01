import { useState, useEffect, useContext } from 'react';
import { MyContext } from '../../../context/TheContext.jsx';
import HeaderHead from "./HeaderHead.jsx";
import FieldText from "./FieldText.jsx";
import FieldNumber from './FieldNumber.jsx'
import FieldSelect from './FieldSelect.jsx';
import FieldSelectComponents from './FieldSelectComponents.jsx';
import FieldSelectColors from './FieldSelectColors.jsx';
import PositionFielsComp from './PositionFielsComp.jsx';
import { TITLES_RCM_LEFT, TYPE_COMPONENTS, COLOR_COMPONENTS } from '../../../constants/contants.js';  //  Constants of Form
import createArray from '../../../functions/createArray.js';


function DataCompMenu({ formSelect, setFormSelect, blockSelect, componentSelect, setComponentSelect }) {
  const theContext = useContext(MyContext)

  const [compLocal, setCompLocal] = useState(componentSelect);

  useEffect(() => {
    setComponentSelect(compLocal)
  }, [compLocal])

  function handleChangeTYPECOMP(ev) {
    ev.preventDefault()
    const newValue = ev.target.value

    setCompLocal({...compLocal, type_Element: newValue})
  }
  function handleChangeTITLECOMP(ev) {
    ev.preventDefault()
    const newValue = ev.target.value

    setCompLocal({...compLocal, title_Element: newValue})
  }
  function handleChangeIDCOMP(ev) {
    ev.preventDefault()
    const newValue = ev.target.value

    setCompLocal({...compLocal, id_Element: newValue})
  }
  function handleChangeORDERINLOCK(ev) {
    ev.preventDefault()
    const newValue = ev.target.value

    setCompLocal({...compLocal, orderInBlock: newValue})
  }
  function handleChangeLABELCOMP(ev) {
    ev.preventDefault()
    const newValue = ev.target.value

    setCompLocal({...compLocal, label_Element: newValue})
  }
  function handleChangeSIZECOMP(ev) {
    ev.preventDefault()
    const newValue = ev.target.value

    setCompLocal({...compLocal, size: newValue})
  }
  function handleChangePLACEHOLDERCOMP(ev) {
    ev.preventDefault()
    const newValue = ev.target.value

    setCompLocal({...compLocal, placeholder: newValue})
  }
  function handleChangeREQUIREDCOMP(ev) {
    ev.preventDefault()
    const newValue = ev.target.value

    setCompLocal({...compLocal, required: newValue})
  }
  function handleChangeDISABLEDCOMP(ev) {
    ev.preventDefault()
    const newValue = ev.target.value

    setCompLocal({...compLocal, disabled: newValue})
  }
  function handleChangeBORDERCOMP(ev) {
    ev.preventDefault()
    const newValue = ev.target.value

    setCompLocal({...compLocal, borderElement: newValue})
  }
  function handleChangeCOLORCOMP(ev) {
    ev.preventDefault()
    const newValue = ev.target.value

    setCompLocal({...compLocal, colorElement: newValue})
  }
  function handleChangeFSCOMP(ev) {
    ev.preventDefault()
    const newValue = ev.target.value

    setCompLocal({...compLocal, fontSizeElement: newValue})
  }

  return (
    <div id="accordionComp" className="accordion container-fluid graycolor400 d-flex flex-column justify-content-center align-items-center p-1 mx-auto mb-1">
      <div className="accordion-item rounded-0 container-fluid mx-auto graycolor400 border-0 " style={{ marginBottom: "0.3rem" }} >

        <HeaderHead
          idHeading={"headingComp"}
          dataTarget={"#collapseComp"}
          ariaControl={"collapseComp"}
          fontSize={"0.75rem"}
          title={TITLES_RCM_LEFT.COMPONENT_HEAD}
          value={compLocal.title_Element}
        />

        <div id="collapseComp" className="accordion-collapse collapse ms-0" aria-labelledby="headingComp" data-bs-parent="#accordionComp">
          <div className="accordion-body p-0 mb-0">

            <div className="row d-flex justify-content-center align-items-center gap-1 mt-1" >
              <div className="col-3 d-flex flex-column justify-content-start align-items-start m-0 pe-3 mt-1 p-1 bg-body"
                style={{ height: "3.504rem", margin: "auto 0%" }} >
                <FieldSelectComponents
                  title={TITLES_RCM_LEFT.COMPONENT_TYPE}
                  value={compLocal.type_Element}
                  tooRead={theContext.tooRead}
                  fontSize={"0.64rem"}
                  arrayValues={TYPE_COMPONENTS}
                  action={handleChangeTYPECOMP}
                />
              </div>

              <div className="col-8 d-flex flex-column justify-content-start align-items-start m-0 mt-1 p-1 bg-body ">
                <FieldText
                  title={TITLES_RCM_LEFT.COMPONENT_TITLE}
                  value={compLocal.title_Element}
                  fontSize={"0.64rem"}
                  tooRead={theContext.tooRead}
                  action={handleChangeTITLECOMP}
                />
              </div>
            </div>

            <div className="row d-flex justify-content-center align-items-center gap-0 mb-0" style={{ margin: "auto 0.04rem" }}>
              <div className={`col-12 d-flex ${theContext.tooRead ? "flex-row" : "flex-column"} justify-content-start align-items-start m-0 mt-1 p-1 bg-body `}>
                <FieldText
                  title={TITLES_RCM_LEFT.COMPONENT_ID}
                  value={compLocal.id_Element}
                  fontSize={"0.64rem"}
                  tooRead={theContext.tooRead}
                  action={handleChangeIDCOMP}
                />
              </div>
              {/* <div className={`col-3 d-flex ${theContext.tooRead ? "flex-row justify-content-start p-1" : "flex-column justify-content-center px-0 pe-2"} align-items-start m-0 mt-1 bg-body `} >
                <FieldSelect
                  title={TITLES_RCM_LEFT.COMPONENT_DISPLAY_ORDER}
                  value={componentSelect.orderInBlock}
                  fontSize={"0.64rem"}
                  tooRead={theContext.tooRead}
                  arrayValues={arrayValuesComp}
                  action={handleChangeORDERINLOCK}
                />
              </div> */}
            </div>

            <div className="row d-flex justify-content-center align-items-center gap-1 mb-0" >
              <div className="col-8 d-flex flex-row justify-content-start align-items-start m-0 mt-1 p-1 bg-body">
                <FieldText
                  title={TITLES_RCM_LEFT.COMPONENT_LABEL}
                  value={compLocal.label_Element}
                  fontSize={"0.64rem"}
                  tooRead={theContext.tooRead}
                  action={handleChangeLABELCOMP}
                />
              </div>

              <div className={`col-3 d-flex flex-row justify-content-start align-items-start m-0 mt-1 p-1 px-0 bg-body `}>
                <FieldNumber
                  title={TITLES_RCM_LEFT.COMPONENT_SIZE}
                  value={compLocal.size}
                  fontSize={"0.64rem"}
                  tooRead={theContext.tooRead}
                  action={handleChangeSIZECOMP}
                />
              </div>
            </div>

            <div className="row d-flex justify-content-center align-items-center mb-0" style={{ margin: "0% 0.05rem" }}>
              <div className="col-12 d-flex flex-row justify-content-start align-items-start mx-0 mt-1 p-1 bg-body">
                <FieldText
                  title={TITLES_RCM_LEFT.COMPONENT_PLACEHOLDER}
                  value={compLocal.placeholder}
                  fontSize={"0.64rem"}
                  tooRead={theContext.tooRead}
                  action={handleChangePLACEHOLDERCOMP}
                />

              </div>
            </div>

            <div className="row d-flex justify-content-center align-items-center gap-4 mb-0" >

              <div className="col-5 d-flex flex-row justify-content-center align-items-center m-0 mt-1 me-2 p-1 bg-body" >
                <FieldSelect
                  title={TITLES_RCM_LEFT.COMPONENT_REQUIRED_ASK}
                  value={compLocal.required + ""}
                  fontSize={"0.64rem"}
                  tooRead={theContext.tooRead}
                  arrayValues={["True", "False"]}
                  action={handleChangeREQUIREDCOMP}
                />
              </div>

              <div className="col-5 d-flex flex-row justify-content-center align-items-center m-0 mt-1 p-1 bg-body" >
                <FieldSelect
                  title={TITLES_RCM_LEFT.COMPONENT_DISABLED_ASK}
                  value={compLocal.disabled + ""}
                  fontSize={"0.64rem"}
                  tooRead={theContext.tooRead}
                  arrayValues={["True", "False"]}
                  action={handleChangeDISABLEDCOMP}
                />
              </div>
            </div>

            <div className="row d-flex justify-content-center align-items-center gap-1 mb-0" >
              <div className={`col-3 ${theContext.tooRead ? "flex-row align-items-center" : "flex-column align-items-start"} justify-content-start m-0 mt-1 p-1 pe-2 bg-body`}>
                <FieldSelect
                  title={TITLES_RCM_LEFT.COMPONENT_BORDER}
                  value={compLocal.borderElement + ""}
                  fontSize={"0.6rem"}
                  tooRead={theContext.tooRead}
                  arrayValues={["YES", "NOT"]}
                  action={handleChangeBORDERCOMP}
                />
              </div>

              <div className="col-3 flex-row justify-content-start align-items-center m-0 mt-1 p-1 bg-body">
                <FieldSelectColors
                  title={TITLES_RCM_LEFT.COMPONENT_COLOR}
                  value={compLocal.colorElement}
                  fontSize={"0.6rem"}
                  tooRead={theContext.tooRead}
                  arrayValues={COLOR_COMPONENTS}
                  action={handleChangeCOLORCOMP}
                />
              </div>

              <div className="col-4 flex-row justify-content-start align-items-center m-0 ms-4 mt-1 p-1 bg-body"
                style={{ height: "auto" }}>
                <FieldText
                  title={TITLES_RCM_LEFT.COMPONENT_FONT_SIZE}
                  value={compLocal.fontSizeElement}
                  fontSize={"0.6rem"}
                  tooRead={theContext.tooRead}
                  action={handleChangeFSCOMP}
                />
              </div>
            </div>

            <div className="row d-flex justify-content-center align-items-center gap-1 mb-0" >
              <div className="col-5 d-flex flex-column justify-content-start align-items-center m-0 mt-1 p-1 bg-body" >
                <PositionFielsComp
                  title={TITLES_RCM_LEFT.COMPONENT_POSITION}
                  titleField1={TITLES_RCM_LEFT.COMPONENT_POSITION_ROW}
                  titleField2={TITLES_RCM_LEFT.COMPONENT_POSITION_COLUMN}
                  value={compLocal.position}
                  value1Field1={compLocal.position.rowElem}
                  value1Field2={compLocal.position.colElem}
                  fontSize={"0.64rem"}
                  fontSize2={"0.58rem"}
                  tooRead={theContext.tooRead}
                  action1={handleChangeORDERINLOCK}
                  action2={handleChangeORDERINLOCK}
                />
              </div>

              <div className="col-6 d-flex flex-column justify-content-start align-items-center m-0 mt-1 p-1 bg-body">
                <PositionFielsComp
                  title={TITLES_RCM_LEFT.COMPONENT_DIMENSION}
                  titleField1={TITLES_RCM_LEFT.COMPONENT_DIMENSION_WIDTH}
                  titleField2={TITLES_RCM_LEFT.COMPONENT_DIMENSION_HEIGHT}
                  value={compLocal.dimension}
                  value1Field1={compLocal.dimension.width}
                  value1Field2={compLocal.dimension.height}
                  fontSize={"0.64rem"}
                  fontSize2={"0.58rem"}
                  tooRead={theContext.tooRead}
                  action1={handleChangeORDERINLOCK}
                  action2={handleChangeORDERINLOCK}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default DataCompMenu;
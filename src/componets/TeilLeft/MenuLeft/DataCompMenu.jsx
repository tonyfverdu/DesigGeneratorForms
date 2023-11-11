import { useState, useEffect, useContext, useCallback } from 'react';
import { MyContext } from '../../../context/TheContext.jsx';
import HeaderHead from './HeaderHead.jsx';
import FieldText from './FieldText.jsx';
import FieldNumber from './FieldNumber.jsx';
import FieldData from './FieldData.jsx';
// import FieldTextArea from './TeilLeft/MenuLeft/FieldTextArea.jsx';
// import FieldSelectAdd from './TeilLeft/MenuLeft/FieldSelectAdd.jsx';
import PositionFielsComp from './PositionFielsComp.jsx';
import FieldSelect from './FieldSelect.jsx';
import FieldSelectColors from './FieldSelectColors.jsx';
import { TITLES_RCM_LEFT, TYPE_ELEMENTS2, COLOR_COMPONENTS } from '../../../constants/contants.js';


function DataCompMenu({ valueComp, setValueComp }) {
  const {tooRead} = useContext(MyContext);
  const [compLocal, setCompLocal] = useState(valueComp);

  useEffect(() => {
    setCompLocal(valueComp);
  }, [valueComp])

  function handleChangeTYPECOMP(ev) {
    ev.preventDefault();
    const newValue = ev.target.value;

    setCompLocal({ ...compLocal, type_Element: newValue });
    setValueComp({ ...compLocal, type_Element: newValue });
  }
  function handleChangeTITLECOMP(ev) {
    ev.preventDefault();
    const newValue = ev.target.value;

    setCompLocal({ ...compLocal, title_Element: newValue });
    setValueComp({ ...compLocal, type_Element: newValue });
  }
  function handleChangeIDCOMP(ev) {
    ev.preventDefault()
    const newValue = ev.target.value

    setCompLocal({ ...compLocal, id_Element: newValue })
  }
  function handleChangeORDERINLOCK(ev) {
    ev.preventDefault()
    const newValue = ev.target.value

    setCompLocal({ ...compLocal, orderInBlock: newValue })
  }
  function handleChangeLABELCOMP(ev) {
    ev.preventDefault()
    const newValue = ev.target.value

    setCompLocal({ ...compLocal, label_Element: newValue })
  }
  function handleChangeSIZECOMP(ev) {
    ev.preventDefault()
    const newValue = ev.target.value

    setCompLocal({ ...compLocal, size: newValue })
  }
  function handleChangePLACEHOLDERCOMP(ev) {
    ev.preventDefault()
    const newValue = ev.target.value

    setCompLocal({ ...compLocal, placeholder: newValue })
  }
  function handleChangeREQUIREDCOMP(ev) {
    ev.preventDefault()
    const newValue = ev.target.value

    setCompLocal({ ...compLocal, required: newValue })
  }
  function handleChangeDISABLEDCOMP(ev) {
    ev.preventDefault()
    const newValue = ev.target.value

    setCompLocal({ ...compLocal, disabled: newValue })
  }
  function handleChangeBORDERCOMP(ev) {
    ev.preventDefault()
    const newValue = ev.target.value

    setCompLocal({ ...compLocal, borderElement: newValue })
  }
  function handleChangeCOLORCOMP(ev) {
    ev.preventDefault()
    const newValue = ev.target.value

    setCompLocal({ ...compLocal, colorElement: newValue })
  }
  function handleChangeFSCOMP(ev) {
    ev.preventDefault()
    const newValue = ev.target.value

    setCompLocal({ ...compLocal, fontSizeElement: newValue })
  }

  // Define the static JSX element outside the return statement
  const fieldSelect_Type = (
    <FieldSelect
      title={TITLES_RCM_LEFT.COMPONENT_TYPE}
      value={valueComp.type_Element}
      fontSize="0.5rem"
      arrayValues={TYPE_ELEMENTS2}
      action={handleChangeTYPECOMP}
    />
  );
  const fieldText_Title = (
    <FieldText
      title={TITLES_RCM_LEFT.COMPONENT_TITLE}
      value={valueComp.title_Element}
      fontSize="0.5rem"
      action={handleChangeTITLECOMP}
    />
  );
  const fieldText_ID = (
    <FieldText
      title={TITLES_RCM_LEFT.COMPONENT_ID}
      value={valueComp.id_Element}
      fontSize="0.5rem"
      action={handleChangeIDCOMP}
    />
  );
  const fieldText_Label = (
    <FieldText
      title={TITLES_RCM_LEFT.COMPONENT_LABEL}
      value={valueComp.label_Element}
      fontSize="0.5rem"
      action={handleChangeLABELCOMP}
    />
  );
  const fieldNumber_Size = (
    <FieldNumber
      title={TITLES_RCM_LEFT.COMPONENT_SIZE}
      value={valueComp.size}
      fontSize="0.5rem"
      action={handleChangeSIZECOMP}
    />
  );
  const fieldText_Placeholder = (
    <FieldText
      title={TITLES_RCM_LEFT.COMPONENT_PLACEHOLDER}
      value={valueComp.placeholder}
      fontSize="0.5rem"
      action={handleChangePLACEHOLDERCOMP}
    />
  );
  const fieldSelectComponentRequired = (
    <FieldSelect
      title={TITLES_RCM_LEFT.COMPONENT_REQUIRED_ASK}
      value={valueComp.required + ""}
      fontSize="0.5rem"
      arrayValues={["True", "False"]}
      action={handleChangeREQUIREDCOMP}
    />
  );
  const fieldSelectComponentDisabled = (
    <FieldSelect
      title={TITLES_RCM_LEFT.COMPONENT_DISABLED_ASK}
      value={valueComp.disabled + ""}
      fontSize="0.5rem"
      arrayValues={["True", "False"]}
      action={handleChangeDISABLEDCOMP}
    />
  );
  const fieldSelectComponentBorder = (
    <FieldSelect
      title={TITLES_RCM_LEFT.COMPONENT_BORDER}
      value={valueComp.borderElement + ""}
      fontSize="0.5rem"
      arrayValues={["YES", "NOT"]}
      action={handleChangeBORDERCOMP}
    />
  );
  const fieldSelectComponentColor = (
    <FieldSelectColors
      title={TITLES_RCM_LEFT.COMPONENT_COLOR}
      value={valueComp.colorElement}
      fontSize="0.5rem"
      arrayValues={COLOR_COMPONENTS}
      action={handleChangeCOLORCOMP}
    />
  );
  const fieldText_Size = (
    <FieldText
      title={TITLES_RCM_LEFT.COMPONENT_FONT_SIZE}
      value={valueComp.fontSizeElement}
      fontSize="0.5rem"
      action={handleChangeFSCOMP}
    />
  );
  const field_Position = (
    <PositionFielsComp
      title={TITLES_RCM_LEFT.COMPONENT_POSITION}
      titleField1={TITLES_RCM_LEFT.COMPONENT_POSITION_ROW}
      titleField2={TITLES_RCM_LEFT.COMPONENT_POSITION_COLUMN}
      value={valueComp.position}
      // value1Field1={valueComp.position.rowElem}
      // value1Field2={valueComp.position.colElem}
      value1Field1={0}
      value1Field2={0}
      fontSize="0.55rem"
      fontSize2="0.5rem"
      action1={handleChangeORDERINLOCK}
      action2={handleChangeORDERINLOCK}
    />
  );
  const field_Dimension = (
    <PositionFielsComp
      title={TITLES_RCM_LEFT.COMPONENT_DIMENSION}
      titleField1={TITLES_RCM_LEFT.COMPONENT_DIMENSION_WIDTH}
      titleField2={TITLES_RCM_LEFT.COMPONENT_DIMENSION_HEIGHT}
      value={valueComp.dimension}
      // value1Field1={valueComp.dimension.width}
      // value1Field2={valueComp.dimension.height}
      value1Field1={0}
      value1Field2={0}
      fontSize="0.55rem"
      fontSize2="0.5rem"
      action1={handleChangeORDERINLOCK}
      action2={handleChangeORDERINLOCK}
    />
  );


  return (
    <div id="accordionComp" className="accordion container-fluid graycolor400 d-flex flex-column justify-content-center align-items-center p-1 mx-auto mb-1">
      <div className="accordion-item rounded-0 container-fluid mx-auto graycolor400 border-0" style={{ marginBottom: "0.3rem" }} >
        <HeaderHead
          idHeading="headingComp"
          dataTarget="#collapseComp"
          ariaControl="collapseComp"
          fontSize="0.62rem"
          title={TITLES_RCM_LEFT.COMPONENT_HEAD}
          value={valueComp.title_Element}
        />

        <div id="collapseComp" className="accordion-collapse collapse m-0" aria-labelledby="headingComp" data-bs-parent="#accordionComp">
          <div className="accordion-body p-0 mb-0 mx-auto">
            <div className="row d-flex justify-content-center align-items-center gap-1 mb-0">
              <div className="col-3 d-flex flex-column justify-content-start align-items-center p-1 bg-body"
                style={{ margin: "auto 0.08rem" }}
              >
                {fieldSelect_Type}
              </div>
              <div className="col d-flex flex-column justify-content-start align-items-start p-1 bg-body">
                {fieldText_Title}
              </div>
            </div>

            <div className="row d-flex justify-content-center align-items-center">
              <div className={`col d-flex ${tooRead ? "flex-row" : "flex-column"} justify-content-start align-items-start m-0 mt-1 p-1 bg-body `}>
                {fieldText_ID}
              </div>
            </div>

            <div className="row d-flex justify-content-center align-items-center gap-1 mb-0" >
              <div className="col-8 d-flex flex-row justify-content-start align-items-start m-0 mt-1 p-1 bg-body">
                {fieldText_Label}
              </div>

              <div className={`col d-flex $flex-column justify-content-start align-items-center m-0 mt-1 p-0 px-0 bg-body `}>
                {fieldNumber_Size}
              </div>
            </div>

            <div className="row d-flex justify-content-center align-items-center mb-0">
              <div className="col d-flex flex-row justify-content-start align-items-start mx-0 mt-1 p-1 bg-body">
                {fieldText_Placeholder}
              </div>
            </div>

            <div className="row d-flex justify-content-center align-items-center gap-1 mb-0" >
              <div className={`col-6 d-flex ${tooRead ? "flex-row" : "flex-column"} justify-content-center align-items-center m-0 mt-1 me-2 p-1 bg-body`} >
                {fieldSelectComponentRequired}
              </div>

              <div className={`col d-flex ${tooRead ? "flex-row" : "flex-column"} justify-content-center align-items-center m-0 mt-1 p-1 bg-body`} >
                {fieldSelectComponentDisabled}
              </div>
            </div>

            <div className="row d-flex justify-content-center align-items-center gap-1 mb-0" >
              <div className={`col d-flex ${tooRead ? "flex-row align-items-center" : "flex-column align-items-start"} justify-content-start m-0 mt-1 p-1 bg-body`}>
                {fieldSelectComponentBorder}
              </div>

              <div className={`col d-flex ${tooRead ? "flex-row align-items-center" : "flex-column align-items-start"} justify-content-start align-items-center m-0 mt-1 p-1 bg-body`}>
                {fieldSelectComponentColor}
              </div>

              <div className={`col-${tooRead ? '4' : '3'} d-flex ${tooRead ? "flex-row" : "flex-column"} justify-content-start align-items-center m-0 ms-4 mt-1 p-1 bg-body`}>
                {fieldText_Size}
              </div>
            </div>

            <div className="row d-flex justify-content-center align-items-center gap-1 mb-0" >
              <div className="col-6 d-flex flex-column justify-content-start align-items-center m-0 mt-1 p-0 bg-body" >
                {field_Position}
              </div>

              <div className="col d-flex flex-column justify-content-start align-items-center m-0 mt-1 p-0 bg-body">
                {field_Dimension}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DataCompMenu;
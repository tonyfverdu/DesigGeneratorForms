import { useState, useEffect, useContext, Fragment } from 'react';
import { MyContext } from '../context/TheContext';
import '../sass/componentSass/GroupButtonSelect.scss'

//  typeOption
function GroupButtonsSelect({ preId, role, arialLabel, typeButton, nameInput, options, colors, sizeLetter, height, groupButton }) {
  const theContext = useContext(MyContext)
  const [optionSelect, setOptionSelect] = useState(`${preId}_0`)

  useEffect(() => {
    if (groupButton === "select_left") {
      switch (optionSelect) {
        case `${preId}_0`:
          theContext.setOptionState("read")
          theContext.setToogleReadLeft(true)
          theContext.setToogleCreateLeft(false)
          theContext.setToogleModifyLeft(false)

          theContext.setComponentRead(theContext.objComponentShow)
          break;
        case `${preId}_1`:
          theContext.setOptionState("create")
          theContext.setToogleReadLeft(false)
          theContext.setToogleCreateLeft(true)
          theContext.setToogleModifyLeft(false)

          theContext.setComponentCreate(theContext.objComponentShow)
          break;
        case `${preId}_2`:
          theContext.setOptionState("modify")
          theContext.setToogleReadLeft(false)
          theContext.setToogleCreateLeft(false)
          theContext.setToogleModifyLeft(true)

          theContext.setComponentModify(theContext.objComponentShow)
        default:
          break;
      }
    } else if (groupButton === "typeDesigner") {
      switch (optionSelect) {
        case `${preId}_0`:
          theContext.setOptionDesigner("form")
          break;
        case `${preId}_1`:
          theContext.setOptionDesigner("block")
          break;
        case `${preId}_2`:
          theContext.setOptionDesigner("component")
        default:
          break;
      }
    } else if (groupButton === "typeLayout") {
      switch (optionSelect) {
        case `${preId}_0`:
          theContext.setOptionLayout("read")
          break;
        case `${preId}_1`:
          theContext.setOptionLayout("delete")
          break;
        case `${preId}_2`:
          theContext.setOptionLayout("new")
        case `${preId}_3`:
          theContext.setOptionLayout("modify")
        default:
          break;
      }
    }
  }, [optionSelect])

  function handleSelect(ev) {
    setOptionSelect(ev.target.id)
  }

  function showRadioButtons(parOptionsArray) {
    if (Array.isArray(parOptionsArray)) {
      return parOptionsArray.map((opt, index) => {
        return (
          <Fragment key={index}>
            <input type={typeButton} className="btn-check btn-sm focus-ring" name={nameInput} id={`${preId}_${index}`}
              value={optionSelect} onClick={(ev) => handleSelect(ev)}
              style={{ border: "1px solid red", width: "auto" }} />
            <label className={`btn btn-outline-${colors[index]} text-white-emphasis fw-bolder`} htmlFor={`${preId}_${index}`}
              style={{ "--bs-btn-padding-y": ".1rem", "--bs-btn-padding-x": "0.5rem", "--bs-btn-font-size": `${sizeLetter}` }}>
              {opt}
            </label>
          </Fragment>
        )
      })
    } else {
      console.error('Error:  The argument of the function "" must be an array!!')
    }
  }

  return (
    <div className="contGrpBtnSelect col d-flex justify-content-center align-items-center p-1 m-2" >
      <div className="btn-group btn-group-sm m-0" style={{ height: height }} role={role} aria-label={arialLabel}>
        {showRadioButtons(options)}
      </div>
    </div>
  )
}

export default GroupButtonsSelect;



import { useState, useEffect, useContext, Fragment } from 'react';
import { MyContext } from '../context/TheContext';
import '../sass/componentSass/GroupButtonSelect.scss'


function GroupButtonsSelect({ preId, role, arialLabel, typeButton, nameInput, options, colors, sizeLetter, height }) {
  const theContext = useContext(MyContext)
  const [optionSelect, setOptionSelect] = useState("")

  useEffect(() => {
    switch (optionSelect) {
      case "gbtn1_0":
        theContext.setToogleReadLeft(true)
        theContext.setToogleCreateLeft(false)
        theContext.setToogleModifyLeft(false)
        theContext.setOptionStateLeft("read")
        break;
      case "gbtn1_1":
        theContext.setToogleReadLeft(false)
        theContext.setToogleCreateLeft(true)
        theContext.setToogleModifyLeft(false)
        theContext.setOptionStateLeft("create")
        break;
      case "gbtn1_2":
        theContext.setToogleReadLeft(false)
        theContext.setToogleCreateLeft(false)
        theContext.setToogleModifyLeft(true)
        theContext.setOptionStateLeft("modify")

      default:
        break;
    }
  }, [optionSelect])

  function handleSelect(ev) {
    setOptionSelect(ev.target.id)
  }

  return (
    <div className="contGrpBtnSelect col d-flex justify-content-center align-items-center p-0 m-0" >
      <div className="btn-group btn-group-sm m-0" style={{ height: height }} role={role} aria-label={arialLabel}>
        {
          options.map((opt, index) => {
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
        }
      </div>
    </div>
  )
}

export default GroupButtonsSelect;
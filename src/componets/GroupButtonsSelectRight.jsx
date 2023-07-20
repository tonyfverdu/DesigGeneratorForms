import { useState, useEffect, useContext } from 'react';
import { MyContext } from '../context/TheContext';
import StatusOption from './StatusOption.jsx';
import '../sass/componentSass/GroupButtonSelect.scss'

//  typeOption
function GroupButtonsSelectRight({ preId, role, arialLabel, typeButton, options, colors, height }) {
  const theContext = useContext(MyContext)
  const [optionLocal, setOptionLocal] = useState("Forms")
  const [colorLocal, setColorLocal] = useState("success")

  useEffect(() => {
    if (optionLocal === "Forms") {
      setColorLocal("success")
    } else if (optionLocal === "Blocks") {
      setColorLocal("secondary")
    } else if (optionLocal === "Components") {
      setColorLocal("primary")
    }
    theContext.setOptionDesigner(optionLocal)
  }, [optionLocal])

  function handleBtnClick(ev) {
    setOptionLocal(ev.target.value)
  }

  function showRadioButtons(parOptionsArray) {
    if (Array.isArray(parOptionsArray)) {
      return parOptionsArray.map((opt, index) => {
        return (
          <div key={opt} className="mx-1">
            <button type={typeButton} className={`btn btn-sm btn-outline-${colors[index]} text-white-emphasis fw-bolder border border-2 border-${colors[index]}`}
              id={`${preId}_${index}`}
              value={opt} onClick={(ev) => handleBtnClick(ev)}
              style={{ border: "1px solid red", width: "auto" }} >
              {opt}
            </button>
          </div>
        )
      })
    } else {
      console.error('Error: The argument of the function "showRadioButtons" must be an array!!')
    }
  }

  return (
    <div className="contGrpBtnSelect d-flex justify-content-between align-items-center gap-1 p-1 mx-auto" >
      <StatusOption
        fontSizeText={"0.9rem"}
        colorText={"white"}
        option={optionLocal}
        colorOption={colorLocal}
        widthBand={"auto"}
      />

      <div className="btn-group btn-group-sm m-0 p-0" style={{ height: height }} role={role} aria-label={arialLabel}>
        {showRadioButtons(options)}
      </div>
    </div>
  )
}

export default GroupButtonsSelectRight;





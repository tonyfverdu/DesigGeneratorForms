import { useState, Fragment } from 'react';


function GroupButtonsSelect({ preId, role, arialLabel, typeButton, nameInput, options, colors, sizeLetter }) {
  const [optionSelect, setOptionSelect] = useState("")

  return (
    <div className="col d-flex justify-content-center py-0 bg-body" >
      <div className="btn-group btn-group-sm" role={role} aria-label={arialLabel}>
        {
          options.map((opt, index) => {
            return (
              <Fragment key={index}>
                <input type={typeButton} className="btn-check focus-ring" name={nameInput} id={`${preId}_${index}`}
                  value={optionSelect} onClick={(ev) => setOptionSelect(ev.target.value)} />
                <label className={`btn btn-outline-${colors[index]} text-white-emphasis fw-bolder`} htmlFor={`${preId}_${index}`}
                  style={{ "--bs-btn-padding-y": ".05rem", "--bs-btn-padding-x": "0.5rem", "--bs-btn-font-size": `${sizeLetter}` }}>
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
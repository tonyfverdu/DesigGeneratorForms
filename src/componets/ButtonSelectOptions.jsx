import React from 'react'


function ButtonSelectOptions({ typeButton, role, arialLabelA, arialLabelB, options, colors }) {
  return (
    <div className="col d-flex justify-content-end py-1" >
      <div className="btn-toolbar" role="toolbar" aria-label={arialLabelA}>
        <div className="btn-group-sm" role={role} aria-label={arialLabelB}>
          {
            options.map((opt, index) => {
              return (
                <button key={index} type={typeButton} className={`btn ${colors[index]} text-white-emphasis fw-bold mx-1`}>{opt}</button>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default ButtonSelectOptions;
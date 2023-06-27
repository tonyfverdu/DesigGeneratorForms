import React from 'react'
import '../../sass/componentSass/TeilRight/SelectLayoutForm.scss'


function SelectLayoutForm({ titleSelectState }) {
  return (
    <div className="contSelectState d-flex justify-content-center align-items-center me-1" style={{height: "2.4rem"}}>
      <header className="d-flex justify-content-center align-items-center p-0 m-0">
        <h6 className="m-0 p-1 fw-bold text-end text-dark" style={{ fontSize: "0.8rem", backgroundColor: "transparent" }}>{titleSelectState}</h6>
      </header>
    </div>
  )
}

export default SelectLayoutForm;
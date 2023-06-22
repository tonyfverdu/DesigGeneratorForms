import React from 'react'
import '../sass/componentSass/SelectLayoutForm.scss'

function SelectLayoutForm({titleSelectState}) {
  return (
    <div className="contSelectState d-flex justify-content-center align-items-center me-1">
      <div className="selectTitleState d-flex justify-content-center align-items-center">
        <header className="headerSelectTitleState p-0 m-0">
          <h3 className="selectTitleState m-0 px-5 py-1 h4 fw-bold text-center text-bg-light">{titleSelectState}</h3>
        </header>
      </div>
    </div>
  )
}

export default SelectLayoutForm
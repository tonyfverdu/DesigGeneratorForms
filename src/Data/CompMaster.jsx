import { useState, useContext } from 'react'
import { MyContext } from '../context/TheContext';
import MasterElem_PB from '../componets/elementsForms/MasterElem_PB ';
import IconEditDelete from '../componets/icons/IconEditDelete';
import Column from '../componets/TeilRight/Column';

import '../sass/componentSass/ComponentsInLayout/CompMaster.scss'

const elementNull = {
  elementID: "id_1000",
  type: "master",
  blockOrigen: undefined,
  orderInBlock: undefined,
  position: { row: undefined, col: undefined },
  dimensions: { width: 1, height: "2.4rem" },
  labelElement: "",
  required: true,
  disabled: false,
  checked: undefined,
  response: [""],
  placeholder: "Master",
  size: 6,
  row: 0,
  cols: 0,
  optionsValues: [""],
  legend: "",
  name: "",
  valueComponent: "",
  setComponent: "",
  radioButtons: [
    {
      elementID: "",
      labelElement: "",
      name: "",
      required: true,
      disabled: false,
      checked: false,
      response: [false],
      setRadioButton: null
    }
  ]
}

function CompMaster() {
  const theContext = useContext(MyContext);
  const [toogleColBefore, setToogleColBefore] = useState(false)
  const [toogleColAfter, setToogleColAfter] = useState(false)

  return (
    <div className="contComponentInlayout col container-fluid mt-1 p-1 bg-body bg-gradiente user-select-none">
      <div div className="row p-0 my-2 bg-light">
        {
          toogleColBefore && <Column />
        }
        <div className={`col-${theContext.objComponent.dimensions.width} d-flex flex-row justify-content-start align-items-center my-1 p-0`}>
          <button type="button" className="buttonNewElement d-flex flex-row justify-content-center align-items-center me-1 p-0"
            onClick={() => setToogleColBefore(!toogleColBefore)}>
            <span className="text-dark fw-normal p-0 m-0">+</span>
          </button>
          <MasterElem_PB
            elementID={elementNull.elementID}
            required={elementNull.required}
            disabled={elementNull.disabled}
            placeholder={elementNull.placeholder}
          />
          <IconEditDelete />
          <button type="button" className="buttonNewElement d-flex flex-row justify-content-center align-items-center ms-1 p-0"
            onClick={() => setToogleColAfter(!toogleColAfter)}>
            <span className="text-dark fw-normal p-0 m-0">+</span>
          </button>
        </div>
        {
          toogleColAfter && <Column />
        }
      </div>
    </div>
  )
}

export default CompMaster;
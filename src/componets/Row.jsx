import { useState } from 'react'
import LabelElem_PB from './elementsForms/LabelElem_PB'
import '../sass/componentSass/NewRow.scss'

const pruebaLabelElementRow = {
  elementID: "ID_0000",
  required: true,
  disabled: false,
  response: ["Soy la response of Label"],
  placeholder: "Soy un componente Label",
  size: 15,
}

function Row() {
  const [newRow, setNewRow] = useState(false)

  return (
    <>
      <div className="contRow m-0 my-1 p-0">
        <button className="circle p-0 fw-bold" value={newRow} onClick={(ev) => !setNewRow(!newRow)}>
          {
            !newRow ? "+" : "-"
          }
        </button>
        <hr className="contLine" />
      </div>
      {
        newRow &&
        <>
          <div className="container d-flex align-items-center p-0 mt-1 bg-light">
            <div className="col-12 container">
            <LabelElem_PB
              elementID={pruebaLabelElementRow.elementID}
              required={pruebaLabelElementRow.required}
              disabled={pruebaLabelElementRow.disabled}
              response={pruebaLabelElementRow.response}
              placeholder={pruebaLabelElementRow.placeholder}
              size={pruebaLabelElementRow.size}
            />
            </div>
          </div>
          <Row />
        </>
      }
    </>
  )
}

export default Row;
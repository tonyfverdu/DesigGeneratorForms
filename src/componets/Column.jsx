import { Fragment, useState } from 'react'
import LabelElem_PB from './elementsForms/LabelElem_PB'
import IconEditDelete from './icons/IconEditDelete'
import '../sass/componentSass/NewRow.scss'

const pruebaLabelElementRow = {
  elementID: "ID_0000",
  required: true,
  disabled: false,
  response: ["Soy la response of Label"],
  placeholder: "",
  size: 10
}

function Column() {
  const [newCol, setNewCol] = useState(false)

  return (
    <div className="d-flex flex-row justify-content-center align-items-center ">
      <div className="contCol m-0 me-1 p-0">
        <button className="circle p-0 fw-light" value={newCol} onClick={(ev) => !setNewCol(!newCol)}>
          {
            !newCol ? "+" : "-"
          }
        </button>
      </div>
      {
        newCol &&
        <>
          <div className="col-1 d-flex flex-row justify-content-center align-items-start mx-3 p-0">
            <LabelElem_PB
              elementID={pruebaLabelElementRow.elementID}
              required={pruebaLabelElementRow.required}
              disabled={pruebaLabelElementRow.disabled}
              response={pruebaLabelElementRow.response}
              placeholder={pruebaLabelElementRow.placeholder}
              size={pruebaLabelElementRow.size}
            />
            <IconEditDelete />
          </div>
          <Column />
        </>
      }
    </div>
  )
}

export default Column
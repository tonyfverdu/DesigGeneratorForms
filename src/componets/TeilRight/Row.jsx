import { useState, useContext } from 'react'
import { MyContext } from '../../context/TheContext.jsx'
import RowIni from './RowIni'
import Column from './Column.jsx'
import '../../sass/componentSass/TeilRight/Row.scss'
import { useEffect } from 'react'


function Row() {
  const theContext = useContext(MyContext)
  const [toogleNewRow, setToogleNewRow] = useState(true)
  const [contRow, setContRow] = useState(null)

  useEffect(() => {
    setContRow(0)
  }, [])

  function addNewRow(ev) {
    ev.preventDefault()

    if (toogleNewRow) {
      theContext.setArrayOfRows([...theContext.arrayOfRows, <RowIni />])
      setContRow(theContext.arrayOfRows.length)
      theContext.setNumRow(theContext.contRow)
    } else {
      theContext.setArrayOfRows(theContext.arrayOfRows.filter((row, index) => index !== contRow))
      setContRow(theContext.arrayOfRows.length)
      theContext.setNumRow(theContext.contRow)
    }
    setToogleNewRow(!toogleNewRow)
  }

  return (
    <div className="contRow d-flex flex-row justify-content-start align-item-center m-0 mb-2 p-1">
      {
        contRow <= 0 ?
          <span className="fs-6 fw-bold text-danger me-1">{0}</span>
          :
          <span className="fs-6 fw-bold text-danger me-1">{contRow}</span>
      }

      {/* ****     Circle add new Row   **** */}
      <div className="contRow d-flex flex-row justify-content-start align-item-center p-0">
        <button className="circle d-flex flex-row justify-content-center align-item-center fw-bold
        btn btn-outline-secondary mx-auto me-1" value={toogleNewRow} onClick={(ev) => addNewRow(ev)}>
          {
            toogleNewRow ? "+" : "-"
          }
        </button>
        <Column />
        <hr className="contLine d-flex flex-row justify-content-start align-item-center p-0" />
      </div>
    </div>
  )
}

export default Row;
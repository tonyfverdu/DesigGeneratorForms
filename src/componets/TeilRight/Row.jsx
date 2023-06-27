import { useState, useContext } from 'react'
import { MyContext } from '../../context/TheContext.jsx'
import RowIni from './RowIni'
import Column from './Column.jsx'
import '../../sass/componentSass/TeilRight/NewRow.scss'


function Row() {
  const theContext = useContext(MyContext)
  const [toogleNewRow, setToogleNewRow] = useState(true)
  const [contRow, setContRow] = useState(0)

  function addNewRow(ev) {
    ev.preventDefault()

    if (toogleNewRow) {
      theContext.setNumRow(prev => prev + 1)
      setContRow(theContext.arrayOfRows.length - 1)
      theContext.setArrayOfRows([...theContext.arrayOfRows, <RowIni />])
    } else {
      theContext.setNumRow(prev => prev - 1)
      setContRow(prev => prev - 1)
      theContext.setArrayOfRows(theContext.arrayOfRows.filter((row, index) => index < theContext.numRow))
    }
    setToogleNewRow(!toogleNewRow)
  }

  return (
    <div className="contRow m-0 my-1 p-0">
      {
        contRow <= 0 ?
          <span className="fs-6 fw-bold text-danger me-1">{0}</span>
          :
          <span className="fs-6 fw-bold text-danger me-1">{(theContext.arrayOfRows.length) - (theContext.arrayOfRows.length - contRow)}</span>
      }

      {/* ****     Circle add new Row   **** */}
      <button className="circle p-0 fw-bold btn-outline-secondary" value={toogleNewRow} onClick={(ev) => addNewRow(ev)}>
        {
          toogleNewRow ? "+" : "-"
        }
      </button>
      <Column />
      <hr className="contLine" />
    </div>
  )
}

export default Row;

/*
   {
        toogleNewRow &&
        <>
   {/ * <div className="container d-flex align-items-center p-0 mt-1 bg-light"> * /}
          <Column />
          {/* <div className="col-1 container d-flex justify-content-center align-items-center p-0 mt-1 bg-light">
            <CompMaster
              elementID={masterElementIni.elementID}
              required={masterElementIni.required}
              disabled={masterElementIni.disabled}
              placeholder={masterElementIni.placeholder}
            />
            <IconEditDelete />
          </div> * /}
        </>
      }
*/



//   return (
//     <>
//       <div className="contRow m-0 my-1 p-0">
//         <button className="circle p-0 fw-bold" value={newRow} onClick={(ev) => addNewRow(ev)}>
//           {
//             !newRow ? "+" : "-"
//           }
//         </button>
//         <hr className="contLine" />
//       </div>
//     </>
//   )
// }



/*
const masterElementIni = {
  elementID: "ID_0000",
  required: true,
  disabled: false,
  response: ["Soy la response of Master Element"],
  placeholder: "Master Component",
  size: 18,
}
*/

/*
      {
          newRow &&
          <>
      {/ * <div className="container d-flex align-items-center p-0 mt-1 bg-light"> * /}
            <Column />
            <div className="col-1 container d-flex justify-content-center align-items-center p-0 mt-1 bg-light">
              <CompMaster
                elementID={masterElementIni.elementID}
                required={masterElementIni.required}
                disabled={masterElementIni.disabled}
                placeholder={masterElementIni.placeholder}
              />
              <IconEditDelete />
            </div>
          </>
        }

*/
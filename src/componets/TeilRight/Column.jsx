import { useState, useContext, useRef, Fragment } from 'react'
import { MyContext } from '../../context/TheContext.jsx'
import MasterElem_PB from '../elementsForms/MasterElem_PB.jsx'
import IconEditDelete from '../icons/IconEditDelete.jsx'
import '../../sass/componentSass/TeilRight/Column.scss'


function Column() {
  const theContext = useContext(MyContext)
  const [toogleColBefore, setToogleColBefore] = useState(false)
  const [toogleColAfter, setToogleColAfter] = useState(false)
  const refElementDiv = useRef(null)

  function addNewCol(parAfterBefore) {
    if (parAfterBefore === "after") {
      setToogleColAfter(!toogleColAfter)
    } else if (parAfterBefore === "before") {
      setToogleColBefore(!toogleColBefore)
    }
  }

  return (
    <Fragment ref={refElementDiv} className="container-fluid d-flex flex-row justify-content-center align-items-start p-0 m-0">
      {
        toogleColBefore &&
        <Column />
      }
      <button type="button" className="buttonNewElement d-flex flex-row justify-content-center align-items-center mx-1 p-0"
        onClick={() => addNewCol("before")}>
        <span className="text-dark fw-normal p-1 m-0">
          {
            !toogleColBefore ? "+" : "-"
          }
        </span>
      </button>
      <div className="col d-flex flex-row justify-content-center align-items-start m-0 p-0">
        <MasterElem_PB
          elementID={theContext.masterComponentIni.elementID}
          placeholder={theContext.masterComponentIni.placeholder}
          width={theContext.masterComponentIni.dimensions.width}
        />
        <IconEditDelete
          refElementDiv={refElementDiv}
        />
      </div>
      <>
        <button type="button" className="buttonNewElement d-flex flex-row justify-content-center align-items-center ms-1 p-0"
          onClick={() => addNewCol("after")}>
          <span className="text-dark fw-normal p-1 m-0">
            {
              !toogleColAfter ? "+" : "-"
            }
          </span>
        </button>
        {
          toogleColAfter &&
          <Column />
        }
      </>
    </Fragment>
  )
}

export default Column;
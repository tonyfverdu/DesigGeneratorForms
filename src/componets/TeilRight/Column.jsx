import { useState, useContext } from 'react'
import { MyContext } from '../../context/TheContext.jsx'
import NewCol from './NewCol.jsx'
import MasterElem_PB from '../elementsForms/MasterElem_PB .jsx'
import IconEditDelete from '../icons/IconEditDelete.jsx'
import '../../sass/componentSass/TeilRight/NewCol.scss'



function Column() {
  const theContext = useContext(MyContext)
  const [newCol, setNewCol] = useState(true)
  const [toogleColBefore, setToogleColBefore] = useState(false)
  const [toogleColAfter, setToogleColAfter] = useState(false)

  function addNewCol(parAfterBefore) {
    if (parAfterBefore === "after") {
      setToogleColAfter(!toogleColAfter)
    } else if (parAfterBefore === "before") {
      setToogleColBefore(!toogleColBefore)
    }
  }

  return (
    <div className="d-flex flex-row justify-content-center align-items-center p-0 m-0">
      {
        toogleColBefore &&
        <NewCol />
      }
      <button type="button" className="buttonNewElement d-flex flex-row justify-content-center align-items-center ms-1 p-0"
        onClick={() => addNewCol("before")}>
        <span className="text-dark fw-normal p-1 m-0">
          {
            !toogleColBefore ? "+" : "-"
          }
        </span>
      </button>
      <div className="col d-flex flex-row justify-content-start align-items-center m-1 mx-2 p-0">
        <MasterElem_PB
          elementID={theContext.masterComponentIni.elementID}
          placeholder={theContext.masterComponentIni.placeholder}
        />
        <IconEditDelete />
      </div>
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
        <NewCol />
      }
    </div>
  )
}

export default Column;

/*
onClick={() => addNewCol("before")}
*/




/*
  // <div className="d-flex flex-row justify-content-center align-items-center p-1">
      {/* <div className="contCol m-0 me-1 p-0">
        <button className="circle d-flex flex-row justify-content-center align-items-center p-0 fw-normal" value={newCol} onClick={(ev) => !setNewCol(!newCol)}>
          {
            !newCol ? "+" : "-"
          }
        </button>
      </div> * / 
*/
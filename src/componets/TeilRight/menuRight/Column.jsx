import { useState, useEffect, useContext, useRef } from 'react'
import { MyContext } from '../../../context/TheContext.jsx'
import MasterElem_PB from '../../elementsForms/MasterElem_PB.jsx'
import WhiteSpace_PB from '../../elementsForms/WhiteSpace_PB.jsx'
import IconEditDelete from '../../icons/IconEditDelete.jsx'
import '../../../sass/componentSass/TeilRight/Column.scss'


function Column({ comp }) {
  const theContext = useContext(MyContext)
  const [toogleColBefore, setToogleColBefore] = useState(false)
  const [toogleColAfter, setToogleColAfter] = useState(false)
  const [isSpace, setIsSpace] = useState(false)
  const refElementDiv = useRef(null)

  function addNewCol(parAfterBefore) {
    if (parAfterBefore === "after") {
      setToogleColAfter(!toogleColAfter)

    } else if (parAfterBefore === "before") {
      setToogleColBefore(!toogleColBefore)

    } else {
      console.error('Error: The argument of the function "addNewCol" must be the worts: "after" or "before" !!')
    }
  }

  function deleteComponent(parRefElement) {
    parRefElement.current.remove()
  }

  useEffect(() => {
    if (!toogleColBefore && toogleColAfter) {
      theContext.setArrayColumns([...theContext.arrayColumns, theContext.arrayColumns.length])
    }
  }, [toogleColBefore, toogleColAfter])


  return (
    <div ref={refElementDiv} className="container-fluid d-flex flex-row justify-content-start align-items-start p-0 mx-auto" >
      {
        toogleColBefore &&
        <Column
          comp={comp}
        />
      }
      <div className="d-flex flex-column justify-content-between align-items-center p-0 ms-1" style={{ height: "2.6rem" }}>
        <CircleButton
          isButton={"before"}
          addNewCol={addNewCol}
          parToogleCol={toogleColBefore}
        />
        <button type="button" className={`btn btn-outline-success circleCol ${!isSpace ? "circleColSpace" : "circleColMinus"} 
        d-flex flex-row justify-content-center align-items-center mx-auto fw-bold text-white p-0`}
          style={{ fontSize: "0.6rem" }}
          onClick={(ev) => setIsSpace(!isSpace)}>
          S
        </button>
      </div>

      <div className=" mx-1 p-0 " >
        {
          !isSpace
            ?
            <div className="d-flex flex-column justify-content-center align-items-center" >
              <MasterElem_PB
                comp={comp}
                id_Element={comp.id_Element}
                type_Element={comp.type_Element}
                placeholder={comp.placeholder}
                width={comp.dimension.width}
                disabled={comp.disabled}
              />
              <IconEditDelete
                deleteComponent={deleteComponent}
                refElementDiv={refElementDiv}
              />
            </div>
            :
            <WhiteSpace_PB />
        }
      </div>
      
      <>
        <CircleButton
          isButton={"after"}
          addNewCol={addNewCol}
          parToogleCol={toogleColAfter}
        />

        {
          toogleColAfter &&
          <Column
            comp={comp}
          />
        }
      </>
    </div>
  )
}

export default Column;

export function CircleButton({ isButton, addNewCol, parToogleCol }) {
  return (
    <button type="button" className={`circleCol ${!parToogleCol ? "circleColPlus" : "circleColMinus"} d-flex flex-row justify-content-center align-items-center p-0`}
      onClick={() => addNewCol(isButton)}>
      <span className="fw-bold m-0 mx-auto">
        {
          !parToogleCol ? "+" : "-"
        }
      </span>
    </button>
  )
}


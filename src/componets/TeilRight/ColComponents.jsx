import { useState, useEffect, useContext } from 'react'
import { MyContext } from '../../context/TheContext.jsx';
import '../../sass/componentSass/TeilRight/Row.scss'


function ColComponents({ form, block, numRow }) {
  const theContext = useContext(MyContext)
  const [variableBlock, setVariableBlock] = useState({})
  const [toogleNewColComps, setToogleNewRowBlock] = useState(true)
  const [contColComps, setContColComps] = useState(numRow)

  useEffect(() => {
    setVariableBlock(block)
    setContColComps(numRow)
  }, [])

  function addNewRow() {
    setVariableBlock({...variableBlock, columns: block.columns.splice(numRow, 0, theContext.masterRowCompsIni)})
    theContext.setArrayOfBlocks({...theContext.arrayOfBlocks, variableBlock})

    setContColComps(contColComps => contColComps + 1)

    setToogleNewRowBlock(!toogleNewColComps)
  }

  function deleteRow() {
    setVariableBlock({...variableBlock, columns: block.columns.splice(numRow, 1)})
    theContext.setArrayOfBlocks({...theContext.arrayOfBlocks, variableBlock})

    setContColComps(contColComps => contColComps - 1)

    setToogleNewRowBlock(!toogleNewColComps)
  }

  return (
    <div className="d-flex flex-row justify-content-start align-item-center">
      {
        contColComps <= 0 ?
          <span className="fw-bolder indigo me-1" style={{ fontSize: "0.8rem" }} >{0}</span>
          :
          <span className="fw-bolder indigo me-1" style={{ fontSize: "0.8rem" }}>{numRow}</span>
      }

      <div className="col d-flex flex-row justify-content-start align-item-start">
        <button type="button" className="circleComp d-flex flex-row justify-content-center align-item-center btn btn-danger rounded-circle me-1"
          onClick={() => addNewRow()}>
          <span className="text-center fw-bolder text-white">+</span>
        </button>
        <div className="contLineComp d-flex flex-row justify-content-start align-item-center indigo mt-2" ></div>
        <button type="button" className="circleComp d-flex flex-row justify-content-center align-item-center btn btn-danger rounded-circle ms-1"
          onClick={() => deleteRow()}>
          <span className="text-center fw-bolder text-white">-</span>
        </button>

      </div>
    </div>
  )
}

export default ColComponents;
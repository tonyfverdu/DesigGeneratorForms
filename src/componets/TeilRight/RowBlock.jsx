import { useState, useEffect, useContext } from 'react'
import { MyContext } from '../../context/TheContext.jsx';
import '../../sass/componentSass/TeilRight/Row.scss'


function RowBlock({ form, count }) {
  const theContext = useContext(MyContext)
  const [toogleNewRowBlock, setToogleNewRowBlock] = useState(true)
  const [contBlocks, setContBlocks] = useState(count)

  useEffect(() => {
    setContBlocks(count)
  }, [])

  function addNewBlock() {
    theContext.setArrayOfBlocks(theContext.arrayOfBlocks.splice(count, 0, theContext.masterBlock))
    theContext.setFormObject({ ...form, blocks: theContext.arrayOfBlocks })

    setContBlocks(contBlocks => contBlocks + 1)

    setToogleNewRowBlock(!toogleNewRowBlock)
  }

  function deleteBlock() {
    theContext.setArrayOfBlocks(theContext.arrayOfBlocks.splice(count, 1))
    theContext.setFormObject({ ...form, blocks: theContext.arrayOfBlocks })

    setContBlocks(contBlocks => contBlocks - 1)

    setToogleNewRowBlock(!toogleNewRowBlock)
  }

  return (
    <div className="d-flex flex-row justify-content-start align-item-center">
      {
        contBlocks <= 0 ?
          <span className="fs-6 fw-bold text-danger me-1">{0}</span>
          :
          <span className="fs-6 fw-bold text-danger me-1">{contBlocks}</span>
      }
      <div className="col d-flex flex-row justify-content-start align-item-start">
        <button type="button" className="circle d-flex flex-row justify-content-center align-item-center fw-bold btn btn-outline-secondary rounded-circle me-1"
          onClick={() => addNewBlock()}>
          <span className="text-center text-black">+</span>
        </button>
        <div className="contLine d-flex flex-row justify-content-center align-item-center graycolor600 p-1 mt-2"></div>
        <button type="button" className="circle d-flex flex-row justify-content-center align-item-center fw-bold btn btn-danger 
        rounded-circle mx-auto ms-1"
          onClick={() => deleteBlock()}>
          <span className="text-center text-black ">-</span>
        </button>
      </div>
    </div>
  )
}

export default RowBlock;
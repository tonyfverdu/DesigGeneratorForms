import { useContext } from 'react'
import { MyContext } from '../../context/TheContext'
import { TbNumbers } from 'react-icons/tb';
import '../../sass/componentSass/icons/IconButton.scss'


function IconButtonNumber() {
  const theContext = useContext(MyContext)

  function handleButton() {
    theContext.setElement("number")
    theContext.setObjComponentShow({
      ...theContext.objComponentShow, elementID: "ID_number_001",
      type: "number", placeholder: 0, size: 3,
      dimensions: { width: 3, height: "2.4rem" },
      labelElement: "Componente Number: ",
      valueComponent: theContext.number,
      setComponent: theContext.setNumber
    })
  }

  return (
    <div className="col p-0 m-0">
      <button type="button" className="iconButton" onClick={handleButton}>
        <TbNumbers />
      </button>
    </div>
  )
}

export default IconButtonNumber;

/*
  const component = {
    elementID: "ID_0002",
    type: "number",
    blockOrigen: "The first Block",
    orderInBlock: "2",
    position: { row: 0, col: 6 },
    dimensions: { width: 3, height: "2.4rem" },
    labelElement: "Soy un componente Number",
    required: true,
    disabled: false,
    response: [10],
    placeholder: 0,
    size: 20,
    valueComponent: "",
    setComponent: theContext.setNumber
  }
*/
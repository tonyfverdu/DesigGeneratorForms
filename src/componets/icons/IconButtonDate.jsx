import {useContext} from 'react'
import { MyContext } from '../../context/TheContext'
import { BsCalendarDate } from 'react-icons/bs';
import '../../sass/componentSass/icons/IconButton.scss'

function IconButtonDate() {
  const theContext = useContext(MyContext)

  const component = {
    elementID: "ID_0003",
    type: "date",
    blockOrigen: "The first Block",
    orderInBlock: "3",
    position: { row: 0, col: 9 },
    dimensions: { width: 3, height: "2.4rem" },
    labelElement: "Soy un componente Date",
    required: true,
    disabled: false,
    response: ["01/01/2023"],
    placeholder: "01/01/2023",
    size: 20,
    valueComponent: "",
    setComponent: theContext.setDate
  }

  function handleButton() {
    theContext.setElement("date")
    theContext.setObjComponent(component)
  }

  return (
    <div className="col p-0 m-0">
      <button type="button" className="iconButton" onClick={handleButton}>
        <BsCalendarDate />
      </button>
    </div>
  )
}

export default IconButtonDate
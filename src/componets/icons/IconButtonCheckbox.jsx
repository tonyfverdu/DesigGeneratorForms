import { useContext } from 'react'
import { MyContext } from '../../context/TheContext'
import { MdCheckBox } from 'react-icons/md';
import '../../sass/componentSass/icons/IconButton.scss'


function IconButtonCheckbox() {
  const theContext = useContext(MyContext)

  const component = {
    elementID: "ID_0009",
    type: "checkbox",
    blockOrigen: "The first Block",
    orderInBlock: "9",
    position: { row: 2, col: 8 },
    dimensions: { width: 3, height: "2.4rem" },
    labelElement: "Soy un componente Checkbox",
    required: true,
    disabled: false,
    checked: undefined,
    response: [false.toString()],
    placeholder: false.toString(),
    size: 30,
    valueComponent: undefined,
    setComponent: theContext.setCheckbox
  }

  function handleButton() {
    theContext.setElement("checkbox")
    theContext.setObjComponent(component)
  }

  return (
    <div className="col p-0 m-0">
      <button type="button" className="iconButton" onClick={handleButton}>
        <MdCheckBox />
      </button>
    </div>
  )
}

export default IconButtonCheckbox;
import {useContext} from 'react'
import { MyContext } from '../../context/TheContext'
import { MdTextFields } from 'react-icons/md';
import '../../sass/componentSass/icons/IconButton.scss'

function IconButtonText() {
  const theContext = useContext(MyContext)

  const component = {
    elementID: "ID_0001",
    type: "text",
    blockOrigen: "The first Block",
    orderInBlock: "1",
    position: { row: 0, col: 3 },
    dimensions: { width: 4, height: "2.4rem" },
    labelElement: "Soy un componente Text",
    required: true,
    disabled: false,
    response: ["Ich war ein Textelement im Vergangenheit"],
    placeholder: "Ja, ich bin ein Text so",
    size: 25,
    valueComponent: "",
    setComponent: theContext.setText
  }

  function handleButton() {
    theContext.setElement("text")
    theContext.setObjComponent(component)
  }

  return (
    <div className="col p-0 m-0">
      <button type="button" className="iconButton" onClick={handleButton}>
        <MdTextFields />
      </button>
    </div>
  )
}

export default IconButtonText;
import {useContext} from 'react'
import { MyContext } from '../../context/TheContext'
import { MdEmail } from 'react-icons/md';
import '../../sass/componentSass/icons/IconButton.scss'


function IconButtonEmail() {
  const theContext = useContext(MyContext)

  const component = {
    elementID: "ID_0006",
    type: "email",
    blockOrigen: "The first Block",
    orderInBlock: "6",
    position: { row: 1, col: 4 },
    dimensions: { width: 4, height: "2.4rem" },
    labelElement: "Soy un componente Email",
    required: true,
    disabled: false,
    response: ["usuarioA@dominio.com"],
    placeholder: "enteryouremail@dominio.com",
    size: 28,
    valueComponent: "",
    setComponent: theContext.setEmail
  }

  function handleButton() {
    theContext.setElement("email")
    theContext.setObjComponent(component)
  }

  return (
    <div className="col p-0 m-0">
      <button type="button" className="iconButton" onClick={handleButton}>
        <MdEmail />
      </button>
    </div>
  )
}

export default IconButtonEmail;
import { useContext } from 'react'
import { MyContext } from '../../context/TheContext'
import { BsTextareaT } from 'react-icons/bs';
import '../../sass/componentSass/icons/IconButton.scss'


function IconButtonTextArea() {
  const theContext = useContext(MyContext)

  function handleButton() {
    theContext.setElement("textArea")
    theContext.setObjComponentShow({
      ...theContext.objComponentShow, elementID: "ID_textArea_001",
      type: "textArea", placeholder: "Escriba un texto multilinea ...", size: 30,
      dimensions: { width: 3, height: "2.4rem" },
      labelElement: "Componente Area Text: ",
      row: 2,
      cols: 50,
      valueComponent: theContext.areaText,
      setComponent: theContext.setAreaText
    })
  }

  return (
    <div className="col p-0 m-0">
      <button type="button" className="iconButton" onClick={handleButton}>
        <BsTextareaT />
      </button>
    </div>
  )
}

export default IconButtonTextArea;

/*
  const component = {
    elementID: "ID_0007",
    type: "textArea",
    blockOrigen: "The first Block",
    orderInBlock: "7",
    position: { row: 2, col: 0 },
    dimensions: { width: 3, height: "2.4rem" },
    labelElement: "Soy un componente Area Text: ",
    required: true,
    disabled: false,
    response: ["usuarioA@dominio.com"],
    placeholder: "Escriba un texto multilinea ...",
    size: 30,
    row:2, 
    cols:50,
    valueComponent: "",
    setComponent: theContext.setAreaText
  }
*/
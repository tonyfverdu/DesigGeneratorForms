import { useContext } from 'react'
import { MyContext } from '../../context/TheContext'
import { MdFormatListBulleted } from 'react-icons/md';
import '../../sass/componentSass/icons/IconButton.scss'


function IconButtonSelect() {
  const theContext = useContext(MyContext)

  function handleButton() {
    theContext.setElement("select")
    theContext.setObjComponent(component)
  }

  function handleButton() {
    theContext.setElement("select")
    theContext.setObjComponentShow({
      ...theContext.objComponentShow, elementID: "ID_text_001",
      type: "select", placeholder: "Valor 1", size: 1,
      dimensions: { width: 3, height: "2.4rem" },
      labelElement: "Componente Select: ",
      optionsValues: ["Valor 1", "Valor 2", "Valor 3"],
      valueComponent: theContext.select,
      setComponent: theContext.setSelect
    })
  }

  return (
    <div className="col p-0 m-0">
      <button type="button" className="iconButton" onClick={handleButton}>
        <MdFormatListBulleted />
      </button>
    </div>
  )
}

export default IconButtonSelect;

/*
  const component = {
    elementID: "ID_0008",
    type: "select",
    blockOrigen: "The first Block",
    orderInBlock: "8",
    position: { row: 2, col: 4 },
    dimensions: { width: 3, height: "2.4rem" },
    labelElement: "Soy un componente Select: ",
    required: true,
    disabled: false,
    response: ["Valor 2"],
    placeholder: "Valor 1",
    size: "1",
    optionsValues: ["Valor 1", "Valor 2", "Valor 3"],
    valueComponent: "",
    setComponent: theContext.setSelect
  }
*/
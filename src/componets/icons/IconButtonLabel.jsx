import { useContext } from 'react';
import { MyContext } from '../../context/TheContext'
import { MdFontDownload } from 'react-icons/md';
import '../../sass/componentSass/icons/IconButton.scss'


function IconButtonLabel() {
  const theContext = useContext(MyContext)

  const component = {
    elementID: "ID_0000",
    type: "label",
    blockOrigen: "The first Block",
    orderInBlock: "0",
    position: { row: 0, col: 0 },
    dimensions: { width: 2, height: "2.4rem" },
    labelElement: "",
    required: true,
    disabled: false,
    response: ["Ich war im Vergangenheit ein Label"],
    placeholder: "Soy un componente Label",
    size: 10,
    valueComponent: "Soy un componente Label",
    setComponent: ""
  }

  function handleButton() {
    theContext.setElement("label")
    theContext.setObjComponent(component)
  }

  return (
    <div className="col p-0 m-0">
      <button type="button" className="iconButton" onClick={handleButton}>
        <MdFontDownload />
      </button>
    </div>
  )
}

export default IconButtonLabel;
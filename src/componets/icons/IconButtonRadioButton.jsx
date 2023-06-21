import { useContext } from 'react'
import { MyContext } from '../../context/TheContext'
import { MdRadioButtonChecked } from 'react-icons/md';
import '../../sass/componentSass/icons/IconButton.scss'


function IconButtonRadioButton() {
  const theContext = useContext(MyContext)

  const component = {
    elementID: "ID_0010",
    type: "radioButtons",
    blockOrigen: "The first Block",
    orderInBlock: "10",
    position: { row: 2, col: 9 },
    dimensions: { width: 3, height: "2.4rem" },
    labelElement: "Soy un componente RadioButton",
    required: true,
    disabled: false,

    response: [false.toString()],
    placeholder: false.toString(),

    legend: "Choose a option",
    name: "pruebaRB",
    radioButtons: [
      {
        elementID: "ID_00010.1",
        labelElement: "Soy un componente RadioButton",
        name: "pruebaRB",
        required: true,
        disabled: false,
        checked: false,
        response: [false],
        setRadioButton: theContext.setRadioButton
      },
      {
        elementID: "ID_00010.2",
        labelElement: "Soy un componente RadioButton",
        name: "pruebaRB",
        required: true,
        disabled: false,
        checked: false,
        response: [false],
        setRadioButton: theContext.setRadioButton
      },
      {
        elementID: "ID_00010.3",
        labelElement: "Soy un componente RadioButton",
        name: "pruebaRB",
        required: true,
        disabled: false,
        checked: false,
        response: [false],
        setRadioButton: theContext.setRadioButton
      }
    ],
    valueComponent: undefined,
    setComponent: theContext.setRadioButton
  }

  function handleButton() {
    theContext.setElement("radioButtons")
    theContext.setObjComponent(component)
  }

  return (
    <div className="col p-0 m-0">
      <button type="button" className="iconButton" onClick={handleButton}>
        <MdRadioButtonChecked />
      </button>
    </div>
  )
}

export default IconButtonRadioButton;


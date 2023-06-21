import { useState, createContext } from 'react'
import currentDate from '../functions/currentDate.js'

export const MyContext = createContext(null)


function TheContext({ children }) {
  const [element, setElement] = useState("")  // Nombre del elemento seleccionado

  const [label, setLabel] = useState("")
  const pruebaLabelElement = {
    elementID: "ID_0000",
    required: true,
    disabled: false,
    response: ["Soy la response of Label"],
    placeholder: "Soy un componente Label",
    size: 10,
    setLabel: setLabel
  }

  const [text, setText] = useState("")
  const pruebaTextElement = {
    elementID: "ID_0001",
    labelElement: "Soy un componente Text: ",
    required: true,
    disabled: false,
    response: ["Soy la response"],
    placeholder: "Soy el placeholder del Text",
    size: 28,
    setText: setText
  }

  const [number, setNumber] = useState(0)
  const pruebaNumberElement = {
    elementID: "ID_0002",
    labelElement: "Soy un componente Number: ",
    required: true,
    disabled: false,
    response: [0],
    placeholder: 0,
    size: 3,
    setNumber: setNumber
  }

  const [date, setDate] = useState(currentDate().Date_DD_MM_YY)
  const pruebaDateElement = {
    elementID: "ID_0003",
    labelElement: "Soy un componente Date: ",
    required: true,
    disabled: false,
    response: [currentDate().Date_DD_MM_YY],
    placeholder: currentDate().Date_DD_MM_YY,
    setDate: setDate
  }

  const [phone, setPhone] = useState("")
  const pruebaPhoneElement = {
    elementID: "ID_0004",
    labelElement: "Soy un componente Phone: ",
    required: true,
    disabled: false,
    response: ["92-111-1111"],
    placeholder: "91-111-1111",
    size: 20,
    setPhone: setPhone
  }

  const [email, setEmail] = useState("")
  const pruebaEmailElement = {
    elementID: "ID_0005",
    labelElement: "Soy un componente Email: ",
    required: true,
    disabled: false,
    response: ["usuarioA@dominio.com"],
    placeholder: "enteryouremail@dominio.com",
    size: 28,
    setEmail: setEmail
  }

  const [areaText, setAreaText] = useState("")
  const pruebaAreaTextElement = {
    elementID: "ID_0006",
    labelElement: "Soy un componente Area Text: ",
    required: true,
    disabled: false,
    readonly: false,
    response: ["Bla bla bla bla \n Bla bla"],
    placeholder: "Escriba un texto multilinea ...",
    row: 2,
    col: 50,
    setAreaText: setAreaText
  }

  const [select, setSelect] = useState(null)
  const pruebaSelectElement = {
    elementID: "ID_0007",
    labelElement: "Soy un componente Select: ",
    required: true,
    disabled: false,
    response: [""],
    optionsValues: ["Valor 1", "Valor 2", "Valor 3"],
    setSelect: setSelect
  }

  const [checkbox, setCheckbox] = useState(false)
  const pruebaCheckboxElement = {
    elementID: "ID_0008",
    labelElement: "Soy un componente Checkbox",
    required: true,
    disabled: false,
    checked: false,
    response: [false],
    setCheckbox: setCheckbox
  }

  const [radioButton, setRadioButton] = useState(false)
  const pruebaRadioButtonElement = {
    elementID: "ID_0009",
    labelElement: "Soy un componente RadioButton",
    required: true,
    disabled: false,
    checked: false,
    response: [false],
    setRadioButton: setRadioButton
  }
  const pruebaRadioButtons = {
    elementID: "ID_0010",
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
        setRadioButton: setRadioButton
      },
      {
        elementID: "ID_00010.2",
        labelElement: "Soy un componente RadioButton",
        name: "pruebaRB",
        required: true,
        disabled: false,
        checked: false,
        response: [false],
        setRadioButton: setRadioButton
      },
      {
        elementID: "ID_00010.3",
        labelElement: "Soy un componente RadioButton",
        name: "pruebaRB",
        required: true,
        disabled: false,
        checked: false,
        response: [false],
        setRadioButton: setRadioButton
      }
    ]
  }


  const objComponentIni = {
    elementID: "",
    type: "",
    blockOrigen: "",
    orderIntroBlock: "0",
    position: { row: 1, col: 1 },
    dimensions: { width: 0, height: "2.4rem" },
    labelElement: "",
    required: true,
    disabled: false,
    response: [""],
    placeholder: "",
    size: 1,
    valueComponent: "",
    setComponent: ""
  }
  const [objComponent, setObjComponent] = useState(objComponentIni)  //  Objeto Component del formulario seleccionado
 


  const exportData = {
    element, setElement,
    label, setLabel, pruebaLabelElement,
    text, setText, pruebaTextElement,
    number, setNumber, pruebaNumberElement,
    date, setDate, pruebaDateElement,
    phone, setPhone, pruebaPhoneElement,
    email, setEmail, pruebaEmailElement,
    areaText, setAreaText, pruebaAreaTextElement,
    select, setSelect, pruebaSelectElement,
    checkbox, setCheckbox, pruebaCheckboxElement,
    radioButton, setRadioButton, pruebaRadioButtonElement, pruebaRadioButtons,

    objComponent, setObjComponent
  }


  return (
    <MyContext.Provider value={exportData} >
      {children}
    </MyContext.Provider>
  )
}

export default TheContext;
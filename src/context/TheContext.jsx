import { useState, createContext } from 'react'
import RowIni from '../componets/TeilRight/RowIni.jsx'
import currentDate from '../functions/currentDate.js'

export const MyContext = createContext(null)


function TheContext({ children }) {
  const [toogleReadLeft, setToogleReadLeft] = useState(false)
  const [toogleCreateLeft, setToogleCreateLeft] = useState(false)
  const [toogleModifyLeft, setToogleModifyLeft] = useState(false)
  const [optionState, setOptionState] = useState("read")
  const [optionDesigner, setOptionDesigner] = useState("form")
  const [optionLayout, setOptionLayout] = useState("read")

  const [numRow, setNumRow] = useState(0)
  const [numCol, setNumCol] = useState(1)

  const [arrayOfRows, setArrayOfRows] = useState([<RowIni />])

  const [arrayRows, setArrayRows] = useState([0])
  const [arrayColumns, setArrayColumns] = useState([{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}])

  const theLayoutBlock = useState({
    block: "",
    layout: {
      rowLayout: arrayRows,
      colLayout: arrayColumns
    }
  })
  const [layoutBlock, setLayoutBlock] = useState([""][""])

  const [label, setLabel] = useState("")
  const pruebaLabelElement = {
    elementID: "ID_0000",
    orderInBlock: 1,
    position: { rowElem: 0, colElem: 0 },
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
    response: ["92-1111-1111"],
    placeholder: "91-1111-1111",
    size: 15,
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
    size: 25,
    setEmail: setEmail
  }

  const [areaText, setAreaText] = useState("")
  const pruebaAreaTextElement = {
    elementID: "ID_0006",
    labelElement: "Soy un componente Areatext: ",
    required: true,
    disabled: false,
    readonly: false,
    response: ["Bla bla bla bla \n Bla bla"],
    placeholder: "Escriba un texto multilinea ...",
    row: 5,
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
  const [radioButtons, setRadioButtons] = useState(false)
  const pruebaRadioButtons = {
    elementID: "ID_0010",
    labelElement: "",
    required: true,
    disabled: false,
    response: [false.toString()],
    placeholder: false.toString(),

    legend: "Choose a option",
    name: "pruebaRB",
    setComponent: setRadioButtons,
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

  //  0.-  Name - type of the selected Component
  const [element, setElement] = useState("master")

  //  ****    Component objects
  //  1.-  Component ini (Master Component) 
  const objComponentIni = {
    elementID: "",
    type: "",
    blockOrigen: "",
    orderInBlock: "",
    position: { rowElem: 0, colElem: 0 },
    dimensions: { width: 1, height: "2.4rem" },
    labelElement: "",
    required: true,
    disabled: false,
    checked: undefined,
    response: [""],
    placeholder: "",
    size: 1,
    optionsValues: [""],
    legend: "",
    name: "nameProb",
    valueComponent: "",
    setComponent: "",
    radioButtons: [
      {
        elementID: "",
        labelElement: "",
        name: "",
        required: true,
        disabled: false,
        checked: false,
        response: [false],
        setRadioButton: ""
      }
    ]
  }
  //  2.- Component Master ini
  const masterComponentIni = {
    elementID: "id_Master",
    type: "master",
    blockOrigen: undefined,
    orderInBlock: undefined,
    position: { row: undefined, col: undefined },
    dimensions: { width: 1, height: "2.4rem" },
    labelElement: "Master Component",
    required: true,
    disabled: false,
    checked: undefined,
    response: [""],
    placeholder: "Master Component",
    size: 0,
    optionsValues: [""],
    legend: "",
    name: "",
    valueComponent: "",
    setComponent: "",
    radioButtons: [
      {
        elementID: "",
        labelElement: "",
        name: "",
        required: true,
        disabled: false,
        checked: false,
        response: [false],
        setRadioButton: null
      }
    ]
  }
  //  3.-  Component in the state "read"
  const [componentRead, setComponentRead] = useState(objComponentIni)

  //  4.-  Component in the state "create"
  const [componentCreate, setComponentCreate] = useState({})

  //  5.-  Component in the state "modify"
  const [componentModify, setComponentModify] = useState({})

  //  6.-  Component Show in Info-Box  <==  "Component Object" select in Info Component
  const [objComponentShow, setObjComponentShow] = useState(masterComponentIni)

  //  7.-  Component Show in Layout <==  "Component Object" in Form Layout
  const [objComponentLayout, setObjComponentLayout] = useState(masterComponentIni)


  //  Block objects
  const objBlockIni = {
    titleOfBlock: "First block",
    idOfBlock: "block_00_Form_001",
    displayOrderOfBlock: 1,
    numberOfBlockInForm: 1,

    components: [
      objComponentIni
    ]
  }
  //  1.-  Block Read
  const [blockRead, setBlockRead] = useState(objBlockIni)

  //  2.-  Block Create
  const [blockCreate, setBlockCreate] = useState({})

  //  3.-  Block Modify
  const [blockModify, setBlockModify] = useState({})


  //  State Variables from Context
  const exportData = {
    toogleReadLeft, setToogleReadLeft, toogleCreateLeft, setToogleCreateLeft, toogleModifyLeft, setToogleModifyLeft,
    optionState, setOptionState, optionDesigner, setOptionDesigner, optionLayout, setOptionLayout,

    masterComponentIni,

    objComponentShow, setObjComponentShow, objComponentLayout, setObjComponentLayout,
    componentRead, setComponentRead, componentCreate, setComponentCreate, componentModify, setComponentModify,

    blockRead, setBlockRead, blockCreate, setBlockCreate, blockModify, setBlockModify,

    numRow, setNumRow, numCol, setNumCol, arrayOfRows, setArrayOfRows, 
    arrayRows, setArrayRows, arrayColumns, setArrayColumns,
    layoutBlock, setLayoutBlock,
    theLayoutBlock,

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
    radioButton, setRadioButton, radioButtons, setRadioButtons, pruebaRadioButtonElement, pruebaRadioButtons
  }


  return (
    <MyContext.Provider value={exportData} >
      {children}
    </MyContext.Provider>
  )
}

export default TheContext;
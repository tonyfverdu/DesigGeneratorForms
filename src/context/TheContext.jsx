import { useState, createContext } from 'react'
import RowIni from '../componets/TeilRight/RowIni.jsx'
import currentDate from '../functions/currentDate.js'

export const MyContext = createContext(null)

//  Importing initial data from the form template and examples of Forms
import formJSON_plantilla from '../Data/JSONFormPlantillaObj.js'
import form_survey_disease_001 from '../Data/JSONFormDataObj_01.js'


function TheContext({ children }) {
  const [toogleReadLeft, setToogleReadLeft] = useState(false)
  const [toogleCreateLeft, setToogleCreateLeft] = useState(false)
  const [toogleModifyLeft, setToogleModifyLeft] = useState(false)
  const [optionState, setOptionState] = useState("read")
  const [optionDesigner, setOptionDesigner] = useState("form")
  const [optionLayout, setOptionLayout] = useState("read")

  const [JSONEingabenForm, setJSONEingabenForm] = useState("")   //  <== Eingaben ( vor String JSON zur JSON-Formulardaten)
  const [JSONAusgabenForm, setJSONAusgabenForm] = useState("")   //  <== Ausgaben (vor JSON-Formulardaten zur String JSON)
  const [toggleJSONEingaben, setToggleJSONEingaben] = useState(false)

  //  Funtions of select Forms, Blocks and Components
  // IV.-  Dieses Funktion hat keine machen
  function handleSubmitFormIni(ev) {
    ev.preventDefault();
  }

  const [valueOfForm, setValueOfForm] = useState("")

  // V.-  Dieses Funktion hat keine machen
  function handleButtonSubmitFormDyn(ev) {
    ev.preventDefault()
    setToggleJSONEingaben(!toggleJSONEingaben)

    console.log("Vamos a ver, el Formulario seleccionado es:  ", valueOfForm)
  }

  const [numRow, setNumRow] = useState(0)
  const [numCol, setNumCol] = useState(1)

  const [arrayOfRows, setArrayOfRows] = useState([<RowIni />])

  const [arrayRows, setArrayRows] = useState([0])
  const [arrayColumns, setArrayColumns] = useState([0])

  const [theLayoutBlock, setTheLayoutBlock] = useState({
    block: "",
    layout: [arrayRows][arrayColumns]
  })

  const [label, setLabel] = useState("")
  const pruebaLabelElement = {
    id_Element: "ID_0000",
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
    id_Element: "ID_0001",
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
    id_Element: "ID_0002",
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
    id_Element: "ID_0003",
    labelElement: "Soy un componente Date: ",
    required: true,
    disabled: false,
    response: [currentDate().Date_DD_MM_YY],
    placeholder: currentDate().Date_DD_MM_YY,
    setDate: setDate
  }

  const [phone, setPhone] = useState("")
  const pruebaPhoneElement = {
    id_Element: "ID_0004",
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
    id_Element: "ID_0005",
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
    id_Element: "ID_0006",
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
    id_Element: "ID_0007",
    labelElement: "Soy un componente Select: ",
    required: true,
    disabled: false,
    response: [""],
    optionsValues: ["Valor 1", "Valor 2", "Valor 3"],
    setSelect: setSelect
  }

  const [checkbox, setCheckbox] = useState(false)
  const pruebaCheckboxElement = {
    id_Element: "ID_0008",
    labelElement: "Soy un componente Checkbox",
    required: true,
    disabled: false,
    checked: false,
    response: [false],
    setCheckbox: setCheckbox
  }

  const [radioButton, setRadioButton] = useState(false)
  const pruebaRadioButtonElement = {
    id_Element: "ID_0009",
    labelElement: "Soy un componente RadioButton",
    required: true,
    disabled: false,
    checked: false,
    response: [false],
    setRadioButton: setRadioButton
  }
  const [radioButtons, setRadioButtons] = useState(false)
  const pruebaRadioButtons = {
    id_Element: "ID_0010",
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
        id_Element: "ID_00010.1",
        labelElement: "Soy un componente RadioButton",
        name: "pruebaRB",
        required: true,
        disabled: false,
        checked: false,
        response: [false],
        setRadioButton: setRadioButton
      },
      {
        id_Element: "ID_00010.2",
        labelElement: "Soy un componente RadioButton",
        name: "pruebaRB",
        required: true,
        disabled: false,
        checked: false,
        response: [false],
        setRadioButton: setRadioButton
      },
      {
        id_Element: "ID_00010.3",
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

  const [table, setTable] = useState(null)

  const [icon, setIcon] = useState(null)

  //  0.-  Name - type of the selected Component
  const [element, setElement] = useState("master")

  //  ****    Component objects
  //  1.-  Component ini (Master Component) 
  const objComponentIni = {
    id_Element: "",
    titleElement: "",
    type_Element: "",
    orderInBlock: 0,
    labelElement: "",
    required: true,
    disabled: false,
    response: [],
    placeholder: undefined,
    size: 1,
    position: { rowElem: 0, colElem: 0 },
    dimension: { width: 0, height: "2.4rem" },
    valueComponent: undefined,
    setComponent: undefined,
    name: undefined,
    borderElement: false,
    colorElement: "rgb(9, 9, 9)",
    fontSizeElement: "0.6rem",

    //  Area Text
    readonly: false,
    row: 0,
    col: 0,

    //  Select
    optionValues: [],

    //  Checkbox
    checked: false,

    //  Radio Buttons
    legend: "",
    radioButtons: [
      {
        id_Element: "",
        labelElement: "",
        name: "",
        required: true,
        disabled: false,
        checked: false,
        response: [false],
        setRadioButton: undefined
      }
    ],

    //  Icons - Images
    srcURLIcon: "",
    nameImage: "",
    widthImage: 0
  }

  //  2.- Component Master ini
  const masterComponentIni = {
    id_Element: "id_Master",
    titleElement: "Master Component",
    typeElement: "master",
    orderInBlock: undefined,
    labelElement: "Master Component",
    required: true,
    disabled: false,
    response: [""],
    placeholder: "Master Component",
    size: 0,
    position: { rowElem: 0, colElem: 0 },
    dimension: { width: 1, height: "2.4rem" },
    valueComponent: undefined,
    setComponent: undefined,
    name: "",
    borderElement: true,
    colorElement: "black",
    fontSizeElement: "0.6rem",

    //  Element Select
    optionsValues: [],

    //  Element Area Text 
    readonly: false,
    row: 0,
    col: 0,

    //  Element Checkbox
    checked: false,

    //  Element Radio Buttons
    legend: "",
    radioButtons: [
      {
        id_Element: "",
        labelElement: "",
        name: "",
        required: true,
        disabled: false,
        checked: false,
        response: [false],
        setRadioButton: null
      }
    ],

    //  Element Table

    //  Element Icon Image
    widthImage: 0,
    srcURLIcon: "",
    nameImage: ""
  }


  //  3.-  Component in the state "read"
  const [componentRead, setComponentRead] = useState(objComponentIni)

  //  4.-  Component in the state "create"
  const [componentCreate, setComponentCreate] = useState({})

  //  5.-  Component in the state "modify"
  const [componentModify, setComponentModify] = useState({})

  //  6.-  Component Show in Info-Box  <==  "Component Object" select in Info Component
  const [objComponentShow, setObjComponentShow] = useState(objComponentIni)

  //  7.-  Component Show in Layout <==  "Component Object" in Form Layout
  const [objComponentLayout, setObjComponentLayout] = useState(objComponentIni)


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

  //  View, add and delete vaccines
  const [toogleViewVaccines, setViewVaccines] = useState(false)
  const [toogleAddRowVaccines, setToogleAddRowVaccines] = useState(false)


  /////////////////////////////////////////////////////////////////////////////////////////////

  //    ***************************     FORM OBJECT   *****************************************
  const [formObject, setFormObject] = useState(form_survey_disease_001)

  /////////////////////////////////////////////////////////////////////////////////////////////

  //  State Variables from Context
  const exportData = {
    formObject, setFormObject,

    toogleReadLeft, setToogleReadLeft, toogleCreateLeft, setToogleCreateLeft, toogleModifyLeft, setToogleModifyLeft,
    optionState, setOptionState, optionDesigner, setOptionDesigner, optionLayout, setOptionLayout,

    JSONEingabenForm, setJSONEingabenForm,
    JSONAusgabenForm, setJSONAusgabenForm,
    toggleJSONEingaben, setToggleJSONEingaben,

    handleSubmitFormIni,
    valueOfForm, setValueOfForm,
    handleButtonSubmitFormDyn,

    masterComponentIni,

    objComponentShow, setObjComponentShow, objComponentLayout, setObjComponentLayout,
    componentRead, setComponentRead, componentCreate, setComponentCreate, componentModify, setComponentModify,

    blockRead, setBlockRead, blockCreate, setBlockCreate, blockModify, setBlockModify,

    numRow, setNumRow, numCol, setNumCol, arrayOfRows, setArrayOfRows,
    arrayRows, setArrayRows, arrayColumns, setArrayColumns,
    theLayoutBlock, setTheLayoutBlock,

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
    radioButton, setRadioButton, radioButtons, setRadioButtons, pruebaRadioButtonElement, pruebaRadioButtons,
    table, setTable,

    toogleViewVaccines, setViewVaccines, toogleAddRowVaccines, setToogleAddRowVaccines,

    icon, setIcon
  }


  return (
    <MyContext.Provider value={exportData} >
      {children}
    </MyContext.Provider>
  )
}

export default TheContext;
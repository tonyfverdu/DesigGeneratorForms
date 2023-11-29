/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
/* eslint-disable react/react-in-jsx-scope */
import { useState, createContext } from 'react'
import RowIni from '../componets/TeilRight/RowIni.jsx'
import currentDate from '../functions/currentDate.js';

import formJSON_prueba_01 from '../Data/JSONFormPrueba_01.js';

export const MyContext = createContext(null)

//  Importing initial data from the form template and examples of Forms
// import formJSON_plantilla from '../Data/JSONFormPlantillaObj.js'
// import form_survey_disease_001 from '../Data/JSONFormDataObj_01.js'


function TheContext({ children }) {
  //    ******    MANAGEMENT  OF FORM:  FORM OBJECT, ARRAYBLOCKS, ARRAYCOLUMNS, ARRAYCOMPONENTS   **********************************
  //    1.-   MANAGEMENT OF FORM OBJECT - theContext.formObject   *****************************************************************
  const [formObject, setFormObject] = useState(formJSON_prueba_01);
  const [arrayOfBlocks, setArrayOfBlocks] = useState(formJSON_prueba_01.blocks);
  const [indexOfBlockInArray, setIndexOfBlockInArray] = useState(0);
  const [blockSelectObject, setBlockSelectObject] = useState({});

  const [arrayOfColumnsOfBlock, setArrayColumnsOfBlock] = useState([]);
  const [columnSelectObject, setColumnSelectObject] = useState({});
  const [arrayOfComponentsByColumn, setArrayComponentsByColumn] = useState([]);
  const [componentSelectObject, setComponentSelectObject] = useState({});

  // Quitar:
  const [arrayOfRowsCompsObject, setArrayOfRowsCompsObject] = useState([]);  // <<== columns del block
  const [arrayOfComponentsObject, setArrayOfComponetsObject] = useState([]);  // <<== Components del block
  

  const [JSONEingabenForm, setJSONEingabenForm] = useState("")   //  <== Eingaben ( vor String JSON zur JSON-Formulardaten)
  const [JSONAusgabenForm, setJSONAusgabenForm] = useState("")   //  <== Ausgaben (vor JSON-Formulardaten zur String JSON)
  const [toggleJSONEingaben, setToggleJSONEingaben] = useState(true)
  const [toggleJSONAusgaben, setToggleJSONAusgaben] = useState(false);

  //  Funtions of select Forms, Blocks and Components
  // I.-  Dieses Funktion hat keine machen
  const handleSubmitFormIni = (ev) => {
    ev.preventDefault();
    // const newValue = ev.target.value;
    const newValue = ev.target;

    // console.log("handleSubmitFormIni:  ", newValue);

    // setFormObject(newValue);
  }

  // II.-  Dieses Funktion hat keine machen
  const handleButtonSubmitFormDyn = () => {
    setToggleJSONAusgaben(!toggleJSONAusgaben);
  }


  //    2.-   MANAGEMENT OF STATE FORM - READ OR CREATE-MODIFY    ******************************************************************
  const [tooRead, setTooRead] = useState(true)

  //     ***************************    SELECTION VARIABLES   *********************************
  const OPTION_DESIGNER = { form: "Forms", block: "Blocks", component: "Components" };
  const [optionDesigner, setOptionDesigner] = useState(OPTION_DESIGNER.form);

  //     ***************************    TOOGLE VARIABLES (READ, CREATE AND MODIFY)    *********
  const [toogleReadLeft, setToogleReadLeft] = useState(true)
  const [toogleCreateLeft, setToogleCreateLeft] = useState(false)
  const [toogleModifyLeft, setToogleModifyLeft] = useState(false)

  //////////////////////////////////////////////////////////////////////////////////////////////
  const [numRow, setNumRow] = useState(0)
  const [numCol, setNumCol] = useState(0)

  const [arrayOfRows, setArrayOfRows] = useState([<RowIni />])

  const [arrayRows, setArrayRows] = useState([0])
  const [arrayColumns, setArrayColumns] = useState([0])

  const [theLayoutBlock, setTheLayoutBlock] = useState({
    block: "",
    layout: [arrayRows][arrayColumns]
  })

  //    ***************************     STATE VARIABLES OF ELEMENTS HTML_BP   ******************
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

  //////////////////////////////////////////////////////////////////////////////////////////////

  //  0.-  Name - type of the selected Component
  const [element, setElement] = useState("master")

  //  ****    Component objects

  //  1.- Component Master ini
  const masterComponentIni = {
    "id_Element": "id_component_master",
    "title_Element": "Component Master",
    "type_Element": "master",
    "orderInBlock": 0,
    "label_Element": "Component Master",
    "required": true,
    "disabled": false,
    "response": [],
    "placeholder": "Default",
    "size": 0,
    "position": {
      "rowElem": 0,
      "colElem": 0
    },
    "dimension": {
      "width": 1,
      "height": "2.4rem"
    },
    "valueComponent": undefined,
    "setComponent": undefined,
    "name": undefined,
    "borderElement": true,
    "colorElement": "black",
    "fontSizeElement": "0.6rem",

    //  Element Select
    "optionValues": [],

    //  Element Area Text 
    "readonly": false,
    "row": 0,
    "col": 0,

    //  Element Checkbox
    "checked": false,

    //  Element Radio Buttons
    "legend": "",
    "radioButtons": [
      {
        "id_Element": "",
        "labelElement": "",
        "name": "",
        "required": true,
        "disabled": false,
        "checked": false,
        "response": [
          false
        ],
        "setRadioButton": undefined
      }
    ],

    //  Element Table

    //  Element Icon Image
    "srcURLIcon": "",
    "nameImage": "",
    "widthImage": 0
  }

  const newColComponentIni = {
    "orderColInBlock": 0,
    "components": []
  }
  //  3.-  Component in the state "read"
  const [componentRead, setComponentRead] = useState(masterComponentIni)

  //  4.-  Component in the state "create"
  const [componentCreate, setComponentCreate] = useState({})

  //  5.-  Component in the state "modify"
  const [componentModify, setComponentModify] = useState({})

  //  6.-  Component Show in Info-Box  <==  "Component Object" select in Info Component
  const [objComponentShow, setObjComponentShow] = useState(masterComponentIni)

  //  7.-  Component Show in Layout <==  "Component Object" in Form Layout
  const [objComponentLayout, setObjComponentLayout] = useState(masterComponentIni)

  //  Rows of Components
  const masterRowCompsIni = {
    "orderColInBlock": 0,
    "components": [masterComponentIni]
  }
  const [arrayRowsComps, setArrayRowsComps] = useState([masterRowCompsIni])

  //  Block objects
  const masterBlock = {
    "id_Block": "id_block_master",
    "ordenDisplay_Block": 0,
    "title_Block": "Master Block",
    "label_Block": "MASTER BLOCK",
    "description_Block": "Master Block of the template form.",
    "colorElement": "black",

    "columns": [
      masterRowCompsIni
    ]
  }

  //  1.-  Block Read
  const [blockRead, setBlockRead] = useState(masterBlock)

  //  2.-  Block Create
  const [blockCreate, setBlockCreate] = useState({})

  //  3.-  Block Modify
  const [blockModify, setBlockModify] = useState({})

  //  View, add and delete vaccines
  const [toogleViewVaccines, setViewVaccines] = useState(false)
  const [toogleAddRowVaccines, setToogleAddRowVaccines] = useState(false)

  //  Status Show (Read - "success" or Modify - "danger")
  const [option, setOption] = useState("Read")
  const [color, setColor] = useState("success")

  /////////////////////////////////////////////////////////////////////////////////////////////


  //    *********************   EXPORT DATA OF State Variables from Context   ****************
  const exportData = {
    tooRead, setTooRead,
    formObject, setFormObject,
    arrayOfBlocks, setArrayOfBlocks,
    blockSelectObject, setBlockSelectObject,

    indexOfBlockInArray, setIndexOfBlockInArray,
    arrayOfComponentsObject, setArrayOfComponetsObject,

    arrayOfColumnsOfBlock, setArrayColumnsOfBlock,
    columnSelectObject, setColumnSelectObject,
    arrayOfComponentsByColumn, setArrayComponentsByColumn,
    componentSelectObject, setComponentSelectObject,

    arrayOfRowsCompsObject, setArrayOfRowsCompsObject,
    
    toogleReadLeft, setToogleReadLeft, toogleCreateLeft, setToogleCreateLeft, toogleModifyLeft, setToogleModifyLeft,
    optionDesigner, setOptionDesigner,

    JSONEingabenForm, setJSONEingabenForm,
    JSONAusgabenForm, setJSONAusgabenForm,
    toggleJSONEingaben, setToggleJSONEingaben,
    toggleJSONAusgaben, setToggleJSONAusgaben,

    handleButtonSubmitFormDyn, handleSubmitFormIni,

    //  Blocks
    masterBlock,

    blockRead, setBlockRead, blockCreate, setBlockCreate, blockModify, setBlockModify,

    //  Rows of Components
    masterRowCompsIni,

    //  Components
    newColComponentIni, masterComponentIni,

    objComponentShow, setObjComponentShow, objComponentLayout, setObjComponentLayout,
    componentRead, setComponentRead, componentCreate, setComponentCreate, componentModify, setComponentModify,

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
    icon, setIcon,

    toogleViewVaccines, setViewVaccines, toogleAddRowVaccines, setToogleAddRowVaccines,

    //  Status Show
    option, setOption, color, setColor
  }


  return (
    <MyContext.Provider value={exportData} >
      {children}
    </MyContext.Provider>
  )
}

export default TheContext;
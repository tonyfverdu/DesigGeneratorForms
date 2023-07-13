export const TITLES_OF_APP = {
  MAIN_TITLE_APP: "Dynamic Forms Generator in React and Bootstrap",
  TITLE_MEMO_LIST_HEADER: "Custom Forms Dynamic Creator",
  SUBTITLE_MEMO_LIST_HEADER: "App (Bootstrap - Sass -JS - React)",
  TITLE_OF_SITE: "Custom Forms Dynamic Creator",
  TITLE_TYPE_DESIGNER: "Designer",
  TITLE_SELECT_STATE: "Layout Status: ",
  TITLE_DESIGNER_FBC: {
    form: "Forms",
    block: "Blocks",
    component: "Components"
  }
}

// Use in the Component "InfoOfElement.jsx"
export const TITLES_RCM_LEFT = {
  TITLE_OF_SECTION: "Form Designer",
  SUBTITLE_OF_SECTION: "Form - Blocks- Components Variables Info",

  //  General Form Data
  FORM_HEAD: "Form info: ",
  FORM_TITLE: "Title: ",
  FORM_ID_TITLE: "Code: ",
  FORM_TYPE: "Type: ",
  FORM_VERSION: "Version: ",
  FORM_DATE_CREATION: "Creation: ",
  FORM_DESCRIPTION: "Description: ",
  FORM_READONLY: "Read only?: ",
  FORM_BLOCKS: "Blocks: ",


  //  General Block Data
  BLOCK_HEAD: "Block info: ",
  BLOCK_TITLE: "Block: ",
  BLOCK_ID_TITLE: "Code: ",
  BLOCK_LABEL: "Label: ",
  BLOCK_DESCRIPTION: "Description: ",
  BLOCK_ORDER_DISPLAY: "Order: ",
  BLOCK_COMPONENTS: "Components: ",


  //  General Component Data
  COMPONENT_HEAD: "Component info: ",
  COMPONENT_TITLE: "Ask: ",
  COMPONENT_TYPE: "Type: ",
  COMPONENT_ID: "Id: ",
  COMPONENT_LABEL: "Label: ",
  COMPONENT_DISPLAY_ORDER: "Order: ",
  COMPONENT_REQUIRED_ASK: "Required?: ",
  COMPONENT_DISABLED_ASK: "Disabled?: ",
  COMPONENT_RESPONSE: "Response: ",
  COMPONENT_PLACEHOLDER: "Default: ",
  COMPONENT_VALUE: "Value: ",
  COMPONENT_SIZE: "Size: ",
  COMPONENT_POSITION: "Position: ",
  COMPONENT_POSITION_ROW: "Row: ",
  COMPONENT_POSITION_COLUMN: "Column: ",
  COMPONENT_DIMENSION: "Dimension: ",
  COMPONENT_DIMENSION_WIDTH: "Width: ",
  COMPONENT_DIMENSION_HEIGHT: "Height: ",
  COMPONENT_BORDER: "Border: ",
  COMPONENT_COLOR: "Color: ",
  COMPONENT_FONT_SIZE: "Font size: "
}

//  Type of Components - Elements of a Form
export const TYPE_COMPONENTS = [
  {
    id_Component: 0,
    type: "master",
    title: "Master",
    label: "Master Component",
    placeholder: "Element Master"

  },
  {
    id_Component: 1,
    type: "label",
    title: "Label",
    label:"",
    placeholder: "Element Label"
  },
  {
    id_Component: 2,
    type: "text",
    title: "Text",
    label: "Text Component",
    placeholder: "Element Text"
  },
  {
    id_Component: 3,
    type: "number",
    title: "Number",
    label: "Number Component",
    placeholder: 0
  },
  {
    id_Component: 4,
    type: "date",
    title: "Date",
    label: "Date Component",
    placeholder: "01/0172023"
  },
  {
    id_Component: 5,
    type: "phone",
    title: "Phone",
    label: "Phone Component",
    placeholder: "91-1111-1111"
  },
  {
    id_Component: 6,
    type: "email",
    title: "Email",
    label: "Email Component",
    placeholder: "enteryouremail@dominio.com"
  },
  {
    id_Component: 7,
    type: "textArea",
    title: "Text Area",
    label: "Text Area Component",
    placeholder: "Write a multi-line text ..."
  },
  {
    id_Component: 8,
    type: "select",
    title: "Select",
    label: "Select Component",
    optionsValues: [],
    placeholder: ""
  },
  {
    id_Component: 9,
    type: "checkbox",
    title: "Checkbox",
    label: "Checkbox Component",
    checked: false,
  },
  {
    id_Component: 10,
    type: "radioButtons",
    title: "Radio Buttons",
    label: "Radio Buttons Component",
    placeholder: false.toString(),
    radioButtons: [
      {
        type: "radioButton",
        title: "Radio-Button",
        label: "Radio-Button Component",
        placeholder: false.toString()
      }
    ]
  },
  {
    id_Component: 11,
    type: "icon",
    title: "Icon",
    label: "Icon-Image Component",
    widthImage: "25",
    srcURLIcon: "../src/assets/iconImages/",
    nameImage: "iconImage"
  }
]

export const tableColorComponents = [
  {color: "white", code: "rgb(246, 240, 240)"}, {color: "yellow", code: "rgb(252, 248, 2)"}, {color: "orange", code: "rgb(248, 164, 8)"},
  {color: "red", code: "rgba(207, 35, 35, 0.9)"}, {color: "greenHell", code: "rgb(103, 255, 2)"}, {color: "greenDark", code: "rgb(1, 63, 22)"},
  {color: "blueHell", code: "rgb(100, 250, 255))"}, {color: "blueDark", code: "rgb(5, 29, 253)"}, {color: "lila", code: "#ac2bac"},
  {color: "grey", code: "rgb(140, 140, 140)"}, {color: "black", code: "rgb(13, 13, 13)"}
]

export const GROUP_BUTTONS_SELECT_LEFT = {
  preId: "actionSelect_",
  role: "groupTop",
  arialLabel: "Radio toggle button group top",
  typeButton: "radio",
  nameInput: "btnradio1",
  options: ["Read", "Create", "Modify"],
  colors: ["dark", "success", "primary"],
  sizeLetter: "0.9rem",
  height: "2rem",
  groupButton: "select_left"
}


// Dictionary - WorterBuch
export const ELEMENT_TYPE = {
  PRINT: 'print',
  TEXT: 'text',
  PASSWORD: 'password',
  CHECKBOX: 'checkbox',
  RADIO: 'radio',
  TEXTAREA: 'textarea',
  SIMPLE_SELECT: 'simple-select'
}

//  CONSTANT DATA


//  Lernen
export const ACTIONS = {
  DRAG_END: 'DRAG_END',
  OPTION_DRAG_END: 'OPTION_DRAG_END',
  CHANGE_VALUE: 'CHANGE_VALUE',
  ADD_ELEMENT: 'ADD_ELEMENT',
  REM_ELEMENT: 'REM_ELEMENT',
  ADD_OPTION: 'ADD_OPTION',
  CHANGE_EDIT_MODE: 'CHANGE_EDIT_MODE',

  ON_CHANGE_RENDER: 'ON_CHANGE_RENDER'
}

export const TYPES = {
  MAIN: 'MAIN'
}

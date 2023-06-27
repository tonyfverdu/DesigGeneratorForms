export const TITLES_OF_APP = {
  MAIN_TITLE_APP: "Dynamic Forms Generator in React and Bootstrap",
  TITLE_MEMO_LIST_HEADER: "Custom Forms Dynamic Creator",
  SUBTITLE_MEMO_LIST_HEADER: "App (Bootstrap - Sass -JS - React)",
  TITLE_OF_SITE: "Custom Forms Dynamic Creator",
  TITLE_SELECT_STATE: "Layout Form Status",
  TITLE_CREATE_COMPONENT: "Component Form Creation"
}

// Use in the Component "InfoOfElement.jsx"
export const TITLES_RCM_LEFT = {
  TITLE_OF_SECTION: "Form Component Design",
  SUBTITLE_OF_SECTION: "Component Variables Info",

  //  General Form Data
  FORM_TITLE: "Form: ",
  FORM_ID_TITLE: "Code: ",
  TITLE_FORM_READONLY: "Read only?: ",
  VALUE_FORM_READONLY: false,


  //  General Block Data
  BLOCK_TITLE: "Block: ",
  BLOCK_ID_TITLE: "Code",
  VALUE_BLOCK_ID: "block_01_Form_00035",
  TITLE_DISPLAY_ORDER: "Display Order: ",
  TITLE_BLOCK_NUMBER: " of  ",

  //  General Component Data
  COMPONENT_TITLE: "Ask: ",
  COMPONENT_TYPE: "Type: ",
  COMPONENT_ID: "Id: ",
  COMPONENT_DISPLAY_ORDER: "Order: ",
  COMPONENT_REQUIRED_ASK: "Required?: ",
  COMPONENT_DISABLED_ASK: "Disabled?: ",
  COMPONENT_RESPONSE: "Response: ",
  COMPONENT_PLACEHOLDER: "Default: ",
  COMPONENT_VALUE: "Value: ",
  COMPONENT_SIZE: "Size: ",
  COMPONENT_POSITION: "Position",
  COMPONENT_POSITION_ROW: "Row: ",
  COMPONENT_POSITION_COLUMN: "Column: ",
  COMPONENT_DIMENSION: "Dimension: ",
  COMPONENT_DIMENSION_WIDTH: "Width: ",
  COMPONENT_DIMENSION_HEIGHT: "Height: ",
}

// Asks - component - element

//  position: { row: theContext.objComponent.position.rowElem, col: theContext.objComponent.position.colElem },

//       dimension: { width: theContext.objComponent.dimensions.width, height: theContext.objComponent.dimensions.height }

export const GROUP_BUTTONS_SELECT_LEFT = {
  preId: "gbtn1",
  role: "groupTop",
  arialLabel: "Radio toggle button group top",
  typeButton: "radio",
  nameInput: "btnradio1",
  options: ["Read", "Create", "Modify"],
  colors: ["dark", "success", "primary"],
  sizeLetter: "0.9rem",
  height: "2rem"
}

export const ELEMENT_TYPE = {
  PRINT: 'print',
  TEXT: 'text',
  PASSWORD: 'password',
  CHECKBOX: 'checkbox',
  RADIO: 'radio',
  TEXTAREA: 'textarea',
  SIMPLE_SELECT: 'simple-select'
}

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

import currentDate from "../functions/currentDate.js";

const form_survey_disease_001 = {
  "id_Form": "form_survey_disease_001",
  "title_Form": "Varicella Disease Survey",
  "type_Form": "Disease Survey",
  "version_Form": "VF_001",
  "creation_date_Form": "01/01/2023",
  "revision_date_Form": [
    "01/01/2023",
    "04/04/2023"
  ],
  "description_Form": "FORM 1: Varicella Disease Survey Form, with the Blocks and Componentes(Asks)",
  "readonly_Form": true,

  "blocks": [
    {
      "id_Block": "block_FSD001_001",
      "ordenDisplay_Block": 0,
      "title_Block": "First Block: INTRODUCCTION OF DISEASE",
      "label_Block": "Introduction",
      "description_Block": "General questions block of the disease survey form.",
      
      "components": [
        {
          "id_Element": "comp_FSD001_0001",
          "title_Element": "Title of Block",
          "type_Element": "label",
          "orderInBlock": 0,
          "label_Element": "",
          "required": true,
          "disabled": false,
          "response": ["Encuesta Epidemiológica de Varicela"],
          "placeholder": "Encuesta Epidemiológica de Varicela",
          "size": 50,
          "position": {
            "rowElem": 0,
            "colElem": 0
          },
          "dimension": {
            "width": 3,
            "height": "2.4rem"
          },
          "valueComponent": undefined,
          "setComponent": undefined,
          "name": undefined,
          "borderElement": false,
          "colorElement": "rgb(9, 9, 9)",
          "fontSizeElement": "0.8rem",

          //  Area Text
          "readonly": false,
          "row": 0,
          "col": 0,

          //  Select
          "optionValues": [],

          //  Checkbox
          "checked": false,

          //  Radio Buttons
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
              "setRadioButton": null
            }
          ],

          //  Icons - Images
          "srcURLIcon": "",
          "nameImage": "",
          "widthImage": 0
        },
        {
          "id_Element": "comp_FSD001_0002",
          "title_Element": "Id of Form",
          "type_Element": "text",
          "orderInBlock": 1,
          "label_Element": "Id: ",
          "required": true,
          "disabled": false,
          "response": [""],
          "placeholder": "Type Id of Form ...",
          "checked": null,
          "size": 15,
          "position": {
            "rowElem": 0,
            "colElem": 10
          },
          "dimension": {
            "width": 3,
            "height": "2.4rem"
          },
          "borderElement":true,
          "colorElement":"rgb(9, 9, 9)",
          "fontSizeElement":"0.6rem",
          "optionsValues": [],
          "legend": "",
          "name": "",
          "value_Elem": "I am a text component",
          "setComponent": null,
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
              "setRadioButton": null
            }
          ],

          //  Icons - Images
          "srcURLIcon": "",
          "nameImage": "",
          "widthImage": 0
        },
        {
          "id_Element": "comp_FSD001_0003",
          "title_Element": "Year",
          "type_Element": "number",
          "orderInBlock": 2,
          "label_Element": "Año: ",
          "required": true,
          "disabled": false,
          "response": [2020],
          "placeholder": 2023,
          "checked": null,
          "size": 5,
          "position": {
            "rowElem": 1,
            "colElem": 0
          },
          "dimension": {
            "width": 2,
            "height": "2.4rem"
          },
          "borderElement":true,
          "colorElement":"rgb(9, 9, 9)",
          "fontSizeElement":"0.6rem",
          "optionsValues": [],
          "legend": "",
          "name": "",
          "value_Elem": "",
          "setComponent": null,
          "name": undefined,
          "borderElement": false,
          "colorElement": "rgb(9, 9, 9)",
          "fontSizeElement": "0.8rem",

          //  Area Text
          "readonly": false,
          "row": 0,
          "col": 0,

          //  Select
          "optionValues": [],

          //  Checkbox
          "checked": false,

          //  Radio Buttons
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
              "setRadioButton": null
            }
          ],

          //  Icons - Images
          "srcURLIcon": "",
          "nameImage": "",
          "widthImage": 0
        },
        {
          "id_Element": "comp_FSD001_0004",
          "title_Element": "Week",
          "type_Element": "number",
          "orderInBlock": 3,
          "label_Element": "Semana: ",
          "required": true,
          "disabled": false,
          "response": [15],
          "placeholder": 0,
          "checked": null,
          "size": 3,
          "position": {
            "rowElem": 1,
            "colElem": 4
          },
          "dimension": {
            "width": 3,
            "height": "2.4rem"
          },
          "borderElement":true,
          "colorElement":"rgb(9, 9, 9)",
          "fontSizeElement":"0.6rem",
          "optionsValues": [],
          "legend": "",
          "name": "",
          "value_Elem": "",
          "setComponent": null,
          "name": undefined,
          "borderElement": false,
          "colorElement": "rgb(9, 9, 9)",
          "fontSizeElement": "0.8rem",

          //  Area Text
          "readonly": false,
          "row": 0,
          "col": 0,

          //  Select
          "optionValues": [],

          //  Checkbox
          "checked": false,

          //  Radio Buttons
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
              "setRadioButton": null
            }
          ],

          //  Icons - Images
          "srcURLIcon": "",
          "nameImage": "",
          "widthImage": 0
        },
        {
          "id_Element": "comp_FSD001_0005",
          "title_Element": "Current Date",
          "type_Element": "date",
          "orderInBlock": 4,
          "label_Element": "Fecha actual: ",
          "required": true,
          "disabled": false,
          "response": [currentDate().Date_DD_MM_YY],
          "placeholder": currentDate().Date_DD_MM_YY,
          "checked": null,
          "size": 20,
          "position": {
            "rowElem": 1,
            "colElem": 8
          },
          "dimension": {
            "width": 3,
            "height": "2.4rem"
          },
          "borderElement":true,
          "colorElement":"rgb(9, 9, 9)",
          "fontSizeElement":"0.6rem",
          "optionsValues": [],
          "legend": "",
          "name": "",
          "value_Elem": "",
          "setComponent": null,
          "name": undefined,
          "borderElement": false,
          "colorElement": "rgb(9, 9, 9)",
          "fontSizeElement": "0.8rem",

          //  Area Text
          "readonly": false,
          "row": 0,
          "col": 0,

          //  Select
          "optionValues": [],

          //  Checkbox
          "checked": false,

          //  Radio Buttons
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
              "setRadioButton": null
            }
          ],

          //  Icons - Images
          "srcURLIcon": "",
          "nameImage": "",
          "widthImage": 0
        },
      ]
    },
    {
      "id_Block": "block_FSD001_002",
      "ordenDisplay_Block": 1,
      "title_Block": "Second Block: RESPONDENT DATA",
      "label_Block": "DATOS DEL DECLARANTE",
      "description_Block": "Respondent data:  Questions to collect data from the survey respondent.",

      "components": [

      ]
    },
    {
      "id_Block": "block_FSD001_003",
      "ordenDisplay_Block": 2,
      "title_Block": "Third Block: CASE ASSIGNMENT",
      "label_Block": "ASIGNACIÓN DEL CASO, referido al territorio de riesgo",
      "description_Block": "Block with options for the selection of Municipality, Department and centre for case allocation.",

      "components": [

      ]
    },
    {
      "id_Block": "block_FSD001_004",
      "ordenDisplay_Block": 3,
      "title_Block": "Fourth Block: Fourth block: IDENTIFICATION DATA",
      "label_Block": "DATOS DE IDENTIFICACIÓN",
      "description_Block": "Block with the collection of the client's data: name, surname, address, contact telephone number and e-mail, etc..",

      "components": [

      ]
    },
    {
      "id_Block": "block_FSD001_005",
      "ordenDisplay_Block": 4,
      "title_Block": "Fifth Block: Fourth block: ADMINISTRATION DATA",
      "label_Block": "DATOS DE ADMINISTRACIÓN",
      "description_Block": "Block with information on the centre and professional assigned to the patient",

      "components": [

      ]
    },
    {
      "id_Block": "block_FSD001_006",
      "ordenDisplay_Block": 5,
      "title_Block": "Sixth Block: LABORATORY DATA",
      "label_Block": "DATOS DE LABORATORIO",
      "description_Block": "Block with the collection of the client's data: name, surname, address, contact telephone number and e-mail, etc..",

      "components": [

      ]
    },
    {
      "id_Block": "block_FSD001_007",
      "ordenDisplay_Block": 6,
      "title_Block": "Seventh Block: EPIDEMIOLOGICAL DATA",
      "label_Block": "DATOS EPIDEMIOLÓGICOS",
      "description_Block": "BBlock with epidemiological information of the patient",

      "components": [

      ]
    },
    {
      "id_Block": "block_FSD001_008",
      "ordenDisplay_Block": 7,
      "title_Block": "Eighth Block: VACCINATION DATA",
      "label_Block": "DATOS DE VACUNACIÓN",
      "description_Block": "Block with patient's immunization history information: list of vaccinations, vaccination dates, etc.",

      "components": [

      ]
    }
  ]
}

export default form_survey_disease_001;

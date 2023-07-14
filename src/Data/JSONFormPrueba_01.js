const formJSON_prueba_01 = {
  "id_Form": "id_formsurveydisease_prob_001",
  "title_Form": "Form Disease Survey Probe 1",
  "type_Form": "Disease Survey",
  "version_Form": "V-001.30",
  "creation_date_Form": "01/06/2023",
  "revision_date_Form": [],
  "description_Form": "FORM PROBE 1: Form probe for the creation of AVE-Disease Survey Forms.",
  "readonly_Form": true,

  "blocks": [
    {
      "id_Block": "block_first_of_template",
      "ordenDisplay_Block": 0,
      "title_Block": "First Block",
      "label_Block": "FIRST BLOCK OF TEMPLATE",
      "description_Block": "First block of the template form.",

      "columns": [
        {
          "components": [
            {
              "id_Element": "component_first_of_block",
              "title_Element": "Title of First Component",
              "type_Element": "master",
              "orderInBlock": 0,
              "label_Element": "Element Master",
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
              "colorElement": "",
              "fontSizeElement": "",

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
                  "setRadioButton": undefined
                }
              ],

              //  Icons - Images
              "srcURLIcon": "",
              "nameImage": "",
              "widthImage": 0
            }
          ]
        }
      ]
    },
    {
      "id_Block": "block_second_of_template",
      "ordenDisplay_Block": 1,
      "title_Block": "Second Block",
      "label_Block": "SECOND BLOCK OF TEMPLATE",
      "description_Block": "Second block of the template form.",

      "columns": [
        {
          "components": [
            {
              "id_Element": "component_first_of_block_2",
              "title_Element": "Label Element",
              "type_Element": "label",
              "orderInBlock": 0,
              "label_Element": "",
              "required": true,
              "disabled": false,
              "response": [],
              "placeholder": "Element Label",
              "size": 0,
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
              "borderElement": true,
              "colorElement": "",
              "fontSizeElement": "",
    
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
                  "setRadioButton": undefined
                }
              ],
    
              //  Icons - Images
              "srcURLIcon": "",
              "nameImage": "",
              "widthImage": 0
            }
          ]
        }
      ]
    },
  ]
}

export default formJSON_prueba_01;
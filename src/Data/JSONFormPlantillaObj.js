const formJSON_plantilla = {
  "id_Form": "",
  "title_Form": "",
  "type_Form": "",
  "version_Form": "",
  "creation_date_Form": "",
  "revision_date_Form": [],
  "description_Form": "",
  "readonly_Form": true,

  "blocks": [
    {
      "id_Block": "",
      "ordenDisplay_Block": 0,
      "title_Block": "",
      "label_Block": "",
      "description_Block": "",

      "components": [
        {
          "id_Element": "",
          "type_Element": "",
          "orderInBlock": 0,
          "label_Element": "",
          "required": true,
          "disabled": false,
          "response": [],
          "placeholder": undefined,
          "size": 0,
          "position": {
            "rowElem": 0,
            "colElem": 0
          },
          "dimension": {
            "width": 0,
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
}

export default formJSON_plantilla;

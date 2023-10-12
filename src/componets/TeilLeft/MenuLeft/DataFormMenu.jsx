import { useState, useEffect, useContext, useMemo, useCallback } from 'react';
import { MyContext } from '../../../context/TheContext.jsx';

import HeaderHead from './HeaderHead.jsx';
import FieldText from './FieldText.jsx';
import FieldData from './FieldData.jsx';
import FieldTextArea from './FieldTextArea.jsx';
import FieldSelect from './FieldSelect.jsx';
import FieldSelectAdd from './FieldSelectAdd.jsx';
import { TITLES_RCM_LEFT } from '../../../constants/contants.js';  //  Constants of Form
import findIndexBlockSelect from '../../../functions/findIndexBlockSelect.js';

import formJSON_prueba_01 from '../../../Data/JSONFormPrueba_01.js';

/**
 * Renders a data form menu component.
 *
 * @param {Object} formSelect - The selected form.
 * @param {function} setFormSelect - A function to set the selected form.
 * @param {Object} blockSelect - The selected block.
 * @param {function} setBlockSelect - A function to set the selected block.
 * @param {Object} componentSelect - The selected component.
 * @param {function} setComponentSelectIndex - A function to set the selected component index.
 * @return {JSX.Element} The data form menu component.
 */
function DataFormMenu({ formSelect, setFormSelect, blockSelect, setBlockSelect, componentSelect, setComponentSelectIndex }) {
  const theContext = useContext(MyContext);
  const arrayValues = useMemo(() => ["YES", "NOT"], []);
  const [indexBlockSelect, setIndexBlockSelect] = useState(0);

  // useEffect(() => {
  //   const newIndexBlockSelect = findIndexBlockSelect(formSelect.blocks, blockSelect);
  //   setIndexBlockSelect(newIndexBlockSelect);
  // }, [formSelect.blocks, blockSelect]);

  const handleChange = useCallback((ev, fieldName) => {
    ev.preventDefault();
    const newValue = ev.target.value;

    setFormSelect(prevFormSelect => ({ ...prevFormSelect, [fieldName]: newValue, }));
  }, [setFormSelect]);

  //  Add a block in the array "formSelect.blocks"
  //  Input "text" input of value the new block
  const [newBlock, setNewBlock] = useState(theContext.masterBlock)
  const [newArrayBlocks, setNewArrayBlocks] = useState(formSelect.blocks)

  useEffect(() => {
    setFormSelect(prevFormSelect => ({ ...prevFormSelect, blocks: newArrayBlocks }));
    theContext.setArrayOfBlocks(prevArrayOfBlocks => [...prevArrayOfBlocks, newBlock]);
  }, [newArrayBlocks]);

  const handleBlockSelect = useCallback((ev) => {
    ev.preventDefault();

    const indexBlockSelect = formSelect.blocks.findIndex(block => block.title_Block === ev.target.value);
    const newBlockSelectObject = formSelect.blocks[indexBlockSelect];

    setIndexBlockSelect(indexBlockSelect);
    setBlockSelect(newBlockSelectObject);
  }, [formSelect.blocks, setBlockSelect]);

  const handleAddBlock = useCallback((ev) => {
    ev.preventDefault();
    setNewBlock(prevNewBlock => ({ ...prevNewBlock, title_Block: ev.target.value }));
  }, []);

  // Button "Add"
  const handleClickAddBlock = useCallback((ev) => {
    ev.preventDefault();
    setNewArrayBlocks(prevNewArrayBlocks => [...prevNewArrayBlocks, newBlock]);
  }, [newBlock]);

  //  IMPORTANT !!
  useEffect(() => {
    theContext.setFormObject(formSelect);
  }, [formSelect]);

  return (
    <div id="accordionForm" className="accordion container-fluid graycolor400 d-flex flex-column justify-content-center align-items-center p-1 mx-auto mb-1">
      <div className="accordion-item rounded-0 container-fluid mx-auto graycolor400 border-0 " style={{ marginBottom: "0.3rem" }} >
        <HeaderHead
          idHeading="headingForm"
          dataTarget="#collapseForm"
          ariaControl="collapseForm"
          fontSize="0.62rem"
          title={TITLES_RCM_LEFT.FORM_HEAD}
          value={formSelect.title_Form}
        />

        <div id="collapseForm" className="accordion-collapse collapse ms-0" aria-labelledby="headingForm" data-bs-parent="#accordionForm">
          <div className="accordion-body p-0 mb-0">

            <div className="row d-flex justify-content-center align-items-center gap-1 m-1" >
              <div className="col-12 d-flex flex-row justify-content-start align-items-start m-0 p-1 bg-body">
                <FieldText
                  title={TITLES_RCM_LEFT.FORM_TITLE}
                  value={formSelect.title_Form}
                  fontSize="0.6rem"
                  action={(ev) => handleChange(ev, "title_Form")}
                />
              </div>
            </div>

            <div className="row d-flex justify-content-center align-items-center gap-1 m-1">
              <div className="col-12 d-flex flex-row justify-content-start align-items-start m-0 p-1 bg-body">
                <FieldText
                  title={TITLES_RCM_LEFT.FORM_ID_TITLE}
                  value={formSelect.id_Form}
                  fontSize="0.6rem"
                  action={(ev) => handleChange(ev, "id_Form")}
                />
              </div>
            </div>

            <div className="row d-flex justify-content-between align-items-center gap-1 m-1">
              <div className="col-4 d-flex flex-column justify-content-start align-items-center m-0 p-1 bg-body" style={{ height: "3.6rem" }}>
                <FieldData
                  title={TITLES_RCM_LEFT.FORM_DATE_CREATION}
                  value={formSelect.creation_date_Form}
                  fontSize="0.6rem"
                  action={(ev) => handleChange(ev, "creation_date_Form")}
                />
              </div>

              <div className="col-4 d-flex flex-column justify-content-start align-items-center m-0 py-1 px-0 bg-body" style={{ height: "3.6rem" }}>
                <FieldText
                  title={TITLES_RCM_LEFT.FORM_VERSION}
                  value={formSelect.version_Form}
                  fontSize="0.6rem"
                  action={(ev) => handleChange(ev, "version_Form")}
                />
              </div>

              <div className="col d-flex flex-column justify-content-start align-items-center m-0 p-1 bg-body" style={{ height: "3.6rem" }}>
                <FieldSelect
                  title={TITLES_RCM_LEFT.FORM_READONLY}
                  value={formSelect.readonly_Form.toString().toUpperCase()}
                  fontSize="0.6rem"
                  arrayValues={arrayValues}
                  action={(ev) => handleChange(ev, "readonly_Form")}
                />
              </div>
            </div>

            <div className="row d-flex justify-content-start align-items-center gap-1 m-1">
              <div className="col-12 d-flex flex-column justify-content-start align-items-start m-0 p-1 bg-body">
                <FieldTextArea
                  title={TITLES_RCM_LEFT.FORM_DESCRIPTION}
                  value={formSelect.description_Form}
                  fontSize="0.6rem"
                  tooRead={theContext.tooRead}
                  action={(ev) => handleChange(ev, "description_Form")}
                />
              </div>
            </div>
            <div className="row d-flex justify-content-start align-items-center gap-1 m-1">
              <div className="col-12 d-flex flex-column justify-content-center align-items-start m-0 p-1 bg-body" >
                <FieldSelectAdd
                  title={TITLES_RCM_LEFT.FORM_BLOCKS}
                  type="blocks"
                  value={formSelect.blocks}
                  fontSize="0.6rem"
                  fontSizeButton="0.64rem"
                  tooRead={theContext.tooRead}
                  action={handleBlockSelect}
                  actionAddButton={handleAddBlock}
                  actionClickAdd={handleClickAddBlock}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DataFormMenu;

/*
    El componente "DataFormMenu" es un componente funcional de React que muestra un menú de formulario. 
    
    Aquí está en detalle lo que hace cada parte del componente:

    1.- Importaciones: El componente importa varias dependencias de React, así como otros componentes y constantes que se utilizarán 
                       más adelante en el código.

    2.- Declaración del componente: El componente se declara como una función de JavaScript con el nombre DataFormMenu. 
                                    Recibe varios "props" que se utilizan para gestionar el estado y realizar acciones en el menú de formulario.

    3.- Hooks de React: El componente utiliza hooks de React para gestionar el estado y realizar efectos secundarios. Utiliza useState para 
                        definir variables de estado, como indexBlockSelect y newArrayBlocks. Utiliza useContext para acceder a un contexto de 
                        React llamado MyContext. Utiliza useEffect para ejecutar acciones después de que el componente se haya renderizado o 
                        cuando ciertos valores cambien.

    4.- Funciones de manipulación de eventos: El componente define varias funciones de manipulación de eventos que se utilizan para actualizar 
                                              el estado en respuesta a eventos del usuario, como cambios de valor en campos de entrada. 
                                              Estas funciones actualizan el estado utilizando las funciones setFormSelect, setValueForm y otras.

    5.- JSX de renderizado: El componente devuelve JSX que representa el menú de formulario. Utiliza varios componentes de React, como HeaderHead, 
                            FieldText, FieldData, FieldSelect, FieldTextArea y FieldSelectAdd, para renderizar diferentes partes del menú de 
                            formulario. Estos componentes reciben props que se utilizan para mostrar y actualizar los valores en el menú de 
                            formulario.

    6.- Efectos secundarios adicionales: El componente también tiene algunos efectos secundarios adicionales utilizando useEffect. 
                                         Por ejemplo, actualiza el contexto theContext y agrega un nuevo bloque a través de las funciones 
                                         theContext.setArrayOfBlocks y setNewArrayBlocks.


    En resumen, este componente renderiza un menú de formulario y maneja la lógica para actualizar el estado del menú en respuesta a eventos 
    del usuario.
*/
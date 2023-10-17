import { useState, useEffect, useContext } from 'react';
import { MyContext } from '../../context/TheContext.jsx';
import BlockMaster from '../TeilRight/menuRight/BlockMaster.jsx';
import RowBlock from '../TeilRight/RowBlock.jsx';
import LabelElem_PB from '../elementsForms/LabelElem_PB.jsx';
import TextElem_PB from '../elementsForms/TextElem_PB.jsx';

import DataFormMenu from '../TeilLeft/MenuLeft/DataFormMenu.jsx';

import { FaEye } from 'react-icons/fa';
import { TbCircleLetterX } from 'react-icons/tb';
import ButtonX from '../ButtonX.jsx';
import '../../sass/componentSass/ButtonIcon.scss';

import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';


function PrintFormTemplate() {
  const theContext = useContext(MyContext);
  const [formOfLayout, setFormOfLayout] = useState({});
  const [lengthOfArrayOfBlocks, setLengthOfArrayOfBlocks] = useState(0);

  useEffect(() => {
    setFormOfLayout(theContext.formObject);
    // theContext.setFormObject(formSelectLocal);
    theContext.setArrayOfBlocks(theContext.formObject.blocks);
    setLengthOfArrayOfBlocks(theContext.arrayOfBlocks.length);
  }, [theContext.formObject]);

  return (
    <form className="container-fluid rounded-0 bg-light ">
      <div className="container-fluid shadow-sm d-flex flex-column justify-content-start align-items-center p-0 mb-1">
        <div className="container-fluid d-flex flex-row justify-content-between align-items-center">
          <header className="w-auto col-11">
            <h5 className="col h5 fw-bold p-2 text-sm-start text-capitalize colorBlueDunkel" >
              Form Title: <span className="fs-6 text-secondary fw-bolder mx-auto ms-2" >
                {formOfLayout.title_Form}
              </span>
            </h5>
          </header>
          <div className='col-1'>
            <ButtonIcon
              iconComponent={<FaEye />}
              formSelectLocal={formOfLayout}
              setFormSelectLocal={setFormOfLayout}
            />
          </div>
        </div>
      </div>

      < div className="container-fluid shadow-sm p-0 mb-1">
        {/* //  1.-  First row:  Title of Form + Id of Form with background color gray */}
        <div className="row d-flex flex-row justify-content-start align-items-center gx-0 shadow-sm graycolor500 p-1 mb-2">
          <div className="col-3 text-start m-0 p-0 text-start" >
            <LabelElem_PB
              id_Element={"formTitle_01"}
              orderInBlock={1}
              required={true}
              disabled={true}
              response={[formOfLayout.title_Form]}
              placeholder={formOfLayout.title_Form}
              size={50}
              position={{ rowElem: 0, colElem: 0 }}
              width={3}
              borderElement={false}
              colorElement="rgb(9, 9, 9)"
              fontSizeElement="0.8rem"
            />
          </div>

          <div className="col-3 offset-md-5" >
            <TextElem_PB
              id_Element="id_IdOfForm"
              orderInBlock={2}
              labelElement="Id: "
              required={true}
              disabled={true}
              response={[""]}
              placeholder={formOfLayout.id_Form}
              size={12}
              position={{ rowElem: 0, colElem: 10 }}
              width={3}
              borderElement={false}
              colorElement="rgb(9, 9, 9)"
              fontSizeElement="0.8rem"
              text={formOfLayout.id_Form}
              setText={theContext.setText}
            />
          </div>
        </div>

        {/* //  2.-  Array of Blocks from Form */}
        {
          theContext.arrayOfBlocks !== undefined
            ?
            Array.isArray(theContext.arrayOfBlocks)
              ?
              theContext.arrayOfBlocks.map((block, index) => {
                return (
                  <>
                    {
                      !theContext.tooRead &&
                      <div key={block.id_Block} className="row my-2">
                        <RowBlock
                          form={formOfLayout}
                          count={index}
                        />
                      </div>
                    }

                    <div key={block.id_Block} id={`accordionBlock_${index}`} className="accordion accordion-flush bg-secondary mx-auto mb-1" >
                      <div className="accordion-item p-0 m-0" >
                        <BlockMaster
                          form={formOfLayout}
                          block={block}
                          index={index}
                        />
                      </div >
                    </div>
                  </>
                )
              })
              :
              <p className="fs-6 text-center text-danger fw-bold">ERROR, theContext.arrayOfBlocks NO ES UN ARRAY </p>
            :
            <p className="fs-6 text-center text-danger fw-bold">ERROR</p>
        }

        {
          !theContext.tooRead &&
          <div className="row my-2">
            <RowBlock
              form={formOfLayout}
              count={lengthOfArrayOfBlocks}
            />
          </div>
        }
      </div>
    </form >
  );
}

export default PrintFormTemplate;

function ButtonIcon({ iconComponent, formSelectLocal, setFormSelectLocal }) {
  const theContext = useContext(MyContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const styleCircleCSS = {
    backgroundColor: "rgba(0, 0, 0, 0.25)",
    width: "auto",
    height: "auto",
    padding: "0.1rem",
    hover: { backgroundColor: "rgba(0, 0, 0, 0.5)", transform: "scale(0.9)", transformScale: "1.1" },
    backgroundImage: "../../assets/icons/eyeicon.svg",
  }

  return (
    <Popup
      trigger={<button
        type="button"
        className="buttonIcon btn btn-outline-secondary d-flex justify-content-center align-items-center rounded-circle"
        style={styleCircleCSS}>
        <span className="d-flex flex-row justify-content-center align-items-center p-1 m-1">
          {iconComponent}
        </span>
      </button>}
      modal
      nested>
      {/* {close => (
        <div className="modalPopup">
          <button className="close" onClick={close}>
            &times;
          </button>
          <div className="headerPopup"> Modal Title </div>
          <div className="contentPopup">
            <button className="close" onClick={setIsModalOpen(!isModalOpen)}>
              <TbCircleLetterX />
            </button>
          </div>
          <div className="actionsPopup">
            <Popup
              trigger={<button className="button"> Trigger </button>}
              position="top center"
              nested
            >
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
                magni omnis delectus nemo, maxime molestiae dolorem numquam
                mollitia, voluptate ea, accusamus excepturi deleniti ratione
                sapiente! Laudantium, aperiam doloribus. Odit, aut.
              </span>
            </Popup>
            <button
              className="button"
              onClick={() => {
                console.log('modal closed ');
                close();
              }}
            >
              close modal
            </button>
          </div>
        </div>
      )} */}
      {close => (
        <>
          <div className="modalPopup">
            <ButtonX
              toggleHeader={isModalOpen}
              setToggleHeader={close}
            />
          </div>
          <div className='w-full border-1 border-danger'>
            <DataFormMenu
              formSelectLocal={formSelectLocal}
              setFormSelectLocal={setFormSelectLocal}
              setBlockSelect={theContext.setBlockSelectObject}
            />
          </div>
        </>
      )}
    </Popup>
  );
}


//    ****    EXPLICACION   *******************************************************
/*

1.-  Cargo en la variable de estado de React:  formOfLayout, el valor del objeto de formulario: "formSelectLocal", 
     pasado como argumento al componente.

2.-  Cargo en la variable de "contexto": theContext.arrayOfBlocks, el "array de bloques" del formulario de entrada.  
     Paso el valor de "length" de este array a la variable de estado del componente:  "lengthOfArrayOfBlocks"

     Cada vez que cambie el valor del parametro de entrada del componente:  "formSelectLocal", reinicializo el valor de los 
     valores anteriores con useEffect.

3.-  


*/

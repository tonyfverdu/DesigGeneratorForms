import { useState, useEffect, useContext, useId} from 'react';
import { MyContext } from '../../context/TheContext.jsx';
import BlockMaster from '../TeilRight/menuRight/BlockMaster.jsx';
import RowBlock from '../TeilRight/RowBlock.jsx';
import LabelElem_PB from '../elementsForms/LabelElem_PB.jsx';
import TextElem_PB from '../elementsForms/TextElem_PB.jsx';
import { FaEye } from 'react-icons/fa';
import ButtonIconForm from '../ButtonIconForm.jsx';
import '../../sass/componentSass/ButtonIcon.scss';
import 'reactjs-popup/dist/index.css';

function PrintFormTemplate() {
  const { formObject, setFormObject, setArrayOfBlocks, tooRead, setText } = useContext(MyContext);
  const { blocks, title_Form, id_Form } = formObject;

  const [lengthOfArrayOfBlocks, setLengthOfArrayOfBlocks] = useState(0);
  
  useEffect(() => {
    setArrayOfBlocks(formObject.blocks);
    setLengthOfArrayOfBlocks(formObject.blocks.length);
  }, [formObject]);


  const renderFormTitle = () => (
    <header className="w-auto">
      <h5 className="col h4 fw-bolder px-1 py-2 text-sm-start text-capitalize colorBlueHell2">
        Form Title: <span className="fs-09 fw-bold text-graycolor400 mx-auto ms-1">{title_Form}</span>
      </h5>
    </header>
  );
  const renderFormTitle_ID = () => {
    const idLabelElement_PB = `idLabelElement_${useId()}`; // <<== useId();

    const titleElementForm = (
      <div className="col-2 text-start m-0 p-0">
        <LabelElem_PB
          id_Element={"idLabelElement_PB"}
          orderInBlock={0}
          required={true}
          disabled={true}
          response={[title_Form]}
          placeholder={title_Form}
          size={35}
          position={{ rowElem: 0, colElem: 0 }}
          width={2}
          borderElement={false}
          colorElement="rgb(9, 9, 9)"
          fontSizeElement="0.7rem"
        />
      </div>
    );
    const idElementForm = (
      <div className="col-2 offset-md-8">
        <TextElem_PB
          id_Element={"id_IdOfForm"}
          orderInBlock={1}
          labelElement="Id: "
          required={true}
          disabled={true}
          response={[""]}
          placeholder={id_Form}
          size={20}
          position={{ rowElem: 0, colElem: 10 }}
          width={2}
          borderElement={false}
          colorElement="rgb(9, 9, 9)"
          fontSizeElement="0.6rem"
          text={id_Form}
          setText={setText}
        />
      </div>
    );

    return (
      <div className="container-fluid row d-flex flex-row justify-content-start align-items-center gx-0 
      shadow-sm graycolor500 p-1 mb-1">
        {titleElementForm}
        {idElementForm}
      </div>
    );
  };
  const renderRowBlock = (block, index) => {
    const rowBlockProps = {
      formInput: formObject,
      count: index,
      setLengthOfArrayOfBlocks
    };

    const rowBlock = (
      <div key={block.id_Block} className="col mb-2">
        {!tooRead && (
          <div className="container-fluid row d-flex justify-content-start align-items-center gx-0 shadow-sm graycolor200 p-1 mb-1">
            <RowBlock {...rowBlockProps} />
          </div>
        )}
        <div id={`accordionBlock_${index}`} className="accordion accordion-flush bg-secondary mx-auto mb-1">
          <div className="accordion-item p-0 m-0">
            <BlockMaster block={block} index={index} />
          </div>
        </div>
      </div>
    );

    return rowBlock;
  };
  const renderRowBlockContainer = () => {
    const rowBlockProps = {
      formInput: formObject,
      count: blocks.length,
      setLengthOfArrayOfBlocks
    };

    return (
      <div className="container-fluid row d-flex justify-content-start align-items-center gx-0 
      shadow-sm graycolor200 p-1 mb-1">
        <RowBlock {...rowBlockProps} />
      </div>
    );
  };

  return (
    <form className="container-fluid mx-auto bg-light">
      <div className="container-fluid shadow-sm d-flex justify-content-start align-items-center p-0 mb-1 graycolor800">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          {renderFormTitle()}
          <div className='col-1'>
            <ButtonIconForm
              iconComponent={<FaEye />}
              formSelectLocal={formObject}
              setFormSelectLocal={setFormObject}
            />
          </div>
        </div>
      </div>

      {renderFormTitle_ID()}

       <div className="container-fluid shadow-sm p-0 m-0">
        {blocks.map(renderRowBlock)}
       {!tooRead && renderRowBlockContainer()}
      </div> 
    </form >
  );
}

export default PrintFormTemplate;


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

// LA FUNCION "removeBlock " NO HACE FALTA, YA QUE AL ACTUALIZAR EL ARRAY DE BLOQUES, EL COMPONENTE BLOCK SE QUITA YA DEL ARRAY

// const rowRef = useRef(null);
// const accordionRef = useRef(null);

 // const removeBlock = useCallback(() => {
  //   rowRef.current.remove();
  //   accordionRef.current.remove();

  //   setLengthOfArrayOfBlocks(prevLength => {
  //     const updatedArrayOfBlocks = [...arrayOfBlocks];
  //     updatedArrayOfBlocks.splice(prevLength, 1);
  //     setArrayOfBlocks(updatedArrayOfBlocks);
  //   });
  // }, [arrayOfBlocks, setArrayOfBlocks, setLengthOfArrayOfBlocks]);

  // const removeBlock = useCallback(() => {
  //   rowRef.current.remove();
  //   accordionRef.current.remove();

  //   const updatedArrayOfBlocks = arrayOfBlocks.filter((_, index) => index !== lengthOfArrayOfBlocks);
  //   setArrayOfBlocks(updatedArrayOfBlocks);
  // }, [lengthOfArrayOfBlocks, arrayOfBlocks, setArrayOfBlocks]);

  // const removeBlock = useCallback(() => {
  //   rowRef.current.remove();
  //   accordionRef.current.remove();
  
  //   setArrayOfBlocks(prevArrayOfBlocks => prevArrayOfBlocks.slice(0, -1));
  // }, [arrayOfBlocks, setArrayOfBlocks]);

  // const removeBlock = useCallback(() => {
  //   setLengthOfArrayOfBlocks(formObject.blocks.length);
  //   rowRef.current.remove();
  //   accordionRef.current.remove();

  //   const updatedArrayOfBlocks = arrayOfBlocks.filter((_, index) => index !== lengthOfArrayOfBlocks);
  //   setArrayOfBlocks(updatedArrayOfBlocks);
  // }, []);

  // const removeBlock = useCallback(() => {
  //   setLengthOfArrayOfBlocks(prevLength => {
  //     const updatedArrayOfBlocks = arrayOfBlocks.filter((_, index) => index !== prevLength);
  //     setArrayOfBlocks(updatedArrayOfBlocks);
  //     return prevLength;
  //   }, [arrayOfBlocks, setArrayOfBlocks, setLengthOfArrayOfBlocks]);

  //   rowRef.current.remove();
  //   accordionRef.current.remove();
  // }, [formObject, arrayOfBlocks]);

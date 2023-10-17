import HeaderTitleRight from './menuRight/HeaderTitleRight.jsx';
import PrintFormTemplate from '../managementJSON/PrintFormTemplate';
import ButtonSelectOptions from '../ButtonSelectOptions.jsx';
import { TITLES_OF_APP } from '../../constants/contants.js';

const TeilRight = ({ toggleFormLayout, setToggleFormLayout }) => {
  return (
    <section className="contColumRight w-100 container-fluid mx-4 mt-1 p-0 d-flex flex-column justify-content-center align-items-center graycolor100">
      <div className="row container-fluid contTopRight">
        <div className="col">
          <HeaderTitleRight
            titleOfDesigner={TITLES_OF_APP.TITLE_TYPE_DESIGNER}
            titleSelectState={TITLES_OF_APP.TITLE_SELECT_STATE}
            titleCreate={TITLES_OF_APP.TITLE_DESIGNER_FBC}
            toogleFormLayout={toggleFormLayout}
            setToogleFormLayout={setToggleFormLayout}
          />
        </div>
      </div>

      <form className="container-fluid rounded-0 my-2 bg-light">
        {toggleFormLayout && (
          <>
            <PrintFormTemplate
            // formSelectLocal={theContext.formObject}
            // setFormSelectLocal={theContext.setFormObject}

            // blockSelect={blockSelect} 
            // setBlockSelect={setBlockSelect}
            />

            <div className="row container d-flex justify-content-center mb-0 me-2">
              <ButtonSelectOptions
                typeButton="button"
                role="group"
                arialLabelA="Toolbar with button groups right"
                arialLabelB="Second group"
                options={["Delete", "Save", "Submit"]}
                colors={["btn-outline-danger", "btn-outline-warning", " btn-outline-success"]}
              />
            </div>
          </>
        )}
      </form>
    </section>
  );
};


export default TeilRight;

// const theContext = useContext(MyContext);
// const [formLocalSelect, setFormLocalSelect] = useState({});

// useEffect(() => {
//   setFormLocalSelect(formSelectLocal);
// }, [formSelectLocal]);

// useEffect(() => {
//   theContext.setFormObject(formLocalSelect);
// }, [formLocalSelect])

// useEffect(() => {
//   setFormLocalSelect(theContext.formObject);
//   // theContext.setFormObject(formSelectLocal);
//   // setBlockSelectIndex(0);
//   // setComponentSelectIndex(0);
// }, [theContext.formObject]);

/*
<section className="contColumRight w-100 container-fluid mx-4 mt-1 p-0 d-flex flex-column justify-content-center align-items-center graycolor100">
<div className="row container-fluid contTopRight">
<div className="col">
          <HeaderTitleRight
            titleOfDesigner={TITLES_OF_APP.TITLE_TYPE_DESIGNER}
            titleSelectState={TITLES_OF_APP.TITLE_SELECT_STATE}
            titleCreate={TITLES_OF_APP.TITLE_DESIGNER_FBC}
            toogleFormLayout={toggleFormLayout}
            setToogleFormLayout={setToggleFormLayout}
          />
        </div>
</div>
<form className="container-fluid rounded-0 my-2 bg-light">
        {toggleFormLayout && (
          <>
            <PrintFormTemplate
              formSelectLocal={formSelectLocal}
              setFormSelectLocal={setFormSelectLocal}
            // formInput={formSelectLocal}
            // setFormInput={theContext.setFormObject}
            />

            {/* 2.-  Group buttons of "Delete", "Save" and "Submit" dates of Form, Blocks and Componets * /}
            <div className="row container d-flex justify-content-center mb-0 me-2">
              <ButtonSelectOptions
                typeButton="button"
                role="group"
                arialLabelA="Toolbar with button groups right"
                arialLabelB="Second group"
                options={["Delete", "Save", "Submit"]}
                colors={["btn-outline-danger", "btn-outline-warning", " btn-outline-success"]}
              />
            </div>
          </>
        )}
</form>
</section>

*/

/*
    This code is a React functional component called "TeilRight". 
    
    It renders a section of a "form layout" on the right side of a page.

    The component receives three props: "formSelectLocal", "toogleFormLayout" and "setToogleFormLayout", which 
    are used to control the visibility of the form layout.

    Inside the component, it uses the "useContext hook" to access the context object MyContext. It then uses the 
    "useEffect hook" to update the form object in the context whenever it changes.

    The component returns a JSX element that represents the "form layout". It includes a header component 
    (HeaderTitleRight), a form processing menu component (HeaderTitleRight), a form template component 
    (PrintFormTemplate), and a button group component (ButtonSelectOptions). The visibility of these components 
    depends on the value of the "toogleFormLayout" prop.

    Overall, this component is responsible for rendering the right part of a form layout and managing the form data 
    using context.
*/
import { useContext } from 'react';
import { MyContext } from '../../context/TheContext.jsx';
import HeaderTitleRight from './menuRight/HeaderTitleRight.jsx';
import PrintFormTemplate from '../managementJSON/PrintFormTemplate';
import ButtonSelectOptions from '../ButtonSelectOptions.jsx';

const TeilRight = () => {
  const { toggleJSONAusgaben } = useContext(MyContext);

  return (
    <section className="container-fluid mx-2 mt-1 p-0 graycolor100">
      <div className="row container-fluid contTopRight">
        <div className="col">
          <HeaderTitleRight />
        </div>
      </div>

      {toggleJSONAusgaben && (
        <form className="container-fluid rounded-0 m-1 p-0 bg-light">
          <PrintFormTemplate />
          <div className="row justify-content-center mx-4 p-1">
            <ButtonSelectOptions
              typeButton="button"
              role="group"
              arialLabelA="Toolbar with button groups right"
              arialLabelB="Second group"
              options={["Delete", "Save", "Submit"]}
              colors={["btn-outline-danger", "btn-outline-warning", "btn-outline-success"]}
            />
          </div>
        </form>
      )}
    </section>
  );
};

export default TeilRight;

/*
This code defines a functional component called TeilRight. It uses the useContext hook to access the toggleJSONAusgaben 
value from the MyContext context.

The component returns a section element with a specific styling and class names. Inside this section, there is a row with 
a single column that renders the HeaderTitleRight component.

If toggleJSONAusgaben is true, a form is rendered with a specific styling and class names. Inside this form, there is a 
row with a container that renders the ButtonSelectOptions component. This component receives several props including typeButton, 
role, arialLabelA, arialLabelB, options, and colors.
*/

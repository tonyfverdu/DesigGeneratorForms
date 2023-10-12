import MenuButtonsLeft from "./MenuLeft/MenuButtonsLeft.jsx";
import InfoOfElement from "./InfoOfElement.jsx";
import ButtonSelectOptions from "../ButtonSelectOptions.jsx";

import { GROUP_BUTTONS_SELECT_LEFT } from '../../constants/contants.js';

/**
 * Renders the TeilLeft component.
 *
 * @param {Object} formSelectLocal - The form select local object.
 * @return {JSX.Element} The rendered TeilLeft component.
 */
const TeilLeft = ({ formSelectLocal }) => {
  // Render the menu buttons on the left side
  const menuButtonsLeft = (
    <div className="col mx-auto" style={{ padding: "0.05rem" }}>
      <MenuButtonsLeft {...GROUP_BUTTONS_SELECT_LEFT} />
    </div>
  );

  // Render the information of the element
  const infoOfElement = (
    <div className="row d-flex justify-content-center align-items-center" style={{ padding: "0.05rem" }}>
      <InfoOfElement formInput={formSelectLocal} />
    </div>
  );

  // Render the button select options
  const buttonSelectOptions = (
    <div className="row container-fluid d-flex justify-content-end align-items-center mb-1">
      <ButtonSelectOptions
        typeButton="button"
        role="group"
        arialLabelA="Toolbar with button groups dow"
        arialLabelB="First group"
        options={["Delete", "Save", "Submit"]}
        colors={["btn-outline-danger", "btn-outline-warning", " btn-outline-success"]}
      />
    </div>
  );

  return (
    <section className="container mx-auto d-flex flex-column justify-content-center align-items-center gap-0 graycolor100">
      {menuButtonsLeft}
      {infoOfElement}
      {buttonSelectOptions}
    </section>
  );
};

export default TeilLeft;

/*
    This code snippet is a React functional component called "TeilLeft". 
    
    It renders a section with three child components: "menuButtonsLeft", "infoOfElement", and "buttonSelectOptions". 
    
    Each child component is wrapped in a <div> element with specific CSS classes and styles. 
    
    The "TeilLeft" component accepts a prop called "formSelectLocal".
*/
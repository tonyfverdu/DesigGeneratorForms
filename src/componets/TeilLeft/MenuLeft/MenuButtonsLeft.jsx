import { useState, useEffect, useContext } from 'react';
import { MyContext } from '../../../context/TheContext';
import StatusOption from '../../StatusOption.jsx';
import '../../../sass/componentSass/TeilLeft/MenuButtonsLeft.scss';


function MenuButtonsLeft({ preId, role, arialLabel, typeButton, options, colors, height }) {
  const theContext = useContext(MyContext);
  const [optionSelect, setOptionSelect] = useState("");

  useEffect(() => {
    const updateContext = () => {
      theContext.setColor(theContext.option === "Read" ? "success" : "danger");
      setOptionSelect(theContext.option === "Read");
      theContext.setTooRead(theContext.option === "Read");
    }
    updateContext();
  }, [theContext.option]);

  const handleBtnClick = (ev) => {
    theContext.setOption(ev.target.value);
  };

  const showRadioButtons = (parOptionsArray) => {
    if (!Array.isArray(parOptionsArray)) {
      throw new Error('The argument of the function "showRadioButtons" must be an array!!');
    }

    return parOptionsArray.map((opt, index) => (
      <div key={opt} className="mx-1">
        <button
          type={typeButton}
          className={`btn btn-sm btn-outline-${colors[index]} text-white-emphasis fw-bolder border border-2 border-${colors[index]}`}
          id={`${preId}_${index}`}
          value={opt}
          onClick={(ev) => handleBtnClick(ev)}
          style={{ border: "1px solid red", width: "auto" }}
        >
          {opt}
        </button>
      </div>
    ));
  };

  return (
    <div className="contGrpBtnSelect d-flex justify-content-between align-items-center gap-1 p-1 mx-auto">
      <StatusOption
        fontSizeText="0.6rem"
        colorText="white"
        option={theContext.option}
        colorOption={theContext.color}
        widthBand="auto"
      />
      <div className="btn-group btn-group-sm m-0 p-0" style={{ height: height }} role={role} aria-label={arialLabel}>
        {showRadioButtons(options)}
      </div>
    </div>
  )
}

export default MenuButtonsLeft;

/*
    Renders a "group of buttons" for menu options on the left side of the screen.

    This code defines a React component called "MenuButtonsLeft". It receives several props including: 
    
                      preId, role, arialLabel, typeButton, options, colors, and height.

    Inside the component, it uses the useContext hook to access the context provided by MyContext.

    The useEffect hook is used to update the color and state of the component whenever the theContext.option changes.

    The "handleBtnClick" function is a click event handler that updates the option value in the context.

    The "showRadioButtons" function takes an array of options, and returns a mapped array of buttons based on the options.

    Finally, the component returns JSX that renders a container with a status option and a group of radio buttons based on 
    the options provided.
*/



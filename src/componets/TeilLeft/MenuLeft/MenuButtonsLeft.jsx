import { useState, useEffect, useContext } from 'react';
import { MyContext } from '../../../context/TheContext';
import StatusOption from '../../StatusOption.jsx';
import '../../../sass/componentSass/TeilLeft/MenuButtonsLeft.scss';


function MenuButtonsLeft({ preId, role, arialLabel, typeButton, options, colors, height }) {
  const { option, setOption, color, setColor, setTooRead } = useContext(MyContext);
  const [optionSelect, setOptionSelect] = useState("");

  useEffect(() => {
    const updateContext = () => {
      setColor(option === "Read" ? "success" : "danger");
      setOptionSelect(option === "Read");
      setTooRead(option === "Read");
    };
    updateContext();
  }, [option]);

  const handleBtnClick = (ev) => {
    setOption(ev.target.value);
  };

  const showRadioButtons = (parOptionsArray) => {
    if (!Array.isArray(parOptionsArray)) {
      throw new Error('The argument of the function "showRadioButtons" must be an array!!');
    }

    return parOptionsArray.map((opt, index) => {
      const buttonClassName = `btn btn-sm btn-outline-${colors[index]} text-white-emphasis fw-bolder border border-2 border-${colors[index]}`;
      const buttonId = `${preId}_${index}`;

      return (
        <div key={opt} className="mx-1">
          <button
            type={typeButton}
            className={buttonClassName}
            id={buttonId}
            value={opt}
            onClick={handleBtnClick}
            style={{ border: "1px solid red", width: "auto" }}
          >
            {opt}
          </button>
        </div>
      );
    });
  };

  const radioButtons = showRadioButtons(options);

  return (
    <div className="contGrpBtnSelect d-flex justify-content-between align-items-center gap-2 p-1 mx-auto">
      <StatusOption
        fontSizeText="0.6rem"
        colorText="white"
        option={option}
        colorOption={color}
        widthBand="auto"
      />
      <div
        className="btn-group btn-group-sm m-0 p-0"
        style={{ height: height }}
        role={role}
        aria-label={arialLabel}
      >
        {radioButtons}
      </div>
    </div>
  );
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



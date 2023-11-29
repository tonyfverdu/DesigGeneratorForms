import { useCallback } from 'react';


function StatusOption({ fontSizeText, colorText, option, colorOption, widthBand }) {
  const textSpanStyle = {
    fontSize: fontSizeText,
    color: colorText,
    width: widthBand
  };

  const getOptionClassName = useCallback(() => {
    const optionClassName = option === "Read" ? "p-2 bg-success rounded-circle" : "p-2 bg-danger rounded-circle";
    return optionClassName;
  }, [option]);

  const optionClassName = getOptionClassName();

  return (
    <span className={optionClassName}>
      <span className="text-center fw-bold" style={textSpanStyle}>
        {option}
      </span>
    </span>
  );
}

export default StatusOption;

// <span className="text-center text-white fw-bold" style={textSpanStyle}>

/*
    This code defines a React functional component called "StatusOption". 
    
    It takes in several props such as: fontSizeText, colorText, option, colorOption, and widthBand. 
    
    It returns a JSX element that renders a styled <span> element with the option prop as its content. 
    
    The styling includes setting the font size, width, and border radius based on the props, and applying 
    text and background colors based on the colorText and colorOption props.
*/
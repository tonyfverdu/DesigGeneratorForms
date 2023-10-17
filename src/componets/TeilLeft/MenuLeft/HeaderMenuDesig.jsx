import { TITLES_RCM_LEFT } from '../../../constants/contants.js';  //  Constants of Form

function HeaderMenuDesig() {
  const { TITLE_OF_SECTION, SUBTITLE_OF_SECTION } = TITLES_RCM_LEFT;

  return (
    <header className="d-flex flex-column justify-content-center align-items-center mx-auto p-0 m-0 mt-1">
      <h6 className="text-white h6 p-0 m-0 fw-bolder">
        {TITLE_OF_SECTION}
      </h6>
      <h6 className={"fw-semibold text-graycolor200 p-0"} style={{ fontSize: "0.55rem", margin: '0.2rem' }}>
        {SUBTITLE_OF_SECTION}
      </h6>
    </header>
  )
}

export default HeaderMenuDesig;

/*
    Component Left Menu Title => HeaderMenuDesig
    
    It renders a header element with two paragraphs inside it. The content of the paragraphs is determined by the values 
    of the TITLE_OF_SECTION and SUBTITLE_OF_SECTION variables, which are extracted from the TITLES_RCM_LEFT object (Const)
*/
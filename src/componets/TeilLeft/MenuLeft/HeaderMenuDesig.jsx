import { TITLES_RCM_LEFT } from '../../../constants/contants.js';  //  Constants of Form

function HeaderMenuDesig() {
  return (
    <header className="d-flex flex-column justify-content-center align-items-center mx-auto py-1 mt-1 mb-2">
      <h6 className="text-white h6 fw-bold m-0 p-0">
        {TITLES_RCM_LEFT.TITLE_OF_SECTION}
      </h6>
      <h6 className={"fw-bold text-light m-0 p-0 py-1"} style={{ fontSize: "0.6rem" }}>
        {TITLES_RCM_LEFT.SUBTITLE_OF_SECTION}
      </h6>
    </header>
  )
}

export default HeaderMenuDesig;
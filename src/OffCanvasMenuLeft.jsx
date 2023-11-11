import TeilLeft from './componets/TeilLeft/TeilLeft.jsx';

// const OffCanvasMenuLeft = ({ formSelectLocal }) => (
const OffCanvasMenuLeft = () => (
  <>
    <div className="p-0 m-0 w-auto d-flex flex-column justify-content-center align-items-center">
      <ButtonKlein2 type="button" text="Designer Menu" parW="6rem" parH="2rem" parFS="0.7rem" />
    </div>
    <div className="offcanvas offcanvas-start bg-dark p-0 m-0" tabIndex="-1" id="offcanvasMenuLeft" aria-labelledby="offcanvasMenuLabel">
      <div className="offcanvas-header bg-white p-0 m-0">
        <h5 id="offcanvasMenuLabel" className="offcanvas-title colorBlueDunkel text-center fw-bold fs-09 mx-auto py-1">
          Designer Menu
        </h5>
        <button type="button" className="me-2 btn-close btn-close-dark text-danger fw-bolder" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body p-0 m-0 mt-1">
        {/* <TeilLeft formSelectLocal={formSelectLocal} /> */}
        <TeilLeft />
      </div>
    </div>
  </>
);

export default OffCanvasMenuLeft;

const ButtonKlein2 = ({ type, text, parW, parH, parFS }) => {
  const buttonStyle = {
    width: parW,
    height: parH,
    fontSize: parFS
  };

  return (
    <button
      type={type}
      className="w-auto btn btn-outline-dark border-3 fw-bold px-2"
      style={buttonStyle}
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasMenuLeft"
      aria-controls="offcanvasMenuLeft"
    >
      {text}
    </button>
  );
};

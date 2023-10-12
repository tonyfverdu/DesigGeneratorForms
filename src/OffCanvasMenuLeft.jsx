import TeilLeft from './componets/TeilLeft/TeilLeft';

function OffCanvasMenuLeft({ formSelectLocal }) {
  return (
    <>
      <div className="p-1 mt-4 mx-auto d-flex flex-column justify-content-center align-items-center" style={{ width: "19.9rem" }}>
        <ButtonKlein2
          type="button"
          text="Designer Menu"
          parW="8rem"
          parH="2rem"
          parFS="0.7rem"
        />
      </div>
      <div className="offcanvas offcanvas-start bg-dark p-1" tabIndex="-1" id="offcanvasMenuLeft" aria-labelledby="offcanvasMenuLabel">
        <div className="offcanvas-header bg-white p-1">
          <h5 id="offcanvasMenuLabel" className="offcanvas-title w-100 colorBlueDunkel text-center fw-bold fs-09 py-2">
            Designer Menu
          </h5>
          <button type="button" className="me-2 btn-close btn-close-dark text-danger fw-bold" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body" style={{ width: "19.9rem" }}>
          <TeilLeft formSelectLocal={formSelectLocal} />
        </div>
      </div>
    </>
  );
}

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
      className="w-auto btn btn-outline-dark border-3 fw-bold px-3"
      style={buttonStyle}
      data-bs-toggle="offcanvas"
      data-bs-target="#offcanvasMenuLeft"
      aria-controls="offcanvasMenuLeft"
    >
      {text}
    </button>
  );
};

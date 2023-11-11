function SelectLayoutForm({ titleSelectState }) {
  return (
    <div className="d-flex justify-content-center align-items-center me-1 p-0" style={{height: "2.4rem"}}>
      <header className="d-flex justify-content-center align-items-center p-0 m-0">
        <h6 className="mx-auto p-1 fw-bolder text-end text-dark fs-6 mt-2" >{titleSelectState}</h6>
      </header>
    </div>
  )
}

export default SelectLayoutForm;
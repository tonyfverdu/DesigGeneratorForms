
function FieldNumber({ title, value, fontSize, tooRead, action }) {
  return (
    <>
      <span className="ms-0 p-1 fw-bold"
        style={{ fontSize: fontSize, textShadow: "-4px -3px 4px rgba(0, 0, 0, 0.39), 2px 3px 4px rgba(0, 0, 0, 0.3)" }} >
        {title}
      </span>
      {
        tooRead ?
          <span className="ms-0 p-1 fw-normal" style={{ fontSize: fontSize }} >{value}</span>
          :
          <div className="d-flex flex-row justify-content-center align-items-center mx-auto" style={{ height: "1.8rem" }}>
            <input type="number" className="contInputNumber form-control mx-auto rounded-0 text-center p-1" required={true}
              placeholder="0" min="0" max={Math.pow(10, parseInt(3, 10)) - 1}
              value={value} onChange={action} />
          </div>
      }</>
  )
}

export default FieldNumber;
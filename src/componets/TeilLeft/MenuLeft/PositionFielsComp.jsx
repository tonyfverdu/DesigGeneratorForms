import React from 'react'


function PositionFielsComp({ title, titleField1, titleField2, value, value1Field1, value1Field2, fontSize, fontSize2, tooRead, action1, action2 }) {

  return (
    <>
      <span className="ms-0 p-1 fw-bold"
        style={{ fontSize: fontSize, textShadow: "-4px -3px 4px rgba(0, 0, 0, 0.39), 2px 3px 4px rgba(0, 0, 0, 0.3)" }} >
        {title}
      </span>

      <div className="d-flex flex-row justify-content-between align-items-center gap-1">
        <span className="m-0 p-0 fw-bold"
          style={{ fontSize: fontSize2, textShadow: "-4px -3px 4px rgba(0, 0, 0, 0.39), 2px 3px 4px rgba(0, 0, 0, 0.3)" }} >
          {titleField1}
        </span>
        {
          tooRead ?
            <span className="fw-normal m-0" style={{ fontSize: fontSize2 }} >{value === undefined ? 0 : value1Field1}</span>
            :
            <input type="number" className="contInputNumber form-control rounded-0" required={true}
              placeholder="0" min="0" max={Math.pow(10, parseInt(2, 10)) - 1} />
        }
        <span className="m-0 p-0 fw-bold"
          style={{ fontSize: fontSize2, textShadow: "-4px -3px 4px rgba(0, 0, 0, 0.39), 2px 3px 4px rgba(0, 0, 0, 0.3)" }} >
          {titleField2}
        </span>
        {
          tooRead ?
            <span className="fw-normal m-0" style={{ fontSize: fontSize2 }} >{value === undefined ? 0 : value1Field2}</span>
            :
            <input type="number" className="contInputNumber form-control rounded-0" required={true}
              placeholder="0" min="0" max={12} />
        }
      </div>
    </>
  )
}

export default PositionFielsComp;
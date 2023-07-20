import { Fragment } from 'react'

function ListDataElement({ TitleList, fontSize, arrayOfLines }) {
  return (
    <ul className="list-group container-fluid border-0" style={{ width: "100%", margin: "0.2rem" }}>
      <li href="#" className="list-group-item list-group-item-action container-fluid bg-black fw-bolder text-center text-white border-0 mx-auto"
        style={{ fontSize: { fontSize }, textShadow: "-4px -3px 4px rgba(0, 0, 0, 0.39), 2px 3px 4px rgba(0, 0, 0, 0.3)", padding: "0.3rem" }} >
        {TitleList}
      </li>

      {
        Array.isArray(arrayOfLines)
          ?
          arrayOfLines.map(line => {
            return (
              <Fragment key={line.title}>
                <LineOfUL
                  color={line.color}
                  fontSize={line.fontSize}
                  title={line.title}
                  value={line.value}
                />
              </Fragment>
            )
          })
          :
          <span className="txt-danger fs-6 fw-bold mx-auto">Error:  The argument of the function "ListDataElement" must be an array</span>
      }
    </ul>
  )
}

export default ListDataElement;

function LineOfUL({ color, fontSize, title, value }) {
  return (
    <li className={`list-group-item list-group-item-action list-group-item-${color} container-fluid border-0`} style={{ padding: "0.2rem 0.4rem" }}>
      <span className="ms-0 fw-bold text-start"
        style={{ fontSize: fontSize, textShadow: "-4px -3px 4px rgba(0, 0, 0, 0.39), 2px 3px 4px rgba(0, 0, 0, 0.3)" }} >
        {title}
      </span>
      <span className="ms-1 p-0 fw-normal" style={{ fontSize: fontSize }} >
        {value}
      </span>
    </li>
  )
}
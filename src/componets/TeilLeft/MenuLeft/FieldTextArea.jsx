
function FieldTextArea({ title, value, fontSize, tooRead, action }) {

  return (
    <>
      <span className="ms-1 p-1 fw-bold"
        style={{ fontSize: fontSize, textShadow: "-4px -3px 4px rgba(0, 0, 0, 0.39), 2px 3px 4px rgba(0, 0, 0, 0.3)" }} >
        {title}
      </span>
      {
        tooRead ?
          <textarea className="p-1 ms-2" required={true} disabled={true} autoComplete="off" readOnly={true} placeholder={""}
            rows={3} cols={46} style={{ resize: "none", color: "rgb(9, 9, 9)", fontSize: fontSize }} value={value}>
          </textarea>
          :
          <textarea className="contAreaText p-1 ms-2" required={true} disabled={false} autoComplete="off" readOnly={false} placeholder={""}
            rows={3} cols={46} style={{ resize: "none", color: "rgb(9, 9, 9)", fontSize: fontSize }}
            value={value} onChange={action} >
          </textarea>
      }
    </>
  )
}

export default FieldTextArea;
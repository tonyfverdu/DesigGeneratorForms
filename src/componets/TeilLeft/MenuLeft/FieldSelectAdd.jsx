
function FieldSelectAdd({ title, type, value, fontSize, fontSizeButton, tooRead, action, actionAddButton, actionClickAdd }) {
  return (
    <>
      <span id="id_select_blocks" className="ms-1 p-1 fw-bold"
        style={{ fontSize: fontSize, textShadow: "-4px -3px 4px rgba(0, 0, 0, 0.39), 2px 3px 4px rgba(0, 0, 0, 0.3)" }} >
        {title}
      </span>
      {
        tooRead ?
          <select id="id_select_blocks" size="1" required disabled={false}
            className="contSelect col-11 rounded-0 border border-secondary bg-white fw-bold p-1 my-1 mx-auto text-danger"
            onChange={action}
            style={{ color: "rgb(9, 9, 9)", fontSize: fontSize }} >

            <option value="select" className="fw-bold text-secondary text-center text-danger"
              style={{ fontSize: fontSize }}>
              Select
            </option>
            {
              Array.isArray(value) &&

                type === 'blocks' ? value.map(elem => <option key={elem.id_Block} value={elem.title_Block} className="fw-normal text-dark">
                  {elem.title_Block}
                </option>)
                :
                type === 'rows' ? value.map(elem => <option key={elem.orderColInBlock} value={`Row: ${elem.orderColInBlock}`} className="fw-normal text-dark">
                  {`Row: ${elem.orderColInBlock}`}
                </option>)
                  :
                  // type === 'components' ? value.map(elem => <option key={elem.id_Element} value={elem.title_Element} className="fw-normal text-dark">
                  type === 'components' ? value.map(elem => <option key={elem.id_Element} value={elem.title_Element} className="fw-normal text-dark">
                    {elem.title_Element}
                  </option>)
                    :
                    null
            }
          </select>
          :
          <div className="container d-flex flex-column justify-content-center align-items-start m-0 p-0" >
            <div className="row container-fluid d-flex justify-content-between align-items-start m-0 p-0 gap-1" >
              <div className="col-8 mx-auto p-0">
                <input type="text" className="contInputText form-control ms-1 rounded-0 text-start" autoComplete="off" required={true}
                  placeholder={"Add block ..."} size={15}
                  onChange={actionAddButton} />
              </div>

              <div className="col-2  offset-md-2 mx-auto p-0">
                <button type="button" className="btn btn-sm btn-outline-success p-0 px-3" style={{ height: "1.68rem" }}
                  onClick={actionClickAdd}>
                  <span className="text-center fw-bold" style={{ fontSize: fontSizeButton }}>
                    Add
                  </span>
                </button>
              </div>
            </div>

            <div className="row container m-0 p-0">
              <select id="id_select_blocks" size="1" required disabled={false}
                className="contSelect col rounded-0 border border-secondary bg-white fw-bold p-1 my-1 mx-1 text-danger"
                onChange={action}
                style={{ color: "rgb(9, 9, 9)", fontSize: fontSize, width: "auto" }} >

                <option value="select" className="fw-bold text-center text-danger"
                  style={{ fontSize: "0.65rem" }}>
                  Select
                </option>
                {
                  Array.isArray(value) &&
                  value.map(block => <option key={block.id_Block} value={block.title_Block} className="fw-normal text-dark">{block.title_Block}</option>)
                }
              </select>
            </div>
          </div>
      }
    </>
  )
}

export default FieldSelectAdd;
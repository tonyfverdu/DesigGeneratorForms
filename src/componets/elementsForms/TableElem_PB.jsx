import { useState, useEffect, useContext, useRef } from 'react'
import { MyContext } from '../../context/TheContext.jsx'

import TextElem_PB from './TextElem_PB.jsx'
import DateElem_PB from './DateElem_PB.jsx'
import SelectElement_PB from './SelectElem_PB.jsx'

import currentDate from '../../functions/currentDate.js'


function TableElem_PB({ elementID, orderInBlock, required, disabled = false, position,
  borderTable, colorTable, fontSizeTableHead, titlesHeadsTable, tableData, fontSizeBodyTable, setTable }) {
  const theContext = useContext(MyContext)
  const [farbeTable, setFarbeTable] = useState("table-success")

  const resultAnalisis = ["Negativo", "Positivo"]

  useEffect(() => {
    switch (colorTable) {
      case "yellow":
        setFarbeTable("table-warnig")
        break
      case "red":
        setFarbeTable("table-danger")
        break
      case "green":
        setFarbeTable("table-success")
        break;
      case "blue":
        setFarbeTable("table-primary")
        break
      case "grey":
        setFarbeTable("table-secondary")
        break
      case "black":
        setFarbeTable("table-dark")
        break

      default:
        break;
    }
  }, [])

  return (
    < table id={elementID} className="table table-sm table-borderless table-striped table-hover table-responsive" required={required}
    >

      <thead className={farbeTable} >
        <tr className="fw-light text-center" style={{ fontSize: fontSizeTableHead }}>
          {
            titlesHeadsTable.map(title => {
              return <th key={title.id} scope="col">{title}</th>
            })
          }
        </tr>
      </thead>

      <tbody className="table-light">
        {
          tableData.map(toxina => {
            return (
              <tr key={toxina.id}>
                <th scope="row" className="text-center align-middle" style={{ fontSize: fontSizeBodyTable }}>
                  {toxina.analisis}
                </th>
                <td>
                  < SelectElement_PB
                    elementID={`id_${toxina.resultadoAnalisis}`}
                    orderInBlock={1}
                    labelElement={""}
                    required={true}
                    disabled={false}
                    response={[toxina.resultadoAnalisis]}
                    placeholder={toxina.resultadoAnalisis}
                    size={1}
                    position={{ rowElem: 2, colElem: 0 }}
                    width={2}
                    borderSelect={true}
                    colorSelect={"rgb(9, 9, 9)"}
                    fontSizeSelect={"0.7rem"}
                    optionsValues={resultAnalisis}
                    setSelect={theContext.setSelect}
                  />
                </td>
                <td className="text-center">
                  <TextElem_PB
                    elementID={`id_${toxina.tipoToxinaIdent}`}
                    orderInBlock={1}
                    labelElement={""}
                    required={true}
                    disabled={false}
                    response={["onabotulinumtoxina A"]}
                    placeholder={""}
                    size={30}
                    position={{ rowElem: 2, colElem: 0 }}
                    width={6}
                    borderElement={true}
                    colorText={"rgb(9, 9, 9)"}
                    fontSizeText={"0.6rem"}
                    setText={theContext.setText}
                  />
                </td>
                <td className="text-center">
                  <DateElem_PB
                    elementID={`id_${toxina.fechaAnalisis}`}
                    orderInBlock={5}
                    labelElement={""}
                    required={true}
                    disabled={false}
                    response={[currentDate().Date_DD_MM_YY]}
                    placeholder={"2023-01-01"}
                    size={15}
                    position={{ rowElem: 1, colElem: 0 }}
                    width={2}
                    borderDate={true}
                    colorDate={"rgb(9, 9, 9)"}
                    fontSizeDate={"0.6rem"}
                    setDate={theContext.setDate}
                  />
                </td>
              </tr>
            )
          })
        }
      </tbody>
    </table >
  )
}

export default TableElem_PB;
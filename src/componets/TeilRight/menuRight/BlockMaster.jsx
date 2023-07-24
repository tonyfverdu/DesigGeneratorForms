import { useState, useEffect, useContext } from 'react';
import { MyContext } from '../../../context/TheContext.jsx';
import LabelElem_PB from '../../elementsForms/LabelElem_PB.jsx';
import Column from './Column.jsx';
import ColAddLine from './ColAddLine.jsx';

import '../../../sass/componentSass/TeilRight/Row.scss'


function BlockMaster({ form, block, index }) {
  const theContext = useContext(MyContext)


  const [columnsOfBlock, setColumnsOfBlock] = useState([])  //  <<=  Objetos columnas del bloque: block

  const [arrayOfCompByColumn, setArrayOfCompByColumn] = useState([])

  useEffect(() => {
    setColumnsOfBlock(block.columns)
    // comp_Colum(columnsOfBlock)

    // console.log("columnsOfBlock:  ", columnsOfBlock)
    // setArrayColumn((block.columns.components))

    // console.log("columnsOfBlock:  ", columnsOfBlock)

    // comp_Colum(columnsOfBlock)
    // console.log("compOfColumn:  ", compOfColumn)
  }, [block])

  function comp_Colum(parArrayColumn) {
    console.log("parArrayColumn:  ", parArrayColumn)
    if (Array.isArray(parArrayColumn)) {
      setArrayOfCompByColumn(parArrayColumn.map((col, i) => {
        return col.components[i]
      }))
    } else {
      console.log('Error:  The argument of the function "compOfColum" must be an array!!')
      setArrayOfCompByColumn(null)
    }
  }


  return (
    <>
      <div id={`heading_${index}`} className="accordion-header" >
        <button className="accordion-button graycolor400 h6 fw-bold collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target={`#collapse_${index}`} aria-expanded="false" aria-controls={`collapse_${index}`}>
          <span className="h6 fw-bold">{block.title_Block}</span>
        </button>
      </div>

      <div id={`collapse_${index}`} className="accordion-collapse collapse p-0 mx-auto" aria-labelledby={`heading_${index}`} >
        <div className="accordion-body p-0 mx-2" >
          <div className="row shadow-sm graycolor500" >
            <div className="col-3">
              <LabelElem_PB
                id_Element={block.id_Block}
                orderInBlock={index}
                required={true}
                disabled={false}
                response={[""]}
                placeholder={block.label_Block}
                size={30}
                position={{ rowElem: 0, colElem: 0 }}
                width={3}
                borderElement={false}
                colorElement={"rgb(9, 9, 9)"}
                fontSizeElement={"0.7rem"}
              />
            </div>
          </div>

          {/* //  Rows *************************************************************************************************/}
          {
            columnsOfBlock !== undefined
              ?
              columnsOfBlock.map((col, index) => {
                return (
                  <>
                    {
                      !theContext.tooRead &&

                      <div key={index} className="row p-0 my-1 graycolor100 shadow-sm" >
                        <ColAddLine
                          form={form}
                          block={block}
                          numRow={index}
                        />
                      </div>
                    }

                    <div key={index} className="row p-1 mb-1 graycolor100 shadow-sm" >
                      {col.components.map((comp, i) => {
                        return (
                          <div key={i} className={`col-${comp.dimension.width + ""} d-grip p-0 m-0`} style={{ width: "auto" }}>
                            <Column
                              comp={comp}
                            />
                          </div>
                        )
                      })
                      }
                    </div >
                  </>
                )
              })
              :
              <p className="display-6 text-center text-danger">Error</p>
          }
          {
            !theContext.tooRead &&

            < div className="row p-0 my-1 graycolor100 shadow-sm" >
              <ColAddLine
                form={form}
                block={block}
                numRow={columnsOfBlock.length}
              />
            </div>
          }
        </div >
      </div >
    </>
  )
}

export default BlockMaster;
import { useState, useEffect, useContext } from 'react';
import { MyContext } from '../../context/TheContext.jsx';
import LabelElem_PB from '../elementsForms/LabelElem_PB.jsx';
import Column from './Column.jsx';
import ColComponents from './ColComponents.jsx';

import '../../sass/componentSass/TeilRight/Row.scss'


function BlockMaster({ form, block, index }) {
  const theContext = useContext(MyContext)
  const [columnsOfBlock, setColumnsOfBlock] = useState(block.columns)

  useEffect(() => {
    setColumnsOfBlock(block.columns)
  }, [])


  return (
    <>
      <div id={`heading_${index}`} className="accordion-header" >
        <button className="accordion-button graycolor400 h6 fw-bold collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target={`#collapse_${index}`} aria-expanded="false" aria-controls={`collapse_${index}`}>
          <span className="h6 fw-bold">{block.title_Block}</span>
        </button>
      </div>

      <div id={`collapse_${index}`} className="accordion-collapse collapse" aria-labelledby={`heading_${index}`} >
        <div className="accordion-body py-0 px-1 mx-1">
          <div className="row p-1 shadow-sm graycolor500">
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
                    <div key={index} className="row my-2" >
                      <ColComponents
                        form={form}
                        block={block}
                        numRow={index}
                      />
                    </div>

                    <div key={index} className="row p-1 mb-1 graycolor100 shadow-sm" >
                      {col.components.map(comp => {
                        return (
                          <div className={`col-${comp.dimension.width + ""} d-flex flex-row justify-content-start align-item-center gap-1`} >
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
              <>Error</>
          }
          < div className="row my-2" >
            <ColComponents
              form={form}
              block={block}
              numRow={columnsOfBlock.length}
            />
          </div>
        </div>
      </div >
    </>
  )
}

export default BlockMaster;
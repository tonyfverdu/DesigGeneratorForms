import { useState, useEffect, useContext } from 'react'
import { MyContext } from '../../context/TheContext.jsx'

//  Rows od Blocks
import BlockMaster from '../TeilRight/menuRight/BlockMaster.jsx'
import RowBlock from '../TeilRight/RowBlock.jsx'

//  Import of Component of Form
import LabelElem_PB from '../elementsForms/LabelElem_PB.jsx'
import TextElem_PB from '../elementsForms/TextElem_PB.jsx'


function PrintFormTemplate({ formInput, setFormInput }) {
  const theContext = useContext(MyContext)
  
  const [formLocalSelect, setFormLocalSelect] = useState(JSON.parse(JSON.stringify(formInput)))
  theContext.setArrayOfBlocks(formLocalSelect.blocks)
  const [lengthOfArrayOfBlocks, setLengthOfArrayOfBlocks] = useState(theContext.arrayOfBlocks.length)

  useEffect(() => {
    setFormLocalSelect(JSON.parse(JSON.stringify(formInput)))
    theContext.setArrayOfBlocks(formLocalSelect.blocks)
    setLengthOfArrayOfBlocks(theContext.arrayOfBlocks.length)
  }, [formInput])

  // useEffect(() => {
  //   theContext.setArrayOfBlocks(formLocalSelect.formInput.blocks)
  //   setLengthOfArrayOfBlocks(formSelect.formInput.blocks.length)
  // }, [formLocalSelect])

  // useEffect(() => {
  //   setLengthOfArrayOfBlocks(formLocalSelect.blocks.length + 1)
  // }, [formLocalSelect.blocks])


  return (
    <form className="container-fluid rounded-0 my-2 bg-light ">
      <div className="container shadow-sm d-flex flex-column justify-content-start align-items-center p-1 mb-2">
        <header className="container row bg-light p-0 rounded">
          <h5 className="col display-6 fw-bold p-2 text-sm-start text-capitalize colorBlueDunkel" >
            Form Title: <span className="fs-3 text-secondary fw-bolder mx-auto ms-2" >
              {formLocalSelect.title_Form}
            </span>
          </h5>
        </header>
      </div>

      < div className="container shadow-sm p-0 mb-1">

        {/* //  Here are the dates of the form:  First row */}
        {/* //  1.-  First row:  Title of Form + Id of Form with background color gray */}
        <div className="row d-flex flex-row justify-content-start align-items-center gx-0 shadow-sm graycolor500 p-1 mb-2">
          <div className="col-4 text-start m-0 p-0 text-start" >
            <LabelElem_PB
              id_Element={""}
              orderInBlock={1}
              required={true}
              disabled={true}
              response={[formLocalSelect.title_Form]}
              placeholder={formLocalSelect.title_Form}
              size={50}
              position={{ rowElem: 0, colElem: 0 }}
              width={3}
              borderElement={false}
              colorElement={"rgb(9, 9, 9)"}
              fontSizeElement={"0.8rem"}
            />
          </div>

          <div className="col-3 offset-md-5" >
            <TextElem_PB
              id_Element={"id_IdOfForm"}
              orderInBlock={2}
              labelElement={"Id: "}
              required={true}
              disabled={true}
              response={[""]}
              placeholder={formLocalSelect.id_Form}
              size={12}
              position={{ rowElem: 0, colElem: 10 }}
              width={3}
              borderElement={false}
              colorElement={"rgb(9, 9, 9)"}
              fontSizeElement={"0.8rem"}
              text={formLocalSelect.id_Form}
              setText={theContext.setText}
            />
          </div>
        </div>

        {/* //  2.-  Array of Blocks from Form */}
        {
          theContext.arrayOfBlocks !== undefined &&
          theContext.arrayOfBlocks.map((block, index) => {
            return (
              <>
                {
                  !theContext.tooRead &&
                  <div className="row my-2">
                    <RowBlock
                      form={formLocalSelect}
                      count={index}
                    />
                  </div>
                }

                <div key={block.id_Block} id={`accordionBlock_${index}`} className="accordion accordion-flush bg-secondary mx-auto mb-3">
                  <div className="accordion-item p-1 m-0" >
                    <BlockMaster
                      form={formLocalSelect}
                      block={block}
                      index={index}
                    />
                  </div >
                </div>
              </>
            )
          })
        }
        {
          !theContext.tooRead &&
          <div className="row my-2">
            <RowBlock
              form={formLocalSelect}
              count={lengthOfArrayOfBlocks}
            />
          </div>
        }

      </div>
    </form >
  )
}

export default PrintFormTemplate;

//  Nota.-

/*  The context variable: "theContext.toogleReadLeft" is the one that controls the "read" view in the layout view of the 
    layout view (right-hand side)
*/


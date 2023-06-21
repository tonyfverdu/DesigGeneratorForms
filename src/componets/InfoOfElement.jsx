import { useContext } from 'react'
import { MyContext } from '../context/TheContext.jsx'
import '../sass/componentSass/InfoOfElement.scss'
import ShowElements from './ShowElements';
import HeaderComponent from './others/HeaderComponent';


function InfoOfElement() {
  const theContext = useContext(MyContext)

  const Titles = {
    titleOfSection: "Form Component Design",
    subtitleOfSection: "Component Variables Info",

    //  Form
    FormTitle: "Form: ",
    formId: "Code: ",
    readOnly: false,
    numberBlock: 1,

    //  Blocks
    BlockTitle: "Block: ",
    titleOfBlock: "Initial Block of the Form",
    BlockId: "Code Block: ",
    orderIntroBlock: "Display Order: ",
    valueOfOrderBlock: "",
    TitleNumBlocks: "N° Blocks: ",
    valueNumBlocks: 6,

    //  Asks - component - element
    AskTitle: "Ask: ",
    titleOfAsk: theContext.objComponent.type,
    AskId: "Code Ask: ",
    valueOfAskId: theContext.objComponent.elementID,
    titleOfOrderOfAsk: "Order in Block: ",
    orderOfAskInBlock: theContext.objComponent.orderIntroBlock,
    labelOfAsk: theContext.objComponent.labelElement,
    required: "Required? ",
    responseRequired: theContext.objComponent.required.toString(),
    disabled: "Disabled? ",
    responseDisabled: theContext.objComponent.disabled.toString(),
    titleOfResponse: "Response: ",
    response: theContext.objComponent.response,
    titleOfPlaceholder: "Default : ",
    placeholder: theContext.objComponent.placeholder,
    titleValue: "Value: ",
    value: theContext.objComponent.valueComponent,
    titleSize: "Size: ",
    size: theContext.objComponent.size,
    titlePosition: "Position: ",
    titleRow: "row: ",
    titleCol: "col: ",
    position: { row: theContext.objComponent.position.row, col: theContext.objComponent.position.col },
    titleDimension: "Dimensions: ",
    titleW: "width: ",
    titleH: "height: ",
    dimension: { width: theContext.objComponent.dimensions.width, height: theContext.objComponent.dimensions.height }
  }

  return (
    <div className="container-fluid contInfoOfElement">
      <div className="infoComponent container-fluid bg-secondary" >
        <header className="contHeaderTitle">
          <h4 className={"title"}>
            {Titles.titleOfSection}
          </h4>
          <h6 className={"subtitle"}>
            {Titles.subtitleOfSection}
          </h6>
        </header>

        <div className="contInfoForm mb-1">
          <header className="container contTitles m-0 ">
            <h6 className="titles text-start">Form info</h6>
          </header>
          <div className="row container-fluid d-flex justify-content-start align-items-center gap-0 mb-2">
            <div className="Fields col mt-1 mx-1 p-1 bg-body">
              <span className="Field">{Titles.FormTitle}</span>
              <span className="valueSpan">{"Encuesta de Varicela"}</span>
            </div>
            <div className="Fields col mt-1 mx-1 p-1 bg-body">
              <span className="Field">{Titles.formId}</span>
              <span className="valueSpan">{"form_encuesta_varicela_000345"}</span>
            </div>
          </div>

          <div className="row container-fluid d-flex justify-content-start align-items-center gap-0 mb-2">
            <div className="Fields col mx-1 p-1 bg-body">
              <span className="Field">{"Read only?: "}</span>
              <span className="valueSpan">{Titles.readOnly.toString()}</span>
            </div>
            <div className="Fields col mx-1 p-1 bg-body">
              <span className="Field">{"N° Blocks:"}</span>
              <span className="valueSpan">{Titles.valueOfOrderBlock}</span>
            </div>
          </div>

        </div>

        <div className="contInfoForm mb-1">
          <header className="container contTitles m-0 ">
            <h6 className="titles text-start">Block info</h6>
          </header>
          <div className="row container-fluid d-flex justify-content-start align-items-center gap-0 mb-2">
            <div className="Fields col mt-1 mx-1 p-1 bg-body">
              <span className="Field">{Titles.BlockTitle}</span>
              <span className="valueSpan">{"Initial Block"}</span>
            </div>
            <div className="Fields col mt-1 mx-1 p-1 bg-body">
              <span className="Field">{Titles.BlockId}</span>
              <span className="valueSpan">{"block_01_Form_00035"}</span>
            </div>
          </div>

          <div className="row container-fluid d-flex justify-content-start align-items-center gap-0 mb-2">
            <div className="Fields col mx-1 p-1 bg-body">
              <span className="Field">{Titles.orderIntroBlock}</span>
              <span className="valueSpan">{Titles.valueOfOrderBlock}</span>
            </div>
            <div className="Fields col mx-1 p-1 bg-body">
              <span className="Field">{Titles.TitleNumBlocks}</span>
              <span className="valueSpan">{Titles.valueNumBlocks}</span>
            </div>
          </div>
        </div>

      </div>

      <div className="contOfData container-fluid bg-secondary">
        <div className="contComponent container my-1 p-1">
          <div className="container bg-white">
            <ShowElements />
          </div>
        </div>
      </div>

      <div className="contOfData container-fluid bg-secondary">
        <div className="contInfoForm container my-1">
          <header className="container contTitles m-0">
            <h6 className="titles text-start">Component info</h6>
          </header>
          <div className="row gap-0 mb-1 mx-0">
            <div className="Fields col mt-1 ms-1 p-1 bg-body">
              <span className="Field">{Titles.AskTitle}</span>
              <span className="valueSpan">{Titles.titleOfAsk}</span>
            </div>
            <div className="Fields col mt-1 mx-0 p-1 bg-body">
              <span className="Field">{Titles.AskId}</span>
              <span className="valueSpan">{Titles.valueOfAskId}</span>
            </div>
            <div className="Fields col mt-1 mx-0 p-1 bg-body">
              <span className="Field">{Titles.titleOfOrderOfAsk}</span>
              <span className="valueSpan">{Titles.orderOfAskInBlock}</span>
            </div>
          </div>

          <div className="row gap-0 mb-1 mx-0">
            <div className="Fields col mt-1 mx-1 p-1 bg-body">
              <span className="Field">{Titles.labelOfAsk}</span>
            </div>
            <div className="Fields col mt-1 mx-0 p-1 bg-body">
              <span className="Field me-1">{Titles.required}</span>
              <span className="valueSpan">{Titles.responseRequired.toString()}</span>
            </div>
            <div className="Fields col mt-1 mx-1 p-1 bg-body">
              <span className="Field me-1">{Titles.disabled}</span>
              <span className="valueSpan">{Titles.responseDisabled.toString()}</span>
            </div>
          </div>

          <div className="row gap-0 mb-1 mx-0">
            <div className="Fields col mt-1 mx-1 p-1 bg-body">
              <span className="Field">{Titles.titleOfResponse}</span>
              <span className="valueSpan">{Titles.response[0]}</span>
            </div>
            <div className="Fields col mt-1 mx-0 p-1 bg-body">
              <span className="Field">{Titles.titleOfPlaceholder}</span>
              <span className="valueSpan">{Titles.placeholder}</span>
            </div>
          </div>

          <div className="row gap-0 mb-1 mx-0">
            <div className="Fields col mt-1 mx-1 p-1 bg-body">
              <span className="Field">{Titles.titleValue}</span>
              <span className="valueSpan">{Titles.value}</span>
            </div>
            <div className="Fields col mt-1 mx-1 p-1 bg-body">
              <span className="Field">{Titles.titleSize}</span>
              <span className="valueSpan">{Titles.size}</span>
            </div>
          </div>
          <div className="row gap-0 mb-1 mx-0">
            <div className="Fields d-flex justify-content-start align-items-center p-1 ">
              <div className="col-5 bg-body px-1">
                <span className="titlePosDim">{Titles.titlePosition}</span>
                <span className="subTitlePosDim">{Titles.titleRow}</span>
                <span className="valuePosDim">{Titles.position.row}</span>
                <span className="subTitlePosDim">{Titles.titleCol}</span>
                <span className="valuePosDim">{Titles.position.col}</span>
              </div>
              <div className="col-7 bg-body px-1">
                <span className="titlePosDim">{Titles.titleDimension}</span>
                <span className="subTitlePosDim">{Titles.titleW}</span>
                <span className="valuePosDim">{Titles.dimension.width}</span>
                <span className="subTitlePosDim">{Titles.titleH}</span>
                <span className="valuePosDim">{Titles.dimension.height}</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default InfoOfElement;
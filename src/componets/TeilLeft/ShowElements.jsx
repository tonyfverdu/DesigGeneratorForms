import { useState, useEffect, useContext } from 'react'
import { MyContext } from '../../context/TheContext.jsx'
import HeaderHead from './MenuLeft/HeaderHead.jsx'
import MasterElem_PB from '../elementsForms/MasterElem_PB.jsx'
import LabelElem_PB from '../elementsForms/LabelElem_PB.jsx'
import TextElem_PB from '../elementsForms/TextElem_PB.jsx'
import PhoneElem_PB from '../elementsForms/PhoneElem_PB.jsx'
import EmailElem_PB from '../elementsForms/EmailElem_PB.jsx'
import NumberElem_PB from '../elementsForms/NumberElem_PB.jsx'
import DateElem_PB from '../elementsForms/DateElem_PB.jsx'
import AreaTextElem_PB from '../elementsForms/AreaTextElem_PB.jsx'
import SelectElement_PB from '../elementsForms/SelectElem_PB.jsx'
import CheckboxElem_PB from '../elementsForms/CheckboxElem_PB.jsx'
// import RadioButtonElem_PB from '../elementsForms/RadioButtonElem_PB.jsx'
import RadioButtons_PB from '../elementsForms/RadioButtons_PB.jsx'
import IconoElem_PB from '../elementsForms/IconoElem_PB.jsx'


function ShowElements({ valueComp }) {
  const { setText, setNumber, setDate, setPhone, setEmail,
    setTextArea, setSelect, setCheckbox, setIcon } = useContext(MyContext);
  const [elementOut, setElementOut] = useState(null);

  useEffect(() => {
    selectElementShow(valueComp);
  }, [valueComp]);

  function selectElementShow(parComponent) {
    const elementMap = {
      master: () => <MasterElem_PB comp={parComponent} />,
      label: () => <LabelElem_PB {...parComponent} />,
      text: () => <TextElem_PB {...parComponent} setText={setText} />,
      number: () => <NumberElem_PB {...parComponent} setNumber={setNumber} />,
      date: () => <DateElem_PB {...parComponent} setDate={setDate} />,
      phone: () => <PhoneElem_PB {...parComponent} setPhone={setPhone} />,
      email: () => <EmailElem_PB {...parComponent} setEmail={setEmail} />,
      textarea: () => <AreaTextElem_PB {...parComponent} setAreaText={setTextArea} />,
      select: () => <SelectElement_PB {...parComponent} setSelect={setSelect} />,
      checkbox: () => <CheckboxElem_PB {...parComponent} setCheckbox={setCheckbox} />,
      radioButtons: () => <RadioButtons_PB {...parComponent} />,
      icon: () => <IconoElem_PB {...parComponent} setIcon={setIcon} />,
    };

    if (!parComponent) {
      throw new Error('Error: the argument of the function "selectElementShow" must be a string!!');
    }

    const setElement = elementMap[parComponent.type_Element];
    if (setElement) {
      setElementOut(setElement);
    }
  };

  return (
    <ShowComponent
      valueComp={valueComp}
      elementOut={elementOut}
    />
  );
}

export default ShowElements;

const ShowComponent = ({ valueComp, elementOut }) => (
  <div id="accordionShowComp" className="accordion container-fluid graycolor400 d-flex flex-column justify-content-center align-items-center p-1 mx-auto mb-1">
    <div className="accordion-item rounded-0 container-fluid mx-auto graycolor400 border-0" style={{ marginBottom: "0.3rem" }}>
      <HeaderHead
        idHeading="headingShowComp"
        dataTarget="#collapseShowComp"
        ariaControl="collapseShowComp"
        fontSize="0.64rem"
        title="Show Component: "
        value={valueComp.type_Element}
      />

      <div id="collapseShowComp" className="accordion-collapse collapse ms-0" aria-labelledby="headingShowComp" data-bs-parent="#accordionShowComp">
        <div className="accordion-body p-0 mb-0">
          <div className="row d-flex justify-content-center align-items-center gap-1 m-1">
            <div className="col d-flex flex-column justify-content-start align-items-start graycolor200 mx-auto" style={{ padding: "0.2rem", margin: "0.2rem auto" }}>
              <span className="m-0 border-2 border-danger" style={{ width: "100%", fontSize: "0.6rem" }}>
                {elementOut}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);




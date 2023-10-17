// Import the necessary dependencies
import { useState, useEffect, useContext } from 'react';
import { MyContext } from './context/TheContext.jsx';
import ButtonX from './componets/ButtonX.jsx';
import HeaderFigure from './componets/HeaderFigure.jsx';
import Nav from './componets/navegation/Nav.jsx';
import OffCanvasMenuLeft from './OffCanvasMenuLeft.jsx';
import TeilLeft from './componets/TeilLeft/TeilLeft.jsx';
import TeilRight from './componets/TeilRight/TeilRight.jsx';

import { TITLES_OF_APP } from './constants/contants.js';

//  Form Data
import formJSON_prueba_01 from './Data/JSONFormPrueba_01.js';

import './sass/App.scss'

/**
 * A functional component representing the App.
 * @returns {JSX.Element} The rendered App component.
 */
function App() {
  const theContext = useContext(MyContext);

  const [formSelectLocal, setFormSelectLocal] = useState(theContext.formObject);
  // const [blockSelect, setBlockSelect] = useState({});

  const [toggleHeader, setToggleHeader] = useState(true);
  const [toggleFormLayout, setToggleFormLayout] = useState(false);
  

  const toggleHeaderHandler = () => setToggleHeader(!toggleHeader);

  useEffect(() => {
    setFormSelectLocal(theContext.formObject);
    //theContext.setBlockSelectObject(formSelectLocal.blocks[0]);  //  <<==  Nuevo !!
  }, [theContext.formObject]);

  // useEffect(() => {
  //   theContext.setFormObject(formSelectLocal);
  //   theContext.setBlockSelectObject(formSelectLocal.blocks[0]);  //  <<==  Nuevo !!
  // }, [formSelectLocal]);

  return (
    <div className="contCentral">
      <ButtonX toggleHeader={toggleHeader} setToggleHeader={toggleHeaderHandler} />

      {/* Header component */}
      <HeaderFigure toggleHeader={toggleHeader} />

      {/* Navigation component */}
      <Nav titleSite={TITLES_OF_APP.TITLE_OF_SITE} />

      <main className="containerMain container-fluid d-flex justify-content-start align-items-start p-0 m-0 graycolor500" >
        {/* Links Teil: Processing Read - Create - Modify Form */}
        <OffCanvasMenuLeft formSelectLocal={formSelectLocal} >
          <TeilLeft
            formSelectLocal={theContext.formObject}
            setFormSelectLocal={theContext.formObject}

          // blockSelect={blockSelect}
          // setBlockSelect={setBlockSelect}
          />
        </OffCanvasMenuLeft>

        {/* Recths Teil: Processing Form layout and components */}
        <div className='container-fluid me-1 d-flex flex-column justify-content-center align-items-center'>
          <TeilRight
            // formSelectLocal={theContext.formObject}
            // setFormSelectLocal={theContext.setFormObject}

            // formSelectLocal={theContext.formObject}
            // setFormSelectLocal={theContext.formObject}

            // blockSelect={blockSelect}
            // setBlockSelect={setBlockSelect}

            toggleFormLayout={toggleFormLayout}
            setToggleFormLayout={setToggleFormLayout}
          />
        </div>

      </main>
    </div>
  );
}

export default App;

/*
    This code defines a functional component called "App" in JavaScript. It uses React and JSX syntax.

    The component renders a div with the class "contCentral" and contains several child components. These child components 
    are the components include: ButtonX, HeaderFigure, Nav, TeilLeft, and TeilRight.

    The component also uses React hooks such as useState and useEffect to manage state and perform side effects. It utilizes 
    the theContext variable obtained from the MyContext context.
*/

/*
      {/* <nav className="containerNav">
        <Routes>
           <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} /> * /}
      {/* <Route path="/albums" element={<Albums />} />
          <Route path="/songs" element={<Songs />} />
          <Route path="/resultSearchRecords" element={<ResultRecords />} />
          <Route path="/resultSearchSongs" element={<ResultSongs />} />
          <Route path="/shop/articledetail:id" element={<ArticleDetailPage />} />
          <Route path="/loginCustomer" element={<Home />} />
          <Route path="/registerOfCustomer" element={<Home />} />
          <Route path="/player" element={<Home />} />
          <Route path="/customerRegistered" element={<Home />} /> 
          <Route path="*" element=
            {
              <Error
                messageError={'404. Page not found !!'}
              />
            }
          />
        </Routes>
      </nav> * /}

*/

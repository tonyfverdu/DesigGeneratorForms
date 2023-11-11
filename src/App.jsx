import { useState } from 'react';
import ButtonX from './componets/ButtonX.jsx';
import HeaderFigure from './componets/HeaderFigure.jsx';
import Nav from './componets/navegation/Nav.jsx';
import TeilRight from './componets/TeilRight/TeilRight.jsx';
import { TITLES_OF_APP } from './constants/contants.js';
import './sass/App.scss'

function App() {
  const titleSite = TITLES_OF_APP.TITLE_OF_SITE;
  const [toggleHeader, setToggleHeader] = useState(true);

  const toggleHeaderHandler = () => {
    setToggleHeader(prevToggleHeader => !prevToggleHeader);
  };

  return (
    <div className="contCentral">
      <ButtonX toggleHeader={toggleHeader} setToggleHeader={toggleHeaderHandler} />
      <HeaderFigure toggleHeader={toggleHeader} />
      <Nav titleSite={titleSite} />
      <main className="containerMain container-fluid d-flex justify-content-start align-items-start p-0 m-0 graycolor500">
        <section className='container-fluid d-flex flex-column justify-content-center align-items-center m-0 p-1 bg-body'>
          <TeilRight />
        </section>
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

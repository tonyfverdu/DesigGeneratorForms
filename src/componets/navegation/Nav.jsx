// import { useNavigate } from 'react-router-dom'
import Navigation from './Navigation.jsx'
import '../../sass/componentSass/navegation/Nav.scss'


// Define the Nav component
function Nav() {
  // const navigate = useNavigate()

  // Render the navigation bar and logos
  return (
    <div className="containerMenu d-flex flex-row justify-content-start align-item-end">
      <div className="decriptionMenu">
        <nav className="navBar">
          <Navigation />
        </nav>
        <figure className="figureContainer">
          <img
            id="imgLogo1"
            src="../src/assets/logos/isc2Logo.jpeg"
            alt="Logo ISC 2"
          />
          <img
            id="imgLogo2"
            src="../src/assets/logos/logoISC.jpg"
            alt="Logo ISC 1"
          />
        </figure>
      </div>
    </div>
  );
}

export default Nav;

/*
    This code snippet defines a JavaScript function called "Nav". It returns a JSX element that represents a navigation component. 
    The component has a container with a className of "containerMenu" and contains a nav element with a className of "navBar". 
    Inside the nav element, there is a Navegation component. Below the nav element, there is a figure element which contains two img elements 
    with different src and alt attributes.
*/

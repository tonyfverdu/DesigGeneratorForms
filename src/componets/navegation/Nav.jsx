// import { useNavigate } from 'react-router-dom'
import Navegation from './Navegation.jsx'
import '../../sass/componentSass/navegation/Nav.scss'


function Nav() {
  // const navigate = useNavigate()

  return (
    <div className="containerMenu d-flex flex-row justify-content-start align-item-end">
      <div className="decriptionMenu">
        <nav className="navBar">
          <Navegation />
        </nav>
        <figure className="figureContainer">
          <img id="imgLogo1" src="../src/assets/logos/isc2Logo.jpeg" alt="Logo ISC 2" />
          <img id="imgLogo2" src="../src/assets/logos/logoISC.jpg" alt="Logo ISC 1" />
        </figure>
      </div>
    </div >
  )
}

export default Nav;

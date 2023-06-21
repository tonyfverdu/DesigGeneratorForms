import React from 'react'
import ItemMenu from './ItemMenu.jsx'
import '../../sass/componentSass/navegation/Navegation.scss'

function Navegation() {
  const arrayItemsMenu = ['Home', 'Design', 'Generate', 'See', 'Read']

  return (
    <div className="menuNavegation">
      <ul className="ulNavBar">
        {
          arrayItemsMenu.map((item, index) => {
            return (
              <li key={index} className="linksNavbar">
                <span className="contItemMenu">
                  <ItemMenu
                    item={item}
                  />
                </span>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Navegation;
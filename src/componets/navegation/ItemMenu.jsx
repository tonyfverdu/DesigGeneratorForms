import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../sass/componentSass/navegation/ItemMenu.scss'


function ItemMenu({ item }) {
  return (
    <NavLink to={`/${item}`} className={({ isActive }) => (isActive ? 'activeClassMenu' : 'inactiveClassMenu')}>
      <span className="textItem container">{item}</span>
    </NavLink>
  )
}

export default ItemMenu
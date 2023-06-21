import React from 'react'
import { TbIcons } from 'react-icons/tb';
import '../../sass/componentSass/icons/IconButton.scss'

function IconButtonIcons() {
  return (
    <div className="col p-0 m-0">
      <button type="button" className="iconButton">
        <TbIcons />
      </button>
    </div>
  )
}

export default IconButtonIcons;
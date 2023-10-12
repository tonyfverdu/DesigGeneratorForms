import { NavLink } from 'react-router-dom'
import '../../sass/componentSass/navegation/ItemMenu.scss'


/**
 * Renders a menu item for the given item.
 *
 * @param {Object} item - The item to render the menu item for.
 * @return {JSX.Element} The rendered menu item.
 */
function ItemMenu({ item }) {
  const activeClassName = item === window.location.pathname.replace('/', '') ? 'activeClassMenu' : 'inactiveClassMenu';
  
  return (
    <NavLink to={`/${item}`} className={activeClassName}>
      <span className="textItem container">{item}</span>
    </NavLink>
  );
}

export default ItemMenu;

/*
    This code defines a functional component called "ItemMenu" that renders a navigation link (NavLink) with a text item inside. 
    The "activeClassName" variable is determined based on whether the item prop matches the current URL path. If they match, the 
    class "activeClassMenu" is applied; otherwise, the class "inactiveClassMenu" is applied.

    Note: I extracted the logic to determine the "activeClassName" into a separate variable to improve readability and performance. 
          The "activeClassName" is now determined by comparing the item prop with the current pathname obtained from 
          window.location.
*/
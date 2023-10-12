import ItemMenu from './ItemMenu.jsx'
import '../../sass/componentSass/navegation/Navigation.scss'

function Navigation() {
  const arrayItemsMenu = ['Home', 'View', 'Design', 'Result'];

  const menuItems = arrayItemsMenu.map(item => (
    <li key={item} className="linksNavbar">
      <span className="contItemMenu">
        <ItemMenu item={item} />
      </span>
    </li>
  ));

  return (
    <div className="menuNavigation">
      <ul className="ulNavBar">{menuItems}</ul>
    </div>
  );
}

export default Navigation;

/*
    This code defines a "Navigation" component that renders a navigation menu. 
    It creates an "array of menu items", maps over the array to create a list of "li elements",
    with each item rendered inside an ItemMenu component. 
    
    The list is then rendered inside a div with a class of menuNavigation.
*/
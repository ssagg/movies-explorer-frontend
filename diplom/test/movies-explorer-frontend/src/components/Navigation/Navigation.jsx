import "./navigation.scss";
import { Link, NavLink } from "react-router-dom";
function Navigation({ onMenuClick }) {
  return (
    <nav className='navigation'>
      <Link className='navigation__logo' to='/'></Link>
      {/* <div className='navigation__logo'></div> */}
      <div className='navigation__menu'>
        <NavLink
          to='/movies'
          className={({ isActive }) =>
            `${isActive ? "navigation__link_active" : "navigation__link"}`
          }
        >
          Фильмы
        </NavLink>

        <NavLink
          to='/saved-movies'
          className={({ isActive }) =>
            `${isActive ? "navigation__link_active" : "navigation__link"}`
          }
        >
          Сохраненные фильмы
        </NavLink>
      </div>
      <div className='navigation__burger-menu' onClick={onMenuClick}></div>
      <div className='navigation__profile'>
        <Link className='navigation__button' to='/profile'>
          <p className='navigation__text'>Аккаунт</p>
        </Link>
        <div className='navigation__profile-logo'>
          <div className='navigation__profile-logo-image'></div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;

import { useEffect } from "react";
import "./navigation.scss";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../images/logo.svg";
function Navigation({ onMenuClick }) {
  const location = useLocation();
  useEffect(() => {
    console.log("location form", location);
  }, [location]);

  return (
    <nav className='navigation'>
      <Link to='/'>
        <img src={logo} alt='Логотип' className='navigation__logo' />
      </Link>
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
          state={"test state"}
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

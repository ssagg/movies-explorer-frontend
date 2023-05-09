import "./Header.scss";
import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { LoginDataContext } from "../Contexts/LoginDataContext";
import Navigation from "../Navigation/Navigation";
import logo from "../../images/logo.svg";

function Header({ onMenuClick }) {
  const location = useLocation();
  const loggedIn = useContext(LoginDataContext);
  let headerClass = `${
    // loggedIn ||
    location.pathname === "/signin" || location.pathname === "/signup"
      ? "header header_hide"
      : "header"
  }`;
  if (loggedIn) {
    headerClass = "header header_back";
  }

  return (
    <header className={headerClass}>
      {loggedIn ? (
        ((headerClass = "header_back"),
        (<Navigation onMenuClick={onMenuClick} />))
      ) : (
        // location.pathname === "/sign-in" ?
        <>
          <Link to='/'>
            <img src={logo} alt='Логотип' className='header__logo' />
          </Link>

          <div className='header__menu'>
            <Link className='header__link' to='signup'>
              Регистрация
            </Link>

            <div className='header__link-button'>
              <Link className='header__link' to='signin'>
                Войти
              </Link>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
export default Header;

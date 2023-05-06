import "./Header.scss";
import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className='header'>
      <div className='header__logo'></div>
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
    </div>
  );
}

export default Header;

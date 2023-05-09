import "./Footer.scss";
import React, { useContext } from "react";
import { LoginDataContext } from "../Contexts/LoginDataContext";
import { useLocation } from "react-router-dom";

function Footer() {
  const loggedIn = useContext(LoginDataContext);
  const date = new Date().getFullYear();
  const location = useLocation();
  const footerClass = `${
    !loggedIn && location.pathname !== "/" && "footer footer_hide"
  }`;
  return (
    <footer className={footerClass}>
      <h1 className='footer__title'>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h1>
      <div className='footer__bottom-block'>
        <p className='footer__copyright'>&copy; {date}</p>
        <div className='footer__links'>
          <a
            className='footer__link'
            target='_blank'
            href='https://practicum.yandex.ru/'
          >
            Яндекс.Практикум
          </a>
          <a
            className='footer__link'
            target='_blank'
            href='https://github.com/ssagg/'
          >
            Github
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

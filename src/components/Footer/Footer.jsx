import "./Footer.scss";

function Footer() {
  const date = new Date().getFullYear();
  return (
    <section className='footer'>
      <h1 className='footer__title'>
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h1>
      <div className='footer__bottom-block'>
        <p className='footer__copyright'>&copy; {date}</p>
        <div className='footer__links'>
          <a className='footer__link' href='https://practicum.yandex.ru/'>
            Яндекс.Практикум
          </a>
          <a className='footer__link' href='https://github.com/ssagg/'>
            Github
          </a>
        </div>
      </div>
    </section>
  );
}

export default Footer;

import "./Portfolio.scss";

function Portfolio() {
  return (
    <section className='portfolio'>
      <h3 className='portfolio__title'>Портфолио</h3>
      <ul className='portfolio__links'>
        <li className='portfolio__link'>
          <a
            className='portfolio__link-a'
            href='https://ssagg.github.io/russian-travel_GH_pages_test/'
            target='_blank'
          >
            Статичный сайт
            <div className='portfolio__logo'>↗</div>
          </a>
        </li>
        <li className='portfolio__link'>
          <a
            className='portfolio__link-a'
            href='https://ssagg.github.io/russian-travel_GH_pages_test/'
            target='_blank'
          >
            {" "}
            Адаптивный сайт <div className='portfolio__logo'>↗</div>
          </a>
        </li>
        <li className='portfolio__link'>
          <a
            className='portfolio__link-a'
            href='https://ssagg.github.io/mesto-react/'
            target='_blank'
          >
            Одностраничное приложение <div className='portfolio__logo'>↗</div>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;

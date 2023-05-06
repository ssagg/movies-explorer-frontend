import "./AboutMe.scss";
function AboutMe() {
  return (
    <section className='about-me' id='test'>
      <h1 className='about-me__title'>Студент</h1>
      <div className='about-me__info'>
        <div className='about-me__texts'>
          <h1 className='about-me__name'>Александр</h1>
          <h2 className='about-me__profession'>Фронтенд-разработчик, 30 лет</h2>
          <p className='about-me__about'>
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У
            меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
            бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
            Контур». После того, как прошёл курс по веб-разработке, начал
            заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>
          <p className='about-me__git'>Github</p>
        </div>
        <div className='about-me__photo'></div>
      </div>
    </section>
  );
}

export default AboutMe;

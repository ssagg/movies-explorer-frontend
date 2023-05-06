import "./AboutProject.scss";
function AboutProject() {
  return (
    <section className='about-project'>
      <h1 className='about-project__title'>О проекте</h1>
      <div className='about-project__info'>
        <div className='about-project__text'>
          <h2 className='about-project__header'>
            Дипломный проект включал 5 этапов
          </h2>
          <p className='about-project__about'>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className='about-project__text'>
          <h2 className='about-project__header'>
            На выполнение диплома ушло 5 недель
          </h2>
          <p className='about-project__about'>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className='about-project__timeline'>
        <div className='about-project__left'>1 неделя</div>
        <div className='about-project__right'>4 недели</div>
        <div className='about-project__subtitle'>Back-end</div>
        <div className='about-project__subtitle'>Front-end</div>
      </div>
    </section>
  );
}

export default AboutProject;

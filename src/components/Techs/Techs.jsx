import "./Techs.scss";
function Techs() {
  return (
    <section className='techs'>
      <h1 className='techs__title'>Технологии</h1>
      <div className='techs__info'>
        <div className='techs__texts'>
          <h1 className='techs__header'>7 технологий</h1>
          <h2 className='techs__about'>
            На курсе веб-разработки мы освоили технологии, которые применили в
            дипломном проекте.
          </h2>
          <div className='techs__buttons'>
            <p className='techs__button'>HTML</p>
            <p className='techs__button'>CSS</p>
            <p className='techs__button'>JS</p>
            <p className='techs__button'>React</p>
            <p className='techs__button'>Git</p>
            <p className='techs__button'>Express.js</p>
            <p className='techs__button'>mongoDB</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Techs;

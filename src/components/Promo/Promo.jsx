import "./Promo.scss";
import NavTab from "../NavTab/NavTab";
import Header from "../Header/Header";
function Promo() {
  return (
    <section className='promo'>
      <Header />
      <div className='promo__block'>
        <div className='promo__text'>
          <h1 className='promo__title'>
            Учебный проект студента факультета Веб-разработки.
          </h1>
          <h2 className='promo__subtitle'>
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </h2>
        </div>
        <div className='promo__logo'></div>
      </div>
      <NavTab />
      <div className='promo__separator'></div>
    </section>
  );
}

export default Promo;

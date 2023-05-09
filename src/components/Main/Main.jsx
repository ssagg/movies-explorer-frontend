import "./Main.scss";
import Promo from "../Promo/Promo";
import Footer from "../Footer/Footer";
import AboutMe from "../AboutMe/AboutMe";
import Techs from "../Techs/Techs";
import AboutProject from "../AboutProject/AboutProject";
import Portfolio from "../Portfolio/Portfolio";
import Header from "../Header/Header";
function Main() {
  return (
    <main>
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
    </main>
  );
}

export default Main;

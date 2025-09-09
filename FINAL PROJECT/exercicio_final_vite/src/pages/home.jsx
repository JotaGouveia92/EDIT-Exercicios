import ArtworksGrid from "../components/ArtworksGrid";
import Brands from "../components/brands";
import Footer from "../components/footer";
import Nav from "../components/nav";

export default function Home() {
  return (
    <>
      <Nav />

      <section className="header">
        <div className="wrapper">
          <div className="header__content">
            <h2 className="header__title">
              I'm a product designer & web developer enthusiast willing to
              <span className="header__color"> create great experiences</span>
            </h2>
            <a href="mailto:email@email.de" className="cta-01">
              Let's talk <i className="fas fa-arrow-right"></i>
            </a>
            <ul className="header__ctaLinks">
              <li>
                <a href="https://bento.me/joao-gouveia">BENTO</a>
              </li>
              <li>
                <a href="https://www.behance.net/joaogouveiawork">BEHANCE</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/jo%C3%A3o-queiros/">
                  LINKEDIN
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section
        className="infoNumbers"
        data-margin-top="l"
        data-margin-bottom="s"
      >
        <div className="wrapper">
          <div className="infoNumbers__content">
            <div className="infoNumbers__item">
              <h1 className="infoNumbers__item-title">+7</h1>
              <p className="infoNumbers__item-subtitle">Years of Experience</p>
            </div>
            <div className="infoNumbers__item">
              <h1 className="infoNumbers__item-title">+10</h1>
              <p className="infoNumbers__item-subtitle">Happy Clients</p>
            </div>
            <div className="infoNumbers__item">
              <h1 className="infoNumbers__item-title">+20</h1>
              <p className="infoNumbers__item-subtitle">Launched Campaigns</p>
            </div>
            <div className="infoNumbers__item">
              <h1 className="infoNumbers__item-title">+15</h1>
              <p className="infoNumbers__item-subtitle">Design Materials</p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="contentMedia"
        data-margin-top="l"
        data-margin-bottom="l"
      >
        <div className="wrapper grid">
          <div className="contentMedia__column">
            <h2 className="contentMedia__title">
              Building impactful digital experiences!
            </h2>
          </div>
          <div className="contentMedia__column">
            <p className="contentMedia__description">
              Iʼm a versatile, strategy-driven Product Designer with experience
              in UI design, wireframing, and prototyping. Iʼm passioned about
              designing human-centered digital experiences that connect brands
              and audiences. Always open to new challenges – say hello!
            </p>
          </div>
        </div>
      </section>

      <div className="wot" data-margin-bottom="m">
        <h2 className="wot__title">What I've been working so far</h2>
      </div>

      <ArtworksGrid />

      <div
        className="workList"
        data-columns="3"
        data-margin-top="m"
        data-margin-bottom="m"
      >
        <div className="wrapper">
          <ul className="workList__list">
            <li className="workList__item">
              <div className="workList__item-info">
                <h4 className="workList__item-title">McDonald's</h4>
                <p className="workList__item-date">May 5, 2024</p>
                <div className="workList__item-tags">
                  <span className="tag-01">UX / UI</span>
                  <span className="tag-01">Branding</span>
                </div>
              </div>
              <p className="workList__item-description">
                Far far away, behind the world mountains, far from the countries
                Vokalia and Consonantia, theresFar far away, behind the world
                mountains, far from the countries Vokalia.
              </p>
              <a href="" className="cta-03">
                View Project
              </a>
            </li>

            <li className="workList__item">
              <div className="workList__item-info">
                <h4 className="workList__item-title">Jogos Santa Casa</h4>
                <p className="workList__item-date">May 5, 2024</p>
                <div className="workList__item-tags">
                  <span className="tag-01">UX / UI</span>
                  <span className="tag-01">Branding</span>
                </div>
              </div>
              <p className="workList__item-description">
                Far far away, behind the world mountains, far from the countries
                Vokalia and Consonantia, theresFar far away, behind the world
                mountains, far from the countries Vokalia.
              </p>
              <a href="" className="cta-03">
                View Project
              </a>
            </li>

            <li className="workList__item">
              <div className="workList__item-info">
                <h4 className="workList__item-title">McDonalds</h4>
                <p className="workList__item-date">May 5, 2024</p>
                <div className="workList__item-tags">
                  <span className="tag-01">UX / UI</span>
                  <span className="tag-01">Branding</span>
                </div>
              </div>
              <p className="workList__item-description">
                Far far away, behind the world mountains, far from the countries
                Vokalia and Consonantia, theresFar far away, behind the world
                mountains, far from the countries Vokalia.
              </p>
              <a href="" className="cta-03">
                View Project
              </a>
            </li>
          </ul>
        </div>
      </div>

      <Brands />

      <div className="ctaBlock">
        <div className="wrapper">
          <p className="ctaBlock__description">Have an idea?</p>
          <h2 className="ctaBlock__title">
            Want to create something <mark>awesome?</mark>
          </h2>
          <a href="mailto:email@email.de" className="cta-01">
            Let's talk<i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>

      <Footer />
    </>
  );
}

import ArtworksGrid from "../components/artworksGrid";
import Brands from "../components/brands";
import Footer from "../components/footer";
import Header from "../components/Header";
import Nav from "../components/nav";
import WorkList from "../components/WorkList";

export default function Home() {
  return (
    <>
      <Nav />
      <Header />

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

      <WorkList />
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

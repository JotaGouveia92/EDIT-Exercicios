import Nav from "../components/nav";
import Footer from "../components/footer";
import Brands from "../components/brands";

export default function AboutMe() {
  return (
    <>
      <Nav />
      <section
        className="mainHeader"
        data-margin-top="l"
        data-margin-bottom="m"
      >
        <div className="wrapper grid">
          <div className="mainHeader__column">
            <div className="mainHeader__content-tags">
              <span className="tag-05">About me</span>
            </div>
            <h2 className="mainHeader__title">
              Innovative designer for a <mark>digital age</mark>
            </h2>
          </div>
          <div className="mainHeader__column">
            <p className="mainHeader__description">
              With over +7 years of experience, I specialize in creating
              intuitive and user-centered interfaces for a wide range of digital
              products and experiences. Far far away, behind the world
              mountains, far from the countries Vokalia and Consonantia, theres
              live the blind texts.
            </p>
          </div>
        </div>
      </section>

      <section className="simpleMedia">
        <div className="wrapper">
          <img src="images/Eu.jpg" alt="Sample Image" />
        </div>
      </section>

      <div className="workList" data-margin-top="m" data-margin-bottom="m">
        <div className="wrapper">
          <h2 className="workList__title">My Experience</h2>
          <ul className="workList__list"></ul>
        </div>
      </div>

      <section
        className="gridBrands"
        data-margin-top="s"
        data-margin-bottom="l"
      >
        <div className="gridBrands__content">
          <div className="gridBrands__img">
            <img src="images/01.png" alt="Sample Image" />
          </div>
          <div className="gridBrands__img">
            <img src="images/02.png" alt="Sample Image" />
          </div>
          <div className="gridBrands__img">
            <img src="images/03.png" alt="Sample Image" />
          </div>
          <div className="gridBrands__img">
            <img src="images/04.png" alt="Sample Image" />
          </div>
          <div className="gridBrands__img">
            <img src="images/05.png" alt="Sample Image" />
          </div>
          <div className="gridBrands__img">
            <img src="images/06.png" alt="Sample Image" />
          </div>
          <div className="gridBrands__img">
            <img src="images/07.png" alt="Sample Image" />
          </div>
          <div className="gridBrands__img">
            <img src="images/08.png" alt="Sample Image" />
          </div>
        </div>
      </section>

      <div className="ctaBlock">
        <div className="wrapper">
          <p className="ctaBlock__description">Have an idea?</p>
          <h2 className="ctaBlock__title">
            Let’s rock <mark>with me!</mark>
          </h2>
          <button className="cta-01">
            Let's talk<i className="fas fa-arrow-right"></i>
          </button>
        </div>
        <Footer />
      </div>
      <Brands />
      <Footer />
    </>
  );
}

import Nav from "../components/nav";
import Footer from "../components/footer";
import Brands from "../components/brands";

export default function Contact() {
  return (
    <>
      <Nav />
      <section className="header">
        <div className="wrapper">
          <div className="header__content">
            <h2 className="header__title">
              Say Hi!
              <span className="header__color">
                {" "}
                and tell me about your idea
              </span>
            </h2>
          </div>
        </div>
      </section>
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

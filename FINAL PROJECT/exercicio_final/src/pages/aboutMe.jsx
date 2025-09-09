import Nav from "../components/nav";
import Footer from "../components/footer";
import Brands from "../components/brands";
import WorkList from "../components/WorkList";
import MainHeader from "../components/MainHeader";
import SimpleMedia from "../components/SimpleMedia";

export default function AboutMe() {
  return (
    <>
      <Nav />
      <MainHeader />
      <SimpleMedia />
      <WorkList />
      <Brands />

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
      </div>

      <Footer />
    </>
  );
}

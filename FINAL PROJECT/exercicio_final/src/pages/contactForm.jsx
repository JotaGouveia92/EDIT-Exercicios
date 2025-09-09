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
      <Footer />
    </>
  );
}

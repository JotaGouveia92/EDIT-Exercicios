import Nav from "../components/nav";
import Footer from "../components/footer";
import ContactForm from "../components/ContactForm";

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
            <p>Have a nice works? Reach out and let's chat.</p>
          </div>
        </div>
      </section>
      <ContactForm />
      <Footer />
    </>
  );
}

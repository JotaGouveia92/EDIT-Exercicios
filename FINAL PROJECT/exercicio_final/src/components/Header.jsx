import CtaLink from "./CtaLink";

export default function Header() {
  return (
    <div data-margin-top="m">
      <section className="header">
        <div className="wrapper">
          <div className="header__content">
            <h2 className="header__title">
              I'm a product designer & web developer enthusiast willing to
              <span className="header__color"> create great experiences</span>
            </h2>

            <CtaLink
              text="Let's talk"
              to="/contactForm"
              variant="cta-01"
              icon="fa-arrow-right"
            />

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
    </div>
  );
}

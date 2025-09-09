export default function Header() {
  return (
    <div>
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
    </div>
  );
}

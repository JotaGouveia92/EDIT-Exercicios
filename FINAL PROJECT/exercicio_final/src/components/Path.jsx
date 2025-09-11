import CtaLink from "./CtaLink";

export default function Path() {
  return (
    <div
      className="path"
      data-margin-top="m"
      data-margin-bottom="m"
      data-columns="3"
    >
      <div className="wrapper">
        <ul className="path__list">
          <li className="path__item">
            <div className="path__item-info">
              <h4 className="path__item-title">McDonald's</h4>
              <p className="path__item-date">June 11, 2024</p>
              <div className="path__item-tags">
                <span className="tag-01">UX / UI</span>
                <span className="tag-01">Branding</span>
              </div>
            </div>
            <p className="path__item-description">
              To fight menu fatigue among Gen Z, McDonald’s launched “Mood for
              Mac,” an AI-powered app offering meal suggestions based on
              real-time emotions. Using facial recognition, it created a fun,
              mood-driven ordering experience. Personalized rewards and tech
              engagement boosted excitement and app usage.
            </p>
            <CtaLink
              text="See project"
              to="/contactForm"
              variant="cta-01"
              icon="fa-arrow-right"
            />
          </li>

          <li className="path__item">
            <div className="path__item-info">
              <h4 className="path__item-title">Jogos Santa Casa</h4>
              <p className="path__item-date">May 5, 2024</p>
              <div className="path__item-tags">
                <span className="tag-01">UX / UI</span>
                <span className="tag-01">Branding</span>
              </div>
            </div>
            <p className="path__item-description">
              The Santa Casa quiz campaign combined fun and education on social
              responsibility and its supported causes. With challenging
              questions and rewarding prizes, it boosted audience engagement.
              The initiative reinforced Santa Casa’s role in promoting positive
              community impact.
            </p>
            <CtaLink
              text="See project"
              to="/contactForm"
              variant="cta-01"
              icon="fa-arrow-right"
            />
          </li>

          <li className="path__item">
            <div className="path__item-info">
              <h4 className="path__item-title">McDonalds</h4>
              <p className="path__item-date">July 16, 2024</p>
              <div className="path__item-tags">
                <span className="tag-01">UX / UI</span>
                <span className="tag-01">Branding</span>
              </div>
            </div>
            <p className="path__item-description">
              The Big Arch campaign reimagined McDonald’s iconic golden arches
              as dynamic displays celebrating community and connection. Using
              innovative design and storytelling, it refreshed the brand’s
              presence. The campaign engaged audiences with a memorable visual
              experience.
            </p>
            <CtaLink
              text="See project"
              to="/contactForm"
              variant="cta-01"
              icon="fa-arrow-right"
            />
          </li>
        </ul>
      </div>
    </div>
  );
}

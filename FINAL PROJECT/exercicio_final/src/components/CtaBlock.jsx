import CtaLink from "../components/CtaLink";

export default function CtaBlock() {
  return (
    <div>
      <div className="ctaBlock">
        <div className="wrapper">
          <p className="ctaBlock__description">Have an idea?</p>
          <h2 className="ctaBlock__title">
            Want to create something <mark>awesome?</mark>
          </h2>
          <CtaLink
            text="Let's talk"
            to="/contactForm"
            variant="cta-01"
            icon="fa-arrow-right"
          />
        </div>
      </div>
    </div>
  );
}

import CtaLink from "./CtaLink";

export default function ContactForm() {
  return (
    <form className="form" data-margin-top="m" data-margin-bottom="m">
      <div className="form__field">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="Your full name" required />
      </div>

      <div className="form__field">
        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          placeholder="Write your e-mail"
          required
        />
      </div>

      <div className="form__field">
        <label htmlFor="phone">Phone Number</label>
        <input type="tel" id="phone" placeholder="Your phone number" required />
      </div>

      <div className="form__field">
        <label htmlFor="company">Company Name</label>
        <input type="text" id="company" placeholder="Which company" />
      </div>

      <div className="form__field">
        <label htmlFor="message">Message</label>
        <textarea id="message" placeholder="Tell me more" />
      </div>

      <div>
        <CtaLink
          text="Submit"
          to="/contactForm"
          variant="cta-01"
          icon="fa-arrow-right"
        />
      </div>
    </form>
  );
}

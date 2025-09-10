import CtaLink from "./CtaLink";

export default function ContactForm() {
  return (
    <div data-margin-top="m" data-margin-bottom="l">
      <form className="form">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="Your full name" required />

        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          placeholder="Write your e-mail"
          required
        />

        <label htmlFor="phone">Phone Number</label>
        <input type="tel" id="phone" placeholder="Your phone number" required />

        <label htmlFor="company">Company Name</label>
        <input type="text" id="company" placeholder="Which company" />

        <label htmlFor="message">Message</label>
        <textarea id="message" placeholder="Tell me more" />

        {/* <button type="submit" className="cta-01">
          Send Message
        </button> */}

        <div style={{ marginTop: "40px" }}>
          <CtaLink
            text="Send Message"
            to="/contactForm"
            variant="cta-03"
            icon="fa-arrow-right"
          />
        </div>
      </form>
    </div>
  );
}

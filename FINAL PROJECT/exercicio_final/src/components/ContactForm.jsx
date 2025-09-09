export default function ContactForm() {
  return (
    <div>
      <form className="form">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" placeholder="Your full name" required />

        <label htmlFor="email">Email Address</label>
        <input
          type="email"
          id="email"
          placeholder="Where can I reply?"
          required
        />

        <label htmlFor="phone">Phone Number</label>
        <input type="tel" id="phone" placeholder="Your phone number" required />

        <label htmlFor="company">Company Name</label>
        <input
          type="text"
          id="company"
          placeholder="Your company or website?"
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          placeholder="Tell me about your idea..."
          required
        />

        <button type="submit" className="submit">
          Send Message
        </button>
      </form>
    </div>
  );
}

const ContactSection: React.FC = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-heading">Contact Us</h2>
      <form className="contact-form">
        <div>
          <label htmlFor="name" className="contact-label">Full Name</label>
          <input
            type="text"
            id="name"
            className="contact-input"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="contact-label">Email</label>
          <input
            type="email"
            id="email"
            className="contact-input"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label htmlFor="message" className="contact-label">Message</label>
          <textarea
            id="message"
            rows={4}
            className="contact-textarea"
            placeholder="Write your message"
          />
        </div>
        <button
          type="submit"
          className="contact-button"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactSection;
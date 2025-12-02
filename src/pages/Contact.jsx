export default function Contact() {
  return (
    <div className="section">
      <h2 className="section-title">Contact Seva Trust Foundation</h2>
      <p className="section-subtitle">
        Reach out to us for donations, volunteering or collaborations.
      </p>

      <div className="form-box">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea rows="4" placeholder="Your Message"></textarea>
        <button>Send Message</button>
      </div>
    </div>
  );
}

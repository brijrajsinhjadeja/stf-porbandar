export default function Contact() {
  return (
    <div style={styles.container}>
      {/* LEFT FORM */}
      <div style={styles.formBox}>
        <h2 style={styles.title}>Get in Touch</h2>
        <p style={styles.subtitle}>
          We would love to hear from you. Send us a message!
        </p>

        <input style={styles.input} placeholder="Full Name" />
        <input style={styles.input} placeholder="Email Address" />
        <input style={styles.input} placeholder="Phone Number" />
        <textarea
          style={{ ...styles.input, height: "120px" }}
          placeholder="Your Message"
        />

        <button style={styles.button}>Send Message</button>
      </div>

      {/* RIGHT MAP + CONTACT */}
      <div style={styles.infoBox}>
        <iframe
          title="map"
          src="https://www.google.com/maps?q=Porbandar,Gujarat&output=embed"
          style={styles.map}
          allowFullScreen
          loading="lazy"
        />

        <div style={styles.contactInfo}>
          <h3>Contact Information</h3>
          <p>📍 Porbandar, Gujarat, India</p>
          <p>📞 +91 88660 90936 / +91 90335 63787</p>
          <p>✉️ sevatrustfoundationporbandar@outlook.com</p>
          <p>🌐 www.sevatrustfoundation.org</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexWrap: "wrap",
    background: "linear-gradient(120deg,#ff7a18,#2196f3,#2ecc71)",
    padding: "40px",
    gap: "30px",
  },
  formBox: {
    flex: 1,
    minWidth: "320px",
    background: "white",
    padding: "40px",
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
  },
  infoBox: {
    flex: 1,
    minWidth: "320px",
    background: "white",
    padding: "20px",
    borderRadius: "20px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  title: {
    fontSize: "32px",
    marginBottom: "10px",
    color: "#2196f3",
  },
  subtitle: {
    marginBottom: "25px",
    color: "#555",
  },
  input: {
    width: "100%",
    padding: "14px",
    marginBottom: "15px",
    borderRadius: "10px",
    border: "1px solid #ddd",
    fontSize: "15px",
    outline: "none",
  },
  button: {
    width: "100%",
    padding: "14px",
    borderRadius: "30px",
    border: "none",
    background: "linear-gradient(120deg,#ff7a18,#2ecc71)",
    color: "white",
    fontSize: "18px",
    cursor: "pointer",
    marginTop: "10px",
  },
  map: {
    width: "100%",
    height: "250px",
    borderRadius: "15px",
    border: "0",
  },
  contactInfo: {
    marginTop: "20px",
    lineHeight: "1.8",
    fontSize: "15px",
  },
};

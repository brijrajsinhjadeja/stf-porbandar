import { FaFacebook, FaInstagram, FaWhatsapp, FaEnvelope, FaPhoneAlt, FaYoutube, FaXRay, FaXbox } from "react-icons/fa";
import { FaX, FaXTwitter } from "react-icons/fa6";
  
export default function Footer() {
  return (
    <footer style={styles.footer}>
      {/* LEFT SECTION */}
      <div style={styles.left}>
        <h2 style={styles.logo}>Seva Trust Foundation</h2>
        <p style={styles.text}>
          Dedicated to serving humanity through education,<br></br> health, and social welfare.
        </p>
      </div>

      {/* CENTER SECTION */}
      <div style={styles.center}>
        <h3 style={styles.heading}>Contact Us</h3>

        <p style={styles.item}>
          <FaPhoneAlt /> +91 88660 90936 / +91 90335 63787
        </p>

        <p style={styles.item}>
          <FaEnvelope /> sevatrustfoundationporbandar@outlook.com
        </p>

        <p style={styles.item}>
          Porbandar, Gujarat, India
        </p>
      </div>

      {/* RIGHT SECTION */}
      <div style={styles.right}>
        <h3 style={styles.heading}>Follow Us</h3>

        <div style={styles.socialIcons}>
          <a href="https://x.com/stf_por" target="_blank" style={styles.icon}>
            <FaXTwitter/>
          </a>

          <a href="https://www.instagram.com/stf_por/" target="_blank" style={styles.icon}>
            <FaInstagram />
          </a>

          <a href="https://www.youtube.com/@stf_por" target="_blank" style={styles.icon}>
            <FaYoutube />
          </a>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div style={styles.bottom}>
        © {new Date().getFullYear()} Seva Trust Foundation | All Rights Reserved
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    background: "linear-gradient(135deg, #ff9800, #2196f3, #4caf50)",
    color: "#fff",
    padding: "50px 20px 10px",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    position: "relative",
  },

  left: {
    flex: "1",
    minWidth: "250px",
    marginBottom: "20px",
    
  },

  center: {
    flex: "1",
    minWidth: "250px",
    marginBottom: "20px",
  },

  right: {
    flex: "1",
    minWidth: "250px",
    marginBottom: "20px",
  },

  logo: {
    fontSize: "22px",
    fontWeight: "bold",
  },

  heading: {
    fontSize: "18px",
    marginBottom: "10px",
    color: "#ffeb3b",
  },

  text: {
    fontSize: "14px",
    lineHeight: "1.6",
  },

  item: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "8px",
    fontSize: "14px",
  },

  socialIcons: {
    display: "flex",
    gap: "20px",
    fontSize: "22px",
  },

  icon: {
    color: "#fff",
    transition: "0.3s",
  },  

  bottom: {
    width: "100%",
    borderTop: "1px solid rgba(48, 22, 22, 0.3)",
    textAlign: "center",
    marginTop: "30px",
    paddingTop: "10px",
    fontSize: "13px",
  },
};

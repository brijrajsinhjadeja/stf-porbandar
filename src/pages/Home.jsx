export default function Home() {
  
  const donations = JSON.parse(localStorage.getItem("donations")) || [];
  const total = donations.reduce((sum, d) => sum + d.amount, 0);

  return (
    
    <>
      {/* HERO */}
      <div className="hero"  >
        
        <h1>Seva Trust Foundation</h1>
        <p>
          Empowering lives through education, healthcare, food security,
          women empowerment and social development across India.
        </p>
        <button>Support Our Cause</button>
      </div>

      {/* CAUSES */}
      <div className="section">
        <h2 className="section-title">What We Do</h2>
        <p className="section-subtitle">
          We work in multiple sectors to ensure overall development of
          underprivileged communities.
        </p>

        <div className="card-grid">
          <div className="card">
            <h3>Education</h3>
            <p>Free education programs for poor and rural children.</p>
          </div>

          <div className="card">
            <h3>Healthcare</h3>
            <p>Medical camps, free checkups, and health awareness.</p>
          </div>

          <div className="card">
            <h3>Food Relief</h3>
            <p>Monthly ration and nutrition support to needy families.</p>
          </div>
        </div>
      </div>

      {/* HOW IT WORKS */}
      <div className="section">
        <h2 className="section-title">How You Can Help</h2>
        <p className="section-subtitle">
          A few simple steps can change many lives through Seva Trust Foundation.
        </p>

        <div className="info-box">
          <div className="info-item">
            <h4>1. Donate</h4>
            <p>Contribute any amount securely to support our projects.</p>
          </div>

          <div className="info-item">
            <h4>2. Volunteer</h4>
            <p>Join our team in field work and social programs.</p>
          </div>

          <div className="info-item">
            <h4>3. Transform Lives</h4>
            <p>Your support directly helps families and children in need.</p>
          </div>
        </div>
      </div>
    </>
  );
}

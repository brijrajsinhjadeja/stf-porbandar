const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: "20px",
  marginTop: "20px",
};

const card = {
  backgroundColor: "#f5f5f5",
  padding: "20px",
  borderRadius: "8px",
  textAlign: "center",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
};

const img = {
  width: "120px",
  height: "120px",
  borderRadius: "50%",
  objectFit: "cover",
  marginBottom: "10px",
};

export default function About() {
  return (
    <>
    
      {/* ABOUT INTRO */}
      <div className="section">
        <h2 className="section-title">About Seva Trust Foundation</h2>
        <p className="section-subtitle">
          Seva Trust Foundation is a registered non-profit organization working
          for education, healthcare, food security and social upliftment.
          We believe in building a strong and self-reliant society.
        </p>

        <div className="card-grid">
          <div className="card">
            <h3>Our Mission</h3>
            <p>
              To empower underprivileged communities through education,
              healthcare, skill development and women empowerment.
            </p>
          </div>

          <div className="card">
            <h3>Our Vision</h3>
            <p>
              A society where every individual has equal access to
              opportunities and basic necessities.
            </p>
          </div>

          <div className="card">
            <h3>Our Values</h3>
            <p>
              Transparency, Integrity, Compassion, Accountability and Service.
            </p>
          </div>
        </div>
      </div>

      {/* TEAM MEMBERS */}
<section style={{ marginTop: "60px" }}>
  <h2 style={{ color: "#4caf50", marginBottom: "20px" }}>
    Our Servants (Volunteers)
  </h2>

  {(() => {
    const volunteers = JSON.parse(localStorage.getItem("volunteers")) || [];

    if (volunteers.length === 0) {
      return <p>No volunteers added yet.</p>;
    }

    return (
      <div style={grid}>
        {volunteers.map((v) => (
          <div key={v.id} style={card}>
            <img src={v.image} alt={v.name} style={img} />
            <h3>{v.name}</h3>
            <p>{v.role}</p>
          </div>
        ))}
      </div>
    );
  })()}
  </section>


      {/* EVENTS / FUNCTIONS */}
      <div className="section">
        <h2 className="section-title">Our Events & Activities</h2>
        <p className="section-subtitle">
          A glimpse of our impactful programs and community activities.
        </p>

        <div className="event-grid">
          <div className="event-card">
            <h4>Free Medical Camp</h4>
            <p>
              Rural health camp providing free checkups and medicines.
            </p>
            <span>March 2025</span>
          </div>

          <div className="event-card">
            <h4>Education Kit Distribution</h4>
            <p>
              School bags, books and uniforms provided to poor children.
            </p>
            <span>January 2025</span>
          </div>

          <div className="event-card">
            <h4>Food Relief Drive</h4>
            <p>
              Food distribution for over 500 families during winter.
            </p>
            <span>December 2024</span>
          </div>
        </div>
      </div>
    </>
  );
}


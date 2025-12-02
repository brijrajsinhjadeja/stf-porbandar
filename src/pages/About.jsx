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
<div className="section">
  <h2 className="section-title">Our Members</h2>
  <p className="section-subtitle">
    The dedicated people working behind Seva Trust Foundation.
  </p>

  <div className="team-grid">
    {JSON.parse(localStorage.getItem("members") || "[]").map((m) => (
      <div className="member-card" key={m.id}>
        <img src={m.photo} className="member-photo" />
        <h4>{m.name}</h4>
        <p>{m.role}</p>
      </div>
        ))}
  </div>
</div>


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


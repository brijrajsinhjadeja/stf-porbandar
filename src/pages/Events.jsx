export default function Events() {
  const events = JSON.parse(localStorage.getItem("events")) || [];

  return (
    <div className="section">
      <h2 className="section-title">Our Events & Functions</h2>
      <p className="section-subtitle">
        Community programs and social impact activities
      </p>

      <div className="event-grid">
        {events.map((e) => (
          <div className="event-card" key={e.id}>
            <img
              src={e.photo}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "12px",
                marginBottom: "15px",
              }}
            />

            <h4>{e.title}</h4>
            <p>{e.desc}</p>
            <span>{e.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
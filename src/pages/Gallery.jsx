export default function Gallery() {
  const images = JSON.parse(localStorage.getItem("gallery")) || [];

  return (
    <div className="section">
      <h2 className="section-title">Our Gallery</h2>
      <p className="section-subtitle">Moments from our social work</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "25px",
        }}
      >
        {images.map((img) => (
          <img
            key={img.id}
            src={img.photo}
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              borderRadius: "16px",
              boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
            }}
          />
        ))}
      </div>
    </div>
  );
}

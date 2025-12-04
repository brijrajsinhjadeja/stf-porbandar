import { useNavigate } from "react-router-dom";
 // optional background image

export default function Home() {
  const navigate = useNavigate();

   return (
    <div
      style={{
        minHeight: "90vh",
        background: "linear-gradient(120deg, #ff9800, #2196f3, #4caf50)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px",
        color: "white",
      }}
    >
      <div style={{ maxWidth: "700px", textAlign: "center" }}>
        <h1 style={{ fontSize: "48px", marginBottom: "20px" }}>
          Seva Trust Foundation
        </h1>

        <p style={{ fontSize: "18px", lineHeight: "1.7", marginBottom: "30px" }}>
          We are dedicated to serving humanity through education, healthcare,
          social welfare, and disaster relief. Our mission is to uplift underprivileged
          communities and create a future filled with hope, dignity, and opportunity.
        </p>

        <button
          onClick={() => navigate("/user/donate")}
          style={{
            background: "#ff5722",
            color: "white",
            border: "none",
            padding: "14px 30px",
            fontSize: "18px",
            borderRadius: "30px",
            cursor: "pointer",
            boxShadow: "0 6px 15px rgba(0,0,0,0.3)",
          }}
        >
          ❤️ Donate Now
        </button>
      </div>
    </div>
  );
}

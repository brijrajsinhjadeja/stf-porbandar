export default function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(90deg, #0f4c81, #1fbf75)",
        color: "white",
        textAlign: "center",
        padding: "20px",
        marginTop: 40,
      }}
    >
      <p style={{ margin: 0 }}>
        © {new Date().getFullYear()} Seva Trust Foundation. All Rights Reserved.
      </p>
    </footer>
  );
}

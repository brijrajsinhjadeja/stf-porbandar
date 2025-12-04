import { useEffect, useState } from "react";

export default function Volunteers() {
  const [volunteers, setVolunteers] = useState([]);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [image, setImage] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("volunteers");
    if (saved) setVolunteers(JSON.parse(saved));
  }, []);

  const saveVolunteers = (data) => {
    setVolunteers(data);
    localStorage.setItem("volunteers", JSON.stringify(data));
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => setImage(reader.result);
    reader.readAsDataURL(file);
  };

  const addVolunteer = () => {
    if (!name || !role  || !image) {
      alert("All fields are required");
      return;
    }

    const newVolunteer = {
      id: Date.now(),
      name,
      role,
      image,
    };

    const updated = [...volunteers, newVolunteer];
    saveVolunteers(updated);

    setName("");
    setRole("");
    setImage(null);
  };

  const deleteVolunteer = (id) => {
    const updated = volunteers.filter((v) => v.id !== id);
    saveVolunteers(updated);
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Manage Volunteers (Our Servants)</h1>

      {/* ADD FORM */}
      <div style={formBox}>
        <input placeholder="Volunteer Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input placeholder="Role (Helper, Medical, Event, etc.)" value={role} onChange={(e) => setRole(e.target.value)} />
        <input type="file" accept="image/*" onChange={handleImage} />
        <button onClick={addVolunteer}>Add Volunteer</button>
      </div>

      {/* VOLUNTEERS LIST */}
      <div style={grid}>
        {volunteers.map((v) => (
          <div key={v.id} style={card}>
            <img src={v.image} alt={v.name} style={img} />
            <h3>{v.name}</h3>
            <p>{v.role}</p>
            <button onClick={() => deleteVolunteer(v.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

/* STYLES */
const formBox = {
  background: "#fff",
  padding: "20px",
  borderRadius: "10px",
  maxWidth: "400px",
  marginBottom: "30px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  display: "flex",
  flexDirection: "column",
  gap: "10px"
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: "20px"
};

const card = {
  background: "#f5f5f5",
  padding: "15px",
  borderRadius: "10px",
  textAlign: "center"
};

const img = {
  width: "100%",
  height: "180px",
  objectFit: "cover",
  borderRadius: "8px"
};

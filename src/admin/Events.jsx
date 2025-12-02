import { useEffect, useState } from "react";

export default function Events() {
  const [events, setEvents] = useState([]);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [desc, setDesc] = useState("");
  const [photo, setPhoto] = useState("");

  // LOAD EVENTS
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("events")) || [];
    setEvents(saved);
  }, []);

  const saveToStorage = (data) => {
    localStorage.setItem("events", JSON.stringify(data));
  };

  // IMAGE PICKER
  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setPhoto(reader.result); // Base64
    };
    reader.readAsDataURL(file);
  };

  // ADD EVENT
  const addEvent = () => {
    if (!title || !date || !desc || !photo) {
      alert("All fields required");
      return;
    }

    const newEvent = {
      id: Date.now(),
      title,
      date,
      desc,
      photo,
    };

    const updated = [...events, newEvent];
    setEvents(updated);
    saveToStorage(updated);

    setTitle("");
    setDate("");
    setDesc("");
    setPhoto("");
  };

  // DELETE EVENT
  const deleteEvent = (id) => {
    const updated = events.filter((e) => e.id !== id);
    setEvents(updated);
    saveToStorage(updated);
  };

  return (
    <div>
      <h2>Manage Events & Functions</h2>

      {/* ADD FORM */}
      <div className="form-box" style={{ marginBottom: "30px" }}>
        <input
          placeholder="Event Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        <textarea
          placeholder="Event Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />

        <input type="file" accept="image/*" onChange={handleImage} />

        {photo && (
          <img
            src={photo}
            width="120"
            style={{ marginTop: "10px", borderRadius: "10px" }}
          />
        )}

        <button onClick={addEvent}>Add Event</button>
      </div>

      {/* EVENTS TABLE */}
      <table width="100%" border="1" cellPadding="10">
        <thead>
          <tr style={{ background: "#0a5c36", color: "white" }}>
            <th>Image</th>
            <th>Title</th>
            <th>Date</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {events.map((e) => (
            <tr key={e.id}>
              <td>
                <img src={e.photo} width="80" />
              </td>
              <td>{e.title}</td>
              <td>{e.date}</td>
              <td>{e.desc}</td>
              <td>
                <button
                  onClick={() => deleteEvent(e.id)}
                  style={{
                     background: "white",
    padding: 30,
    borderRadius: 18,
    boxShadow: "0 12px 35px rgba(0,0,0,0.15)",
    animation: "fadeUp 0.5s ease",
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

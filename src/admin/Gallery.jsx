import { useEffect, useState } from "react";

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [photo, setPhoto] = useState("");

  // LOAD IMAGES
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("gallery")) || [];
    setImages(saved);
  }, []);

  // SAVE TO STORAGE
  const saveToStorage = (data) => {
    localStorage.setItem("gallery", JSON.stringify(data));
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

  // ADD IMAGE
  const addImage = () => {
    if (!photo) {
      alert("Please select an image");
      return;
    }

    const newImage = {
      id: Date.now(),
      photo,
    };

    const updated = [...images, newImage];
    setImages(updated);
    saveToStorage(updated);
    setPhoto("");
  };

  // DELETE IMAGE
  const deleteImage = (id) => {
    const updated = images.filter((img) => img.id !== id);
    setImages(updated);
    saveToStorage(updated);
  };

  return (
    <div>
      <h2>Gallery Management</h2>

      {/* UPLOAD BOX */}
      <div className="form-box" style={{ marginBottom: "30px" }}>
        <input type="file" accept="image/*" onChange={handleImage} />

        {photo && (
          <img
            src={photo}
            width="120"
            style={{
               width: "100%",
  borderRadius: 14,
  boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
  transition: "0.3s",
            }}
          />
        )}

        <button onClick={addImage}>Upload Image</button>
      </div>

      {/* IMAGE GRID */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "20px" }}>
        {images.map((img) => (
          <div key={img.id} style={{ position: "relative" }}>
            <img
              src={img.photo}
              width="100%"
              style={{ borderRadius: "12px", height: "180px", objectFit: "cover" }}
            />
            <button
              onClick={() => deleteImage(img.id)}
              style={{
                position: "absolute",
                top: "8px",
                right: "8px",
                background: "red",
                color: "white",
                border: "none",
                padding: "5px 10px",
                cursor: "pointer",
                 display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(15px, 1fr))",
      gap: 20,
      marginTop: 25,
              }}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

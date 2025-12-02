import { useState } from "react";

export default function Donate() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  const submitDonation = () => {
    if (!name || !phone || !amount) {
      alert("Name, Phone and Amount are required");
      return;
    }

    const newDonation = {
      id: Date.now(),
      name,
      phone,
      amount: Number(amount),
      message,
      date: new Date().toLocaleString(),
      source: "Website User",
    };

    const existing = JSON.parse(localStorage.getItem("donations")) || [];
    const updated = [...existing, newDonation];

    localStorage.setItem("donations", JSON.stringify(updated));

    alert("Thank you for your donation!");

    setName("");
    setPhone("");
    setAmount("");
    setMessage("");
  };

  return (
    <div className="section">
      <h2 className="section-title">Make a Donation</h2>
      <p className="section-subtitle">
        Your small help can change many lives
      </p>

      <div className="form-box" style={{ maxWidth: "450px", margin: "auto" }}>
        <input
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Mobile Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <input
          type="number"
          placeholder="Donation Amount ₹"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <textarea
          placeholder="Message (Optional)"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button onClick={submitDonation}>Donate Now</button>
      </div>
    </div>
  );
}

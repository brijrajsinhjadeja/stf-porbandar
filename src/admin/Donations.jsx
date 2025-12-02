import { useEffect, useState } from "react";

export default function Donations() {
  const [donations, setDonations] = useState([]);

  // LOAD DONATIONS (ONLY FROM USERS)
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("donations")) || [];
    setDonations(saved);
  }, []);

  // DELETE DONATION (ADMIN ONLY)
  const deleteDonation = (id) => {
    const updated = donations.filter((d) => d.id !== id);
    setDonations(updated);
    localStorage.setItem("donations", JSON.stringify(updated));
  };

  // TOTAL AMOUNT
  const totalAmount = donations.reduce((sum, d) => sum + d.amount, 0);

  return (
    <div>
      <h2>User Donation Records</h2>

      <h3 style={{ color: "#0a5c36", marginBottom: "20px" }}>
        Total Collection: ₹ {totalAmount}
      </h3>

      {/* DONATIONS TABLE (VIEW ONLY) */}
      <table width="100%" border="1" cellPadding="10">
        <thead>
          <tr style={{ background: "#0a5c36", color: "white" }}>
            <th>Name</th>
            <th>Phone</th>
            <th>Amount</th>
            <th>Message</th>
            <th>Date</th>
            <th>Source</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {donations.length === 0 ? (
            <tr>
              <td colSpan="7" style={{ textAlign: "center" }}>
                No donations yet
              </td>
            </tr>
          ) : (
            donations.map((d) => (
              <tr key={d.id}>
                <td>{d.name}</td>
                <td>{d.phone}</td>
                <td>₹ {d.amount}</td>
                <td>{d.message}</td>
                <td>{d.date}</td>
                <td>{d.source}</td>
                <td>
                  <button
                    onClick={() => deleteDonation(d.id)}
                    style={{
 background: "white",
    padding: 30,
    borderRadius: 18,
    boxShadow: "0 12px 35px rgba(0,0,0,0.15)",
    animation: "fadeUp 0.5s ease",   
                       color: "white",
                      border: "none",
                      padding: "6px 10px",
                      cursor: "pointer",
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

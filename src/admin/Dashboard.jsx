// src/admin/Dashboard.jsx
import React, { useMemo } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const COLORS = ["#0a5c36", "#ffae00", "#0077b6", "#ff4d4f", "#00b894"];

function formatDateKey(dateStr) {
  // dateStr is like new Date().toLocaleString() or toLocaleDateString()
  const d = new Date(dateStr);
  if (isNaN(d)) return dateStr;
  // return YYYY-MM-DD for consistent grouping
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export default function Dashboard() {
  // read data from localStorage
  const donations = JSON.parse(localStorage.getItem("donations") || "[]");
  const members = JSON.parse(localStorage.getItem("members") || "[]");
  const events = JSON.parse(localStorage.getItem("events") || "[]");
  const gallery = JSON.parse(localStorage.getItem("gallery") || "[]");

  // total donations amount
  const totalAmount = donations.reduce((s, d) => s + (Number(d.amount) || 0), 0);

  // total counts
  const totalMembers = members.length;
  const totalEvents = events.length;
  const totalImages = gallery.length;
  const totalDonations = donations.length;

  // prepare donations per day (line chart)
  const donationsByDate = useMemo(() => {
    const map = {};
    donations.forEach((d) => {
      const key = formatDateKey(d.date || d.createdAt || new Date().toString());
      map[key] = (map[key] || 0) + (Number(d.amount) || 0);
    });
    // sort keys ascending
    const sorted = Object.keys(map)
      .sort()
      .map((k) => ({ date: k, amount: map[k] }));
    return sorted;
  }, [donations]);

  // prepare monthly totals (bar chart) - group by YYYY-MM
  const donationsByMonth = useMemo(() => {
    const map = {};
    donations.forEach((d) => {
      const raw = new Date(d.date || d.createdAt || new Date().toString());
      if (isNaN(raw)) return;
      const key = `${raw.getFullYear()}-${String(raw.getMonth() + 1).padStart(2, "0")}`;
      map[key] = (map[key] || 0) + (Number(d.amount) || 0);
    });
    return Object.keys(map)
      .sort()
      .map((k) => ({ month: k, amount: map[k] }));
  }, [donations]);

  // source breakdown pie chart
  const sourceBreakdown = useMemo(() => {
    const map = {};
    donations.forEach((d) => {
      const src = d.source || "Website";
      map[src] = (map[src] || 0) + (Number(d.amount) || 0);
    });
    return Object.keys(map).map((k, i) => ({ name: k, value: map[k], color: COLORS[i % COLORS.length] }));
  }, [donations]);

  // top donors (sorted by amount)
  const topDonors = useMemo(() => {
    const map = {};
    donations.forEach((d) => {
      const name = d.name || "Anonymous";
      map[name] = (map[name] || 0) + (Number(d.amount) || 0);
    });
    return Object.entries(map)
      .map(([name, amount]) => ({ name, amount }))
      .sort((a, b) => b.amount - a.amount)
      .slice(0, 8);
  }, [donations]);

  return (
    <div>
      <h2>Admin Dashboard</h2>

      {/* KPI row */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16, marginTop: 20 }}>
        <div style={kpiCardStyle}>
          <h4>Total Donations</h4>
          <p style={{ fontSize: 20, fontWeight: 700 }}>₹ {totalAmount.toLocaleString()}</p>
          <small>{totalDonations} donations</small>
        </div>

        <div style={kpiCardStyle}>
          <h4>Members</h4>
          <p style={{ fontSize: 20, fontWeight: 700 }}>{totalMembers}</p>
          <small>Active team members</small>
        </div>

        <div style={kpiCardStyle}>
          <h4>Events</h4>
          <p style={{ fontSize: 20, fontWeight: 700 }}>{totalEvents}</p>
          <small>Past & upcoming</small>
        </div>

        <div style={kpiCardStyle}>
          <h4>Gallery Images</h4>
          <p style={{ fontSize: 20, fontWeight: 700 }}>{totalImages}</p>
          <small>Photos uploaded</small>
        </div>
      </div>

      {/* charts area */}
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 20, marginTop: 30 }}>
        {/* Left: Line + Bar */}
        <div style={{ background: "white", padding: 16, borderRadius: 10, boxShadow: boxShadow }}>
          <h3>Donations Over Time</h3>
          {donationsByDate.length === 0 ? (
            <p>No donation data yet.</p>
          ) : (
            <div style={{ height: 260 }}>
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={donationsByDate}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" tick={{ fontSize: 12 }} />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="amount" stroke="#0a5c36" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          )}

          <h3 style={{ marginTop: 20 }}>Monthly Totals</h3>
          {donationsByMonth.length === 0 ? (
            <p>No monthly data.</p>
          ) : (
            <div style={{ height: 200 }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={donationsByMonth}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="amount" fill="#ffae00" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>

        {/* Right: Pie + Top donors */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={{ background: "white", padding: 16, borderRadius: 10, boxShadow: boxShadow }}>
            <h3>Donation Source Breakdown</h3>
            {sourceBreakdown.length === 0 ? (
              <p>No data yet.</p>
            ) : (
              <div style={{ height: 250 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={sourceBreakdown}
                      dataKey="value"
                      nameKey="name"
                      innerRadius={40}
                      outerRadius={80}
                      paddingAngle={3}
                      label
                    >
                      {sourceBreakdown.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Legend />
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            )}
          </div>

          <div style={{ background: "white", padding: 16, borderRadius: 10, boxShadow: boxShadow, flex: 1 }}>
            <h3>Top Donors</h3>
            {topDonors.length === 0 ? (
              <p>No donors yet.</p>
            ) : (
              <table width="100%" style={{ borderCollapse: "collapse", marginTop: 8 }}>
                <thead>
                  <tr style={{ textAlign: "left", borderBottom: "1px solid #eee" }}>
                    <th style={{ padding: "8px 4px" }}>Donor</th>
                    <th style={{ padding: "8px 4px" }}>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {topDonors.map((d) => (
                    <tr key={d.name}>
                      <td style={{ padding: "8px 4px" }}>{d.name}</td>
                      <td style={{ padding: "8px 4px", fontWeight: 700 }}>₹ {d.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>

      {/* Raw recent donations */}
      <div style={{ marginTop: 30, background: "white", padding: 16, borderRadius: 10, boxShadow: boxShadow }}>
        <h3>Recent Donations</h3>
        {donations.length === 0 ? (
          <p>No donations yet.</p>
        ) : (
          <table width="100%" style={{ borderCollapse: "collapse", marginTop: 8 }}>
            <thead>
              <tr style={{ background: "#f6f6f6" }}>
                <th style={{ padding: 8 }}>Name</th>
                <th style={{ padding: 8 }}>Phone</th>
                <th style={{ padding: 8 }}>Amount</th>
                <th style={{ padding: 8 }}>Date</th>
                <th style={{ padding: 8 }}>Source</th>
                <th style={{ padding: 8 }}>Payment ID</th>
              </tr>
            </thead>
            <tbody>
              {[...donations].reverse().map((d) => (
                <tr key={d.id}>
                  <td style={{ padding: 8 }}>{d.name}</td>
                  <td style={{ padding: 8 }}>{d.phone}</td>
                  <td style={{ padding: 8, fontWeight: 700 }}>₹ {d.amount}</td>
                  <td style={{ padding: 8 }}>{d.date}</td>
                  <td style={{ padding: 8 }}>{d.source || "-"}</td>
                  <td style={{ padding: 8 }}>{d.payment_id || "-"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

// small style helpers
const kpiCardStyle = {
    background: "white",
    padding: 30,
    borderRadius: 18,
    boxShadow: "0 12px 35px rgba(0,0,0,0.15)",
    animation: "fadeUp 0.5s ease",
  
};

const boxShadow = "0 12px 30px rgba(0,0,0,0.06)";

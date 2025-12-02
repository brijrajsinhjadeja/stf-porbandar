import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const sendCode = () => {
    if (!email) return alert("Enter your email");

    const otp = Math.floor(100000 + Math.random() * 900000); // 6 digit code

    localStorage.setItem("resetEmail", email);
    localStorage.setItem("resetOTP", otp);

    console.log("OTP SENT TO EMAIL:", otp); // ✅ SIMULATED EMAIL
    alert("Verification code sent to your email (check console)");

    navigate("/verify-code");
  };

  return (
    <div className="page" style={{ maxWidth: 420 }}>
      <h1>Forgot Password</h1>
      <p>Enter your email to receive verification code.</p>

      <input
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button style={{ width: "100%" }} onClick={sendCode}>
        Send Code
      </button>
    </div>
  );
}

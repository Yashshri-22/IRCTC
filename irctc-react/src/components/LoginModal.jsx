import { useState, useEffect } from "react";
import banner from "../assets/banner2.png";

function LoginModal({ onClose }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState(false);
  const [error, setError] = useState("");

  // 🔥 Disable background scroll + ESC close
  useEffect(() => {
    document.body.style.overflow = "hidden";

    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [onClose]);

  const handleLogin = () => {
    setError("");

    // ✅ Empty check
    if (!username || !password) {
      setError("Please fill all fields");
      return;
    }

    // ✅ OTP logic
    if (otp) {
      alert("OTP sent successfully!");
      return;
    }

    // ✅ Get stored user
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      setError("No user found. Please register first.");
      return;
    }

    // ✅ Username/password check
    if (
      username !== storedUser.username ||
      password !== storedUser.password
    ) {
      setError("Invalid username or password");
      return;
    }

    // ✅ SUCCESS
    localStorage.setItem("isLoggedIn", "true");
    alert("Login Successful!");
    onClose();
  };

  return (
    // 🔥 OVERLAY CLICK CLOSE
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* 🔥 STOP PROPAGATION */}
      <div
        className="relative flex w-[850px] rounded bg-white p-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded bg-red-500 text-lg text-white transition hover:rotate-90 hover:bg-red-600"
        >
          ×
        </button>

        {/* LEFT SIDE */}
        <div className="flex-1 px-4">
          <h2 className="mb-6 inline-block border-b-2 border-[#2b467d] text-3xl font-bold text-[#2b467d]">
            Login
          </h2>

          <input
            type="text"
            placeholder="Username"
            className="mb-4 w-full rounded-lg border p-3 text-[#2b467d] transition focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="mb-4 w-full rounded-lg border p-3 text-[#2b467d] transition focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label className="mb-4 flex items-center text-[#2b467d]">
            <input
              type="checkbox"
              className="mr-2"
              checked={otp}
              onChange={() => setOtp(!otp)}
            />
            For Visually impaired OTP will be sent
          </label>

          {/* SIGN IN */}
          <button
            onClick={handleLogin}
            className="mb-3 w-full rounded-lg bg-orange-500 py-3 text-sm font-medium text-white transition duration-200 hover:scale-[1.02] hover:bg-orange-600 active:scale-[0.98]"
          >
            Sign In
          </button>

          {/* ACTION BUTTONS */}
          <div className="flex gap-3">
            <button className="flex-1 rounded-lg bg-[#2b467d] py-3 text-sm font-medium text-white transition duration-200 hover:scale-[1.02] hover:bg-[#233a66] active:scale-[0.98]">
              Register
            </button>
            <button className="flex-1 rounded-lg bg-[#2b467d] py-3 text-sm font-medium text-white transition duration-200 hover:scale-[1.02] hover:bg-[#233a66] active:scale-[0.98]">
              Agent Login
            </button>
          </div>

          <p className="mt-3 text-center text-sm text-red-500">{error}</p>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex flex-1 items-center justify-center pl-2">
          <img src={banner} alt="promo" className="w-full rounded" />
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
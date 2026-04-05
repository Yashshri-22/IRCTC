import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    name: "",
    password: "",
    confirmPassword: "",
    email: "",
    captcha: "",
  });

  const [error, setError] = useState("");
  const [captchaText] = useState("JF6Z"); // static like your HTML
  const [activeIndex, setActiveIndex] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = () => {
    setError("");

    const { username, name, password, confirmPassword, email, captcha } = form;

    // ✅ Empty validation
    if (
      !username ||
      !name ||
      !password ||
      !confirmPassword ||
      !email ||
      !captcha
    ) {
      setError("All fields are required!");
      return;
    }

    // ✅ Username validation
    if (username.length < 4) {
      setError("Username must be at least 4 characters");
      return;
    }

    // ✅ Password validation
    const passRegex = /^(?=.*[A-Z])(?=.*[0-9]).{6,}$/;
    if (!passRegex.test(password)) {
      setError("Password must have 1 uppercase, 1 number, min 6 chars");
      return;
    }

    // ✅ Confirm password
    if (password !== confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    // ✅ Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Invalid email format!");
      return;
    }

    // ✅ Captcha validation
    if (captcha !== captchaText) {
      setError("Incorrect captcha!");
      return;
    }

    // ✅ Store user
    const userData = {
      username,
      password,
      email,
    };

    localStorage.setItem("user", JSON.stringify(userData));

    alert("Registration Successful! Redirecting to Login...");
    navigate("/");
  };

  const faqs = [
    {
      q: "What is IRCTC?",
      a: "IRCTC is the Indian Railway ticket booking platform.",
    },
    {
      q: "Why register?",
      a: "Registration allows you to book tickets and manage journeys.",
    },
    {
      q: "How to register?",
      a: "Fill the form with correct details and submit.",
    },
    {
      q: "Any charges?",
      a: "No charges for registration.",
    },
    {
      q: "Forgot password?",
      a: "Use the forgot password option to reset.",
    },
    {
      q: "Account blocked?",
      a: "Contact support or wait for automatic unblock.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f9f9f9] p-10 pt-20">
      <div className="mx-auto max-w-[1000px] rounded bg-white p-5">
        <div className="mb-4">
          <button
            onClick={() => navigate("/")}
            className="text-sm font-medium text-blue-600 hover:underline"
          >
            ← Back to Home
          </button>
        </div>

        {/* HEADER */}
        <div className="mb-5 flex items-center justify-between">
          <h1 className="text-[28px] font-semibold">Create Your Account</h1>
          <button
            onClick={() => navigate("/")}
            className="text-[20px] font-bold text-[#d96e27]"
          >
            SIGN IN
          </button>
        </div>

        {/* INSTRUCTIONS */}
        <div className="mb-8 rounded border border-gray-400 p-4 text-[13px] text-gray-700">
          <h3 className="mb-2 text-lg">Instructions</h3>
          <ol className="list-decimal space-y-1 pl-5">
            <li>Garbage values may lead to account deactivation.</li>
            <li>Booking allowed after 4 days of registration...</li>
          </ol>
        </div>

        {/* GRID */}
        <div className="flex gap-10">
          {/* FORM */}
          <div className="flex-[1.5]">
            <input
              type="text"
              name="username"
              placeholder="Username"
              onChange={handleChange}
              className="font-regular mb-4 w-full rounded-lg border p-3 text-[#2b467d]"
            />

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              className="font-regular mb-4 w-full rounded-lg border p-3 text-[#2b467d]"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              className="font-regular mb-4 w-full rounded-lg border p-3 text-[#2b467d]"
            />

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              onChange={handleChange}
              className="font-regular mb-4 w-full rounded-lg border p-3 text-[#2b467d]"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
              className="font-regular mb-4 w-full rounded-lg border p-3 text-[#2b467d]"
            />

            {/* CAPTCHA */}
            <div className="mb-4 overflow-hidden rounded border">
              <div className="font-regular bg-[#1a3a70] p-3 text-center text-2xl tracking-[10px] text-white">
                {captchaText}
              </div>
              <input
                type="text"
                name="captcha"
                placeholder="Enter Captcha"
                onChange={handleChange}
                className="w-full p-4"
              />
            </div>

            <p className="mb-3 text-red-500">{error}</p>

            <button
              onClick={handleRegister}
              className="mb-3 w-full rounded-lg bg-orange-500 py-3 text-sm font-medium text-white transition duration-200 hover:scale-[1.02] hover:bg-orange-600 active:scale-[0.98]"
            >
              Submit
            </button>
          </div>

          {/* FAQ */}
          <div className="flex-1 rounded bg-[#f7efe2] p-5">
            <h3 className="mb-3 text-center text-lg font-semibold">
              Help & FAQ
            </h3>

            <p className="mb-2 text-xs font-bold">
              Have Questions About Registering?
            </p>

            <p className="mb-4 text-[11px] text-gray-600">
              Here are some FAQs to guide you.
            </p>

            {faqs.map((item, index) => (
              <div key={index} className="border-b">
                {/* QUESTION */}
                <div
                  onClick={() =>
                    setActiveIndex(activeIndex === index ? null : index)
                  }
                  className="flex cursor-pointer justify-between py-3 text-sm font-medium"
                >
                  {item.q}
                  <span className="text-lg">
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </div>

                {/* ANSWER */}
                {activeIndex === index && (
                  <div className="mb-3 rounded-lg bg-white px-4 py-3 text-sm text-gray-700 shadow-sm">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PaymentModal from "../components/PaymentModal";

function Passenger() {
  const navigate = useNavigate();
  const [showPayment, setShowPayment] = useState(false);

  const [passengers, setPassengers] = useState([
    { name: "", age: "", gender: "", pref: "", error: "" },
  ]);

  const [phone, setPhone] = useState("");
  const [payment, setPayment] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [paymentError, setPaymentError] = useState("");

  // 🔥 ADD PASSENGER
  const addPassenger = () => {
    setPassengers((prev) => {
      if (prev.length >= 6) {
        alert("Max 6 passengers allowed");
        return prev;
      }

      return [...prev, { name: "", age: "", gender: "", pref: "", error: "" }];
    });
  };

  // 🔥 HANDLE INPUT
  const handleChange = (index, field, value) => {
    const updated = [...passengers];
    updated[index][field] = value;
    updated[index].error = "";
    setPassengers(updated);
  };

  // 🔥 REMOVE PASSENGER
  const removePassenger = (index) => {
    setPassengers((prev) => prev.filter((_, i) => i !== index));
  };

  // 🔥 VALIDATION
  const validateAndContinue = () => {
    let valid = true;

    // Reset errors
    setPhoneError("");
    setPaymentError("");

    // =========================
    // PASSENGER VALIDATION
    // =========================
    let updatedPassengers = passengers.map((p, index) => {
      let error = "";

      // Name validation
      if (!p.name.trim()) {
        error = `Name required (Passenger ${index + 1})`;
        valid = false;
      }

      // Age validation
      else if (!p.age || p.age <= 0 || p.age > 100) {
        error = "Age must be between 1–100";
        valid = false;
      }

      return { ...p, error };
    });

    setPassengers(updatedPassengers);

    // =========================
    // PHONE VALIDATION
    // =========================
    if (!phone) {
      setPhoneError("Phone number required");
      valid = false;
    } else if (phone.length !== 10 || isNaN(phone)) {
      setPhoneError("Enter valid 10-digit number");
      valid = false;
    }

    // =========================
    // PAYMENT VALIDATION
    // =========================
    if (!payment) {
      setPaymentError("Select payment option");
      valid = false;
    }

    // =========================
    // FINAL CHECK
    // =========================
    if (!valid) return;

    // SUCCESS
    setShowPayment(true);
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] pb-6 pt-20">
      <div className="mx-auto max-w-[1100px] rounded-lg bg-white p-6 shadow">
        <h2 className="mb-4 text-xl font-bold text-[#2c4a86]">
          Passenger Details
        </h2>
        {/* TRAIN DETAILS */}
        <p className="mb-2 text-sm font-semibold text-[#2c4a86]">
          Train Details
        </p>

        <div className="mb-5 rounded border border-gray-300">
          <div className="text-md bg-gray-200 px-4 py-2 font-bold italic">
            Jhelum Express
          </div>

          <div className="flex justify-between px-4 py-4 text-sm font-medium text-[#2c4a86]">
            <div>12:00 p.m. | Indore | 7/3/2026</div>
            <div>9:00 p.m. | Pune | 6/3/2026</div>
          </div>

          <div className="px-4 pb-4">
            <span className="inline-block rounded border border-gray-500 px-6 py-2 text-sm">
              Sleeper (SL)
            </span>
          </div>
        </div>

        {/* PASSENGERS */}
        {passengers.map((p, index) => (
          <div key={index} className="mb-3">
            <div className="flex flex-wrap gap-2 rounded border border-gray-300 bg-white p-3">
              <input
                placeholder="Name"
                className="w-[240px] rounded border border-gray-400 px-3 py-1.5 text-sm"
                value={p.name}
                onChange={(e) => handleChange(index, "name", e.target.value)}
              />

              <input
                placeholder="Age"
                type="number"
                className="w-[240px] rounded border border-gray-400 px-3 py-1.5 text-sm"
                value={p.age}
                onChange={(e) => handleChange(index, "age", e.target.value)}
              />

              <select
                className="w-[250px] rounded border border-gray-400 px-2 py-1.5 text-sm"
                value={p.gender}
                onChange={(e) => handleChange(index, "gender", e.target.value)}
              >
                <option value="">Gender</option>
                <option>Male</option>
                <option>Female</option>
              </select>

              <select
                className="w-[250px] rounded border border-gray-400 px-2 py-1.5 text-sm"
                value={p.pref}
                onChange={(e) => handleChange(index, "pref", e.target.value)}
              >
                <option value="">Seat Preference</option>
                <option>Lower</option>
                <option>Upper</option>
              </select>

              {index > 0 && (
                <button
                  onClick={() => removePassenger(index)}
                  className="text-sm text-red-500"
                >
                  ✖
                </button>
              )}
            </div>
            {p.error && <p className="mt-1 text-xs text-red-500">{p.error}</p>}
          </div>
        ))}
        <div className="mt-2 flex gap-5 text-xs font-medium text-[#1e6492]">
          <span
            onClick={addPassenger}
            className="cursor-pointer hover:underline"
          >
            + Add Passenger / Add Infant with Berth
          </span>

          <span
            onClick={addPassenger}
            className="cursor-pointer hover:underline"
          >
            + Add Infant without Berth
          </span>
        </div>

        {/* CONTACT */}
        <p className="mb-2 mt-4 font-semibold text-[#2c4a86]">
          Contact Details
        </p>

        <div className="mb-4 flex items-center rounded border border-gray-400 p-3">
          <div className="rounded border border-gray-400">
            <span className="bg-gray-200 px-3 py-2 text-sm">+91</span>
            <input
              placeholder="Mobile Number"
              className="flex-1 rounded p-2 text-sm"
              value={phone}
              maxLength={10}
              onChange={(e) => {
                const value = e.target.value;

                // allow only numbers + limit to 10
                if (/^\d{0,10}$/.test(value)) {
                  setPhone(value);
                }
              }}
            />
          </div>
        </div>

        {phoneError && (
          <p className="mb-6 text-sm text-red-500">{phoneError}</p>
        )}

        {/* PAYMENT */}
        <p className="mb-2 text-sm font-semibold text-[#2c4a86]">
          Payment Details
        </p>

        <div className="rounded border border-gray-300 bg-white text-sm">
          {/* OPTION 1 */}
          <label className="flex cursor-pointer items-start gap-3 border-b border-gray-300 px-4 py-3">
            <input
              type="radio"
              name="payment"
              value="card"
              className="mt-1"
              onChange={(e) => setPayment(e.target.value)}
            />

            <div>
              <p className="font-medium text-[#2c4a86]">
                Pay through Credit / Debit Card / Net Banking
              </p>

              <p className="text-xs text-gray-500">
                Convenience Fee: ₹15 + GST
              </p>
            </div>
          </label>

          {/* OPTION 2 */}
          <label className="flex cursor-pointer items-start gap-3 px-4 py-3">
            <input
              type="radio"
              name="payment"
              value="upi"
              className="mt-1"
              onChange={(e) => setPayment(e.target.value)}
            />

            <div>
              <p className="font-medium text-[#2c4a86]">Pay through UPI</p>

              <p className="text-xs text-gray-500">
                Convenience Fee: ₹10 + GST
              </p>
            </div>
          </label>
        </div>
        {paymentError && (
          <p className="mt-2 text-sm text-red-500">{paymentError}</p>
        )}

        {/* BUTTONS */}
        <div className="mt-6 flex gap-4">
          <button
            onClick={() => navigate("/trains")}
            className="flex-1 rounded bg-[#243e77] py-2 text-sm text-white hover:bg-[#172847]"
          >
            Back
          </button>

          <button
            onClick={validateAndContinue}
            className="flex-1 rounded bg-orange-600 py-2 text-sm text-white hover:bg-orange-700"
          >
            Continue
          </button>
        </div>
      </div>
      {showPayment && <PaymentModal onClose={() => setShowPayment(false)} />}
    </div>
  );
}

export default Passenger;

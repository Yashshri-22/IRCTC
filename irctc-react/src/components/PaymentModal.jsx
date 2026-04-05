import { useState } from "react";
import { useNavigate } from "react-router-dom";
import qrImage from "../assets/qr.png";
import SuccessModal from "./SuccessModal";

function PaymentModal({ onClose }) {
  const navigate = useNavigate();

  const [card, setCard] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  // 🔥 VALIDATION (same as your JS)
  const pay = () => {
    setError("");

    if (!card || !expiry || !cvv || !name) {
      setError("All fields required");
      return;
    }

    if (card.replace(/\s/g, "").length < 8) {
      setError("Invalid card number");
      return;
    }

    if (cvv.length !== 3) {
      setError("Invalid CVV");
      return;
    }

    if (expiry === "01/20") {
      setError("Card expired");
      return;
    }

    setError("Payment Successful! Redirecting...");

    setTimeout(() => {
      setShowSuccess(true);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      {/* BLUR WRAPPER */}
      <div className={`${showSuccess ? "blur-sm pointer-events-none" : ""}`}>
        <div className="relative flex w-[850px] gap-8 rounded-lg border bg-white p-8">
          <div className="relative flex w-[850px] gap-8 rounded-lg border bg-white p-8">
            {/* CLOSE */}
            <button
              onClick={onClose}
              className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded bg-red-500 text-lg text-white transition hover:rotate-90 hover:bg-red-600"
            >
              ×
            </button>

            {/* LEFT */}
            <div className="flex-1.5">
              <h2 className="mb-6 text-lg font-bold text-[#2b467d]">
                Payment Details
              </h2>

              {/* CARD */}
              <input
                type="text"
                placeholder="Card Number"
                value={card}
                maxLength={19}
                onChange={(e) => {
                  let v = e.target.value
                    .replace(/[^\d]/g, "")
                    .replace(/(.{4})/g, "$1 ")
                    .trim();
                  setCard(v);
                }}
                className="mb-4 w-full rounded border px-4 py-3 text-sm font-normal"
              />

              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Expiry Date"
                  value={expiry}
                  onChange={(e) => {
                    let v = e.target.value.replace(/[^\d]/g, "");
                    if (v.length >= 2) {
                      v = v.slice(0, 2) + "/" + v.slice(2, 4);
                    }
                    setExpiry(v);
                  }}
                  className="w-full rounded border px-4 py-3 text-sm font-normal"
                />

                <input
                  type="text"
                  placeholder="CVV"
                  value={cvv}
                  maxLength={3}
                  onChange={(e) => {
                    const val = e.target.value;
                    if (/^\d{0,3}$/.test(val)) setCvv(val);
                  }}
                  className="w-full rounded border px-4 py-3 text-sm font-normal"
                />
              </div>

              <input
                type="text"
                placeholder="Card Holder's Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-4 w-full rounded border px-4 py-3 text-sm font-normal"
              />

              <button
                onClick={pay}
                className="mt-4 w-full rounded bg-[#d96e27] py-2 text-sm font-bold text-white"
              >
                Pay Now
              </button>

              {error && (
                <p
                  className={`mt-2 text-sm ${
                    error.includes("Successful")
                      ? "text-green-600"
                      : "text-red-500"
                  }`}
                >
                  {error}
                </p>
              )}
            </div>

            {/* RIGHT (QR) */}
            <div className="flex flex-1 flex-col items-center justify-center border-l pl-6 text-center">
              <p className="font-semibold">Pay via UPI</p>

              <img
                src={qrImage}
                alt="QR"
                className="my-3 h-[180px] w-[180px] rounded border"
              />

              <p>Scan to Pay</p>

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/UPI-Logo-vector.svg/1200px-UPI-Logo-vector.svg.png"
                alt="upi"
                className="mt-2 h-[10px] w-[100px]"
              />
            </div>
          </div>
        </div>
      </div>

      {showSuccess && <SuccessModal />}
    </div>
  );
}

export default PaymentModal;

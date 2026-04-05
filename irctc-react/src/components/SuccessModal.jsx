import { useNavigate } from "react-router-dom";

function SuccessModal({ onClose }) {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40">

      <div className="w-[380px] animate-[pop_0.4s] overflow-hidden rounded-xl bg-white shadow-2xl">

        {/* HEADER */}
        <div className="bg-[#239323] py-3 text-center font-bold text-white">
          Payment Successful
        </div>

        {/* CONTENT */}
        <div className="px-6 py-10 text-center">

          {/* CHECK ICON */}
          <div className="mx-auto mb-6 flex h-[80px] w-[80px] items-center justify-center rounded-full border-[6px] border-[#1a531a]">
            <div className="h-[38px] w-[18px] rotate-45 border-b-[6px] border-r-[6px] border-[#1a531a]"></div>
          </div>

          {/* TEXT */}
          <p className="text-md mb-6 font-semibold text-[#033400]">
            Your Ticket has been booked successfully!
          </p>

          {/* BUTTON */}
          <button
            onClick={() => navigate("/")}
            className="rounded bg-[#239323] px-10 py-2 text-sm font-bold text-white hover:bg-green-700"
          >
            Done
          </button>
        </div>
      </div>

      {/* Animation */}
      <style>
        {`
          @keyframes pop {
            0% { transform: scale(0.5); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
          }
        `}
      </style>
    </div>
  );
}

export default SuccessModal;
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function BookingCard() {
  const [tab, setTab] = useState("pnr");
  const navigate = useNavigate();

  return (
    <div className="mx-auto w-full max-w-md overflow-hidden rounded-xl bg-white shadow-md md:mx-0">
      {/* TABS */}
      <div className="grid grid-cols-2 text-xs font-medium text-white">
        <button
          onClick={() => setTab("pnr")}
          className={`py-3 ${
            tab === "pnr"
              ? "bg-[#2c4b86] border-b-[3px] border-orange-500"
              : "bg-[#173b7a] opacity-80"
          }`}
        >
          PNR STATUS
        </button>

        <button
          onClick={() => setTab("chart")}
          className={`py-3 ${
            tab === "chart"
              ? "bg-[#2c4b86] border-b-[3px] border-orange-500"
              : "bg-[#173b7a] opacity-80"
          }`}
        >
          CHARTS / VACANCY
        </button>
      </div>

      {/* BODY */}
      <div className="p-5">
        <h2 className="mb-5 text-center text-lg font-semibold text-[#173b7a]">
          Book Ticket
        </h2>

        {/* FROM - TO */}
        <div className="mb-4 grid grid-cols-[1fr_auto_1fr] overflow-hidden rounded-lg border border-[#d6dbe4] bg-[#eef1f6]">
          <input
            placeholder="From — origin station"
            className="col-span-1 bg-transparent px-3 py-2 text-sm text-gray-500 outline-none"
          />

          <div className="flex items-center justify-center border-x border-[#d6dbe4] px-2 text-sm text-blue-600">
            ⇄
          </div>

          <input
            placeholder="To — destination"
            className="col-span-1 bg-transparent px-3 py-1.5 text-sm text-gray-500 outline-none"
          />
        </div>

        {/* DATE + CLASS */}
        <div className="mb-3 grid grid-cols-2 gap-3">
          <div className="rounded-lg border border-[#d6dbe4] bg-[#eef1f6] px-3 py-1.5">
            <label className="text-[10px] font-medium text-gray-500">
              DATE OF JOURNEY
            </label>
            <input
              type="date"
              className="mt-1 w-full bg-transparent text-[13px] text-gray-700 outline-none"
            />
          </div>

          <div className="rounded-lg border border-[#d6dbe4] bg-[#eef1f6] px-3 py-2">
            <label className="text-[10px] font-medium text-gray-500">
              CLASS
            </label>
            <select className="mt-1 w-full bg-transparent text-[13px] text-gray-700 outline-none">
              <option>All Classes</option>
              <option>Sleeper (SL)</option>
              <option>3rd AC (3A)</option>
              <option>2nd AC (2A)</option>
              <option>1st AC (1A)</option>
              <option>Chair Car (CC)</option>
            </select>
          </div>
        </div>

        {/* QUOTA */}
        <div className="mb-4 rounded-lg border border-[#d6dbe4] bg-[#eef1f6] px-3 py-1.5">
          <label className="text-[11px] font-medium text-gray-500">QUOTA</label>
          <select className="mt-1 w-full bg-transparent text-[13px] text-gray-700 outline-none">
            <option>General</option>
            <option>Ladies</option>
            <option>Senior Citizen</option>
            <option>Tatkal</option>
            <option>Premium Tatkal</option>
          </select>
        </div>

        {/* CHECKBOXES */}
        <div className="mb-4 flex flex-wrap gap-4 text-xs text-gray-600">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="h-3 w-3" />
            Person With Disability Concession
          </label>

          <label className="flex items-center gap-2">
            <input type="checkbox" className="h-3 w-3" />
            Flexible With Date
          </label>

          <label className="flex items-center gap-2">
            <input type="checkbox" className="h-3 w-3" />
            Railway Pass Concession
          </label>
        </div>

        {/* BUTTON */}
        <button
          onClick={() => navigate("/trains")}
          className="w-full cursor-pointer rounded-lg bg-orange-500 py-3 text-sm font-medium text-white hover:bg-orange-600"
        >
          Search Trains
        </button>
      </div>
    </div>
  );
}

export default BookingCard;

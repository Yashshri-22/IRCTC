import { useNavigate } from "react-router-dom";
import TrainCard from "../components/TrainCard";

function Trains() {
  const navigate = useNavigate();

  // 🔥 TRAIN DATA
  const trains = [
    {
      name: "Jhelum Express",
      from: "Pune",
      to: "Indore",
      departTime: "9:00 p.m.",
      arriveTime: "12:00 p.m.",
      date: "6/3/2026",
      classes: ["Sleeper (SL)", "AC 3 Tier (3A)", "AC 2 Tier (2A)"],
    },
    {
      name: "Express",
      from: "Pune",
      to: "Indore",
      departTime: "9:00 p.m.",
      arriveTime: "1:00 p.m.",
      date: "9/3/2026",
      classes: [
        "Sleeper (SL)",
        "AC 3 Economy (3E)",
        "AC 3 Tier (3A)",
        "AC 2 Tier (2A)",
      ],
    },
  ];

  // 🔥 BOOK FUNCTION
  const bookTrain = () => {
    navigate("/passenger");
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-6 pt-20">
      <div className="mx-auto max-w-[1000px]">
        {/* 🔵 SEARCH BAR */}
        <div className="mb-6 flex w-full justify-center">
          <div className="flex flex-wrap items-center gap-3 rounded-xl bg-[#2c4b86] px-5 py-4 shadow-md">
            {/* FROM */}
            <input
              className="w-[140px] rounded-md bg-white px-3 py-2 text-center text-sm text-gray-700 outline-none"
              defaultValue="Pune"
            />

            {/* SWAP ICON */}
            <span className="text-lg text-white">⇄</span>

            {/* TO */}
            <input
              className="w-[140px] rounded-md bg-white px-3 py-2 text-center text-sm text-gray-700 outline-none"
              defaultValue="Goa"
            />

            {/* DATE */}
            <input
              className="w-[140px] rounded-md bg-white px-3 py-2 text-center text-sm text-gray-700 outline-none"
              defaultValue="6/3/2026"
            />

            {/* CLASS */}
            <select className="w-[140px] rounded-md bg-white px-3 py-2 text-sm text-gray-700 outline-none">
              <option>First Class</option>
            </select>

            {/* QUOTA */}
            <select className="w-[120px] rounded-md bg-white px-3 py-2 text-sm text-gray-700 outline-none">
              <option>General</option>
            </select>

            {/* BUTTON */}
            <button className="rounded-md bg-orange-500 px-5 py-2 text-sm font-semibold text-white shadow hover:bg-orange-600">
              Modify
            </button>
          </div>
        </div>

        {/* 🟡 FILTERS */}
        <div className="flex flex-wrap gap-6 py-4 text-sm text-gray-600">
          <label className="cursor-pointer">
            <input type="checkbox" className="mr-1" />
            Flexible with date
          </label>

          <label className="cursor-pointer">
            <input type="checkbox" className="mr-1" />
            Person with disability
          </label>

          <label className="cursor-pointer">
            <input type="checkbox" className="mr-1" />
            Railway Pass
          </label>
        </div>

        {/* 🔵 PROGRESS BAR */}
        <div className="mb-5 h-3 w-full rounded bg-blue-200">
          <div className="h-full w-[20%] rounded bg-[#243e77]"></div>
        </div>

        {/* 🚆 TRAIN LIST */}
        {trains.map((train, index) => (
          <TrainCard key={index} train={train} onBook={bookTrain} />
        ))}
      </div>
    </div>
  );
}

export default Trains;

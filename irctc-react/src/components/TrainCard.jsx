function TrainCard({ train, onBook }) {
  return (
    <div className="mb-6 rounded-md border border-gray-300 bg-[#ffffff]">
      {/* HEADER */}
      <div className="flex items-center justify-between border-b bg-gray-200 px-4 py-2 text-sm">
        <span className="font-semibold italic text-gray-800">{train.name}</span>

        <span className="text-gray-600">Runs on : M T W T F S S</span>

        <span className="cursor-pointer font-semibold text-[#243e77] hover:underline">
          Train Schedule
        </span>
      </div>

      {/* INFO ROW */}
      <div className="flex items-center justify-between px-4 py-4 text-sm">
        {/* LEFT (ARRIVAL) */}
        <div>
          <span className="text-lg font-bold text-[#243e77]">
            {train.arriveTime}
          </span>{" "}
          <span className="text-gray-700">
            | {train.to} | {train.date}
          </span>
        </div>

        {/* RIGHT (DEPARTURE) */}
        <div className="text-right">
          <span className="text-lg font-bold text-[#243e77]">
            {train.departTime}
          </span>{" "}
          <span className="text-gray-700">
            | {train.from} | {train.date}
          </span>
        </div>
      </div>

      {/* CLASSES */}
      <div className="flex flex-wrap gap-4 px-4 pb-4">
        {train.classes.map((cls, i) => (
          <div
            key={i}
            className="flex cursor-pointer items-center gap-2 rounded-md border border-gray-400 bg-white px-4 py-2 text-sm text-[#243e77] hover:bg-gray-100"
          >
            {cls}
            <span className="text-xs">↻</span>
          </div>
        ))}
      </div>

      {/* BUTTON */}
      <div className="px-4 pb-5">
        <button
          onClick={onBook}
          className="rounded bg-orange-600 px-6 py-2.5 text-sm font-semibold text-white hover:bg-orange-700"
        >
          Book Now
        </button>
      </div>
    </div>
  );
}

export default TrainCard;

function Features() {
  const data = [
    {
      icon: "⚡",
      title: "Instant Booking",
      desc: "Confirm your ticket in under 60 seconds with our fast, secure checkout.",
    },
    {
      icon: "📍",
      title: "Live Train Tracking",
      desc: "Track your train's real-time location and arrival updates.",
    },
    {
      icon: "🔔",
      title: "Smart Alerts",
      desc: "Get PNR confirmation, platform changes, and delay notifications instantly.",
    },
    {
      icon: "🎟️",
      title: "Tatkal & Waitlist",
      desc: "Book Tatkal tickets or join waitlists with one tap.",
    },
  ];

  return (
    <section className="bg-[#f5f7fb] py-12 md:py-16">

      {/* HEADING */}
      <div className="mb-10 px-4 text-center md:mb-14">
        <p className="text-[10px] font-semibold tracking-widest text-orange-500 md:text-xs">
          WHY IRCTC
        </p>

        <h2 className="mt-2 text-xl font-bold text-[#173b7a] sm:text-2xl md:text-3xl lg:text-4xl">
          Everything You Need to Travel
        </h2>
      </div>

      {/* CARDS */}
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 px-4 sm:grid-cols-2 sm:gap-6 sm:px-6 lg:grid-cols-4">

        {data.map((f, i) => (
          <div
            key={i}
            className="group rounded-xl border border-transparent bg-[#eef2f7] p-5 text-center transition-all duration-300 ease-in-out hover:-translate-y-1 hover:border-blue-600 hover:bg-white hover:shadow-lg sm:p-6"
          >
            {/* ICON */}
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[#173b7a] text-lg text-white transition-all duration-300 group-hover:bg-blue-600 sm:mb-4 sm:h-14 sm:w-14 sm:text-xl">
              {f.icon}
            </div>

            {/* TITLE */}
            <h3 className="mb-2 text-sm font-semibold text-[#173b7a] sm:text-base">
              {f.title}
            </h3>

            {/* DESCRIPTION */}
            <p className="text-xs leading-relaxed text-gray-500 sm:text-sm">
              {f.desc}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Features;
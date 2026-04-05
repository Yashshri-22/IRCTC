import { useState } from "react";
import { Link } from "react-router-dom";
import LoginModal from "./LoginModal";

function Navbar() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <nav className="fixed top-0 z-50 flex h-14 w-full items-center justify-between bg-[#0b2d6e] px-4 text-white sm:px-6 md:h-16 md:px-10">

        {/* LOGO */}
        <h1 className="text-sm font-semibold sm:text-base md:text-lg">
          IRCTC
        </h1>

        {/* LINKS */}
        <div className="flex items-center gap-6 text-sm">

          <Link
            to="/"
            className="text-white/80 transition hover:text-white"
          >
            Home
          </Link>

          {/* 🔥 LOGIN BUTTON → opens modal */}
          <button
            onClick={() => setShowLogin(true)}
            className="rounded-md border border-white/40 px-4 py-1.5 transition hover:bg-white/10"
          >
            Login
          </button>

          <Link
            to="/register"
            className="rounded-md bg-orange-500 px-4 py-1.5 transition hover:bg-orange-600"
          >
            Register
          </Link>

        </div>
      </nav>

      {/* 🔥 POPUP MODAL */}
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}
    </>
  );
}

export default Navbar;
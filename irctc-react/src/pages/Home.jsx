import { useState } from "react";
import Navbar from "../components/Navbar";
import BookingCard from "../components/BookingCard";
import Features from "../components/Features";
import Footer from "../components/Footer";

function Home() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div>
      <Navbar openLogin={() => setShowLogin(true)} />
      {showLogin && <LoginModal onClose={() => setShowLogin(false)} />}

      {/* HERO */}
      <section className="pt-16">
        {/* MOBILE VIEW */}
        <div className="block px-4 md:hidden">
          {/* IMAGE */}
          <img src="/train.png" alt="train" className="w-full rounded-lg" />

          {/* FORM */}
          <div className="mt-4 flex justify-center">
            <BookingCard />
          </div>

          {/* ALERT */}
          <div className="mt-4 bg-red-600 py-2 text-center text-xs text-white">
            ⚠️ Beware of fraudsters!
          </div>
        </div>

        {/* DESKTOP VIEW */}
        <section
          className="relative hidden min-h-screen items-center bg-cover bg-center bg-no-repeat md:flex md:bg-right"
          style={{
            backgroundImage: "url('/train.png')",
          }}
        >
          <div className="mx-auto grid w-full max-w-7xl grid-cols-2 items-center px-6">
            {/* FORM LEFT */}
            <div className="flex justify-start">
              <BookingCard />
            </div>

            {/* EMPTY RIGHT */}
            <div></div>
          </div>

          {/* ALERT */}
          <div className="absolute bottom-0 w-full bg-red-600 py-2 text-center text-sm text-white">
            ⚠️ Beware of fraudsters!
          </div>
        </section>
      </section>

      {/* FEATURES */}
      <Features />

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default Home;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Navbar from "./components/Navbar";
import LoginModal from "./components/LoginModal";
import Trains from "./pages/Trains";
import Passenger from "./pages/Passenger";

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <BrowserRouter>

      {/* ✅ Navbar always visible */}
      <Navbar openLogin={() => setShowLogin(true)} />

      {/* ✅ Login Popup */}
      {showLogin && (
        <LoginModal onClose={() => setShowLogin(false)} />
      )}

      {/* ✅ Pages */}
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/register"
          element={<Register openLogin={() => setShowLogin(true)} />}
        />
        <Route path="/trains" element={<Trains />} />
        <Route path="/passenger" element={<Passenger />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
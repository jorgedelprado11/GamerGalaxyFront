
import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/navbar/Navbar"
import Home from "./views/Home/Home";
import Ayuda from "./views/Ayuda/Ayuda"
import Modal from "./views/Ayuda/Modal";
import About from "./views/About/About";


import Home from "./views/Home/Home";

import Productos from "./views/Productos/Productos";


function App() {
  const location = useLocation()
  return (
    <div>
      {location.pathname !== "/" && <Navbar />}
      <Routes>

        <Route path="home" element={<Home />} />
        <Route path="ayuda" element={<Ayuda />} />
        <Route path="form" element={<Modal />} />
        <Route path="about" element={<About />} />
        <Route path="/productos" element={<Productos />} />
      </Routes>
    </div>
  );
}

export default App;

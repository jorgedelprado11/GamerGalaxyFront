import ProductForm from "./views/Home/Admin/Form"; // Corrección en el nombre del componente

import { NavLink } from "react-router-dom";

import Admin from "./views/Admin/Admin";
import Usuarios from "./views/Admin/Usuarios";
import ProductosAdmin from "./views/Admin/Productos";

import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./views/Home/Home";
import Ayuda from "./views/Ayuda/Ayuda";
import Modal from "./views/Ayuda/Modal";
import About from "./views/About/About";
import Footer from "./components/footer/Footer";

import Productos from "./views/Productos/Productos";

function App() {
  const location = useLocation();
  return (
    <div>
      {!location.pathname.includes("/admin") && <Navbar />}
      <Routes>
        <Route path="/admin/Productos/create" element={<ProductForm />} />{" "}
        {/* Corrección en el nombre del componente */}
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/Usuarios" element={<Usuarios />} />
        <Route path="/admin/Productos" element={<ProductosAdmin />} />
        <Route path="/admin/Productos/create" element={<productForm />} />
        <Route path="/home" element={<Home />} />
        <Route path="ayuda" element={<Ayuda />} />
        <Route path="form" element={<Modal />} />
        <Route path="about" element={<About />} />
        <Route path="/productos" element={<Productos />} />
      </Routes>

      {!location.pathname.includes("/admin") && <Footer />}
    </div>
  );
}

export default App;

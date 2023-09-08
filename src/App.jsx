/** @format */

import ProductForm from "./views/Home/Admin/Form"; // Corrección en el nombre del componente;
import Admin from "./views/Admin/Admin";
import Usuarios from "./views/Admin/Usuarios/Usuarios";
import ProductosAdmin from "./views/Admin/Productos/Productos";

import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./views/Home/Home";
import Ayuda from "./views/Ayuda/Ayuda";
import About from "./views/About/About";

import Productos from "./views/Productos/Productos";
import ModificadorModalAdmin from "./components/ModificadorModalAdmin/ModificadorModalAdmin";
import Footer from "./components/footer/Footer";
import Profile from "./components/forms/Profile";
import Carrito from "./components/carrito/Carrito";

import UserClient from "./views/userClient/userClient";
import UserDireccion from "./views/userClient/Dirección/userDirección";
import { UserFavoritos } from "./views/userClient/favoritos/userFavoritos";
import { UserPedidos } from "./views/userClient/pedidos/userPedidos";

function App() {
  const location = useLocation();
  return (
    <div>
      {!location.pathname.includes("/admin") && <Navbar />}
      <Routes>
        <Route path="/admin/Productos/create" element={<ProductForm />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/Usuarios" element={<Usuarios />} />
        <Route path="/admin/Productos" element={<ProductosAdmin />} />

        <Route path={"/"} element={<Home />} />
        <Route path={"/home"} element={<Home />} />
        <Route path="ayuda" element={<Ayuda />} />

        <Route path="form" element={<Modal />} />
        {/*Routes de Users*/}
        <Route path="/user" element={<UserClient />} />
        <Route path="/user/Dirección" element={<UserDireccion />} />
        <Route path="/user/Favoritos" element={<UserFavoritos />} />
        <Route path="/user/Pedidos" element={<UserPedidos />} />

        {/* <Route path="adminis" element={<ModificadorModalAdmin />} /> */}
        <Route path="about" element={<About />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/carrito" element={<Carrito />} />
      </Routes>
      {!location.pathname.includes("/admin") && <Footer />}
    </div>
  );
}

export default App;

/** @format */

import ProductForm from "./views/Home/Admin/Form"; // Corrección en el nombre del componente;
import Admin from "./views/Admin/Admin";
import Usuarios from "./views/Admin/Usuarios/Usuarios";
import ProductosAdmin from "./views/Admin/Productos/Productos";

import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./views/Home/Home";
import Ayuda from "./views/Ayuda/Ayuda";
import About from "./views/About/About";

import Productos from "./views/Productos/Productos";
import ModificadorModalAdmin from "./components/ModificadorModalAdmin/ModificadorModalAdmin";
import Footer from "./components/footer/Footer";
import Carrito from "./components/carrito/Carrito";
import Pedidos from "./views/Admin/Pedidos/Pedidos";
import UserClient from "./views/userClient/userClient";
import UserDireccion from "./views/userClient/Dirección/userDirección";
import { UserFavoritos } from "./views/userClient/favoritos/userFavoritos";
import { UserPedidos } from "./views/userClient/pedidos/userPedidos";

import ArmaTuPc from "./views/ArmaTuPc/ArmaTuPc";
import { useDispatch, useSelector } from "react-redux";
//import { guardarToken } from "./redux/actions/actionsUsers";
import { useAuth0 } from "@auth0/auth0-react";
import { guardarToken, guardarUsuario } from "./redux/actions/actionsUsers";
import Restaurar from "./views/Admin/Restaurar/Restaurar";

function App() {
  const location = useLocation();

  const { loginWithPopup, user, isAuthenticated } = useAuth0();

  const token = useSelector((state) => state.infoToken);
  const dispatch = useDispatch();
  useEffect(() => {
    if (user) {
      dispatch(guardarUsuario(user));

      setTimeout(() => {
        dispatch(guardarToken(user));
      }, 1);
    }
  }, [user, isAuthenticated]);

  localStorage.setItem("token", token);

  return (
    <div>
      {!location.pathname.includes("/admin") && <Navbar />}
      <Routes>
        <Route path="/admin/Productos/create" element={<ProductForm />} />
        <Route path="/admin/restaurar" element={<Restaurar />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/Usuarios" element={<Usuarios />} />
        <Route path="/admin/Productos" element={<ProductosAdmin />} />
        <Route path="/admin/Usuarios/:id" element={<Pedidos />} />

        <Route path={"/"} element={<Home />} />
        <Route path={"/home"} element={<Home />} />
        <Route path="ayuda" element={<Ayuda />} />
        {/*Routes de Users*/}
        <Route path="/user" element={<UserClient />} />
        <Route path="/user/Dirección" element={<UserDireccion />} />
        <Route path="/user/Favoritos" element={<UserFavoritos />} />
        <Route path="/user/Pedidos" element={<UserPedidos />} />

        {/* <Route path="adminis" element={<ModificadorModalAdmin />} /> */}
        <Route path="about" element={<About />} />
        <Route path="/productos" element={<Productos />} />

        <Route path="/armatupc" element={<ArmaTuPc />} />

        <Route path="/carrito" element={<Carrito />} />
      </Routes>
      {!location.pathname.includes("/admin") && <Footer />}
    </div>
  );
}

export default App;

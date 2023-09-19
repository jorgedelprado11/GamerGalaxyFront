/** @format */

import ProductForm from "./views/Home/Admin/Form"; // Corrección en el nombre del componente;
import Admin from "./views/Admin/Admin";
import Usuarios from "./views/Admin/Usuarios/Usuarios";
import ProductosAdmin from "./views/Admin/Productos/Productos";

import React, { useEffect } from "react";
import { Routes, Route, useLocation, Navigate } from "react-router-dom";
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
import Ordenes from "./views/Admin/Ordenes/Ordenes";
import Reviews from "./views/Admin/Reviews/Reviews";
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
  const userLogin = useSelector((state) => state.usuarioCreado);
  const { loginWithPopup, user, isAuthenticated } = useAuth0();

  const token = useSelector((state) => state.infoToken);
  const tokenLocalStorage = localStorage.getItem("token");
  const dispatch = useDispatch();
  const infouser = useSelector((state) => state.token);
  useEffect(() => {
    if (user && !tokenLocalStorage) {
      dispatch(guardarUsuario(user));

      setTimeout(() => {
        dispatch(guardarToken(user));
      }, 100);

      setTimeout(() => {
        localStorage.setItem("token", token);
      }, 500);
    }
  }, [user, isAuthenticated, token]);

  const orderLocalStorage = localStorage.getItem("order");

  return (
    <div>
      {!location.pathname.includes("/admin") && <Navbar />}
      <Routes>
        <Route
          path="/admin/Productos/create"
          element={
            userLogin.id_role == 1 ? <ProductForm /> : <Navigate to="/" />
          }
        />
        <Route
          path="/admin/restaurar"
          element={userLogin.id_role == 1 ? <Restaurar /> : <Navigate to="/" />}
        />
        <Route
          path="/admin"
          element={userLogin.id_role == 1 ? <Admin /> : <Navigate to="/" />}
        />
        <Route
          path="/admin/Usuarios"
          element={userLogin.id_role == 1 ? <Usuarios /> : <Navigate to="/" />}
        />
        <Route
          path="/admin/Productos"
          element={
            userLogin.id_role == 1 ? <ProductosAdmin /> : <Navigate to="/" />
          }
        />
        <Route
          path="/admin/Usuarios/:id"
          element={userLogin.id_role == 1 ? <Pedidos /> : <Navigate to="/" />}
        />
        <Route
          path="/admin/Ordenes"
          element={userLogin.id_role == 1 ? <Ordenes /> : <Navigate to="/" />}
        />
        <Route
          path="/admin/Reviews"
          element={userLogin.id_role == 1 ? <Reviews /> : <Navigate to="/" />}
        />
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

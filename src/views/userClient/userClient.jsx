/** @format */

import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import SidebarUser from "../../components/SidebarUser/SidebarUser";
import UserDireccion from "./Dirección/userDirección";
import { UserFavoritos } from "./favoritos/userFavoritos";
import { UserPedidos } from "./pedidos/userPedidos";
import { useDispatch, useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import {
  guardarUsuario,
  postDireccion,
} from "../../redux/actions/actionsUsers";

const UserClient = () => {
  const usuario = useSelector((state) => state.usuarioCreado);
  const token = localStorage.getItem("token");
  const [direccion, setDireccion] = useState({
    provincia: "",
    ciudad: "",
    calle: "",
    codigo_postal: "",
  });
  //Info de Auth0
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useAuth0();
  console.log(user, "linea 6");

  useEffect(() => {
    if (user) {
      dispatch(guardarUsuario(user));
    }
  }, [user, isAuthenticated]);

  return (
    <div className="h-screen flex">
      <aside className="bg-gray-800 w-64 p-4 text-white">
        <SidebarUser />
      </aside>
      <main className="flex-1 p-4 bg-gray-200">
        <h1 className="text-3xl font-bold text-center mt-4 text-slate-900">
          ¡Bienvenido {user?.given_name}!
        </h1>

        <div className="max-w-lg mx-auto mt-2 p-4 flex flex-col border-t-8 border-r-blue-700">
          {isAuthenticated && (
            <div>
              <img className="mb-1" src={user.picture} alt={usuario?.name} />
              <div className="mb-1">
                <h1 className="mb-1">Username: {usuario?.username}</h1>
              </div>
              <div className="mb-1">
                <p>Email: {usuario?.email}</p>
              </div>
              <div className="mb-1">
                <p>
                  Nombre: {usuario?.firstName} {usuario?.lastName}
                </p>
              </div>
            </div>
          )}
        </div>
        <Routes>
          <Route path="/Dirección" element={<UserDireccion />}></Route>
          <Route path="/Favoritos" element={<UserFavoritos />}></Route>
          <Route path="/Pedidos" element={<UserPedidos />}></Route>
        </Routes>
      </main>
    </div>
  );
};

export default UserClient;

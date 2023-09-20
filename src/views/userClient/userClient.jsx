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
  /* console.log(user, "linea 6"); */

  useEffect(() => {
    if (user) {
      dispatch(guardarUsuario(user));
    }
  }, [user, isAuthenticated]);

  return (
    <div className="h-screen flex">
      {/* Sidebar */}
      <aside className="bg-gray-800 h-screen w-60 p-4 text-white">
        <SidebarUser />
      </aside>
      {/* Contenido principal */}
      <main className="w-full flex-1 p-4 bg-gray-200 relative">
        {/* Fondo semi-transparente */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20"></div>
        {/* Contenido de bienvenida */}
        <div className="max-w-md text-white bg-gray-800 bg-opacity-70 mx-auto mt-20 p-4 flex flex-col rounded-lg shadow-lg">
          {isAuthenticated && (
            <div>
              <img
                className="my-2 mx-auto w-32 h-32 rounded-full border-4 border-blue-500"
                src={user.picture}
                alt={usuario?.name}
              />
              <div className="mb-3 text-center">
                <h1 className="text-2xl font-bold">
                  ¡Bienvenido {user?.given_name || usuario?.username}!
                </h1>
              </div>
              <div className="mb-2">
                <p>
                  <b className="text-zinc-300">Username:</b> {usuario?.username}
                </p>
              </div>
              <div className="mb-2">
                <p>
                  <b className="text-zinc-300">Email:</b> {usuario?.email}
                </p>
              </div>
              <div className="mb-2">
                <p>
                  <b className="text-zinc-300">Nombre:</b> {usuario?.firstName}{" "}
                  {usuario?.lastName}
                </p>
              </div>
            </div>
          )}
        </div>
        {/* Rutas */}
        <Routes>
          <Route path="/Dirección" element={<UserDireccion />} />
          <Route path="/Favoritos" element={<UserFavoritos />} />
          <Route path="/Pedidos" element={<UserPedidos />} />
        </Routes>
      </main>
    </div>
  );
};

export default UserClient;

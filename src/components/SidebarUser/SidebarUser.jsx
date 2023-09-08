/** @format */

import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const SidebarUser = () => {
  const { user, isAuthenticated, logout } = useAuth0();
  useEffect(() => {
    // console.log(isAuthenticated);
  }, [user, isAuthenticated]);

  const handleLogout = () => {
    logout({ returnTo: window.location.origin });
  };

  return (
    <>
      <nav className="w-48 bg-gray-800 text-white text-left ">
        <div className="text-center">
          {isAuthenticated && (
            <div>
              <img
                src={user.picture}
                alt="Avatar del usuario"
                className="w-20 h-20 mx-auto rounded-full"
              />
              <p className="mt-2 text-lg font-semibold">
                {user.given_name} {user.family_name}
              </p>
              <p className="text-sm">{user.email}</p>
            </div>
          )}
        </div>
        <ul className="flex flex-col  space-y-4 mt-8 space-x-10 ">
          <li>
            <NavLink to="/user" className="hover:text-blue-200 pl-10 ">
              Perfil
            </NavLink>
          </li>
          <li>
            <NavLink to="/user/Dirección" className="hover:text-blue-200 ">
              Añadir Dirección
            </NavLink>
          </li>
          <NavLink to="/ayuda" className="hover:text-blue-200">
            <li>Ayuda</li>
          </NavLink>
          <li>
            <NavLink to="/user/Pedidos" className="hover:text-blue-200 ">
              Mis pedidos
            </NavLink>
          </li>
          <li>
            <NavLink to="/user/Favoritos" className="hover:text-blue-200">
              Mis Favoritos
            </NavLink>
          </li>
          <li>
            <button
              onClick={handleLogout}
              role="menuitem"
              className="px-4 text-lg m-0 bg-red-600 hover:text-red-900 rounded-md"
            >
              Cerrar Sesión
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default SidebarUser;

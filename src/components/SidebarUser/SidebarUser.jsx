/** @format */

import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
// import emailjs from '@emailjs/browser';

const SidebarUser = () => {
  const { user, isAuthenticated, logout } = useAuth0();

  // useEffect(() => {
  //   if (!isAuthenticated && user.email_verified) {
      
  //     const emailParams = {
  //       to_email: user.email, 
  //       user_name: `${user.given_name} ${user.family_name}`
  //     };

  //     emailjs.send('service_cas3gvi', 'template_pcny90r', emailParams, 'gwuVD2p851Uv2YQf1')
  //       .then((response) => {
  //         console.log('Correo electrónico enviado con éxito!', response);
  //         setEmailSent(true);
  //       })
  //       .catch((error) => {
  //         console.error('Error al enviar el correo electrónico:', error);
  //       });
  //   }
  // }, [user, isAuthenticated]);

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
              Dirección
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

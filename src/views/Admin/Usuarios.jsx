import React from "react";
import { NavLink } from "react-router-dom";

const Usuarios = () => {
  return (
    <div>
      <div className="flex justify-end mt-5 mr-7">
        <ul className="flex space-x-10">
          <NavLink to="/admin/usuarios">
            <li className="h-10 text-center items-center text-blue-200">
              Usuarios
            </li>
          </NavLink>
          <NavLink to="/admin/productos">
            <li className="h-10 text-center items-center text-blue-200">
              Productos
            </li>
          </NavLink>
          <NavLink to="/admin">
            <li className="h-10 text-center items-center text-blue-200">
              Dashboard
            </li>
          </NavLink>
        </ul>
      </div>
      <h1 className="mt-10 text-white text-center text-4xl">
        Gestión de usuarios
      </h1>

      <table className="text-white  border border-black m-8 max-w-full">
        <thead>
          <th className="pl-3 border border-black text-center">Nombre</th>
          <th className="pl-3 border border-black text-center">Apellido</th>
          <th className="pl-3 border border-black text-center ">Mail</th>
          <th className="pl-3 border border-black text-center">Origen</th>
          <th className="pl-3 border border-black text-center">Telefono</th>
        </thead>
      </table>
    </div>
  );
};

export default Usuarios;

import React from "react";
import Productos from "./Productos";
import { NavLink } from "react-router-dom";
const Admin = () => {
  return (
    <div className="flex flex-col mb-5 text-right  ">
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
          </ul>
        </div>
        <h1 className="mt-10 text-white text-center text-4xl">Dashboard</h1>
        <section className="mt-10 items-center flex flex-col">
          <p className="text-white text-left">Zona de Graficos</p>
          <img src="./graficos.avif" alt="" />
        </section>
      </div>
    </div>
  );
};

export default Admin;

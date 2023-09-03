import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const SidebarAdmin = () => {
  return (
    <>
      <nav className="w-48 bg-gray-800 text-white text-left ">
        <ul className="flex flex-col  space-y-4 mt-8 space-x-10 ">
          <li>
            <NavLink
              to="/home"
              className="hover:text-blue-200 pl-10 "
              /*               style={({ isActive, isPending }) => {
                return {
                  color: isActive ? "#2563eb" : "white",
                };
              }} */
            >
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin"
              className="hover:text-blue-200 "
              /*          style={({ isActive, isPending }) => {
                return {
                  color: isActive ? "white" : "white",
                };
              }} */
            >
              Dashboard
            </NavLink>
          </li>
          <li>Usuarios</li>
          <li>
            <NavLink
              to="/admin/productos"
              className="hover:text-blue-200 "
              /*               style={({ isActive, isPending }) => {
                return {
                  color: isActive ? "#2563eb" : "white",
                };
              }} */
            >
              Productos
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default SidebarAdmin;

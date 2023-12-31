import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const SidebarAdmin = () => {
  return (
    <>
      <nav className="w-48 bg-gray-800 text-white text-left h-">
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
        
          <NavLink
            to="/admin/usuarios"
            className="hover:text-blue-200 "
            /*          style={({ isActive, isPending }) => {
                return {
                  color: isActive ? "white" : "white",
                };
              }} */
          >
            <li>Usuarios</li>
          </NavLink>
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
          <li>
            <NavLink
              to="/admin/Ordenes"
              className="hover:text-blue-200 "
              /*               style={({ isActive, isPending }) => {
                return {
                  color: isActive ? "#2563eb" : "white",
                };
              }} */
            >
              Ordenes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/admin/Reviews"
              className="hover:text-blue-200 "
              /*               style={({ isActive, isPending }) => {
                return {
                  color: isActive ? "#2563eb" : "white",
                };
              }} */
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default SidebarAdmin;

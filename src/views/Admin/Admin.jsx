import React from "react";
import { BarChart } from "@tremor/react";
import { NavLink } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import ProductosAdmin from "../Admin/Productos/Productos";
import Dashboard from "./Dashboard/Dashboard";
import Usuarios from "./Usuarios/Usuarios";
import SidebarAdmin from "../../components/SidebarAdmin/SidebarAdmin";
import Pedidos from "./Pedidos/Pedidos";
import Ordenes from "./Ordenes/Ordenes";
import Reviews from "./Reviews/Reviews";
const Admin = () => {
  return (
    <div className="flex  text-right bg-slate-700 min-h-screen ">
      <SidebarAdmin />
      <div className="flex-1 bg-slate-700 h-screen ">
        <Dashboard />
        <Routes>
          <Route path="/Usuarios" element={<Usuarios />} />
          <Route path="/Productos" element={<ProductosAdmin />} />
          <Route path="/Usuarios/:id" element={<Pedidos />} />
          <Route path="/Ordenes" element={<Ordenes />} />
          <Route path="/Reviews" element={<Reviews />} />
        </Routes>
      </div>
    </div>
  );
};

export default Admin;

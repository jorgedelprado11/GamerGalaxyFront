import { Routes, Route } from "react-router-dom";
import { NavLink } from "react-router-dom";

import Admin from "./views/Admin/Admin";
import Usuarios from "./views/Admin/Usuarios";
import Productos from "./views/Admin/Productos";

function App() {
  return (
    <>
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/Usuarios" element={<Usuarios />} />
        <Route path="/admin/Productos" element={<Productos />} />
      </Routes>
    </>
  );
}

export default App;

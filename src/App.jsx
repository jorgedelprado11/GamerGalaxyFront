import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductForm from "./views/Home/Admin/Form"; // Corrección en el nombre del componente

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ProductForm />} /> {/* Corrección en el nombre del componente */}
      </Routes>
    </>
  );
}

export default App;







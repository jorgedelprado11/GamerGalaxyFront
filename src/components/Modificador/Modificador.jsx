import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { modificarProducto } from "../../redux/actions/actionsAdmin";

const Modificador = ({ id }) => {
  const dispatch = useDispatch();
  const [precio, setPrecio] = useState("");
  const [stock, setStock] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes realizar alguna acción con los valores de precio y stock, como enviarlos a un servidor
    dispatch(modificarProducto(id, { precio: precio, stock: stock }));
    alert("Su producto ha sido actualizado");
  };

  return (
    <div>
      <h2 className="text-xs text-center items-center">Ingresar Producto</h2>
      <form onSubmit={handleSubmit}>
        <div className="mt-3">
          <label htmlFor="precio" className="text-xs">
            Precio:
          </label>
          <input
            type="number"
            id="precio"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            className="w-36 pl-2 text-blue-500"
          />
        </div>
        <div className="mt-3">
          <label htmlFor="stock" className="text-xs">
            Stock:
          </label>
          <input
            type="number"
            id="stock"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
            className="w-36 pl-6 text-blue-500 ml-1"
          />
        </div>
        <button type="submit" className="bg-green-700 h-7 text-xs w-full mb-1">
          Guardar
        </button>
      </form>
    </div>
  );
};

export default Modificador;

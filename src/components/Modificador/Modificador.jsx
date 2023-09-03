import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { modificarProducto } from "../../redux/actions/actionsAdmin";
import precioValidation from "./precioValidation";
import stockValidation from "./stockValidation";

const Modificador = ({ id, setShowModificador }) => {
  const dispatch = useDispatch();
  const [precio, setPrecio] = useState("");
  const [stock, setStock] = useState("");

  const [errorPrecio, setErrorPrecio] = useState({});
  const [errorStock, setErrorStock] = useState({});

  const handlePrecioChange = (event) => {
    const { name, value } = event.target;
    setPrecio(value);
    setErrorPrecio(precioValidation({ ...precio, [name]: value }));
  };

  const handleStockChange = (event) => {
    const { name, value } = event.target;
    setStock(value);
    setErrorStock(stockValidation({ ...precio, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!precio && !stock) return alert("No has ingresado valores");
    if (errorPrecio.precio || errorStock.stock) {
      setErrorStock("");
      setErrorPrecio("");
      setPrecio("");
      setStock("");
      return alert("Faltan Datos");
    }
    // Aquí puedes realizar alguna acción con los valores de precio y stock, como enviarlos a un servidor
    dispatch(modificarProducto(id, { precio: precio, stock: stock }));
    alert("Su producto ha sido actualizado");
    setPrecio("");
    setStock("");
    setShowModificador(false);
  };

  return (
    <div>
      <h2 className="text-xs text-center items-center">Realice modificación</h2>
      <form onSubmit={handleSubmit} className="bg-white rounded-lg text-black">
        <div className="mt-3">
          <label htmlFor="precio" className="text-xs text-center">
            Precio:
          </label>
          <input
            name="precio"
            id="precio"
            min={0}
            value={precio}
            onChange={handlePrecioChange}
            className=" pl-2 text-blue-500 border border-blue-950 w-full transition duration-300 hover:ring-2 hover:ring-blue-500 hover:border-blue-500 rounded-md"
          />
          <span>{errorPrecio.precio}</span>
        </div>
        <div className="mt-3">
          <label htmlFor="stock" className=" text-xs text-center">
            Stock:
          </label>
          <input
            name="stock"
            id="stock"
            value={stock}
            onChange={handleStockChange}
            className={
              stock === 0
                ? "bg-red-500 w-36  text-blue-500 "
                : "text-blue-500 border border-blue-950 w-full transition duration-300 hover:ring-2 hover:ring-blue-500 hover:border-blue-500 rounded-md"
            }
          />
          <span>{errorStock.stock}</span>
        </div>
        <button
          type="submit"
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md w-full mt-1"
        >
          Guardar
        </button>
      </form>
    </div>
  );
};

export default Modificador;
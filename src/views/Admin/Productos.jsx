import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  obtenerProductos,
  borrarProducto,
  modificarProducto,
} from "../../redux/actions/actionsAdmin";
import SearchbarAdmin from "../../components/SearchbarAdmin/SearchbarAdmin";
import Modificador from "../../components/Modificador/Modificador";
const Productos = () => {
  const [mostrarComponente, setMostrarComponente] = useState(false);
  const productos = useSelector((state) => state.productos);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(obtenerProductos());
  }, [dispatch]);

  const handleEliminar = (event) => {
    event.preventDefault();

    alert(`El producto ${event.target.value} ha sido eliminado`);
    dispatch(borrarProducto(event.target.value));
  };

  const refresh = () => {
    dispatch(obtenerProductos());
  };

  const toggleComponente = () => {
    setMostrarComponente(!mostrarComponente);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex w-screen justify-end mt-5 mr-8">
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
        Gestión de Productos
      </h1>
      <SearchbarAdmin />
      <table className="text-white  border border-black m-8 max-w-7xl ">
        <thead>
          <th className="pl-3 border border-black text-center">Producto</th>
          <th className="pl-3 border border-black text-center">Categoria</th>
          <th className="pl-3 border border-black text-center ">Nombre</th>
          <th className="pl-3 border border-black text-center">Precio</th>
          <th className="pl-3 border border-black text-center">Stock</th>
          <th className="pl-3 border border-black text-center">Eliminar</th>
          <th className="pl-3 border border-black text-center">Modificar</th>
        </thead>

        {productos.map((producto) => (
          <tbody className="border border-black">
            <td className="h-7 text-xs text-center border border-black">
              {producto.id_producto}
            </td>
            <td className="h-7 text-xs text-center border border-black">
              {producto.id_categoria}
            </td>
            <td className="h-7 text-xs text-center border border-black">
              {producto.nombre}
            </td>
            <td className="h-7 text-xs text-center border border-black">
              ${producto.precio}
            </td>
            <td className="h-7 text-xs text-center border border-black">
              {producto.stock}
            </td>
            <td className="h-8">
              <button
                className="h-7 w-200 text-red-500 text-xs"
                value={producto.id_producto}
                onClick={handleEliminar}
              >
                Eliminar
              </button>
            </td>
            <td>
              <button
                onClick={toggleComponente}
                className="h-7 w-200 text-blue-500 text-xs text-center"
              >
                {mostrarComponente ? "Ocultar" : "Modificar"}
              </button>
              {mostrarComponente && <Modificador id={producto.id_producto} />}
            </td>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default Productos;

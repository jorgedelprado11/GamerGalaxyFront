import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductoPorNombre,
  obtenerProductos,
} from "../../redux/actions/actionsAdmin";
import { NavLink } from "react-router-dom";

//En el button de modificar

const SearchbarAdmin = ({ currentPage, setCurrentPage }) => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearch = (event) => {
    event.preventDefault();
    setCurrentPage(1);
    dispatch(getProductoPorNombre(input));
    setInput("");
  };

  const handleChange = (event) => {
    setInput(event.target.value);
  };
  const handleAll = () => {
    event.preventDefault();
    dispatch(obtenerProductos());
    setCurrentPage(1);
  };

  return (
    <div className="flex justify-center ">
      <div className="m-8">
        <form onSubmit={handleSearch}>
          <input
            placeholder="Buscar..."
            className="h-12 p-2 rounded-lg text-blue-700"
            onChange={(e) => handleChange(e)}
            value={input}
          />
          <button
            className="rounded-lg bg-blue-500 hover:bg-blue-600 text-white p-2 h-12 ml-1"
            type="submit"
          >
            Buscar
          </button>
          <button
            className="rounded-lg bg-blue-500 hover:bg-blue-600 text-white p-2 h-12 ml-1"
            onClick={handleAll}
          >
            Todos
          </button>
          <NavLink to="create">
            <button className="rounded-lg bg-blue-500 hover:bg-blue-600 text-white p-2 h-12 ml-1">
              Crear Producto
            </button>
          </NavLink>
        </form>
      </div>
    </div>
  );
};

export default SearchbarAdmin;

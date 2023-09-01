import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductoPorNombre,
  obtenerProductos,
} from "../../redux/actions/actionsAdmin";

const SearchbarAdmin = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleSearch = (event) => {
    event.preventDefault();
    dispatch(getProductoPorNombre(input));
  };

  const handleChange = (event) => {
    setInput(event.target.value);
  };
  const handleAll = () => {
    event.preventDefault();
    dispatch(obtenerProductos());
  };

  return (
    <div className="flex justify-center ">
      <div className="m-8">
        <form onSubmit={handleSearch}>
          <input
            placeholder="Search..."
            className="h-10 rounded-lg p-3 text-blue-500"
            onChange={(e) => handleChange(e)}
          />
          <button className="rounded-2xl h-11 bg-slate-400 ml-1" type="submit">
            Search
          </button>
          <button
            className="bg-slate-400 rounded-2xl h-11 ml-1"
            onClick={handleAll}
          >
            All
          </button>
          <button className="bg-slate-400 rounded-2xl ml-1">
            Crear Producto
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchbarAdmin;

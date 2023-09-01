/** @format */

import { useDispatch } from "react-redux";
import { useState } from "react";
import { getProductByName, clean } from "../../redux/actions/actionsUsers";

const SearchProduct = () => {
  const dispatch = useDispatch();
  const [nombre, setNombre] = useState("");

  const handleChange = (e) => {
    setNombre(e.target.value);
    // Llamar a la función de búsqueda en cada cambio del input
    e.target.value
      ? dispatch(getProductByName(e.target.value))
      : dispatch(clean());
  };

  return (
    <div class="flex items-center justify-center py-8">
      <div class="relative">
        <input
          type="text"
          placeholder=" Buscar producto por Nombre"
          name="nombre"
          value={nombre}
          onChange={handleChange}
          class="pl-8 pr-4 py-2 w-80 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
        />
        <svg
          class="w-6 h-6 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 11a4 4 0 11-8 0 4 4 0 018 0z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M21 21l-4-4"
          />
        </svg>
      </div>
      <button class="ml-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300">
        Buscar
      </button>
    </div>
  );
};

export default SearchProduct;

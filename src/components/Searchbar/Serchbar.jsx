import {
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
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
    <div className="flex w-[500px] justify-end">

      <input
        type="text"
        placeholder="  Buscador"
        name="nombre"
        value={nombre}
        onChange={handleChange}
        className="bg-white rounded-lg h-10 w-full border border-blue-500"
      />


      <button className="absolute h-10 w-12">
        <MagnifyingGlassIcon className="h-8 w-8" />
      </button>
    </div>
  );
};

export default SearchProduct;

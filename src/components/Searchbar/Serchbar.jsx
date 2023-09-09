import {
  ShoppingCartIcon,
  MagnifyingGlassIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { getProductByName } from "../../redux/actions/actionsUsers";
import { useNavigate } from "react-router-dom";

const SearchProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [nombre, setNombre] = useState("");

  const handleChange = (e) => {
    setNombre(e.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    dispatch(getProductByName(nombre));
    setNombre("");
    navigate("/productos");
  };

  return (
    <div>
      <form className="flex w-[400px] justify-end" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Buscador"
          name="nombre"
          value={nombre}
          onChange={(event) => handleChange(event)}
          className="bg-white rounded-lg h-10 w-full border border-blue-500 pl-4"
        />

        <button className="absolute h-10 w-12" type="submit">
          <MagnifyingGlassIcon className="h-8 w-8" />
        </button>
      </form>
    </div>
  );
};

export default SearchProduct;

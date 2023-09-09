import { useDispatch } from "react-redux";
import { filterByMarcas } from "../../redux/actions/actionsUsers";
import { useState } from "react";

const FiltrosMarcas = () => {
  const dispatch = useDispatch();
  const [select, setSelect] = useState("");

  const onSelectedChange = (event) => {
    event.preventDefault();
    // console.log("marcas", event.target.value);
    dispatch(filterByMarcas(event.target.value));
    setSelect("");
  };

  return (
    <>
      <div className="m-3">
        {/* <label className="">Ordenar por Precio: </label> */}
        <select
          className="w-full bg-transparent border-2 rounded-md p-2 border-gray-400"
          onChange={onSelectedChange}
          value={select}
        >
          <option value="" hidden>
            Filtrar por Marca
          </option>
          <option value="AMD">AMD</option>
          <option value="Asrock">Asrock</option>
          <option value="ASUS">ASUS</option>
          <option value="Gigabyte">Gigabyte</option>
          <option value="Intel">Intel</option>
          <option value="LG">LG</option>
          <option value="MSI">MSI</option>
          <option value="Samsung">Samsung</option>
        </select>
      </div>
    </>
  );
};

export default FiltrosMarcas;

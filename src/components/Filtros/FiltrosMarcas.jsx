import { useDispatch, useSelector } from "react-redux";
import { filterByMarcas } from "../../redux/actions/actionsUsers";
import { useEffect, useState } from "react";

const FiltrosMarcas = ({ marcas }) => {
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
          <option key="TODOS" value="TODOS">
            TODOS
          </option>
          {marcas?.map((marca) => (
            <option key={marca} value={marca}>
              {marca}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default FiltrosMarcas;

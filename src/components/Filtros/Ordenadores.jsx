import { useDispatch } from "react-redux";
import { orderByPrice } from "../../redux/actions/actionsUsers";

const OrdenadorPrecio = () => {
  const dispatch = useDispatch();

  const onSelectedChange = (event) => {
    event.preventDefault();

    dispatch(orderByPrice(event.target.value));
  };

  return (
    <>
      <div className="m-3">
        {/* <label className="">Ordenar por Precio: </label> */}
        <select className="w-full bg-transparent border-2 rounded-md p-2 border-gray-400" onChange={onSelectedChange}>
          <option value="" hidden>
            Ordenar Por
          </option>
          <option value="Ascendente">Menor precio</option>
          <option value="Descendente">Mayor precio</option>
        </select>
      </div>
    </>
  );
};

export default OrdenadorPrecio;

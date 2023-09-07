import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Detail from "../../views/Detail/Detail";
import { formatCurrency } from "./../../../utils/format";

const Card = ({ producto }) => {
  const location = useLocation();
  //Para crear la carta necesito: id, nombre, imagen, precio y boton agregar al carrito.

  //Tengo que crear un handler para agregar al carrito los productos

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="">
      {!producto.Images.length ? null : (
        <div className="flex flex-col items-center m-3 border-2 border-white rounded-xl bg-white w-60 h-80 shadow-xl">
          {/* <Link to={`/${producto.id_producto}`}> */}
          <button onClick={() => setIsModalOpen(true)}>
            <img
              className="my-6 w-24 h-24"
              key={producto.id_producto}
              src={producto.Images[0].url}
              alt={producto.nombre}
            />
          </button>
          {/* </Link> */}
          <h4
            className={` h-64 ${
              producto.nombre.length > 70 ? "text-sm" : "text-base"
            }  text-center`}
          >
            {producto.nombre}
          </h4>
          <h5 className="mb-4 h-4 text-xl text-blue-700">
            $ {formatCurrency(producto.precio)}
          </h5>
          {location.pathname.includes("/armatupc") ? (
            <button className="text-xs text-white font-semibold border-2 p-1 mb-1.5 rounded-md bg-blue-500">
              SELECCIONAR PRODUCTO
            </button>
          ) : (
            <button className="text-sm text-white font-semibold border-2 p-1 mb-1.5 rounded-md bg-blue-500">
              AGREGAR AL CARRITO
            </button>
          )}
        </div>
      )}
      {isModalOpen && <Detail setOpen={setIsModalOpen} producto={producto} />}
    </div>
  );
};

export default Card;

import { Link } from "react-router-dom";
// import { formatCurrency } from "../../../utils/format";

const Card = ({ producto }) => {
  //Para crear la carta necesito: id, nombre, imagen, precio y boton agregar al carrito.

  //Tengo que crear un handler para agregar al carrito los productos
  // console.log("desde la card", producto);
  return (
    <div className="">
      {!producto.Images.length ? null : (
        <div className="flex flex-col items-center m-3 border-2 border-white rounded-xl bg-white w-60 h-80 shadow-xl">
          <Link to={`/${producto.id_producto}`}>
            <img
              className="my-6 w-24 h-24"
              key={producto.id_producto}
              src={producto.Images[0].url}
              alt={producto.nombre}
            />
          </Link>
          <h4 className=" h-64 text-base text-center">{producto.nombre}</h4>
          <h5 className="mb-4 h-4 text-xl text-blue-700">
            $ {producto.precio}
          </h5>
          <button className="text-sm text-white font-semibold border-2 p-1 mb-1.5 rounded-md bg-blue-500">
            AGREGAR AL CARRITO
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;

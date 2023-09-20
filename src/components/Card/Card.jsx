import { Link, useLocation } from "react-router-dom";
import Detail from "../../views/Detail/Detail";
import { formatCurrency } from "./../../../utils/format";
import ArmaTuPc from "../../views/ArmaTuPc/ArmaTuPc";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/actions/actionsUsers";
import { useAuth0 } from "@auth0/auth0-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Card = ({ producto, handleClickPaquete }) => {
  const { isAuthenticated, loginWithPopup } = useAuth0();
  const user = useSelector((state) => state.usuarioCreado);
  const location = useLocation();
  //Para crear la carta necesito: id, nombre, imagen, precio y boton agregar al carrito.
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [productoEnCarrito, setProductoEnCarrito] = useState(null);

  const agregado = () => {
    // console.log("Hola");
    toast.success(`El producto se ha añadido exitosamente`, {
      position: toast.POSITION.TOP_RIGHT,
      theme: "colored",
    });
  };

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      window.alert(
        "Debes iniciar sesión para agregar productos al carro de compras."
      );
      loginWithPopup();
      return;
    }

    if (producto.stock <= 0 || producto.stock === "Sin Stock") {
      window.alert("Este producto no está disponible en stock.");
      return;
    }

    dispatch(
      addToCart({
        id_producto: producto.id_producto,
        quantity,
        id_user: user.id,
      })
    );
    // console.log("Cuantas veces ejecuto esto");
    agregado();
  };

  const handleQuantityChange = (event) => {
    const newQuantity = parseInt(event.target.value, 10);
    setQuantity(newQuantity);
  };

  return (
    <div className="">
      {!producto.Images.length ? null : (
        <div className="flex flex-col items-center m-3 border-2 border-white rounded-xl bg-white w-60 h-80 shadow-xl">
          {/* <Link to={`/${producto.id_producto}`}> */}
          <button onClick={() => setIsModalOpen(true)}>
            <img
              className="my-6 w-24 h-24"
              key={producto.id_producto}
              src={producto.Images[2]?.url || producto.Images[0]?.url}
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
            $ {formatCurrency(Math.floor(producto.precio))}
          </h5>

          {location.pathname.includes("/armatupc") ? (
            <button
              className="text-xs text-white font-semibold border-2 p-1 mb-1.5 rounded-md bg-blue-500 hover:bg-blue-600 shadow-lg"
              value={producto.id_producto}
              onClick={(event) => handleClickPaquete(event)}
            >
              SELECCIONAR PRODUCTO
            </button>
          ) : (
            <div className="flex flex-col items-center">
              <input
                type="number"
                value={quantity}
                onChange={handleQuantityChange}
                className="w-16 h-8 border text-center text-xs outline-none"
                min="1"
                max={producto.stock}
              />
              <button
                className="text-sm text-white font-semibold border-2 p-1 mb-1.5 rounded-md bg-blue-500 hover:bg-blue-600 shadow-lg"
                onClick={() => handleAddToCart()}
              >
                AGREGAR AL CARRITO
              </button>
            </div>
          )}
        </div>
      )}

      {isModalOpen && (
        <Detail
          key={producto.nombre}
          setOpen={setIsModalOpen}
          producto={producto}
        />
      )}
    </div>
  );
};

export default Card;

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/actions/actionsUsers";
import { formatCurrency } from "../../../utils/format";
import Detail from "./../../views/Detail/Detail";
import { useAuth0 } from "@auth0/auth0-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Card = ({ producto }) => {
  const { isAuthenticated, loginWithPopup } = useAuth0();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.usuarioCreado);
  const [productoEnCarrito, setProductoEnCarrito] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const agregado = () => {
    toast.success(`El producto se ha añadido exitosamente`, {
      position: toast.POSITION.TOP_RIGHT,
      theme: "colored",
    });
  };

  const handleAddToCart = () => {
    if (!isAuthenticated) {
      window.alert(
        "Debes iniciar sesión para poder agregar este producto al carro de compras"
      );
      loginWithPopup();
      return;
    }
    setProductoEnCarrito(producto, () => {
      console.log("Producto agregado al carro de compras:", productoEnCarrito);
    });
    dispatch(
      addToCart({
        id_producto: producto.id_producto,
        quantity: 1,
        id_user: user.id,
      })
    );
    agregado();
  };

  return (
    <div className="mt-16 p-2 bg-transparent relative duration-1000 flex flex-col justify-center items-center h-[300px] max-w-[16rem] group">
      <div className="flex flex-col bg-white w-full h-auto border-2 rounded-lg shadow-xl items-center text-center transition-transform transform-gpu group-hover:scale-105 group-hover:rotate-2">
        <button onClick={() => setIsModalOpen(true)}>
          <img
            className="my-6 w-28 h-28"
            src={producto.Images[2]?.url || producto.Images[0]?.url}
            alt={producto.nombre}
          />
        </button>
        <p className="text-black text-7 font-semibold h-20 pt-4 text-sm">
          {producto.nombre}
        </p>
        <h5 className="mb-4 h-4 text-xl text-blue-700">
          $ {formatCurrency(Math.floor(producto.precio))}
        </h5>
      </div>
      <button
        className="mt-4 bg-blue-700 hover:bg-blue-500 animate-pulse text-white font-bold py-2 px-4 rounded-full"
        onClick={handleAddToCart}
      >
        AGREGAR AL CARRITO
      </button>
      {isModalOpen && (
        <Detail
          key={producto.id_producto}
          setOpen={setIsModalOpen}
          producto={producto}
        />
      )}
    </div>
  );
};

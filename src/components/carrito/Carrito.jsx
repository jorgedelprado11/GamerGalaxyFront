import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateCarrito } from "../../redux/actions/actionsUsers";
import { formatCurrency } from "../../../utils/format";
import { useEffect, useState } from "react";
import { Wallet } from "@mercadopago/sdk-react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Carrito = () => {
  const [total, setTotal] = useState(0);
  const cart = useSelector((state) => state.carrito);
  const dispatch = useDispatch();
  const [preferenciaId, setPreferenciaId] = useState();

  const handleRemoveFromCart = (producto) => {
    console.log(producto, "del remove");
    dispatch(removeFromCart(producto.producto.id_producto));
    toast("Producto eliminado del carrito", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  useEffect(() => {
    calcularTotal();
  }, [cart]);

  const calcularTotal = () => {
    let tot = 0;
    for (const item of cart) {
      tot += Math.floor(item.producto.precio) * item.cantidad;
    }
    setTotal(tot);
  };

  const handlePagarClick = async () => {
    try {
      // Realizar la solicitud para obtener el init point de Mercado Pago
      const responseMercadoPago = await axios.post(
        "http://localhost:3001/mercadoPago/checkout",
        {
          products: cart.map((producto) => ({
            title: producto.producto.nombre,
            price: Math.floor(producto.producto.precio),
            quantity: producto.cantidad,
            description: ".",
          })),
        }
      );
  
      const initPoint = responseMercadoPago.data.init_point;
  
      // Extraer el ID de preferencia (pref_id) de la URL de initPoint
      const url = new URL(initPoint);
      const searchParams = new URLSearchParams(url.search);
      const idPreferencia = searchParams.get("pref_id");
  
      // Actualizar el estado con el ID de preferencia
      setPreferenciaId(idPreferencia);
  
      // Crear un objeto que contenga id_producto, quantity e id_preferencia
      const productosParaActualizar = {
        id_orden: idPreferencia,
        productos: cart.map((producto) => ({
          id_producto: producto.producto.id_producto,
          quantity: producto.cantidad,
        })),
      };
  
      console.log("Productos para actualizar:", productosParaActualizar);
  
      // Luego, realizar la solicitud PUT para actualizar el carrito
      const responseActualizar = await axios.put(
        "http://localhost:3001/order/update",
        productosParaActualizar,
        {
          headers: {
            "X-Init-Point": initPoint, // Enviar el init point en las cabeceras de la solicitud PUT
          },
        }
      );
  
      // Manejar la respuesta de la actualización del carrito
      console.log(
        "Respuesta del servidor para actualizar el carrito:",
        responseActualizar.data
      );
  
      // Redirigir al usuario al proceso de pago en Mercado Pago
      window.location.href = initPoint;
    } catch (error) {
      console.error(
        "Error al realizar el proceso de pago o actualizar el carrito:",
        error
      );
    }
  };
  return (
    <div className="w-full my-8 flex flex-row ">
      <div className=" mx-auto max-w-5xl w-[900px] min-h-screen justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3">
          {cart.map((producto) => (
            <div
              key={producto.producto.id}
              className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
            >
              <img
                src={
                  producto.producto.Images[2]?.url ||
                  producto.producto.Images[0]?.url
                }
                alt="producto-image"
                className="w-full rounded-lg sm:w-40"
              />
              <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between h-40 w-full">
                <div className="mt-5 sm:mt-0 h-full w-full">
                  <h2 className="flex text-lg font-bold text-gray-900 h-[60px] items-center">
                    {producto.producto.nombre}
                  </h2>
                  <p className="mt-1 text-xs text-gray-700">
                    Cantidad: {producto.cantidad}
                  </p>
                  <p className="mt-1 text-xs text-gray-700">
                    Precio por item: $
                    {formatCurrency(Math.floor(producto.producto.precio))}
                  </p>
                  <div className="h-20 w- flex items-end justify-end">
                    <button
                      onClick={() => {
                        handleRemoveFromCart(producto.producto);
                      }}
                      className="m-4 bg-blue-700 text-white px-3 py-1 rounded"
                    >
                      X
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Sub total */}
        <div className="mt-6 h-min rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3 w-[300px] h-[350px]">
          <div className="mb-2 flex justify-between">
            <p className="text-gray-700">Subtotal</p>
            <p className="text-gray-700">${formatCurrency(total)}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-700">Costo de envío</p>
            <p className="text-gray-700">
              $ {formatCurrency(total === 0 ? 0 : 2000)}
            </p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
            <div>
              <p className="mb-1 text-lg font-bold">
                ${formatCurrency(total === 0 ? 0 : total + 2000)}
              </p>
            </div>
          </div>
          <button
            onClick={handlePagarClick}
            className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600"
          >
            Pagar
          </button>
        </div>
      </div>

      <Wallet initialization={{ preferenceId: preferenciaId }} />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
      />
    </div>
  );
};

export default Carrito;
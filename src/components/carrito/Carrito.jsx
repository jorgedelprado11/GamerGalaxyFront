import { useSelector, useDispatch } from "react-redux";

import {
  addToCart,
  getDireccion,
  guardarToken,
  removeFromCart,
} from "../../redux/actions/actionsUsers"; // Importa la acción para eliminar del carrito

import { formatCurrency } from "../../../utils/format";
import { useEffect, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const Carrito = () => {
  const cart = useSelector((state) => state.carrito);
  const dispatch = useDispatch();
  const direccion = useSelector((state) => state.direccion);
  const user = useSelector((state) => state.usuarioCreado);
  const token = localStorage.getItem("token");

  const eliminar = () => {
    toast.error(`El producto ha sido eliminado del carrito`, {
      position: toast.POSITION.TOP_RIGHT,
      theme: "colored",
    });
  };

  // console.log(" desde el carrito", cart);
  const handleRemoveFromCart = (infoEliminada) => {
    dispatch(removeFromCart(infoEliminada));
    eliminar();
  };

  const handleQuantityChange = (producto, event) => {
    let quantity = event.target.value;

    dispatch(
      addToCart({
        id_producto: producto.id_producto,
        quantity,
        id_user: user.id,
      })
    );
  };
  const idUser = user.id;
  useEffect(() => {
    dispatch(guardarToken(user));
    dispatch(getDireccion(idUser));
  }, [dispatch, idUser]);

  const calcularTotal = Math.floor(
    cart.length > 0
      ? cart.map((cesta) => cesta.OrderProduct.price).reduce((a, b) => a + b, 0)
      : 0
  );

  const handlePagarClick = async () => {
    if (typeof direccion.calle === "undefined") {
      console.log("Entra?");
      return alert("Debe tener una dirección asignada");
    }
    try {
      // Realizar la solicitud para obtener el init point de Mercado Pago
      const responseMercadoPago = await axios.post(
        /* "http://localhost:3001/mercadoPago/checkout" */ "mercadoPago/checkout",
        {
          products: cart.map((producto) => ({
            title: producto.nombre,
            price: Math.floor(producto.precio),
            quantity: producto.quantity,
            description: ".",
          })),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const initPoint = responseMercadoPago.data.init_point;
      console.log(initPoint);

      // Extraer el ID de preferencia (pref_id) de la URL de initPoint
      const url = new URL(initPoint);
      const searchParams = new URLSearchParams(url.search);
      const idPreferencia = searchParams.get("pref_id");

      // Crear un objeto que contenga id_producto, quantity e id_preferencia
      const productosParaActualizar = {
        id_orden: idPreferencia,
        productos: cart.map((producto) => ({
          id_producto: producto.id_producto,
          quantity: producto.quantity,
        })),
      };

      console.log("Productos para actualizar:", productosParaActualizar);

      await axios.put("order/payment-success", user.id, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

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
              key={producto.id_producto}
              className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
            >
              <img
                src={producto.Images[2]?.url || producto.Images[0]?.url}
                alt="producto-image"
                className="w-full rounded-lg sm:w-40"
              />
              <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between h-40 w-full">
                <div className="mt-5 sm:mt-0 h-full w-full">
                  <h2 className="flex text-lg font-bold text-gray-900 h-[60px] items-center">
                    {producto.nombre}
                  </h2>
                  <div className="flex flex-row">
                    <p className="mt-1 text-xs text-gray-700 mr-4">
                      Cantidad:
                      {producto.OrderProduct.quantity}
                    </p>
                    <p className="mt-1 text-xs text-gray-700 ml-4">
                      Disponibilidad:{" "}
                      {+producto.OrderProduct.quantity + producto.stock}
                    </p>
                  </div>
                  <p className="mt-1 text-xs text-gray-700">
                    Precio por item: $
                    {formatCurrency(Math.floor(producto.precio))}
                  </p>
                  <div className="flex flex-row justify-between">
                    <input
                      type="number"
                      value={producto.OrderProduct.quantity}
                      onChange={() => handleQuantityChange(producto, event)}
                      className="w-16 h-8 border text-center text-xs outline-none"
                      min="1"
                      max={+producto.OrderProduct.quantity + producto.stock}
                    />
                    <button
                      onClick={() =>
                        handleRemoveFromCart({
                          id_producto: producto.id_producto,
                          id_user: user.id,
                        })
                      }
                      className=" m-4 bg-blue-700 text-white px-3 py-1 rounded"
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
        <div className="mt-6 rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3 w-[300px] h-[280px]">
          <div className="mb-2 flex justify-between">
            <p className="text-gray-700">Subtotal</p>$
            {formatCurrency(calcularTotal)}
            {/* <p className="text-gray-700">${formatCurrency(total)}</p> */}
          </div>
          <div className="flex justify-between">
            <p className="text-gray-700">Costo de envío</p>
            <p
              className={`${
                calcularTotal === 0 ? "text-gray-700" : "text-green-700"
              }`}
            >
              {calcularTotal === 0 ? "$ 0" : "Gratis"}
            </p>
          </div>
          <div className="mb-2 flex justify-between mt-1">
            <p className="text-gray-700">Direccion</p>
            {typeof direccion.calle !== "undefined" ? (
              <div className="text-right">
                <p>{direccion.calle}</p>

                <p className="text-gray-700">CP {direccion.codigo_postal}</p>
              </div>
            ) : (
              <Link to="/user/Dirección">
                <button className="my-2 w-[100px] rounded-md bg-blue-500 py-1.5 text-[12px] text-blue-50 hover:bg-blue-600">
                  Agregar Dirección
                </button>
              </Link>
            )}
            {/* <p className="text-gray-700">${formatCurrency(total)}</p> */}
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
            <div>
              <p className="mb-1 text-lg font-bold">
                ${formatCurrency(calcularTotal === 0 ? 0 : calcularTotal)}
              </p>
            </div>
          </div>
          <button
            className="my-2 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600"
            onClick={handlePagarClick}
          >
            Pagar
          </button>
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
      />
    </div>
  );
};

export default Carrito;

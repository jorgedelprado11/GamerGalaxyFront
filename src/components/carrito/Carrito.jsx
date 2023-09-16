import { useSelector, useDispatch } from "react-redux";
import {
  guardarToken,
  removeFromCart,
  updateCartQuantity,
} from "../../redux/actions/actionsUsers"; // Importa la acción para eliminar del carrito
import { formatCurrency } from "../../../utils/format";
import { useEffect, useState } from "react";

const Carrito = () => {
  const [total, setTotal] = useState(0);
  const cart = useSelector((state) => state.carrito);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.usuarioCreado);
  const token = localStorage.getItem("token");

  console.log(" desde el carrito", cart);
  const handleRemoveFromCart = (infoEliminada) => {
    dispatch(removeFromCart(infoEliminada));
  };

  // const handleQuantityChange = (producto, newQuantity) => {
  //   dispatch(updateCartQuantity(producto.id_producto, newQuantity));
  // };

  // const calcularTotal = () => {
  //   let tot = 0;
  //   for (const item of cart) {
  //     tot += Math.floor(producto.precio) * producto.OrderProduct.quantity;
  //   }
  //   setTotal(tot);
  // };

  useEffect(() => {
    dispatch(guardarToken(user));
  }, [dispatch]);

  // Calcular el subtotal

  // const costoDeEnvio = cart.length > 0 ? 2000 : 0;
  // const total = Suma + costoDeEnvio;

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
                      Disponibilidad: {producto.stock}
                    </p>
                  </div>
                  <p className="mt-1 text-xs text-gray-700">
                    Precio por item: $
                    {formatCurrency(Math.floor(producto.precio))}
                  </p>
                  <div className="flex flex-row justify-between">
                    {/* <input
                      type="number"
                      value={producto.OrderProduct.quantity}
                      onChange={(e) =>
                        handleQuantityChange(producto, e.target.value)
                      }
                      className="w-16 h-8 border text-center text-xs outline-none my-4 py-1"
                      min="1"
                      max={producto.stock}
                    /> */}
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
        <div className="mt-6 rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3 w-[300px] h-[350px]">
          <div className="mb-2 flex justify-between">
            <p className="text-gray-700">Subtotal</p>
            {/* <p className="text-gray-700">${formatCurrency(total)}</p> */}
          </div>
          <div className="flex justify-between">
            <p className="text-gray-700">Costo de envío</p>
            <p className="text-gray-700">
              {/* $ {formatCurrency(total === 0 ? 0 : 2000)} */}
            </p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
            <div>
              <p className="mb-1 text-lg font-bold">
                {/* ${formatCurrency(total === 0 ? 0 : total + 2000)} */}
              </p>
            </div>
          </div>
          <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
            Pagar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carrito;

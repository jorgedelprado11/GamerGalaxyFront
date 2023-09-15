import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { modificarProducto } from "../../redux/actions/actionsAdmin";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import nombreValidation from "./nombreValidation";
import precioValidation from "./precioValidation";
import stockValidation from "./stockValidation";
import descuentoValidation from "./descuentoValidation";
import garantiaValidation from "./garantiaValidation";

function ModificadorProductsModalAdmin({ setOpen, modifyNumber }) {
  const dispatch = useDispatch();
  const [nombre, setNombre] = useState("");
  const [precio, setPrecio] = useState("");
  const [stock, setStock] = useState("");
  const [descuento, setDescuento] = useState("");
  const [garantia, setGarantia] = useState("");

  const [errorNombre, setErrorNombre] = useState("");
  const [errorPrecio, setErrorPrecio] = useState("");
  const [errorStock, setErrorStock] = useState("");
  const [errorDescuento, setErrorDescuento] = useState("");
  const [errorGarantia, setErrorGarantia] = useState("");

  const modificado = (id) => {
    toast.success(`El producto ${id} ha sido modificado`, {
      position: toast.POSITION.TOP_RIGHT,
      theme: "colored",
    });
  };

  const handleNombreChange = (event) => {
    const { name, value } = event.target;
    setNombre(value);
    setErrorNombre(nombreValidation({ ...nombre, [name]: value }));
  };

  const handlePrecioChange = (event) => {
    const { name, value } = event.target;
    setPrecio(value);
    setErrorPrecio(precioValidation({ ...precio, [name]: value }));
  };

  const handleStockChange = (event) => {
    const { name, value } = event.target;
    setStock(value);
    setErrorStock(stockValidation({ ...stock, [name]: value }));
  };

  const handleDescuentoChange = (event) => {
    const { name, value } = event.target;
    setDescuento(value);
    setErrorDescuento(descuentoValidation({ ...descuento, [name]: value }));
  };

  const handleGarantiaChange = (event) => {
    const { name, value } = event.target;
    setGarantia(value);
    setErrorGarantia(garantiaValidation({ ...garantia, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    if (!precio && !stock && !nombre && !descuento && !garantia) {
      return alert("No has ingresado valores");
    }

    if (
      errorPrecio.precio ||
      errorStock.stock ||
      errorNombre.nombre ||
      errorDescuento.descuento ||
      errorGarantia.garantia
    ) {
      setErrorPrecio("");
      setErrorStock("");
      setErrorNombre("");
      setErrorDescuento("");
      setPrecio("");
      setStock("");
      setNombre("");
      setDescuento("");
      setGarantia("");
      return alert("Faltan Datos");
    }
    // Aquí puedes realizar alguna acción con los valores de precio y stock, como enviarlos a un servidor
    dispatch(
      modificarProducto(modifyNumber.id_producto, {
        nombre: nombre,
        precio: precio,
        stock: stock,
        descuento: descuento,
        garantia: garantia,
      })
    );
    setPrecio("");
    setStock("");
    setNombre("");
    setDescuento("");
    setGarantia("");
    setOpen(false);
    modificado(modifyNumber.id_producto);
  };
  return (
    <div>
      {setOpen ? (
        <div
          className="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4"></div>
                <div className="bg-gray-50 px-4 py-3 flex flex-col items-center">
                  {modifyNumber && (
                    <>
                      <div className="flex flex-col border-b-4 border-blue-600 ml-4 w-5/6 text-black">
                        <h2 className="text-center mb-5 text-5xl ">
                          Editar Producto
                        </h2>
                        <form
                          action=""
                          className="border border-black text-black text-left"
                          onSubmit={handleSubmit}
                        >
                          <div className="text-center text-3xl text-blue-700">
                            <label htmlFor="" className="text-center">
                              ID: {modifyNumber.id_producto}
                            </label>
                          </div>
                          <div className="ml-3">
                            <label htmlFor="">Nombre: </label>
                            <input
                              type="text"
                              name="nombre"
                              value={nombre}
                              onChange={handleNombreChange}
                              placeholder={modifyNumber.nombre}
                              className="w-56"
                            />
                          </div>
                          <span className="text-red-500 ml-3">
                            {errorNombre.nombre}
                          </span>
                          <div className="ml-3">
                            <label htmlFor="">Precio $: </label>
                            <input
                              type="text"
                              name="precio"
                              value={precio}
                              onChange={handlePrecioChange}
                              placeholder={modifyNumber.precio}
                              className="w-56"
                            />
                          </div>
                          <span className="text-red-500 ml-3">
                            {errorPrecio.precio}
                          </span>
                          <div className="ml-3">
                            <label htmlFor="">Stock: </label>
                            <input
                              type="text"
                              name="stock"
                              value={stock}
                              onChange={handleStockChange}
                              placeholder={modifyNumber.stock}
                            />
                          </div>
                          <span className="text-red-500 ml-3">
                            {errorStock.stock}
                          </span>
                          <div className="ml-3">
                            <label htmlFor="">Descuento: </label>
                            <input
                              type="text"
                              name="descuento"
                              value={descuento}
                              onChange={handleDescuentoChange}
                              placeholder={modifyNumber.descuento}
                              className="w-56"
                            />
                          </div>
                          <span className="text-red-500 ml-3">
                            {errorDescuento.descuento}
                          </span>
                          <div className="ml-3">
                            <label htmlFor="">Garantia: </label>
                            <input
                              type="text"
                              name="garantia"
                              value={garantia}
                              onChange={handleGarantiaChange}
                              placeholder={modifyNumber.garantia}
                            />
                          </div>
                          <span className="text-red-500 ml-3">
                            {errorGarantia.garantia}
                          </span>
                          <div className="flex mb-3 ml-3 mr-3 mt-5">
                            <button
                              type="submit"
                              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md w-full mt-1"
                            >
                              Guardar
                            </button>
                            <button
                              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md w-full mt-1"
                              onClick={() => setOpen(false)}
                            >
                              Cancelar
                            </button>
                          </div>
                        </form>
                      </div>
                    </>
                  )}

                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="mt-6 inline-flex  justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 w-32"
                  >
                    Salir
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default ModificadorProductsModalAdmin;

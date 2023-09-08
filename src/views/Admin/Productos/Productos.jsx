import React, { useState } from "react";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { formatCurrency } from "../../../../utils/format";

import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  obtenerProductos,
  borrarProducto,
  cambiarPrecioSegunDolar,
} from "../../../redux/actions/actionsAdmin";
import ModificadorProductsModalAdmin from "../../../components/ModificadorProductsModalAdmin/ModificadorProductsModalAdmin";

import SearchbarAdmin from "../../../components/SearchbarAdmin/SearchbarAdmin";
import SidebarAdmin from "../../../components/SidebarAdmin/SidebarAdmin";
import Modificador from "../../../components/Modificador/Modificador";
import DeleteConfirmationModal from "../../../components/DeleteConfirmationAdmin/DeleteConfirmAdmin";


const ProductosAdmin = () => {
  const [mostrarComponente, setMostrarComponente] = useState(false);
  const [modifyNumber, setModifyNumber] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(11);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [deleteNumber, setDeleteNumber] = useState("");
  const [showModificador, setShowModificador] = useState({});
  const productos = useSelector((state) => state.productosAdmin);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [price, setPrice] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(obtenerProductos());
  }, [dispatch]);

  const onConfirm = (number) => {
    dispatch(borrarProducto(number));
  };

  const handleChange = (event) => {
    // Actualiza el estado con el valor del input
    setPrice(event.target.value);
  };

  const modifyPrice = (event) => {
    event.preventDefault();
    dispatch(cambiarPrecioSegunDolar(price / 100));
    setPrice("");
    // Accede al valor del input a través del estado 'price'
    console.log(price);
  };

  const toggleComponente = (productId) => {
    setShowModificador((prevState) => ({
      ...prevState,
      [productId]: !prevState[productId],
    }));
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = productos?.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Cambiar de página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="flex text-right bg-slate-700 min-h-screen w-full">
      <SidebarAdmin />
      <div className="flex flex-col items-center min-h-screen bg-slate-700 justify-right w-full">
        <h1 className="mt-10 text-white text-center text-4xl">
          Gestión de Productos
        </h1>

        <div className="w-full flex flex-col items-center">
          <SearchbarAdmin
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
          <form action="" onSubmit={modifyPrice} className="text-white">
            <label htmlFor="" className="mr-3">
              Aumentar en
            </label>
            <input
              type="text"
              id="price" // Agrega un id al input para asociarlo con el label
              value={price}
              placeholder="%"
              onChange={handleChange} // Manejador de cambio para actualizar el estado
              className="h-12 p-2 rounded-lg text-blue-700"
            />
            <button
              type="submit"
              className="rounded-lg bg-blue-500 hover:bg-blue-600 text-white p-2 h-12 ml-1"
            >
              Cambiar
            </button>
          </form>
          <table className="text-white border border-collapse border-black m-8 w-5/6 ">
            <thead>
              <th className=" border border-black text-center w-1/8">
                Producto
              </th>
              <th className="border border-black text-center w-1/8">
                Categoria
              </th>
              <th className="border border-black text-center w-3/4">Nombre</th>
              <th className="border border-black text-center w-1/4">Precio</th>
              <th className=" border border-black text-center w-1/3">Stock</th>
              <th className=" border border-black text-center w-1/3">
                Eliminar
              </th>
              <th className=" border border-black text-center w-1/3">
                Modificar
              </th>
            </thead>

            {currentProducts.map((producto) => (
              <tbody
                className={
                  producto.stock === 0 ? "bg-red-500" : " border border-black"
                }
              >
                <td className="h-3 text-xs text-center border border-black w-1/8">
                  {producto.id_producto}
                </td>
                <td className="h-5 text-xs text-center border border-black w-1/8">
                  {producto.id_categoria}
                </td>
                <td className="h-5 text-xs text-center border border-black w-3/4">
                  {producto.nombre}
                </td>
                <td className="h-5 text-xs text-center border border-black w-1/4">
                  ${producto.precio}
                </td>
                <td className="h-5 text-xs text-center border border-black w-1/3">
                  {producto.stock}
                </td>
                <td className="h-5 border border-black w-1/3">
                  <button
                    className="rounded-lg bg-red-500 hover:bg-red-600 text-white p-2 h-12 ml-1"
                    value={producto.id_producto}
                    onClick={() => {
                      setDeleteNumber(producto.id_producto);
                      setShowDeleteConfirmation(true);
                    }}
                  >
                    Eliminar
                  </button>
                </td>
                <td className="h-5 border border-black w-1/3">
                  {/*                   <button
                    onClick={() => toggleComponente(producto.id_producto)}
                    className={
                      producto.stock === 0
                        ? "bg-red-700 h-7 text-xs w-full mb-1 "
                        : "scroll-to-button bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-lg  w-full"
                    }
                  >
                    {showModificador[producto.id_producto]
                      ? "Ocultar"
                      : "Modificar"}
                  </button> */}
                  <button
                    //onClick={() => toggleComponente(producto.id_producto)} aqui se aplica el modal
                    value={producto}
                    className={
                      "scroll-to-button bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-lg  w-full"
                    }
                    onClick={() => {
                      setIsModalOpen(true);
                      setModifyNumber(producto);
                    }}
                  >
                    Editar
                  </button>
                  {/*                   {showModificador[producto.id_producto] && (
                    <Modificador
                      id={producto.id_producto}
                      setShowModificador={setShowModificador}
                    />
                  )} */}
                </td>
              </tbody>
            ))}
          </table>
          <div className="flex justify-center mt-4 mb-1 w-full">
            <nav className="inline-flex">
              {/* Botón de página anterior */}
              <button
                onClick={() => paginate(currentPage - 1)}
                className={`px-3 py-1 rounded-l-md ${
                  currentPage === 1
                    ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                    : "bg-blue-500 text-white hover:bg-blue-600 hover:text-white"
                }`}
                disabled={currentPage === 1}
              >
                Anterior
              </button>

              {/* Botones de páginas */}
              {Array.from({
                length: Math.ceil(productos.length / productsPerPage),
              }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => paginate(index + 1)}
                  className={`px-3 py-1 ${
                    currentPage === index + 1
                      ? "bg-blue-500 text-white"
                      : "bg-gray-300 text-gray-600 hover:bg-blue-500 hover:text-white"
                  }`}
                >
                  {index + 1}
                </button>
              ))}

              {/* Botón de página siguiente */}
              <button
                onClick={() => paginate(currentPage + 1)}
                className={`px-3 py-1 rounded-r-md ${
                  currentPage === Math.ceil(productos.length / productsPerPage)
                    ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                    : "bg-blue-500 text-white hover:bg-blue-600 hover:text-white"
                }`}
                disabled={
                  currentPage === Math.ceil(productos.length / productsPerPage)
                }
              >
                Siguiente
              </button>
            </nav>
          </div>
        </div>

        {isModalOpen && (
          <ModificadorProductsModalAdmin
            setOpen={setIsModalOpen}
            modifyNumber={modifyNumber}
          />
        )}

        <DeleteConfirmationModal
          isOpen={showDeleteConfirmation}
          onCancel={() => setShowDeleteConfirmation(false)}
          onConfirm={onConfirm}
          deleteNumber={deleteNumber}
          setCurrentPage={setCurrentPage}
        />
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
    </div>
  );
};

export default ProductosAdmin;

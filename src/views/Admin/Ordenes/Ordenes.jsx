/** @format */
import { formatCurrency } from "../../../../utils/format";
import { toast, ToastContainer } from "react-toastify";
import React, { useState, useEffect, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import ModificadorStatusOrderModalAdmin from "../../../components/ModificadorStatusOrderModalAdmin/ModificadorStatusOrderModalAdmin";
import SidebarAdmin from "../../../components/SidebarAdmin/SidebarAdmin";

import {
  borrarUsuario,
  obtenerPedidos,
} from "../../../redux/actions/actionsAdmin";

const Ordenes = () => {
  const ordenes = useSelector((state) => state.pedidosTodos);
  //const token = useSelector((state) => state.infoToken);
  //const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  const [isModalStatusOpen, setIsModalStatusOpen] = useState(false);
  const [modifyNumber, setModifyNumber] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [usuariosPerPage] = useState(12);
  /*   const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [deleteNumber, setDeleteNumber] = useState("");
  const [modifyNumber, setModifyNumber] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tokenState, setTokenState] = useState("");
  const [isModalRoleOpen, setIsModalRoleOpen] = useState(false);
  */

  const indexOfLastUser = currentPage * usuariosPerPage;
  const indexOfFirstProduct = indexOfLastUser - usuariosPerPage;
  const currentOrdenes = ordenes.slice(indexOfFirstProduct, indexOfLastUser);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    dispatch(obtenerPedidos());
  }, [dispatch]);

  return (
    <div className="flex text-right bg-slate-700 min-h-screen w-full">
      <SidebarAdmin />
      <div className="flex flex-col items-center min-h-screen bg-slate-700 justify-right w-full">
        <h1 className="mt-10 text-white text-center text-4xl">
          Gestión de Ordenes
        </h1>
        {/* <SearchbarUsersAdmin /> */}
        <div className="w-full flex flex-col items-center">
          <table className="text-white border border-collapse border-black m-8 w-5/6 ">
            <thead>
              <th className=" border border-black text-center w-1/6">
                ID Orden
              </th>
              <th className="border border-black text-center w-1/6">
                ID Usuario
              </th>
              <th className=" border border-black text-center w-1/2">Status</th>

              <th className="border border-black text-center w-1/2">Precio</th>

              <th className="border border-black text-center w-1/2">
                Modificar
              </th>
            </thead>
            {ordenes.length ? (
              currentOrdenes.map((orden) => (
                <tbody>
                  <td className="h-5 text-xs text-center border border-black w-1/6">
                    {orden.id_order}
                  </td>
                  <td className="h-5 text-xs text-center border border-black w-1/6">
                    {orden.id_user}
                  </td>
                  <td className="h-5 text-xs text-center border border-black w-1/2">
                    {orden.status}
                  </td>
                  <td className="h-5 text-xs text-center border border-black w-1/2">
                    ${formatCurrency(orden.price)}
                  </td>
                  <td>
                    <button
                      className={
                        "scroll-to-button bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-lg  w-full"
                      }
                      onClick={() => {
                        setIsModalStatusOpen(true);
                        setModifyNumber(orden);
                      }}
                    >
                      Editar
                    </button>
                  </td>
                  {/*                 <td className="h-5 border border-black w-1/3">
                  <button
                    className="rounded-lg bg-red-500 hover:bg-red-600 text-white p-2 h-14 "
                    value={user.id}
                    onClick={() => {
                      setDeleteNumber(user.id);
                      setShowDeleteConfirmation(true);
                    }}
                  >
                    Eliminar
                  </button>
                </td> */}
                  {/*                 <td className="h-5 border border-black w-1/3">
                  <button
                    value={user}
                    className={
                      "scroll-to-button bg-blue-500 hover:bg-blue-600 text-white px-4 py-4 rounded-lg  w-full"
                    }
                    onClick={() => {
                      setIsModalOpen(true);
                      setModifyNumber(user);
                    }}
                  >
                    Editar
                  </button>
                </td> */}
                  {/*                 <td className="h-5 border border-black w-1/3">
                  <button
                    value={user}
                    onClick={() => {
                      setIsModalRoleOpen(true);
                      setModifyNumber(user);
                    }}
                    className={
                      "scroll-to-button bg-gray-500 hover:bg-gray-600 text-white px-4 py-4 rounded-lg  w-full"
                    }
                  >
                    {user.Role ? user.Role.description : "user"}
                  </button>
                </td> */}
                </tbody>
              ))
            ) : (
              <tbody className="text-center">
                <th></th>
                <th>No existen pedidos</th>
                <th></th>
              </tbody>
            )}
          </table>
          <div className="flex justify-center mt-4 mb-1 w-full">
            <nav className="inline-flex">
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

              {Array.from({
                length: Math.ceil(ordenes.length / usuariosPerPage),
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

              <button
                onClick={() => paginate(currentPage + 1)}
                className={`px-3 py-1 rounded-r-md ${
                  currentPage === Math.ceil(ordenes.length / usuariosPerPage)
                    ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                    : "bg-blue-500 text-white hover:bg-blue-600 hover:text-white"
                }`}
                disabled={
                  currentPage === Math.ceil(ordenes.length / usuariosPerPage)
                }
              >
                Siguiente
              </button>
            </nav>
          </div>
        </div>

        {/*        {isModalOpen && (
          <ModificadorUserModalAdmin
            setOpen={setIsModalOpen}
            modifyNumber={modifyNumber}
          />
        )} */}

        {isModalStatusOpen && (
          <ModificadorStatusOrderModalAdmin
            setOpen={setIsModalStatusOpen}
            modifyNumber={modifyNumber}
          />
        )}

        {/*    {isModalRoleOpen && (
          <ModificadorRoleUserModalAdmin
            setOpen={setIsModalRoleOpen}
            modifyNumber={modifyNumber}
          />
        )} */}

        {/*        <DeleteConfirmationUserAdmin
          isOpen={showDeleteConfirmation}
          onCancel={() => setShowDeleteConfirmation(false)}
          onConfirm={onConfirm}
          deleteNumber={deleteNumber}
          setCurrentPage={setCurrentPage}
        /> */}

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

export default Ordenes;

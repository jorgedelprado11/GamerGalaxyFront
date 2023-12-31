import { toast, ToastContainer } from "react-toastify";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { formatCurrency } from "../../../../utils/format";
import ModificadorStatusOrderModalAdmin from "../../../components/ModificadorStatusOrderModalAdmin/ModificadorStatusOrderModalAdmin";
import SidebarAdmin from "../../../components/SidebarAdmin/SidebarAdmin";

import { obtenerPedidosId } from "../../../redux/actions/actionsAdmin";
import { useParams } from "react-router-dom";

const Pedidos = () => {
  const pedidos = useSelector((state) => state.pedidos_id);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(obtenerPedidosId(id));
  }, [dispatch]);

  const [isModalStatusOpen, setIsModalStatusOpen] = useState(false);
  const [modifyNumber, setModifyNumber] = useState("");
  /*  
  const dispatch = useDispatch();
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [deleteNumber, setDeleteNumber] = useState("");
 
  const [currentPage, setCurrentPage] = useState(1);
  const [usuariosPerPage] = useState(11);
  

  const [isModalRoleOpen, setIsModalRoleOpen] = useState(false);
  const indexOfLastUser = currentPage * usuariosPerPage;
  const indexOfFirstProduct = indexOfLastUser - usuariosPerPage;
  const currentUsuarios = usuarios.slice(indexOfFirstProduct, indexOfLastUser);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  };
 */

  return (
    <div className="flex text-right bg-slate-700 min-h-screen w-full">
      <SidebarAdmin />
      <div className="flex flex-col items-center min-h-screen bg-slate-700 justify-right w-full">
        <h1 className="mt-10 text-white text-center text-4xl">
          Pedidos del usuario {id}
        </h1>

        <div className="w-full flex flex-col items-center">
          <table className="text-white border border-collapse border-black m-8 w-5/6 ">
            <thead>
              <th className=" border border-black text-center w-1/3">
                ID order
              </th>

              <th className=" border border-black text-center w-1/2">Status</th>

              <th className="border border-black text-center w-1/2">Precio</th>
              <th className="border border-black text-center w-1/2">
                Modificar
              </th>
            </thead>

            {pedidos.length ? (
              pedidos.map((pedido) => (
                <tbody>
                  <td className="h-3 text-xs text-center border border-black w-1/8">
                    {pedido.id_order}
                  </td>
                  <td className="h-5 text-xs text-center border border-black w-1/8">
                    {pedido.status}
                  </td>
                  <td className="h-5 text-xs text-center border border-black w-1/4">
                    ${formatCurrency(pedido.price)}
                  </td>
                  <td>
                    <button
                      className={
                        "scroll-to-button bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-lg  w-full"
                      }
                      onClick={() => {
                        setIsModalStatusOpen(true);
                        setModifyNumber(pedido);
                      }}
                    >
                      Editar
                    </button>
                  </td>
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
          {/*  <div className="flex justify-center mt-4 mb-1 w-full">
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
                length: Math.ceil(usuarios.length / usuariosPerPage),
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
                  currentPage === Math.ceil(usuarios.length / usuariosPerPage)
                    ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                    : "bg-blue-500 text-white hover:bg-blue-600 hover:text-white"
                }`}
                disabled={
                  currentPage === Math.ceil(usuarios.length / usuariosPerPage)
                }
              >
                Siguiente
              </button>
            </nav>
          </div> */}
        </div>

        {isModalStatusOpen && (
          <ModificadorStatusOrderModalAdmin
            setOpen={setIsModalStatusOpen}
            modifyNumber={modifyNumber}
          />
        )}
        {/* 
        {isModalOpen && (
          <ModificadorUserModalAdmin
            setOpen={setIsModalOpen}
            modifyNumber={modifyNumber}
          />
        )}



        <DeleteConfirmationUserAdmin
          isOpen={showDeleteConfirmation}
          onCancel={() => setShowDeleteConfirmation(false)}
          onConfirm={onConfirm}
          deleteNumber={deleteNumber}
          setCurrentPage={setCurrentPage}
        />

      */}
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

export default Pedidos;

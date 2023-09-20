/** @format */

import { toast, ToastContainer } from "react-toastify";
import React, { useState, useEffect, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";

import SidebarAdmin from "../../../components/SidebarAdmin/SidebarAdmin";

import { obtenerReviews } from "../../../redux/actions/actionsAdmin";

const Reviews = () => {
  const reviews = useSelector((state) => state.reviewsTodos);
  //const token = useSelector((state) => state.infoToken);
  //const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [usuariosPerPage] = useState(15);
  /*   const [isModalStatusOpen, setIsModalStatusOpen] = useState(false);
  const [modifyNumber, setModifyNumber] = useState(""); */
  /*   const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [deleteNumber, setDeleteNumber] = useState("");
  const [modifyNumber, setModifyNumber] = useState("");
  
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tokenState, setTokenState] = useState("");
  const [isModalRoleOpen, setIsModalRoleOpen] = useState(false);*/
  const indexOfLastUser = currentPage * usuariosPerPage;
  const indexOfFirstProduct = indexOfLastUser - usuariosPerPage;
  const currentReviews = reviews.slice(indexOfFirstProduct, indexOfLastUser);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    dispatch(obtenerReviews());
  }, [dispatch]);

  return (
    <div className="flex text-right bg-slate-700 min-h-screen w-full">
      <SidebarAdmin />
      <div className="flex flex-col items-center min-h-screen bg-slate-700 justify-right w-full">
        <h1 className="mt-10 text-white text-center text-4xl">
          Visualizador de Reviews
        </h1>
        {/* <SearchbarUsersAdmin /> */}
        <div className="w-full flex flex-col items-center">
          <table className="text-white border border-collapse border-black m-8 w-5/6 ">
            <thead>
              <th className=" border border-black text-center w-1/5">
                ID Usuario
              </th>
              <th className="border border-black text-center w-1/5">
                ID Comentario
              </th>
              <th className=" border border-black text-center w-1/2">
                Descripción
              </th>
              <th className="border border-black text-center w-1/4">
                Producto
              </th>
            </thead>
            {reviews.length ? (
              currentReviews.map((review) => (
                <tbody>
                  <td className="h-12 text-xs text-center border border-black w-1/5">
                    {review.id_user}
                  </td>
                  <td className="h-12 text-xs text-center border border-black w-1/5">
                    {review.id_comment}
                  </td>
                  <td className="h-12 text-xs text-center border border-black w-1/2">
                    {review.description}
                  </td>
                  <td className="h-12 text-xs text-center border border-black w-1/4">
                    {review.id_producto}
                  </td>
                </tbody>
              ))
            ) : (
              <tbody className="text-center">
                <th></th>
                <th>No existen comentarios</th>
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
                length: Math.ceil(reviews.length / usuariosPerPage),
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
                  currentPage === Math.ceil(reviews.length / usuariosPerPage)
                    ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                    : "bg-blue-500 text-white hover:bg-blue-600 hover:text-white"
                }`}
                disabled={
                  currentPage === Math.ceil(reviews.length / usuariosPerPage)
                }
              >
                Siguiente
              </button>
            </nav>
          </div>{" "}
          *
        </div>

        {/*        {isModalOpen && (
          <ModificadorUserModalAdmin
            setOpen={setIsModalOpen}
            modifyNumber={modifyNumber}
          />
        )} */}

        {/*   {isModalStatusOpen && (
          <ModificadorStatusOrderModalAdmin
            setOpen={setIsModalStatusOpen}
            modifyNumber={modifyNumber}
          />
        )} */}

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

export default Reviews;
